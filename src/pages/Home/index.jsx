import React, { useState } from "react";

import TaskBoard from "components/TaskBoard/index.jsx";
import Navbar from "components/Shared/Navbar";
const Home = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  return (
    <>
      <Navbar
        isSearchBarVisible={isSearchBarVisible}
        onSearchBarVisible={setIsSearchBarVisible}
      />
      <TaskBoard onSearchBarVisible={setIsSearchBarVisible} />
    </>
  );
};

export default Home;
