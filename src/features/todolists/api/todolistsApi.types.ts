import { z } from "zod"

export const TodolistSchema = z.object({
  id: z.string(),
  title: z.string(),
  addedDate: z.string(),
  order: z.number(),
})

export type Todolist = z.infer<typeof TodolistSchema>

// export type Todolist = {
//   id: string
//   title: string
//   addedDate: string
//   order: number
// }
