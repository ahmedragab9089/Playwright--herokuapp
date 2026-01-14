import {expect, page, test} from '@playwright/test'
import { BasePage } from '../pages/basePage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

let basePage;

test.beforeEach("set up", async ({page}) =>{
    basePage = new BasePage(page);
    await basePage.openHomePage();
});

test("Test forget password", async({page}) => {
    await basePage.openForgotPassword();
    const forgotPassword = new ForgotPasswordPage(page);
    await forgotPassword.fillEmail("ahmedragab@gmail.com");
    await forgotPassword.clickRetrievePassword();
});