import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";
import "@testing-library/jest-dom";

describe("Header component", () => {
  test("renders Home menu item", () => {
    render(<Header />);
    expect(screen.getByText("HOME")).toBeInTheDocument();
  });

  test("renders About menu item", () => {
    render(<Header />);
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
  });

  test("renders IMDB Playground", () => {
    render(<Header />);
    expect(screen.getByText("IMDB")).toBeInTheDocument();
    expect(screen.queryByText("PlayGround")).toBeInTheDocument();
  });
});
