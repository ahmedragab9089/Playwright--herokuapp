class BrokenImagesPage {
  constructor(page) {
    this.page = page;
    this.images = this.page.locator(".example img");
  }
  async getBrokenImagesCount() {
    const imagesArray = await this.images.all();
    let brokenCount = 0;
    for (const image of imagesArray) {
      const isBroken = await image.evaluate((node) => {
        return !node.complete || node.naturalWidth === 0;
      });
      if (isBroken) {
        brokenCount++;
      }
    }
    return brokenCount;
  }
}
module.exports = { BrokenImagesPage };
