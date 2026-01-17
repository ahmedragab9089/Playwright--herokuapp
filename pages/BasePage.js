class BasePage{
    constructor(page){
        this.page = page;
        this.formAuthentication = this.page.locator('[href="/login"]');
        this.forgotPassword = this.page.locator('[href="/forgot_password"]');
        this.dropdown = this.page.locator('[href="/dropdown"]');
        this.inputs = this.page.locator('[href="/inputs"]');
        }

    async openHomePage(){
        await this.page.goto("https://the-internet.herokuapp.com/");
    }
    async openFormAuthenticationPage(){
        await this.formAuthentication.click();
    }
    async openForgotPasswordPage(){
        await this.forgotPassword.click();
    }

    async openDropdownPage(){
        await this.dropdown.click();
    }
     async openInputsPage(){
        await this.inputs.click();
    }



}

module.exports = {BasePage};