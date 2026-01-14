import {expect, test} from './fixtures/baseFixture';
import { FormAuthenticationPage } from '../pages/FormAuthenticationPage';


test("Login using valid credentials", async ({page, basePage}) =>{
    await basePage.openFormAuthenticationPage();
    const formAuthenticationPage = new FormAuthenticationPage(page);
    await formAuthenticationPage.enterUsername("tomsmith");
    await formAuthenticationPage.enterPassword("SuperSecretPassword!");
    await formAuthenticationPage.clickLogin();
    const message = await formAuthenticationPage.getSuccessLoginMessage();
    expect(message).toContain("You logged into a secure area!");
});

