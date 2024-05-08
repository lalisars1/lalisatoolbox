import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import Download from './pages/Download';
import Layout from '@/components/Layout';
import NotFound from '@/pages/NoutFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/download/:category" element={<Download />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}