import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '2vkq5kf1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
