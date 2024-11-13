"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useParams, useRouter}from "next/navigation"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage
} from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } 
from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Toast } from '@/components/ui/toast'
import{FormContactProps} from "./FormContact.types"
import { formSchema } from "./FormContact.form"
import { ToastContainer, toast } from "react-toastify";
export function FormContact(props: FormContactProps){
    const { setOpen } = props

    const params = useParams<{companyId: string}>()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    name: "",
    role: "",
    email: "",
    phone : ""
    }
    })
// Guarda la info a la BD

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/company/${params.companyId}/contact`, values);
      toast.success("Contact created!");
      router.refresh();
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

    


    return (
            <Form { ... form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4
            md: grid-cols-2">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
            <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
            <Input placeholder="Juan Arribas" { ... field} />
            </FormControl>
            <FormMessage />
            </FormItem>
            )}
            />


            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
            <Input placeholder="@email.com" { ... field} />
            </FormControl>
            <FormMessage />
            </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
            <FormItem>
            <FormLabel>phone</FormLabel>
            <FormControl>
            <Input placeholder="+51 950900830 " { ... field} />
            </FormControl>
            <FormMessage />
            </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
            <FormItem>
            <FormLabel>Role</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>

                        <SelectTrigger>
                            <SelectValue placeholder="Select the role" />
                        </SelectTrigger>
                        
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="Comercial">Comercial</SelectItem>
                        <SelectItem value="CEO">CEO</SelectItem>
                        <SelectItem value="Quality">Customer Service</SelectItem>
                        <SelectItem value="Analytics">Analytics</SelectItem>
                        <SelectItem value="Other">Other ... </SelectItem>
                        </SelectContent>
                   
                    <FormMessage />
            </Select>
            </FormItem>
            )}
            />

                <Button type="submit">Save contact</Button>
            </form>
            </Form>
    )
}
