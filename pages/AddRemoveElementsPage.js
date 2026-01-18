class AddRemoveElementsPage{
    constructor(page){
        this.page = page;
        this.addElementButton = this.page.getByRole('button', {name: 'Add Element'});
        this.deleteElementButton = this.page.getByRole('button', {name: 'Delete'});
    }
    async addElement(){
        await this.addElementButton.click();
    }
    async isDeleteButtonVisible(){
        return await this.deleteElementButton.isVisible();
    }
    async deleteElement(){
        await this.deleteElementButton.click();
    }
}
module.exports = { AddRemoveElementsPage };