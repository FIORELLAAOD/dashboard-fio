"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ToggleTheme() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
//--------------------------
// "use client"

// import * as React from "react"
// import { Moon, Sun, Palette } from "lucide-react"
// import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"

// // Definir la interfaz para los temas
// interface ThemeStyle {
//   background: string;
//   color: string;
// }

// interface CustomThemes {
//   [key: string]: ThemeStyle;
// }

// // Definición de temas personalizados con el tipo correcto
// const customThemes: CustomThemes = {
//   "theme-ocean": {
//     background: "linear-gradient(to right, #2E3192, #1BFFFF)",
//     color: "#ffffff"
//   },
//   "theme-sunset": {
//     background: "linear-gradient(to right, #FF512F, #DD2476)",
//     color: "#ffffff"
//   },
//   "theme-forest": {
//     background: "linear-gradient(to right, #134E5E, #71B280)",
//     color: "#ffffff"
//   },
//   "theme-lavender": {
//     background: "linear-gradient(to right, #834d9b, #d04ed6)",
//     color: "#ffffff"
//   },
//   "theme-midnight": {
//     background: "linear-gradient(to right, #232526, #414345)",
//     color: "#ffffff"
//   },
//   "theme-sunrise": {
//     background: "linear-gradient(to right, #f2994a, #f2c94c)",
//     color: "#000000"
//   }
// }

// // Creación de estilos CSS dinámicos
// const createStyles = () => {
//   let styles = `
//     :root {
//       --light-bg: #ffffff;
//       --dark-bg: #1a1a1a;
//     }

//     [data-theme='light'] {
//       background-color: var(--light-bg);
//       color: #000000;
//     }

//     [data-theme='dark'] {
//       background-color: var(--dark-bg);
//       color: #ffffff;
//     }
//   `

//   // Agregar estilos para temas personalizados
//   Object.entries(customThemes).forEach(([theme, values]) => {
//     styles += `
//       [data-theme='${theme}'] {
//         background: ${values.background};
//         color: ${values.color};
//       }
      
//       [data-theme='${theme}'] .dark-mode-icon {
//         color: ${values.color};
//       }
//     `
//   })

//   return styles
// }

// export function ToggleTheme() {
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = React.useState(false)

//   React.useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null
//   }

//   return (
//     <>
//       <style>{createStyles()}</style>

//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline" size="icon" className="relative">
//             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-56">
//           <DropdownMenuItem onClick={() => setTheme("light")}>
//             <Sun className="mr-2 h-4 w-4" />
//             <span>Light</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("dark")}>
//             <Moon className="mr-2 h-4 w-4" />
//             <span>Dark</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("system")}>
//             <Palette className="mr-2 h-4 w-4" />
//             <span>System</span>
//           </DropdownMenuItem>
          
//           <DropdownMenuSeparator />
          
//           {(Object.keys(customThemes) as Array<keyof typeof customThemes>).map((themeKey) => (
//             <DropdownMenuItem
//               key={themeKey}
//               onClick={() => setTheme(themeKey)}
//               className="flex items-center"
//             >
//               <div
//                 className="mr-2 h-4 w-4 rounded"
//                 style={{ background: customThemes[themeKey].background }}
//               />
//               <span>
//                 {themeKey.replace('theme-', '').charAt(0).toUpperCase() + 
//                  themeKey.slice(7)}
//               </span>
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </>
//   )
// }