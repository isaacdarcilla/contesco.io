import { test, expect } from "@playwright/test";

test("should have the login page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.click("text=Sign in to your account");

  await expect(
    page.locator("div.text-white.text-3xl.font-normal.hidden.lg\\:block")
  ).toContainText(
    "Streamline your contests with Contesco — the hassle-free solution for modern organizers."
  );
  await expect(page.locator("p.font-normal")).toContainText(
    " We will email you a magic link for a password-free sign-in."
  );
});
