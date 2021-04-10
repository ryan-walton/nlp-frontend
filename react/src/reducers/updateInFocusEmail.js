import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'FocusedEmail',
  initialState: {
    value: {emailFrom: "",
            emailTo: "",
            subject: "",
            body: "",
            id: "",
            classificationList: {},
            sentiment: "",
            addressList: {},
            contactNumberList: {},
            entityList: {}},
  },
  reducers: {
    focusOnEmail: (state, action) => {
      console.log("Email in Focus Reducer :)  !!!")
      console.log(action.payload)
      state.value = action.payload;
    },
  },
});

export const { focusOnEmail } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(focusOnEmail(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEmailInFocus = state => state.value;

export default slice.reducer;

