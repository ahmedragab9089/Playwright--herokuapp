class CheckboxesPage{
    constructor(page){
        this.page = page;
        this.checkboxOne = this.page.locator('#checkboxes input').first();
    }

    async selectCheckBoxOne(){
        await this.checkboxOne.check();
    }

    async isCheckboxOneChecked(){
        const isCheckboxOneChecked = await this.checkboxOne.isChecked();
        return isCheckboxOneChecked;
    }
}
module.exports = { CheckboxesPage };