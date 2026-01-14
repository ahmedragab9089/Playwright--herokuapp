import {expect, page, test} from '@playwright/test'
import { BasePage } from '../pages/basePage';
import { FormAuthenticationPage } from '../pages/FormAuthenticationPage';


let basePage;

test.beforeEach("set up", async ({page}) =>{
    basePage = new BasePage(page);
    await basePage.openHomePage();
});

test("Login using valid credentials", async ({page}) =>{
    await basePage.openFormAuthentication();
    const formAuthenticationPage = new FormAuthenticationPage(page);
    await formAuthenticationPage.enterUsername("tomsmith");
    await formAuthenticationPage.enterPassword("SuperSecretPassword!");
    await formAuthenticationPage.clickLogin();
    const message = await formAuthenticationPage.getSuccessLoginMessage();
    expect(message).toContain("You logged into a secure area!");
});

