"use client"

import { useRouter } from "next/navigation";

import axios from "axios";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FooterCompanyProps } from "./FooterCompany.types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function FooterCompany(props: FooterCompanyProps) {
    const { companyId } = props
    const router = useRouter()
    
  
    const onDeleteCompany = async () => {
        try {
          await axios.delete(`/api/company/${companyId}`);
          toast.success("Company deleted");
          router.push("/companies");
        } catch (error) {
          toast.error("Something went wrong");
        }
      };
      




    return (
    <div className="flex justify-end mt-5">
    <Button variant="destructive" onClick={onDeleteCompany}>
    <Trash className="w-4 h-4 mr-2" />
    Remove company
    </Button>
    </div>
    
    )}