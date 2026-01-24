class ContextMenuPage{
    constructor(page){
        this.page = page;
        this.contextBox = this.page.locator('#hot-spot');
    }

    async doRightClick(){
        await this.contextBox.click({ button: 'right' });
    }
}

module.exports = { ContextMenuPage };
