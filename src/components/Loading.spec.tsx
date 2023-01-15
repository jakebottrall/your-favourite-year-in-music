import { render } from '@testing-library/react';
import { Loading } from './Loading';

describe('<Loading/>', () => {
  it('renders', () => {
    const { container } = render(<Loading />);
    expect(container).toBeInTheDocument();
  });

  describe('props: isLoading', () => {
    describe('is falsey', () => {
      it('returns null', () => {
        const { container } = render(<Loading />);
        expect(container).toBeEmptyDOMElement();
      });
    });

    describe('is true', () => {
      it('renders an element', () => {
        const { container } = render(<Loading isLoading />);
        expect(container).not.toBeEmptyDOMElement();
      });
    });
  });
});
