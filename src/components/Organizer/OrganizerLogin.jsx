

import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(8).max(50)
})

export default function OrganizerLogin() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit() {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log()
    }
    return (
        <>

        </>
    );
}