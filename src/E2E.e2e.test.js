import faker from 'faker';
import puppeteer from 'puppeteer';

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe('Link Text', () => {
  test('anchor loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
    });
    let page = await browser.newPage();
    page.emulate({
      viewport: {
        width: 400,
        height: 600
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.App-link');

    const html = await page.$eval('.App-link', e => e.innerHTML);
    expect(html).toBe('Learn React');

    browser.close();
  }, 16000);
});