import {test, expect} from '@playwright/test'
import { BasePage } from '../pages/BasePage';
import { BasicAuthPage } from '../pages/BasicAuthPage';

test("test basic auth", async ({browser}) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    });
    const page = await context.newPage();
    const basePage = new BasePage(page);
    await basePage.openHomePage();
    await basePage.openBasicAuthPage();
    const basicAuthPage = new BasicAuthPage(page);
    const successMessage = await basicAuthPage.getSuccessMesage();
    console.log(successMessage)
    expect(successMessage).toContain('Congratulations! You must have the proper credentials.')
});