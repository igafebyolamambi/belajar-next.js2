'use server'

import { error } from "console";
import { revalidatePath } from "next/cache";
import {z} from "zod";


type FieldErrors = {
    [key: string]: string[]
}

export async function CreateNote(prevState: {
    message: string
    errors: object
    }, 
    formData: FormData,
){
    const formSchema = z.object({
        title: z.string().min(1, 'Title Wajib Diisi !'), 
        description: z.string().min(1, 'Description Wajib Diisi !'), 
    })

    const parse = formSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
    })

    if(!parse.success){
        const fieldErrors = parse.error.formErrors.fieldErrors || {}

        const errors = Object.keys(fieldErrors)?.reduce(
            (acc, key) => {
                acc[key] = fieldErrors[key]?.[0] || 'Unknown error'
                return acc
            },
            {} as Record<string, string>,
        )
        return {errors}
    }

    try{
        await fetch('https://service.pace11.my.id/api/note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parse.data),
            }).then((res) => res.json())

            revalidatePath('/notes/server')
            return { message: 'Added notes successfully'}
    } catch (error) {
        return { message: 'Failed to create notes'}
    }

}

