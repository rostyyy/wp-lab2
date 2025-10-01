// script.js
import { detectBrowser } from './browser.js';
import { setupPriceCalculator, calculateTotal } from './calculator.js';
import { setupProductImageHover, showFullSizeImage } from './productHover.js';
import { setupProductComparator, compareProducts } from './comparator.js';
import { setupEnhancedNavigation } from './navigation.js';
import { setupQuickCategorySelector, quickNavigate } from './quickSelector.js';
import { setupStoreLanguageSwitcher, switchStoreLanguage } from './language.js';
import { showDailyOffer } from './offers.js';
import { addTechInfoBlock } from './techInfo.js';

document.addEventListener('DOMContentLoaded', () => {
    const browserInfo = detectBrowser();
    console.log('Browser info:', browserInfo);

    setupPriceCalculator();
    setupProductImageHover();
    setupProductComparator();
    setupEnhancedNavigation();
    setupQuickCategorySelector();
    setupStoreLanguageSwitcher();
    showDailyOffer();
    addTechInfoBlock(browserInfo);

    window.calculateTotal = calculateTotal;
    window.compareProducts = compareProducts;
    window.quickNavigate = quickNavigate;
    window.switchStoreLanguage = switchStoreLanguage;
    window.showFullSizeImage = showFullSizeImage;
});
