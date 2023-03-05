import React, { useState } from "react";
import { List, Select, Typography } from "antd";
import CardItem from "../CardItem/CardItem";
import { getSortedCharacters } from "./Filter.logic";

const Filters = ({ characters }) => {
  const [sortOrder, setSortOrder] = useState("all");

  return (
    <>
      <Select
        defaultValue={"all"}
        style={{ width: "45%", marginRight: "10%" }}
        onChange={(value) => {
          setSortOrder(value);
        }}
        options={[
          {
            label: "All",
            value: "all",
          },
          {
            label: "Name a-z",
            value: "az",
          },
          {
            label: "Name z-a",
            value: "za",
          },
          {
            label: "Mass Low to High",
            value: "massLoHi",
          },
          {
            label: "Mass High to Low",
            value: "massHiLo",
          },
          {
            label: "Height Low to High",
            value: "heightLoHi",
          },
          {
            label: "Height High to Low",
            value: "heightHiLo",
          },
          {
            label: "Blue-gray eyes",
            value: "eye_color_blue-gray",
          },
          {
            label: "Yellow eyes",
            value: "eye_color_yellow",
          },
          {
            label: "Blue eyes",
            value: "eye_color_blue",
          },
          {
            label: "Red eyes",
            value: "eye_color_red",
          },
          {
            label: "Brown eyes",
            value: "eye_color_brown",
          },
        ]}
      />
      <Typography.Paragraph>
        Current filter: <b>{sortOrder}</b>
      </Typography.Paragraph>

      <List
        style={{ marginBottom: 50 }}
        dataSource={getSortedCharacters(characters, sortOrder, setSortOrder)}
        pagination={{
          pageSize: 4,
        }}
        grid={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
        size="large"
        renderItem={(item) => {
          return <CardItem item={item} />;
        }}
      />
    </>
  );
};

export default Filters;
