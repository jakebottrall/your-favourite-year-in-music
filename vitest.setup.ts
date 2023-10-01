import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

vi.mock('./src/constants/env', () => ({
  VITE_CLIENT_ID: '1234qwerty',
  VITE_REDIRECT_URI: 'https://yourfavouriteyearinmusic.com',
}));

afterEach(() => {
  cleanup();
});
