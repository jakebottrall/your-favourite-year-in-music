import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import 'vitest-dom/extend-expect';

vi.mock('./src/env', () => ({
  env: {
    VITE_CLIENT_ID: '1234qwerty',
    VITE_REDIRECT_URI: 'https://yourfavouriteyearinmusic.com',
  },
}));

afterEach(() => {
  cleanup();
});
