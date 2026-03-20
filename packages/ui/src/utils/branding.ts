import paulConfig from "./paul.config";

export interface BrandingConfig {
  brandName: string;
  brandTitle: string;
  logoPath: string;
  faviconPath: string;
}

const defaultConfig: BrandingConfig = {
  brandName: "PAUL",
  brandTitle: "PAUL (Pattern & Asset UI Library)",
  logoPath: "/logo.svg",
  faviconPath: "/favicon.svg",
};

export const getBrandingConfig = (): BrandingConfig => {
  return {
    ...defaultConfig,
    ...paulConfig,
  };
};
