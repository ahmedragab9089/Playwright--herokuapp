class FormAuthenticationPage{
    constructor(page){
        this.page = page;
        this.usernameField = this.page.locator('#username');
        this.passwordField = this.page.locator('#password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' }); 
        this.successLoginMessage = this.page.locator("#flash");
    }

    async enterUsername(username){
        await this.usernameField.fill(username);
    }
    async enterPassword(password){
        await this.passwordField.fill(password);
    }
    async clickLogin(){
        await this.loginButton.click();
    }
    async getSuccessLoginMessage(){
        await this.successLoginMessage.waitFor({state: 'visible'});
        return await this.successLoginMessage.textContent();
    }

}

module.exports = { FormAuthenticationPage };