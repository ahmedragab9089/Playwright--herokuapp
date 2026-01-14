import {expect, test} from './fixtures/baseFixture';
import { DropdownPage } from '../pages/DropdownPage';

test("Select from dropdown", async({basePage, page}) => {
    await basePage.openDropdownPage();
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.clickDropdownMenu();
    await dropdownPage.selectOption('1');
    const selectedValue = await dropdownPage.getSelectedValue();
    expect(selectedValue).toBe('1');
});