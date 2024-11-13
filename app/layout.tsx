
//AUTENTIFICACION CON CLARK
import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"; //Agregado
const noto = Noto_Sans_Display({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "INNOTRACK-FIO",
  description: "Course Tarredev",
};


export default function RootLayout({children}: Readonly <{
  children: React.ReactNode;
}>){

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={noto.className}>
          
        <ThemeProvider
            attribute="class"
            // defaultTheme="system"  //ESTO ES PARA EL TEMA
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Toaster/>
          </ThemeProvider>
          </body>
      
      </html>
    </ClerkProvider>
  );

}
 
 
 