import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test("should render the correct amount of incomplete tasks", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tarefas restantes/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("should render 'tarefa restante' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 tarefa restante/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("should render 'tarefa restante' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 tarefa restante/i);
  expect(paragraphElement).toBeVisible();
});

test("should render 'tarefa restante' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 tarefa restante/i);
  expect(paragraphElement).toContainHTML("p");
});
