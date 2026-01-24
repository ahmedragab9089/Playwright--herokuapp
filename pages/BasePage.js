class BasePage{
    constructor(page){
        this.page = page;
        this.formAuthentication = this.page.locator('[href="/login"]');
        this.forgotPassword = this.page.locator('[href="/forgot_password"]');
        this.dropdown = this.page.locator('[href="/dropdown"]');
        this.inputs = this.page.locator('[href="/inputs"]');
        this.addRemoveElements = this.page.locator('[href="/add_remove_elements/"]');
        this.basicAuth = this.page.locator('[href="/basic_auth"]');
        this.brokenImages = this.page.locator('[href="/broken_images"]');
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
    async openAddRemoveElementsPage(){
        await this.addRemoveElements.click();
    }
    async openBasicAuthPage(){
        await this.basicAuth.click();
    }

    async openBrokenImagesPage(){
        await this.brokenImages.click();
    }



}

module.exports = {BasePage};