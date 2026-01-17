class InputsPage {
  constructor(page) {
    this.page = page;
    this.inputField = this.page.locator('[type="number"]');
  }

  async clickInsideInputField() {
    await this.inputField.click();
  }
  async increaseInputNumber(){
    await this.inputField.press('ArrowUp')
  }
  async getInputValue(){
    return await this.inputField.inputValue();
  }


}

module.exports = { InputsPage };
