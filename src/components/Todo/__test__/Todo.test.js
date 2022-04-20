import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(
    /Adicione uma tarefa aqui.../i
  );
  const buttonElement = screen.getByRole("button", { name: /Adicionar/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  test("should render multiple items", () => {
    render(<MockedTodo />);
    addTask(["Estudar", "Dormir", "Cozinhar"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  test("task should not have completed class when initialy rendered", () => {
    render(<MockedTodo />);
    addTask(["Estudar"]);
    const divElement = screen.getByText(/Estudar/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("task should have completed class when clicked", () => {
    render(<MockedTodo />);
    addTask(["Estudar"]);
    const divElement = screen.getByText(/Estudar/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active");
  });
});
