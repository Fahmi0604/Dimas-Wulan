import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import LoadingSuspense from './pages/LoadingSuspense';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common from './translation.json'

const App = lazy(() => import('./App'));
const GenerateUrl = lazy(() => import('./pages/GenerateUrl'));

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common // 'common' is our custom namespace
    },
  },
});


const root = createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18next}>
    <Suspense fallback={<LoadingSuspense />}>
      <BrowserRouter basename='/Wulan-Dimas'>
        <Routes>
          <Route path='/:nama' element={<App />} />
          <Route path='/generate' element={<GenerateUrl />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </I18nextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
