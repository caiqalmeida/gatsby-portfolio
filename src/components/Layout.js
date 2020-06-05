import React, { useState } from 'react';
import PropTypes from "prop-types";

import GlobalStyle from '../styles/global';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
    const [sidebarActive, setSidebarActive] = useState(false);

    function handleSidebarActive() {
      setSidebarActive(!sidebarActive);
    }

  return (
    <>
      <Header handleSidebar={() => handleSidebarActive()} />
      <Sidebar
        sidebarActive={sidebarActive}
        handleSidebar={() => handleSidebarActive()}
      />
      {children}
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
