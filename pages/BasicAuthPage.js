class BasicAuthPage{
    constructor(page){
        this.page = page;
        this.successMessage = this.page.locator('div p');
    }
    async getSuccessMesage(){
        return this.successMessage.textContent();
    }
}

module.exports = { BasicAuthPage }