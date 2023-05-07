import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
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
        setFilter={jest.fn()}
      />
    </Provider>
  );
};

describe("Add Task", () => {
  it("render add task card", () => {
    render(<DemoAddTaskCard />);
    const textArea = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Add Task" });
    const deleteIcon = screen.getByRole("img");
    expect(textArea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(deleteIcon).toHaveAttribute("alt", DELETE_ICON_ALT_TEXT);
  });
});
