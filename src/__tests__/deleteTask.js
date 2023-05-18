import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store/store";
import TaskCard from "components/TaskCard";
import { addTask } from "store/actions";
import { DELETE_ICON_ALT_TEXT } from "utils/constant";

describe("Delete Task", () => {
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
    fireEvent.click(icon);
    await waitFor(() => {
      expect(store.getState().todo).toEqual([]);
    });
  });
});
