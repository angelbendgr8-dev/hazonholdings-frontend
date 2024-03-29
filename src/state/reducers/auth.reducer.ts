//@ts-ignore
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {isEmpty} from 'lodash';

type UserState = {
  user: any | null;
  token: string | null;
  resetInfo: any;
  preAuth: any;
  profileImg: any;
  updatedInfo: any;
  defaultUserName: any;
};

const slice = createSlice({
  name: 'userauth',
  initialState: {
    user: null,
    token: null,
    resetInfo: {},
    updatedInfo: null,
    preAuth: {},
    profileImg: {},
    defaultUserName: null,
  } as unknown as UserState,
  reducers: {
    setCredentials: (state, {payload: {user, token, defaultUserName}}) => {
      state.user = user;
      state.token = token;
    },
    setPreAuth: (state, {payload: {info}}) => {
      state.preAuth = info;
    },
    setUpdatedInfo: (state, {payload: {updatedInfo}}) => {
      state.user = updatedInfo;
    },

    setProfileImg: (state, {payload: {profileImg}}) => {
      state.user = profileImg;
    },

    setResetInfo: (state, {payload: {resetInfo}}) => {
      state.resetInfo = resetInfo;
    },
    // setDefaultUserName: (state, {payload: {defaultUserName}}) => {
    // state.defaultUserName = defaultUserName},
    signOut: () => {},
  },
});

export const {
  setCredentials,
  setPreAuth,
  setProfileImg,
  setUpdatedInfo,
  setResetInfo,
  signOut,
} = slice.actions;

export default slice.reducer;

export const selectUser = (state: RootState) => state.userAuth.user;
export const selectToken = (state: RootState) => state.userAuth.token;
export const selectResetInfo = (state: RootState) => state.userAuth.resetInfo;
export const selectPreAuth = (state: RootState) => state.userAuth.preAuth;
export const selectProfileImg = (state: RootState) => state.userAuth.profileImg;
export const selectupdatedInfo = (state: RootState) =>
  state.userAuth.updatedInfo;
export const selectDefaultUserName = (state: RootState) =>
  state.userAuth.defaultUserName;
