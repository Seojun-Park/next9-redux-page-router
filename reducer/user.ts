import { AnyAction } from 'redux';

export interface UserProps {
  isLoggedIn: boolean;
  data: {
    id: number;
    userId: string;
    password: string;
    nickname: string;
  } | null;
  signUpData: Record<any, any>;
  loginData: Record<any, any>;
}

export const userState: UserProps = {
  data: null,
  isLoggedIn: false,
  loginData: {},
  signUpData: {},
};

interface LoginProps {
  userId: string;
  password: string;
}

export const loginAction = (data: LoginProps) => {
  return {
    type: 'LOG_IN',
    ...data,
  };
};

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

const reducer = (state: UserProps = userState, action: AnyAction) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        data: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        data: null,
      };
    default:
      return state;
  }
};

export default reducer;
