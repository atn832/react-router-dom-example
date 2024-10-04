import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('MemoryRouter', async ({ mount }) => {
  const component = await mount(<MemoryRouter>
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
    </Routes>
  </MemoryRouter>);

  await expect(component).toHaveScreenshot();
});
