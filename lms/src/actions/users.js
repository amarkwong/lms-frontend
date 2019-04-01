export const Types = {
    GET_CURRENT_USER_REQUEST: 'users/get_current_user_request',
    GET_CURRENT_USER_SUCCESS: 'users/get_current_user_success',
    LOGIN_REQUEST: 'user/login_request',
    LOGIN_SUCESS: 'user/login_success',
    SIGNUP_REQUEST: 'user/signup_request',
    SIGNUP_SUCESS: 'user/signup_success',
    DELETE_USER_REQUEST: 'users/delete_user_request',
    CREATE_USER_REQUEST: 'users/create_user_request',
    UPDATE_USER_REQUEST: 'users/update_user_request',
    USERS_ERROR: 'users/user_error'
  };
  
  export const getCurrentUserRequest = () => ({
      type: Types.GET_CURRENT_USER_REQUEST
  });
  
  export const getCurrentUserSuccess = (user) => ({
      type: Types.GET_CURRENT_USER_SUCCESS,
      payload: user,
  });

  export const loginRequest = (user) => ({
      type: Types.LOGIN_REQUEST,
      payload: user,
  });
  
  export const signupRequest = (user) => ({
      type: Types.SIGNUP_REQUEST,
      payload: user,
  });
  
  export const updateUserRequest = (user) => ({
      type: Types.UPDATE_USER_REQUEST,
      payload: user,
  });
  
  
  export const deleteUserRequest = (userId) => ({
      type: Types.DELETE_USER_REQUEST,
      payload: {
          userId
      }
  });
 
  const guest = {
    userId: 0,
    role: 'guest',
    username: 'unknown'
  }
  export const usersError = ({error}) => ({
      type: Types.USERS_ERROR,
      payload: {
          user:guest,
          error
      }
  });