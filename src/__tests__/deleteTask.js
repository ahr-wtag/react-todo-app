import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "store/store";
import TaskCard from "components/TaskCard";
import { addTask } from "store/actions";
import { DELETE_ICON_ALT_TEXT } from "utils/constant";

describe("Delete Task", () => {
  const user = userEvent.setup();

  it("Expecte Task is removed from store", async () => {
    store.dispatch(addTask({ task: "task1" }));

    render(
      <Provider store={store}>
        <TaskCard
          id={store.getState().todo[0].id}
          task="task1"
          createdTime={new Date()}
          completed={false}
          onEditableTasks={jest.fn()}
        />
      </Provider>
    );
    const icon = screen.getByRole("img", { name: DELETE_ICON_ALT_TEXT });
    await user.click(icon);
    expect(store.getState().todo).toEqual([]);
  });
});
