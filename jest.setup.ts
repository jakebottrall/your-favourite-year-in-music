import '@testing-library/jest-dom/extend-expect';

jest.mock('./src/constants/env', () => ({
  VITE_CLIENT_ID: '1234qwerty',
  VITE_REDIRECT_URI: 'https://yourfavouriteyearinmusic.com',
}));
