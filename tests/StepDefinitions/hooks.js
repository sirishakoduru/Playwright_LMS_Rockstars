import { chromium } from '@playwright/test';



//let browser, context, page;

export async function beforeEach() {
    browser = await chromium.launch({ headless: false, channel: "chrome" });
    context = await browser.newContext();
    page = await context.newPage();
}

export async function afterEach() {
    if (browser) await browser.close();
}

export { page };  // Export the `page` object for use in step definitions
