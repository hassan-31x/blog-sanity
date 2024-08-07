export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-12-29";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);


export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "32vg47v2",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const useCdn = false; // Set this to false if you want to ensure fresh data: https://www.sanity.io/help/js-client-cdn-configuration

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
