'use client';

import { useMemo } from 'react';
import { Studio } from 'sanity';
import { sanityStudioConfig } from '@/lib/sanity-studio-config';

export default function StudioPage() {
  const config = useMemo(() => sanityStudioConfig, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Studio config={config} />
    </div>
  );
}
