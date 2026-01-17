import {expect, test} from './fixtures/baseFixture';
import { InputsPage } from '../pages/InputsPage';
import { BasePage } from '../pages/BasePage';

test('test input page', async({basePage, page}) =>{
    await basePage.openInputsPage();
    const inputPage = new InputsPage(page);
    await inputPage.clickInsideInputField();
    await inputPage.increaseInputNumber();
    const newValue = await inputPage.getInputValue();
    expect(newValue).toEqual("1");
});