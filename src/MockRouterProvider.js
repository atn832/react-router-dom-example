import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export function MockRouterProvider({ routes }) {
  const router = createMemoryRouter(
    routes,
    {
      initialEntries: ["/"],
      initialIndex: 0,
    });
  /**
   * { 
   *   props : {children: 'Hello World'}
   *   type: "h1"
   *   ...
   * }
   */
  console.log(routes[0].element);

  return <RouterProvider router={router} />;
}
