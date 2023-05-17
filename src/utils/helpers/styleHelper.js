import { COLOR_LAVENDER, COLOR_WHITE } from "utils/constant";

export const dropDownStyle = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    backgroundColor: state.isSelected ? COLOR_LAVENDER : COLOR_WHITE,
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: COLOR_LAVENDER,
    fontWeight: "bold",
  }),
};
