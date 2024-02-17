export const selectAuthLoading = ({ auth }) => auth.isLoading;
export const selectAuthError = ({ auth }) => auth.error;
export const selectAuthIsLogin = ({ auth }) => auth.isLogin;
export const selectAuthUser = ({ auth }) => auth.user;
export const selectAuthToken = ({ auth }) => auth.token;
