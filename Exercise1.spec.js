import {test, expect} from '@playwright/test';

test('Exercises', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  await page.waitForTimeout(2000);

  const box_a = page.locator('id=column-a');
  const box_b = page.locator('id=column-b');
  await expect(box_a.locator("header")).toHaveText("A");
  await box_a.dragTo(box_b);
  await page.waitForTimeout(1500);
  await box_b.dragTo(box_a);
  await page.waitForTimeout(2000);

  
});
