import { test, expect } from "@playwright/test";

test("Public Profile has about me info", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Borja Andrés Marroquín")).toBeVisible();
  await expect(page.getByText("Bilbao")).toBeVisible();
  await expect(
    page.getByText("Varios años de experiencia en desarrollo de")
  ).toBeVisible();
});
