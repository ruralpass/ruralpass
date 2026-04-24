'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export default function ClarityAnalytics() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (!projectId) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          '[Clarity] NEXT_PUBLIC_CLARITY_PROJECT_ID no está definido. Clarity no se inicializará.'
        );
      }
      return;
    }

    Clarity.init(projectId);
  }, []);

  return null;
}
