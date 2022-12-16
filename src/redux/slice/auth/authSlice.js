import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { flashMessage as flash } from "./../../../utils/flash/index";
import {
  clearStorage,
  setSessionToken,
} from "./../../../utils/helpers/storage";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isRegistered: false,
  isConfirmingEmail: false,
  isVerifying: false,
  accountVerified: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetAuth: (state) => (state = initialState),
    resetStatus: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
    },
    resetAccountStatus: (state) => {
      state.isRegistered = false;
      state.isConfirmingEmail = false;
      state.accountVerified = false;
      state.isVerifying = false;
    },
    setVerifyingEmail: (state, action) => {
      state.user = { ...state.user, isVerifying: action.payload };
    },
    setEmail: (state, action) => {
      state.user = { ...state.user, email: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        flash("loading", "Authenticating...");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        if (action.payload.success) {
          let token = action.payload.data.token;
          state.user = {
            ...state.user,
            ...action.payload.data.user,
            token: token,
          };
          clearStorage();
          setSessionToken("accessToken", token);
          flash("success", action.payload.message);
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        flash("error", action.payload.message);
      })
      // register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        flash("loading", "Creating account...");
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true
        if (action.payload.success) {
          let token = action.payload.data.token;
          state.user = {
            ...state.user,
            otp: action.payload.data.opt,
            token: token,
            isRegistered: true,
            isConfirmingEmail: true,
          };
          clearStorage();
          setSessionToken("accessToken", token);
          flash("success", action.payload.message);
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        flash("error", action.payload.message);
      })
      // verify OTP
      .addCase(verifyOTP.pending, (state) => {
        state.isLoading = true;
        flash("loading", "Verifying...");
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // state.isSuccess = true
        if (action.payload.success) {
          state.user = {
            ...state.user,
            otp: "",
            isRegistered: true,
            isConfirmingEmail: false,
            accountVerified: true
          };
          flash("success", action.payload.message);
        }
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        flash("error", action.payload.message);
      });
  },
});

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

// Logout user
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    const message =
      error.response.data ||
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Register user
export const register = createAsyncThunk(
  "auth/logout",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      return await authService.register(payload);
    } catch (error) {
      const message =
        error.response.data ||
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Verify OTP
export const verifyOTP = createAsyncThunk(
  "auth/verify-otp",
  async (OTP, thunkAPI) => {
    try {
      return await authService.verifyOTP(OTP);
    } catch (error) {
      const message =
        error.response.data ||
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Resend OTP
export const resendOTP = createAsyncThunk(
  "auth/resend-otp",
  async (email, thunkAPI) => {
    try {
      return await authService.resendOTP(email);
    } catch (error) {
      const message =
        error.response.data ||
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const {
  resetAuth,
  resetStatus,
  resetAccountStatus,
  setVerifyingEmail,
  setEmail,
} = authSlice.actions;

export default authSlice.reducer;
