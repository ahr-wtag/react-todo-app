import React, { useState } from "react";

import TaskBoard from "components/TaskBoard/index.jsx";
import Navbar from "components/Shared/Navbar";
const Home = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Navbar searchText={searchText} onSearchText={setSearchText} />
      <TaskBoard onSearchText={setSearchText} />
    </>
  );
};

export default Home;
