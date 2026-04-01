import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION ?? '2024-06-01';

export const sanityEnabled = Boolean(projectId && dataset);

export const sanityClient = sanityEnabled
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      useCdn: true,
      perspective: 'published',
    })
  : null;

const builder = sanityEnabled && projectId
  ? createImageUrlBuilder({ projectId, dataset: dataset! })
  : null;

export function sanityImageUrl(source: unknown) {
  if (!builder || !source) return null;
  return builder.image(source as never).url();
}

export function getSanityConfigSummary() {
  return {
    enabled: sanityEnabled,
    projectId: projectId ?? null,
    dataset: dataset ?? null,
    apiVersion,
  };
}
