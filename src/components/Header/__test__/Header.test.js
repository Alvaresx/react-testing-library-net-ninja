import { render, screen } from "@testing-library/react";
import Header from "../Header";

//GET BY TEXT
test("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//GET BY ROLE
test("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});

//GET BY TITLE
test("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

//GET BY TESTID
test("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header");
  expect(headingElement).toBeInTheDocument();
});

//FIND BY TEXT
test("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
