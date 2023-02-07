import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from 'components/header/header';
import Page404 from 'pages/404/404';
import Welcome from 'pages/welcome/Welcome';
import Communication from 'pages/communication/Communication';
import NavigationLinks from 'pages/navigation-links/Navigation-links';
import NavigationLink from 'components/navigation-link/Navigation-link';
import Footer from 'components/footer/footer';
import Toast from 'components/UI/toast/toast';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/call" element={<Communication />} />
          <Route path="/nav/*" element={<NavigationLinks />}>
            <Route path=":id" element={<NavigationLink />} />
          </Route>
          <Route path="/not-found" element={<Page404 heading="Ошибка 404" />} />
          <Route path="/*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Toast position="bottom-right" theme="light" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
