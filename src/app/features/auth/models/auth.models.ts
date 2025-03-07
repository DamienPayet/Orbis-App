
export interface LoginRequest {
  email: string;
  password: string;
}


export interface LoginResponse {
  message : string;
  response? : {
    success : boolean;
    token: string;
    refreshToken: string;
    userId : string,
    username : string,
    userRole : string
  }
}
