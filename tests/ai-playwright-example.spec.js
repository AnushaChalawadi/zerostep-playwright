const { test, expect } = require('@playwright/test');
const { ai } = require('@zerostep/playwright');

test('AI Test capability', async ({ page }) => {
  const aiArgs = { page, test };
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  const discount = await ai('what is the discount on the product Wheat?', aiArgs);
  expect(discount).toBe('28');

  const price = await ai('what is the price of the product "Wheat"?', aiArgs);
  console.log(price);

  const differnce = await ai('what is the value difference between price and discount of wheat?', aiArgs);
  expect(differnce).toBe('39');

  await page.goto('https://rahulshettyacademy.com/dropdownsPractise/')
  const blinkingText = await ai('Get me the blinking text in the page', aiArgs);
  expect(blinkingText).toBe('Free Access to InterviewQues/ResumeAssistance/Material');

  const firstvalue = await ai('Get the first part of the blinking text before the first forward slash', aiArgs);
  expect(firstvalue).toEqual('Free Access to InterviewQues');
  console.log(firstvalue);
});

