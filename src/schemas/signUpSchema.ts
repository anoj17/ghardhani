import {z} from 'zod'

export const usernameValidation = z.string()
        .max(20,"only 20 max character is allowd in username")
        .min(2,"you have to enter more than 2 character in username")
        .regex(/^[a-zA-Z0-9_]+$/,"user name must not contain special charater ")

export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string()
            .email({message:"Please enter valid email"}),
    password: z.string({message: "Password must be atleast 6 character"}),
})