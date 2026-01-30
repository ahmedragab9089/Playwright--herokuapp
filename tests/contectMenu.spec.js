import {expect, test} from './fixtures/baseFixture';
import { ContextMenuPage } from '../pages/ContextMenuPage';

test('test context menu', async({basePage, page})=>{
    await basePage.openContextMenuPage();
    const contextMenuPage = new ContextMenuPage(page);
    await contextMenuPage.doRightClick();
});