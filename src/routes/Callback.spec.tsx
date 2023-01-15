import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Callback } from './Callback';

let locationObject = { hash: '' };

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigate,
  useLocation: () => locationObject,
}));

beforeEach(() => {
  mockedNavigate.mockClear();
});

describe('<Callback/>', () => {
  it('renders', () => {
    const { container } = render(<Callback onAuth={jest.fn()} />, {
      wrapper: BrowserRouter,
    });

    expect(container).toBeInTheDocument();
  });

  describe('valid access token', () => {
    beforeEach(() => {
      locationObject = { hash: '#access_token=asdf' };
    });

    it('fires onAuth', () => {
      const mockOnAuth = jest.fn();

      render(<Callback onAuth={mockOnAuth} />, { wrapper: BrowserRouter });

      expect(mockOnAuth).toHaveBeenCalledTimes(1);
    });

    it('sets the token in the local storage', () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem');

      render(<Callback onAuth={jest.fn()} />, { wrapper: BrowserRouter });

      expect(localStorage.setItem).toHaveBeenCalledWith('access_token', 'asdf');

      spy.mockRestore();
    });

    it('navigates to "/"', () => {
      render(<Callback onAuth={jest.fn()} />, { wrapper: BrowserRouter });

      expect(mockedNavigate).toHaveBeenCalledWith('/');
    });
  });

  describe('invalid access token', () => {
    beforeEach(() => {
      locationObject = { hash: '#access_token=' };
    });

    it('does not fire onAuth', () => {
      const mockOnAuth = jest.fn();

      render(<Callback onAuth={mockOnAuth} />, { wrapper: BrowserRouter });

      expect(mockOnAuth).not.toHaveBeenCalled();
    });

    it('clears the local storage', () => {
      const spy = jest.spyOn(Storage.prototype, 'clear');

      render(<Callback onAuth={jest.fn()} />, { wrapper: BrowserRouter });

      expect(localStorage.clear).toHaveBeenCalled();

      spy.mockRestore();
    });

    it('navigates to "/login"', () => {
      render(<Callback onAuth={jest.fn()} />, { wrapper: BrowserRouter });

      expect(mockedNavigate).toHaveBeenCalledWith('/login');
    });
  });
});
