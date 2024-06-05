"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import { addComment } from "@/lib/actions/comment.action"
import { CheckCheckIcon, ChevronRight, ChevronsRight, MousePointer2 } from "lucide-react"

const formSchema = z.object({
    remarks: z.string().min(2, {
        message: "Search must be at least 2 characters.",
    }),
})

export function CommentForm({movie_id, refresh}:any) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            remarks: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const postComment=await addComment({remarks:values.remarks, movie_id})
        // refresh();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-row items-center justify-center">
                    <FormField
                        control={form.control}
                        name="remarks"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder="Add Comment" {...field} className="text-black w-96 h-10" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                   
                    <Button variant={"ghost"} type="submit" className="ml-3"><ChevronsRight /></Button>
            </div>
            </form>
        </Form>
    )
}
