class BasePage{
    constructor(page){
        this.page = page;
        this.formAuthentication = this.page.locator('[href="/login"]');
        this.forgotPassword = this.page.locator('[href="/forgot_password"]');
    }

    async openHomePage(){
        await this.page.goto("https://the-internet.herokuapp.com/");
    }
    async openFormAuthentication(){
        await this.formAuthentication.click();
    }
    async openForgotPassword(){
        await this.forgotPassword.click();
    }


}

module.exports = {BasePage};