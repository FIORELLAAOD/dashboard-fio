"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"  // Ajusta el path según corresponda
import { useRouter } from "next/navigation";// AUMENTADO

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormCreateCustomerProps } from "./FormCreateCustomers.type"
const formSchema = z.object({
  name:z.string(),
  country:z.string().min(2),
  website:z.string().min(2),
  phone:z.string().min(6),
  cif:z.string().min(6),
  profileImage:z.string()

})
import { useState } from "react"
import { Select, SelectTrigger,SelectContent,SelectValue, SelectItem } from "@/components/ui/select"
import { UploadButton } from "@/utils/uploadthing"
import { toNamespacedPath } from "path"
import { UNDERSCORE_NOT_FOUND_ROUTE_ENTRY } from "next/dist/shared/lib/constants"

export function FormCreateCustomer(props:FormCreateCustomerProps){
    const{setOpenModalCreate}=props
    const router= useRouter()
    const[photoUploaded,setPhotoUploaded]=useState(false)
      // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            country:"",
            website:"",
            phone:"",
            cif:"",
            profileImage:"",
        },
     })
 
  const { isValid}=form.formState
//Con esto se cerrará la ventana de crear 
  const onSubmit=async(values: z.infer<typeof formSchema>) =>{
    try {
      axios.post("/api/company",values)
      toast({title:"Company created"})
      router.refresh()
      setOpenModalCreate(false)
    } catch (error) {
    toast({
    title: "Something went wrong",
    variant: "destructive"
    })
  }
  }
    return(
        <div>
             <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company name</FormLabel>
                            <FormControl>
                              <Input placeholder="Company Name..."  type="text" {...field} />
                            </FormControl>
                          <FormMessage />
                        </FormItem>
                )}
           />
        


        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              >
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select the country"/>
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value="argentina">Argentina</SelectItem>
<SelectItem value="bolivia">Bolivia</SelectItem>
<SelectItem value="brasil">Brasil</SelectItem>
<SelectItem value="chile">Chile</SelectItem>
<SelectItem value="colombia">Colombia</SelectItem>
<SelectItem value="costa-rica">Costa Rica</SelectItem>
<SelectItem value="ecuador">Ecuador</SelectItem>
<SelectItem value="el-salvador">El Salvador</SelectItem>
<SelectItem value="españa">España</SelectItem>
<SelectItem value="grecia">Grecia</SelectItem>
<SelectItem value="guatemala">Guatemala</SelectItem>
<SelectItem value="honduras">Honduras</SelectItem>
<SelectItem value="italia">Italia</SelectItem>
<SelectItem value="mexico">México</SelectItem>
<SelectItem value="nicaragua">Nicaragua</SelectItem>
<SelectItem value="panama">Panamá</SelectItem>
<SelectItem value="paraguay">Paraguay</SelectItem>
<SelectItem value="peru">Perú</SelectItem>
<SelectItem value="portugal">Portugal</SelectItem>
<SelectItem value="united-kingdom">United Kingdom</SelectItem>
<SelectItem value="uruguay">Uruguay</SelectItem>
<SelectItem value="venezuela">Venezuela</SelectItem>
                </SelectContent>
              </Select>  
              <FormMessage />
            </FormItem>
          )}
        />



    <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                    <Input placeholder="www.fiorella.com"  type="text" {...field} />
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
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+31 999 666 666"  type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />



        <FormField
          control={form.control}
          name="cif"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CIF</FormLabel>
              <FormControl>
                <Input placeholder="F-1234567"  type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        
        
         <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
         
                  {photoUploaded ?(
                      <p className="text-sm">Image uploaded!</p>
                  ):(
                  <UploadButton  className="rounded-lg bg-slate-600/20
                  text-slate-800 outline-dotted outline-3"
                  {...field}
                  endpoint="profileImage"
                  onClientUploadComplete={(res) => {
                    form.setValue("profileImage", res ?. [0]. url)
                    toast({
                      title: "Photo uploaded"
                    })
                    setPhotoUploaded(true)
                  }}
                  onUploadError={ (error: Error) =>{
                    toast({
                      title: "Error uploading photo"
                    })
                  }}

              />
                )}
                      </FormControl>

                      <FormMessage />
                    </FormItem>
              )}
        />
    </div>
     <Button type="submit" disable={!isValid}>Submit</Button>

      </form>
    </Form>
        </div>
    )
}