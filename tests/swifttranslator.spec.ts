import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Real-time output update', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = page.locator('textarea').first();
  await expect(singlishInput).toBeVisible();

  await singlishInput.click();
  await singlishInput.fill('');
  await singlishInput.type('mama heta enavaa', { delay: 30 });

  const visibleSinhala = page.locator('*:visible').filter({ hasText: 'මම' }).first();

  await expect(visibleSinhala).toBeVisible({ timeout: 15000 });
  await expect(visibleSinhala).toContainText('මම හෙට එනවා');
});
