/*
Start here and then work through the
PostsContainer components and the CommentSection Components.
Not all files need code added.
Look at each file to see where you need to pass props or add code
*/
import React, { useState } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
// import { dummyData } from "./dummy-data"
// import the PostsPage and SearchBar and add them to the App


const App = () => {
  // const [data, setData] = useState(dummyData);
  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <PostsPage />
      <SearchBar />
    </div>
  );
};

export default App;
