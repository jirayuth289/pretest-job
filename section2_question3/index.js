const puppeteer = require('puppeteer');

(async () => {
    let fundNameArg = process.argv[2];
    if (fundNameArg && fundNameArg.trim()) {
        fundNameArg = fundNameArg.trim();

        const funds = ['B-INCOMESSF', 'BM70SSF', 'BEQSSF', 'B-FUTURESSF'];

        const fundIndex = funds.findIndex(value => value === fundNameArg);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://codequiz.azurewebsites.net/');

        await page.click('body > input[type="button"]');

        const element = await page.waitForSelector(`body > table > tbody > tr:nth-child(${fundIndex + 2}) > td:nth-child(2)`); 
        const value = await element.evaluate(el => el.textContent); 
        console.log(value);
        await browser.close();
    } else {
        console.log('Could not find your arg in cmd');
    }
})();

