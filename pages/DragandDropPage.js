class DragandDropPage{
    constructor(page){
        this.page = page;
        this.boxA = this.page.locator('#column-a');
        this.boxB = this.page.locator('#column-b');
    }

    async dragBoxAInB(){
        await this.boxA.dragTo(this.boxB);
    }
    async getTextInBoxB(){
        const textInBoxB = this.boxB.textContent();
        return textInBoxB;
    }
}

module.exports = {DragandDropPage};