import React, { useContext } from "react";
import { Image, Menu, Space } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { AppContext } from "../../context/AppContext";

const items = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Characters",
    key: "/characters",
  },
];

const NavBar = () => {
  const { selectedKeys, setSelectedKeys } = useContext(AppContext); 
  const navigate = useNavigate();

  return (
    <div className="header">
      <Space style={{ padding: "0 12%" }}>
        <Image src={logo} className="logo" />
        <Menu
          style={{
            backgroundColor: "transparent",
            minWidth: "65vw",
            display: "flex",
            justifyContent: "flex-end",
            color: "white",
            fontSize: 25,
          }}
          selectable
          onClick={(item) => {
            navigate(item.key);
            setSelectedKeys(item.key);
          }}
          selectedKeys={[selectedKeys]}
          mode="horizontal"
          items={items}
        />
      </Space>
    </div>
  );
};

export default NavBar;
