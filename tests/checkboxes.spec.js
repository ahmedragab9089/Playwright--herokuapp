import {expect, test} from './fixtures/baseFixture';
import { CheckboxesPage } from '../pages/CheckboxesPage';

test('test checkboxes', async ({basePage, page})=>{
    await basePage.openCheckboxesPage();
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.selectCheckBoxOne();
    const isCheckboxOneChecked = await checkboxesPage.isCheckboxOneChecked();
    expect(isCheckboxOneChecked).toBeTruthy();

    await page.pause();
});