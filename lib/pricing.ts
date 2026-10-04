import { SITE_CONFIG } from './config';

export interface PricingState {
  currentPrice: number;
  comparePrice: number;
  postLaunchPrice: number;
  isLaunchActive: boolean;
  launchStartDate: Date;
  launchEndDate: Date;
}

export function getPricingConfig(): PricingState {
  const startDate = new Date(SITE_CONFIG.launchStartDate);
  const endDate = new Date(SITE_CONFIG.launchEndDate);
  const now = new Date();

  // If current time is past the launch window (Nov 15), price automatically shifts to 1,399
  const isLaunchActive = now <= endDate;
  const currentPrice = isLaunchActive ? SITE_CONFIG.priceInr : SITE_CONFIG.postLaunchPriceInr;

  return {
    currentPrice,
    comparePrice: SITE_CONFIG.comparePriceInr,
    postLaunchPrice: SITE_CONFIG.postLaunchPriceInr,
    isLaunchActive,
    launchStartDate: startDate,
    launchEndDate: endDate,
  };
}
