import { render } from '@testing-library/react';
import { createMemoryRouter, MemoryRouter, RouterProvider, Routes, Route } from 'react-router-dom';

test('MemoryRouter', () => {
  const { container } = render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
    </Routes>
  </MemoryRouter>);

  expect(container).toMatchSnapshot();
});

test('createMemoryRouter', () => {
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

  const { container } = render(<RouterProvider router={router} />);
  expect(container).toMatchSnapshot();
});
