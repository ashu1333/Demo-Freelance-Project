export interface LoginRequest {
  user_type?:string
  email?: string
  password?: string
}

export interface SignInRequest {
  user_type?:string
  first_name?: string
  last_name?: string
  mobile_no?: string
  email?: string
  password?: string
  confirm_password?:string
}

export interface ForgotRequest {
  email?: string
}

export interface ResetPasswordRequest {
  token?:string
  password?: string
 
}

export interface VerifyMail {
  token?:string
}

export interface Toast {
  message?: string
  duration?:number
  show?:boolean
  type?:string
}
