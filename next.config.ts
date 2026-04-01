import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(nextConfig);
