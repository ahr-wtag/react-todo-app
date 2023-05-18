import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "store/store";
import { addTask } from "store/actions";
import { EDIT_ICON_ALT_TEXT } from "utils/constant";
import TaskBoard from "components/TaskBoard";

describe("edit", () => {
  it("Expecte Task marked as done", async () => {
    const user = userEvent.setup();
    store.dispatch(addTask({ task: "hello" }));
    render(
      <Provider store={store}>
        <TaskBoard onSearchBarVisible={jest.fn()} />
      </Provider>
    );
    const editIcon = screen.getByRole("img", { name: EDIT_ICON_ALT_TEXT });
    await user.click(editIcon);
    const textArea = screen.getByRole("textbox");
    const userInput = "world";
    await user.type(textArea, userInput);
    const button = screen.getByRole("button", { name: "Save" });
    await user.click(button);
    expect(store.getState().todo[0].task).toEqual("helloworld");
    expect(screen.getByText(/helloworld/i)).toBeInTheDocument();
  });
});
