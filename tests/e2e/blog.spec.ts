import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test('should load blog page successfully', async ({ page }) => {
    await page.goto('/blog');
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Real Estate Blog/);
    
    // Check if the hero section is visible
    await expect(page.locator('h1')).toContainText('Real Estate Blog');
    
    // Check if the navigation is present
    await expect(page.locator('nav')).toBeVisible();
    
    // Check if the footer is present
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should have proper navigation structure', async ({ page }) => {
    await page.goto('/blog');
    
    // Check main navigation items
    const navigation = page.locator('nav');
    await expect(navigation.locator('text=HOME')).toBeVisible();
    await expect(navigation.locator('text=BUYING')).toBeVisible();
    await expect(navigation.locator('text=SELLING')).toBeVisible();
    await expect(navigation.locator('text=BLOG')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/blog');
    
    // Check if the page still loads correctly on mobile
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });
});
