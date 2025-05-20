import { z } from "zod"

export type Inputs = z.infer<typeof loginSchema>

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Минимальное кол-во символов 3" })
    .email({ message: "Не правильный адрес почты" }),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(3, { message: "Password must be at least 3 characters long" }), 
  rememberMe: z.boolean(),
})
