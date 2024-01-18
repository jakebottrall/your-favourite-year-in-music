import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Callback } from './Callback';

let locationObject = { hash: '' };

const mockedNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const router = await vi.importActual('react-router-dom');
  return {
    ...router,
    useNavigate: () => mockedNavigate,
    useLocation: () => locationObject,
  };
});

beforeEach(() => {
  mockedNavigate.mockClear();
});

describe('<Callback/>', () => {
  it('renders', () => {
    const { container } = render(<Callback onAuth={vi.fn()} />, {
      wrapper: BrowserRouter,
    });

    expect(container).toBeInTheDocument();
  });

  describe('valid access token', () => {
    beforeEach(() => {
      locationObject = { hash: '#access_token=asdf' };
    });

    it('fires onAuth', () => {
      const mockOnAuth = vi.fn();

      render(<Callback onAuth={mockOnAuth} />, { wrapper: BrowserRouter });

      expect(mockOnAuth).toHaveBeenCalledTimes(1);
    });

    it('sets the token in the local storage', () => {
      const spy = vi.spyOn(Storage.prototype, 'setItem');

      render(<Callback onAuth={vi.fn()} />, { wrapper: BrowserRouter });

      expect(spy).toHaveBeenCalledWith('access_token', 'asdf');

      spy.mockRestore();
    });

    it('navigates to "/"', () => {
      render(<Callback onAuth={vi.fn()} />, { wrapper: BrowserRouter });

      expect(mockedNavigate).toHaveBeenCalledWith('/');
    });
  });

  describe('invalid access token', () => {
    beforeEach(() => {
      locationObject = { hash: '#access_token=' };
    });

    it('does not fire onAuth', () => {
      const mockOnAuth = vi.fn();

      render(<Callback onAuth={mockOnAuth} />, { wrapper: BrowserRouter });

      expect(mockOnAuth).not.toHaveBeenCalled();
    });

    it('clears the local storage', () => {
      const spy = vi.spyOn(Storage.prototype, 'clear');

      render(<Callback onAuth={vi.fn()} />, { wrapper: BrowserRouter });

      expect(spy).toHaveBeenCalled();

      spy.mockRestore();
    });

    it('navigates to "/login"', () => {
      render(<Callback onAuth={vi.fn()} />, { wrapper: BrowserRouter });

      expect(mockedNavigate).toHaveBeenCalledWith('/login');
    });
  });
});
