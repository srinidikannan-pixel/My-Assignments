import { test, chromium } from '@playwright/test';

test('Launch Google Browser', async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://www.google.com/');

    await page.waitForTimeout(5000);

    await browser.close();

});