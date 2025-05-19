import { z } from "zod"

export type Inputs = z.infer<typeof loginSchema>

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Минимальное кол-во символов 3" })
    .email({ message: "Не правильный адрес почты" }),
  password: z.string().min(5, { message: "Минимальное кол-во символов 5" }),
  rememberMe: z.boolean(),
})
