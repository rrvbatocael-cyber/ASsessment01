import {test, expect} from '@playwright/test';

test('Exercises', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
  await page.waitForTimeout(2000);
  

  const slider = page.locator('.sliderContainer input');
  const rangeValue = page.locator('id=range');

   await slider.evaluate((el) => {
    el.value = '3.5';
    el.dispatchEvent(new Event('input')); 
  });
  await page.waitForTimeout(2000);
  await expect(rangeValue).toHaveText('3.5');

  // Change the value to '2.5'
  await slider.evaluate((el) => {
    el.value = '2.5';
    el.dispatchEvent(new Event('input'));
  });
  await expect(rangeValue).toHaveText('2.5');

 
});
