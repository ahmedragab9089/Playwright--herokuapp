class ForgotPasswordPage{
    constructor(page){
        this.page = page;
        this.emailField = this.page.locator('#email');
        this.retrievePasswordButton = this.page.locator('#form_submit');
    }

    async fillEmail(email){
        await this.emailField.fill(email);
    }
    async clickRetrievePassword(){
        await this.retrievePasswordButton.click();
    }


}

module.exports = { ForgotPasswordPage };