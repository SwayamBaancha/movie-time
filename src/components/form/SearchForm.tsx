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

const formSchema = z.object({
    search_keyword: z.string().min(2, {
        message: "Search must be at least 2 characters.",
    }),
})

export function SearchForm() {
    const router=useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search_keyword: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.push(`/search/${values.search_keyword}`)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex flex-row">
                    <FormField
                        control={form.control}
                        name="search_keyword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="text-black" placeholder="Enter movie to search..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant={"ghost"} type="submit" className="ml-3">Submit</Button>
                </div>
            </form>
        </Form>
    )
}
