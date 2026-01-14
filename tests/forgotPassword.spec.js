import {expect, test} from './fixtures/baseFixture';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

test("Test forget password", async({page, basePage}) => {
    await basePage.openForgotPasswordPage();
    const forgotPassword = new ForgotPasswordPage(page);
    await forgotPassword.fillEmail("ahmedragab@gmail.com");
    await forgotPassword.clickRetrievePassword();

    await page.pause();
});