import {test, expect} from './fixtures/baseFixture';
import { BrokenImagesPage } from '../pages/BrokenImagesPage';

test('test broken images', async({basePage, page}) => {
    await basePage.openBrokenImagesPage();
    await page.waitForLoadState('networkidle');
    const brokenImages = new BrokenImagesPage(page);
    const brokenImagesCount = await brokenImages.getBrokenImagesCount();
    expect(brokenImagesCount).toBe(2);
});
