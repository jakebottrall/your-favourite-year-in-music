import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Login } from './Login';

const locationObject = { hash: '' };

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

describe('<Login/>', () => {
  it('renders', () => {
    const { container } = render(<Login />, { wrapper: BrowserRouter });
    expect(container).toBeInTheDocument();
  });

  it('contains a title', () => {
    render(<Login />, { wrapper: BrowserRouter });

    expect(
      screen.getByRole('heading', { name: /your Favourite Year In Music/i }),
    ).toBeInTheDocument();
  });

  it('contains a link', () => {
    render(<Login />, { wrapper: BrowserRouter });
    expect(screen.getByRole('link', { name: /login with spotify/i })).toBeInTheDocument();
  });

  describe('props: isAuthed', () => {
    it('redirects to the "/" when `true`', () => {
      render(<Login isAuthed />, { wrapper: BrowserRouter });
      expect(mockedNavigate).toHaveBeenLastCalledWith('/');
    });

    it('does not redirect when `false`', () => {
      render(<Login />, { wrapper: BrowserRouter });
      expect(mockedNavigate).not.toHaveBeenCalled();
    });
  });
});
