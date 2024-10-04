import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { MockRouterProvider } from './MockRouterProvider';

test.only('hooksConfig RouterProvider with createMemoryRouter', async ({ mount, page }) => {
  const routes = [
    {
      path: "/",
      element: <h1>Hello World</h1>,
    },
  ];
  // await page.waitForTimeout(2000);
  /*
    {
      __pw_type: 'jsx',
      type: 'h1',
      props: { children: 'Hello World' },
      key: undefined
    }
  */
  console.log(routes[0].element);
  // Somehow, routes[0].element does not seeem to get transformed correctly when passed to
  // beforeMount's callback.
  const component = await mount(<div>not rendered</div>, {hooksConfig: { routes }});

  await page.waitForTimeout(200000);
  await expect(component).toHaveScreenshot();
});

// Works correctly.
test('wrapped RouterProvider with createMemoryRouter', async ({ mount, page }) => {
  const routes = [
    {
      path: "/",
      element: <h1>Hello World</h1>,
    },
  ];
  /*
    {
      __pw_type: 'jsx',
      type: 'h1',
      props: { children: 'Hello World' },
      key: undefined
    }
  */
  console.log(routes[0].element);
  const component = await mount(<MockRouterProvider routes={routes} />);

  await expect(component).toHaveScreenshot();
});

// Does not work because router contains functions, and Playwright does not
// allow passing functions as props from a spec file.
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
