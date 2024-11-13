"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UploadButton } from "@/utils/uploadthing";

import { CompanyFormProps } from "./CompanyForm.types";
import { formSchema, type FormSchema } from "./CompanyForm.form";

export function CompanyForm(props: CompanyFormProps) {
  const { company } = props;
  const router = useRouter();
  const [photoUploaded, setPhotoUploaded] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: company.name,
      description: company.description,
      country: company.country,
      website: company.website,
      phone: String(company.phone),
      cif: company.cif,
      profileImage: company.profileImage
    }
  });

  const onSubmit = async (values: FormSchema) => {
    try {
      await axios.patch(`/api/company/${company.id}`, values);
      toast.success("Company updated!");
      router.refresh();
   
    } catch (error) {
      toast.error("Something went wrong");
    
    }
  };

  return (
    <>
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
                    <Input placeholder="Company name..." type="text" {...field} />
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
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
                    <Input placeholder="www.example.com" type="text" {...field} />
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
                    <Input
                      placeholder="+51 950900830"
                      type="text"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
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
                  <FormLabel>CIF/NIF</FormLabel>
                  <FormControl>
                    <Input placeholder="B-123456" type="text" {...field} />
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
                    <div>
                      {photoUploaded ? (
                        <p className="text-sm">Image uploaded!</p>
                      ) : (
                        <UploadButton
                          className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-3"
                          {...field}
                          endpoint="profileImage"
                          onClientUploadComplete={(res) => {
                            if (res?.[0]?.url) {
                              form.setValue("profileImage", res[0].url);
                              setPhotoUploaded(true);
                            }
                          }}
                          onUploadError={(error: Error) => {
                            toast.error("Error uploading photo");
                          }}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description..." 
                     {...field}
                    value={form.getValues().description ?? ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Edit company</Button>
        </form>
      </Form>
      <ToastContainer />
    </>
  );
}
