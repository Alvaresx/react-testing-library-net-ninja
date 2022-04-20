import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(
      /Adicione uma tarefa aqui.../i
    );
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(
      /Adicione uma tarefa aqui.../i
    );
    fireEvent.change(inputElement, { target: { value: "Estudar" } });
    expect(inputElement.value).toBe("Estudar");
  });

  test("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(
      /Adicione uma tarefa aqui.../i
    );
    const buttonElement = screen.getByRole("button", { name: /Adicionar/i });
    fireEvent.change(inputElement, { target: { value: "Estudar" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
