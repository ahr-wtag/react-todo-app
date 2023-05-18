import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "store/store";
import { addTask } from "store/actions";
import { COMPLETE_ICON_ALT_TEXT } from "utils/constant";
import TaskBoard from "components/TaskBoard";

describe("Task State Done", () => {
  it("Expecte Task marked as done", async () => {
    const user = userEvent.setup();
    store.dispatch(addTask({ task: "task1" }));
    render(
      <Provider store={store}>
        <TaskBoard onSearchBarVisible={jest.fn()} />
      </Provider>
    );
    const icon = screen.getByRole("img", { name: COMPLETE_ICON_ALT_TEXT });
    await user.click(icon);
    expect(store.getState().todo[0].completed).toEqual(true);
    const completeText = screen.getByText(/Completed in 1 day/i);
    expect(completeText).toBeInTheDocument();
  });
});
