import { render, screen } from "@testing-library/react";
import { FiThumbsUp } from "react-icons/fi";
import Card from "../../src/components/Card";
import "@testing-library/jest-dom/extend-expect";

// Mocking Next.js dynamic import as it is not available in the Jest environment
jest.mock("next/dynamic", () => () => {
  return;
});

// Mocking Next.js Link component
jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

// Mocking Next.js Image component
jest.mock("next/image", () => () => <img />);

const result = {
  id: "123",
  backdrop_path: "backdrop.jpg",
  poster_path: "poster.jpg",
  overview: "Test Overview",
  title: "Test Title",
  name: "Test Name",
  release_date: "2023-06-10",
  first_air_date: "2023-06-10",
  vote_count: "100",
};

test("renders overview correctly", () => {
  render(<Card result={result} />);
  expect(screen.getByText(result.overview)).toBeInTheDocument();
});

test("renders title correctly", () => {
  render(<Card result={result} />);
  expect(screen.getByText(result.title || result.name)).toBeInTheDocument();
});

test("renders release date correctly", () => {
  render(<Card result={result} />);
  expect(
    screen.getByText(
      new RegExp(result.release_date || result.first_air_date, "i")
    )
  ).toBeInTheDocument();
});

test("renders vote count correctly", () => {
  render(<Card result={result} />);
  expect(
    screen.getByText(new RegExp(String(result.vote_count), "i"))
  ).toBeInTheDocument();
});

test("sets link content correctly", () => {
  render(<Card result={result} />);
  expect(screen.getByText(result.title || result.name)).toBeInTheDocument();
});
