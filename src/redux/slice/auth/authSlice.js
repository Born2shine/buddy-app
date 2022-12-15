import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { flashMessage as flash } from './../../../utils/flash/index';
import { clearStorage, setSessionToken } from './../../../utils/helpers/storage';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    otp: "",
  };

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        resetAuth: (state) => (state = initialState),
        resetStatus: (state) => {
            state.isSuccess = false
            state.isError = false
            state.isLoading = false
        },
    },
    extraReducers: (builder) => {
        builder
          // authentication
          .addCase(login.pending, (state) => {
            state.isLoading = true;
            flash("loading", 'Authenticating...')
          })
          .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false
            if (action.payload.success) {
              let token = action.payload.data.token;
              state.user = {...state.user, ...action.payload.data.user, token: token}
              clearStorage();
              setSessionToken("accessToken", token);
              flash("success", action.payload.message)
            }
          })
          .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true
            console.log(action.payload)
            if (action.payload.errors) {
              flash("error", action.payload.message)
            }
            // const type = action.payload.message
          })
      },
})

// Authenticate user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
      // console.log('Details',user)
      return await authService.login(user);
    } catch (error) {
      const message =
        error.response.data ||
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
});

export const {
    resetAuth,
    resetStatus
  } = authSlice.actions;
  
  export default authSlice.reducer;