import {expect, test} from './fixtures/baseFixture';
import { DragandDropPage } from '../pages/DragandDropPage';

test("Drag and Drop", async({basePage, page}) => {
    await basePage.openDragAndDropPage();
    const dragAndDropPage = new DragandDropPage(page);
    await dragAndDropPage.dragBoxAInB();
    const textInBoxB = await dragAndDropPage.getTextInBoxB();
    expect(textInBoxB).toEqual("A");
});