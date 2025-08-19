'use server'

import { revalidatePath } from "next/cache";
import { z } from "zod";

type State = {
    message: string;
    errors: {
        title?: string;
        description?: string;
    };
};

export async function createNote(
    prevState: State,
    formData: FormData
): Promise<State> {
    const formSchema = z.object({
        title: z.string().min(1, 'Title Wajib Diisi !'),
        description: z.string().min(1, 'Description Wajib Diisi !'),
    });

    const parse = formSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
    });

    if (!parse.success) {
        const fieldErrors = parse.error.flatten().fieldErrors;
        return {
            message: 'Validation failed',
            errors: {
                title: fieldErrors.title?.[0],
                description: fieldErrors.description?.[0],
            },
        };
    }

    try {
        await fetch('https://service.pace11.my.id/api/note', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parse.data),
        });

        revalidatePath('/notes/server');

        return { message: 'Added notes successfully', errors: {} };
    } catch {
        return { message: 'Failed to create notes', errors: {} };
    }
}
