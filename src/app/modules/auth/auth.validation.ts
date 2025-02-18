import { z } from "zod";

const loginValidationSchema = z.object({
  body:z.object({
    id:z.string({required_error:'id is required'}),
    password:z.string({required_error:'password is required'}),
  })
})
const changePasswordValidationSchema = z.object({
  body:z.object({
    oldPassword:z.string({required_error:'old password is required'}),
    newPassword:z.string({required_error:'new password is required'}),
  })
})
const forgetPasswordValidationSchema = z.object({
  body:z.object({
    id:z.string({required_error:'userId is required'}),
    
  })
})

const resetPasswordValidationSchema = z.object({
  body:z.object({
    id:z.string({required_error:'userId is required'}),
    newPassword:z.string({required_error:'password is required'}),
    
  })
})

const refreshTokenValidationSchema=z.object({
cookies:z.object({
  refreshToken:z.string({
    required_error:"Refresh token is required!"
  })
})
})

export const AuthValidation ={
  loginValidationSchema,
  changePasswordValidationSchema,
  forgetPasswordValidationSchema,
  refreshTokenValidationSchema,
  resetPasswordValidationSchema
}