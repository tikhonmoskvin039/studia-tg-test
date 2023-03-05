import React, { useContext } from "react";
import { Space, Card, Typography, Button, Image } from "antd";
import { useNavigate } from "react-router-dom";
import yoda from "../../assets/images/BannerComplete.svg";
import { AppContext } from "../../context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { setSelectedKeys } = useContext(AppContext);

  const handleNavigate = () => {
    setSelectedKeys("/characters");
    navigate("/characters");
  };

  return (
    <div className="home">
      <Space
        style={{
          display: "flex",
          position: "relative",
          padding: "0 12%",
        }}
      >
        <Card
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Typography className="title">
            <Typography className="title-bold">Find</Typography> all your
            favorite
            <Typography className="title-bold">character</Typography>
          </Typography>
          <Typography className="title-paragraph">
            You can find out all the information about your favorite characters
          </Typography>
          <Button
            onClick={() => handleNavigate()}
            style={{
              margin: "6% auto 0",
              color: "black",
              backgroundColor: "rgba(115, 214, 119, 1)",
              boxShadow: "inset 0px -9px 0px rgba(0, 0, 0, 0.18)",
              borderRadius: 11,
              width: 231,
              height: 66,
              fontWeight: 700,
              fontSize: 23,
            }}
          >
            See more ...
          </Button>
        </Card>
        <Image src={yoda} width={"130%"} />
      </Space>
    </div>
  );
};

export default Home;
