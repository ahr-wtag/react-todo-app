import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "store/store";
import { addTask } from "store/actions";
import { COMPLETE_ICON_ALT_TEXT, EDIT_ICON_ALT_TEXT } from "utils/constant";
import TaskBoard from "components/TaskBoard";

describe("edit task", () => {
  store.dispatch(addTask({ task: "hello" }));
  const user = userEvent.setup();
  const DemoComponent = () => {
    return (
      <Provider store={store}>
        <TaskBoard onSearchBarVisible={jest.fn()} />
      </Provider>
    );
  };

  beforeEach(async () => {
    render(<DemoComponent />);
    const editIcon = screen.getByRole("img", { name: EDIT_ICON_ALT_TEXT });
    await user.click(editIcon);
  });

  it("Expecte Task to be edited", async () => {
    const textArea = screen.getByRole("textbox");
    const userInput = "world";
    await user.type(textArea, userInput);
    const button = screen.getByRole("button", { name: "Save" });
    await user.click(button);
    expect(store.getState().todo[0].task).toEqual("helloworld");
    expect(screen.getByText(/helloworld/i)).toBeInTheDocument();
  });

  it("Expecte Task marked as done", async () => {
    const textArea = screen.getByRole("textbox");
    const userInput = "world";
    await user.type(textArea, userInput);
    const doneIcon = screen.getByRole("img", { name: COMPLETE_ICON_ALT_TEXT });
    await user.click(doneIcon);
    expect(store.getState().todo[0].completed).toEqual(true);
    const completeText = screen.getByText(/Completed in 1 day/i);
    expect(completeText).toBeInTheDocument();
    expect(screen.getByText(/helloworld/i)).toBeInTheDocument();
  });
});
