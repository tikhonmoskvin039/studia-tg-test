import { Space } from "antd";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <>
      <NavBar />
      <Space direction="vertical">
        <PageContent />
      </Space>
    </>
  );
}

export default App;
