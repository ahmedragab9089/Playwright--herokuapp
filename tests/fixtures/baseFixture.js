import { test as base, expect } from '@playwright/test';
import { BasePage } from '../../pages/BasePage'

const test = base.extend({
    basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await basePage.openHomePage();
    await use(basePage);
    }
});

export { test, expect };
