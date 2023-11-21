import { test, expect } from '@playwright/test';

test('has name', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Borja Andrés Marroquín')).toBeVisible();
});
