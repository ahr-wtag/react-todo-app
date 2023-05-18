import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { store } from "store/store";
import AddTaskCard from "components/TaskCard/AddTaskCard";
import { DELETE_ICON_ALT_TEXT } from "utils/constant";

const DemoAddTaskCard = () => {
  return (
    <Provider store={store}>
      <AddTaskCard
        isCardCreated={true}
        onCreateCard={jest.fn()}
        onSearchBarVisible={jest.fn()}
        onFilterState={jest.fn()}
      />
    </Provider>
  );
};

describe("Add Task", () => {
  const user = userEvent.setup();
  it("render add task card", () => {
    render(<DemoAddTaskCard />);
    const textArea = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Add Task" });
    const deleteIcon = screen.getByRole("img");
    expect(textArea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(deleteIcon).toHaveAttribute("alt", DELETE_ICON_ALT_TEXT);
  });

  it("Expected user to type in text area", async () => {
    render(<DemoAddTaskCard />);
    const textArea = screen.getByRole("textbox");
    const userInput = "typing...";
    await user.type(textArea, userInput);
    expect(textArea.value).toBe(userInput);
  });

  it("Expected call onSave() function and store task in redux", async () => {
    render(<DemoAddTaskCard />);
    const textArea = screen.getByRole("textbox");
    const userInput = "task 1";
    const button = screen.getByRole("button", { name: "Add Task" });
    await user.type(textArea, userInput);
    await user.click(button);
    const newState = store.getState();
    expect(newState.todo[0].task).toEqual(userInput);
  });

  it("Expected call onSave() function and store task in redux", async () => {
    render(<DemoAddTaskCard />);
    const textArea = screen.getByRole("textbox");
    const userInput = "task 1";
    const button = screen.getByRole("button", { name: "Add Task" });
    await user.type(textArea, userInput);
    await user.click(button);
    const newState = store.getState();
    expect(newState.todo[0].task).toEqual(userInput);
  });

  it("Expected call onSave() function and store task in redux on key up", async () => {
    render(<DemoAddTaskCard />);
    const textArea = screen.getByRole("textbox");
    const userInput = "task 1";
    await user.type(textArea, userInput);
    await user.keyboard("[Enter]");
    const newState = store.getState();
    expect(newState.todo[0].task).toEqual(userInput);
  });
});
