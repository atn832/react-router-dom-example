import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export function MockRouterProvider({routes}) {
  const router = createMemoryRouter(
    routes,
    {
      initialEntries: ["/"],
      initialIndex: 0,
    });

  return <RouterProvider router={router} />;
}
