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
    userRole: string,
    userType: string
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

export interface AgencyRegisterRequest {
  name: string
  legalName: string
  taxId: string
  registrationNumber: string
  email: string
  phoneNumber: string
  country: string
  city: string
  postalCode: string
  address: string
  businessType: string
  website: string
  logoUrl: string
}
export interface AgencyRegisterResponse {
  success: boolean;
  message: string;
  error: {
    success: boolean;
    message : string
    errors: [];
  };
}

export interface ContentCreatorRegisterRequest {
  name: string
  phoneNumber: string
  country: string
  city: string
  postalCode: string
  address: string
  businessType: string
  website: string
  logoUrl: string
}
export interface ContentCreatorRegisterResponse {
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
