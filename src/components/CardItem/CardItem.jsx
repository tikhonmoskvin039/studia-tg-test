import React, { useState } from "react";
import { Card, Image, Modal, Space, Typography } from "antd";
import male from "../../assets/images/male.svg";
import female from "../../assets/images/female.svg";
import unknown from "../../assets/images/unknown.svg";
import { EyeFilled } from "@ant-design/icons";

const CardItem = ({ item }) => {
  const [openRecord, setOpenRecord] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (item) => {
    setIsOpen(true);
    setOpenRecord(item);
  };

  return (
    <>
      <Card
        onClick={() => handleOpen(item)}
        hoverable
        key={item.id}
        style={{
          height: 250,
          margin: 10,
          overflow: "hidden",
          backgroundColor: "#F0F0F0",
        }}
      >
        <Typography.Title
          style={{
            textShadow: "4px 4px 4px rgba(33, 33, 33, 0.1)",
          }}
        >
          {item?.name}
        </Typography.Title>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div
            style={{
              display: "block",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 35,
                height: 35,
                border: "3px solid black",
                borderRadius: "50%",
              }}
            >
              {item?.height}
            </div>
            <p>height</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 35,
                height: 35,
                border: "3px solid black",
                borderRadius: "50%",
              }}
            >
              {item?.mass}
            </div>
            <p>mass</p>
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <div
            style={{
              display:
                item.gender && item.gender === "n/a" ? "none" : "inline-block",
              fontWeight: 700,
              borderRadius: "10px",
              backgroundColor: item.gender === "male" ? "#73D677" : "#C956FF",
              padding: "1px 15px",
            }}
          >
            {item?.gender}
          </div>
          <div
            style={{
              display: item?.birth_year === "unknown" ? "none" : "inline-block",
              marginLeft: 10,
              fontWeight: 700,
              borderRadius: "10px",
              backgroundColor: "#07D6F2",
              padding: "1px 15px",
            }}
          >
            {item?.birth_year}
          </div>
          <div
            style={{
              display: "inline-block",
              alignContent: "center",
              marginLeft: 10,
              fontWeight: 700,
              borderRadius: "10px",
              backgroundColor:
                item?.eye_color === "blue"
                  ? "#21618C"
                  : item?.eye_color === "brown"
                  ? "#E59866"
                  : item?.eye_color === "red"
                  ? "#E74C3C"
                  : item?.eye_color === "yellow"
                  ? "#F4D03F"
                  : "#6699cc",
              padding: "1px 15px",
            }}
          >
            {item?.eye_color} <EyeFilled />
          </div>
        </div>
      </Card>
      <Modal
        footer={[]}
        open={isOpen}
        centered
        onCancel={() => setIsOpen(false)}
      >
        <Space>
          <div className="card-central">
            <div className="card-image">

            <Image
              src={
                openRecord?.gender === "male"
                  ? male
                  : openRecord?.gender === "female"
                  ? female
                  : unknown
              }
            />
            </div>
            <div className="card-details">
              <div
                style={{
                  display:
                    openRecord?.gender === "n/a" ? "none" : "inline-block",
                  fontWeight: 700,
                  borderRadius: "10px",
                  backgroundColor:
                    openRecord?.gender === "male" ? "#73D677" : "#C956FF",
                  padding: "1px 15px",
                }}
              >
                {openRecord?.gender}
              </div>
              <div
                className="card-birth"
                style={{
                  display:
                    openRecord?.birth_year === "unknown"
                      ? "none"
                      : "inline-block",
                  marginLeft: 10,
                  fontWeight: 700,
                  borderRadius: "10px",
                  backgroundColor: "#07D6F2",
                  padding: "1px 15px",
                }}
              >
                {openRecord?.birth_year}
              </div>
            </div>
          </div>
          <div>
            <h1>{openRecord?.name}</h1>
            <Card className="modal">
              Eye color: <b>{openRecord?.eye_color} </b>
              <br />
              Hair color: <b> {openRecord?.hair_color}</b>
              <br />
              Skin color: <b>{openRecord?.skin_color} </b>
            </Card>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginTop: 10,
              }}
            >
              <Card
                className="modal"
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 35,
                    height: 35,
                    border: "3px solid black",
                    borderRadius: "50%",
                  }}
                >
                  {openRecord?.height}
                </div>
                <p>height</p>
              </Card>
              <Card className="modal">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 35,
                    height: 35,
                    border: "3px solid black",
                    borderRadius: "50%",
                  }}
                >
                  {openRecord?.mass}
                </div>
                <p>mass</p>
              </Card>
            </div>
          </div>
        </Space>
      </Modal>
    </>
  );
};

export default CardItem;
