import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { MockRouterProvider } from './MockRouterProvider';

test('wrapped RouterProvider with createMemoryRouter', async ({ mount, page }) => {
  const routes = [
    {
      path: "/",
      element: <h1>Hello World</h1>,
    },
  ];

  const component = await mount(<MockRouterProvider routes={routes} />);

  await expect(component).toHaveScreenshot();
});

// Broken because router contains functions, and Playwright does not allow
// passing functions as props from a spec file.
test.skip('RouterProvider with createMemoryRouter', async ({ mount, page }) => {
  await page.waitForTimeout(3000);

  const routes = [
    {
      path: "/",
      element: <h1>Hello World</h1>,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 0,
  });

  console.log(router);
  const component = await mount(<RouterProvider router={router} />);

  await page.waitForTimeout(30000);
  await expect(component).toHaveScreenshot();
});
