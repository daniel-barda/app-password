import { generate } from "generate-password";

const reducer = (state, action) => {
  if (action.type === "INPUT_CHEAKBOX") {
    const name = action.payload.target.name;
    const value = action.payload.target.checked;
    const valueRangeInput = action.payload.target.value;

    if (name === "length") return { ...state, [name]: valueRangeInput };
    return { ...state, [name]: value };
  }

  if (action.type === "SUBMIT_FORM") {
    const { LowerCase, UpperCase, Number, Symbols, length } = state;

    const inputs = !LowerCase && !UpperCase && !Number && !Symbols;

    if (inputs)
      // Guard Clauses
      return {
        ...state,
        error: {
          show: true,
          msg: "All fields are empty. You must fill in at least one field.",
        },
      };

    const password = generate({
      lowercase: LowerCase,
      uppercase: UpperCase,
      numbers: Number,
      symbols: Symbols,
      length: length,
    });
    return { ...state, hashPassword: password };
  }

  if (action.type === "COPYBOARD") {
    navigator.clipboard.writeText(state.hashPassword);
    return { ...state, clipboard: true };
  }

  if (action.type === "REMOVE_ALERT") {
    if (state.clipboard) return { ...state, clipboard: false };

    if (state.error.show) {
      return { ...state, error: { show: false, msg: "" } };
    }
  }

  return state;
};
export default reducer;
