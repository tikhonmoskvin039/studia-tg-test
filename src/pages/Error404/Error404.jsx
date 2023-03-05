import React from "react";
import { Button, Image } from "antd";

import errorImage from "../../assets/images/Error.svg";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
const navigate = useNavigate()

  return (
    <div className="error-page">
      <Image src={errorImage} style={{ width: "100%", padding: "0 6%" }} />
      <Button
      onClick={() => navigate('/')}
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
        Return
      </Button>
    </div>
  );
};

export default Error404;
