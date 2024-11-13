//corregido
import {
    BarChart4, Building2, PanelsTopLeft, Settings,ShieldCheck,CircleHelpIcon,Calendar
} from 'lucide-react'

export const dataGeneralSidebar=[
    {
        icon:PanelsTopLeft,
        label:"Dashboard",
        href:"/"
    },
    {
        icon:Building2,
        label:"Companies",
        href:"/companies"
    },
    {
        icon:Calendar,
        label:"Calendar",
        href:"/tasks",
    }
]
export const dataToolsSidebar = [
    {
    icon: CircleHelpIcon,
    label: "faqs",
    href: "/faqs",
    },
    {
    icon: BarChart4,
    label: "Analitics",
    href: "/analitics",
    }
]
export const dataSupportSidebar = [
    {
    icon: Settings,
    label: "Setting",
    href: "/setting",
    
    },
    {
    icon: ShieldCheck,
    label: "Security",
    href: "/security",
}
]
