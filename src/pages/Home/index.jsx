import React, { useState } from "react";

import TaskBoard from "components/TaskBoard/index.jsx";
import Navbar from "components/Shared/Navbar";
const Home = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <TaskBoard setSearchText={setSearchText} />
    </>
  );
};

export default Home;
