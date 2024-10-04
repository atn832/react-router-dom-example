import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

beforeMount(async ({ App, hooksConfig }) => {
  const routes = hooksConfig?.routes;
  if (routes) {
    /*
      {
        "__pw_type": "jsx",
        "type": "h1",
        "props": {
          "children": "Hello World"
        }
      }
    */
    console.log(App);
    console.log(JSON.stringify(App, " "));

    console.log(routes[0].element);
    console.log(JSON.stringify(routes[0].element, null, " "));

    console.log(<h1>it works</h1>);
    console.log(JSON.stringify(<h1>it works</h1>, null, " "));

    // routes[0].element = <h1>it works</h1>;

    const router = createMemoryRouter(
      routes,
      {
        initialEntries: ["/"],
        initialIndex: 0,
      });

    return <RouterProvider router={router} />;
  }
  return <App />;
});
