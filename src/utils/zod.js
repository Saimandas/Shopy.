import {z} from 'zod'

const formSchema=z.object({
    username:z.string().min(2,{
        message: "Username must be at least 2 characters.",
      }).max(15,),
    email:z.string().email("invalid email adress"),
    password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least one digit, one lowercase letter, one uppercase letter, and no spaces"
    )
})

export{
    formSchema
}