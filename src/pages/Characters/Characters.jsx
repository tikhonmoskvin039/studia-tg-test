import React, { useState, useEffect } from "react";
import { Space, Typography } from "antd";
import Loader from "../../components/Loader/Loader";
import Filters from "../../components/Filters/Filters";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      setCharacters(data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Space
          direction="vertical"
          style={{
            display: "flex",
            position: "relative",
            padding: "0 12%",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Typography.Title
            style={{
              textAlign: "center",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontSize: 35,
            }}
          >
            <b
              style={{
                textAlign: "center",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {characters.length} Peoples
            </b>{" "}
            for you to choose your favorite
          </Typography.Title>
          <Filters characters={characters} />
        </Space>
      )}
    </>
  );
};

export default Characters;
