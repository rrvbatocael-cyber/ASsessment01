import { test, expect } from '@playwright/test';

test('Exercises', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  await page.waitForTimeout(2000);

  const initialParagraphs = page.locator('.jscroll-added');
  await expect(initialParagraphs.first()).toBeVisible();
  
  const initialCount = await initialParagraphs.count();
  console.log(`Initial visible paragraphs: ${initialCount}`);

  for (let i = 0; i < 3; i++) {
    await page.keyboard.press('End');
    await page.waitForTimeout(1000); 
  }
  const newCount = await initialParagraphs.count();
  console.log(`Paragraphs after scrolling: ${newCount}`);
  
  expect(newCount).toBeGreaterThan(initialCount);
});