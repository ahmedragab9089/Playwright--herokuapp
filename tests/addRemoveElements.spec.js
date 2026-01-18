import { test, expect } from "./fixtures/baseFixture";
import { AddRemoveElementsPage } from "../pages/AddRemoveElementsPage";

test("Add and remove elements", async ({basePage, page}) => {
    await basePage.openAddRemoveElementsPage();
    const addRemoveElementPage = new AddRemoveElementsPage(page);
    await addRemoveElementPage.addElement();
    const isDeleteButtonVisible = await addRemoveElementPage.isDeleteButtonVisible();
    expect(isDeleteButtonVisible).toBeTruthy();
    await addRemoveElementPage.deleteElement();
    const isDeleteButtonHidden = await addRemoveElementPage.isDeleteButtonVisible();
    expect(isDeleteButtonHidden).toBeFalsy();

    await page.pause();
});