import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardItem from "./CardItem";

describe("CardItem", () => {
  test("renders card item with name", () => {
    const item = { id: 1, name: "Luke Skywalker" };
    render(<CardItem item={item} />);
    const nameElement = screen.getByText(item.name);
    expect(nameElement).toBeInTheDocument();
  });

  test("opens modal on click", () => {
    const item = { id: 1, name: "Luke Skywalker", eye_color: "brown" };
    render(<CardItem item={item} />);
    const cardElement = screen.getByText(item.name);
    fireEvent.click(cardElement);
    const modalElement = screen.getByText(item.eye_color);
    expect(modalElement).toBeInTheDocument();
  });

  test("displays height and mass", () => {
    const item = { id: 1, name: "Luke Skywalker", height: 172, mass: 77 };
    render(<CardItem item={item} />);
    const heightElement = screen.getByText(item.height);
    const massElement = screen.getByText(item.mass);
    expect(heightElement).toBeInTheDocument();
    expect(massElement).toBeInTheDocument();
  });
});
