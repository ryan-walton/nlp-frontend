import { configureStore } from '@reduxjs/toolkit';
import FocusedEmail from '../reducers/updateInFocusEmail.js';

export default configureStore({
  reducer: {
    EmailInFocus: FocusedEmail,
  },
});
