import {test, expect} from '@playwright/test';

test('Exercises', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/dynamic_content');
  await page.waitForTimeout(2000);
  
  const rowLocator = page.locator('#content .large-10');
  
  await rowLocator.first().waitFor({ state: 'visible' }); 
  const initialTextOfRows = await rowLocator.allTextContents(); 
  
  console.log('Initial Row Text Content:', initialTextOfRows);

  await page.reload(); // Performs a page refresh
  await rowLocator.first().waitFor({ state: 'visible' });

  const textOfRowsAfterRefresh = await rowLocator.allTextContents();
  console.log('Post-Refresh Row Text Content:', textOfRowsAfterRefresh);

  for (let i = 0; i < initialTextOfRows.length; i++) {
    if (initialTextOfRows[i] !== textOfRowsAfterRefresh[i]) {
      console.log(` Row ${i + 1} changed after refreshing.`);
    } else {
      console.log(` Row ${i + 1} stayed the same.`);
    }
  }

  expect(initialTextOfRows).not.toEqual(textOfRowsAfterRefresh); 
});
