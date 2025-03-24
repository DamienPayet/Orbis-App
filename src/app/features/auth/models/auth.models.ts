export interface LoginRequest {
  email: string;
  password: string;
}


export interface LoginResponse {
  message: string;
  response?: {
    success: boolean;
    token: string;
    refreshToken: string;
    userId: string,
    username: string,
    userRole: string
  }
}

export interface RegisterRequest {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  password: string;
  accountType: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  error: {
    success: boolean;
    message : string
    errors: [];
  };
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export interface ResetPasswordRequest {
  password: string;
  token: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
}
