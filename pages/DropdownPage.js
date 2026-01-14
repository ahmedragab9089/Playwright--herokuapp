class DropdownPage{
    constructor(page){
        this.page = page;
        this.dropdown = this.page.locator('#dropdown');
    }

    async clickDropdownMenu(){
        await this.dropdown.click();
    }
    async selectOption(option){
        await this.dropdown.selectOption(option);
    }
    async getSelectedValue() {
        return await this.dropdown.inputValue();
    }

}

module.exports = { DropdownPage };