// "use client"

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import multiMonthPlugin from '@fullcalendar/multimonth'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import listPlugin from '@fullcalendar/list'
// import { DateSelectArg ,EventContentArg } from '@fullcalendar/core/index.js'
// import axios from 'axios';
// import { formatDate } from '@/lib/formatDate'
// import { Toast } from '@/components/ui/toast'
// import { CalendarProps } from "./Calendar.types";
// import { ModalAddEvent } from '../ModalAddEvent'
// export function Calendar(props: CalendarProps) {
//     const { companies, events } = props
//     const router = useRouter()
//     const [open, setOpen] = useState(false)
//     const [onSaveNewEvent, setOnSaveNewEvent] = useState(false)
//     const [selectedItem, setSelectedItem] = useState<DateSelectArg>()
//     const [newEvent, setNewEvent] = useState({
//     eventName : "",
//     companieSelected: {
//     name : "",
//     id:""
//     }
//   })

//   const handleEventClick=async(selected:DateSelectArg)=>{
//    setOpen(true)
//    setSelectedItem(selected)

//   }


//   useEffect(() => {
//     if(onSaveNewEvent && selectedItem?. view. calendar) {
//     const calendarApi = selectedItem.view.calendar
//     calendarApi.unselect()
    
//     const newEventPrisma = {
//     companyId: newEvent.companieSelected.id,
//     title: newEvent.eventName,
//     start: new Date(selectedItem.start),
//     allDay: false,
//     timeFormat: 'H(:mm)'
//     }

//     axios.post('/api/company/${newEvent.companieSelected.id}/event', newEventPrisma)
//         .then(() => {
//         toast({title: "Evento creado"})
//         router.refresh()
//         })
        
//         .catch(error => {
//         toast({
//         title: "Error al crear el event",
//         variant: "destructive"
//         })
//     })
//         setNewEvent({
//             eventName: "",
//             companieSelected: {
//             name: "",
//             id: ""
//             }
//         })
            
//             setOnSaveNewEvent(false)
//   }
// }, [onSaveNewEvent, selectedItem, event])
// const handleEventClick = async (selected: any) => {
//     if (window.confirm(
//     'Are you sure you want to delete this event ${selected.event.title}'
//     )){
//     try {
//         await axios.delete('/api/event/${selected.event ._ def.publicId}')
//         toast({ title: "Event deleted" })
//         router.refresh() 
//     } catch (error) {
//     toast({
//     title: "Something went wrong",
//     variant: "destructive"
//     })
//     }
//     }
// }

//     return (
//         <div>
//         <div className='md:flex gap-x-3'>
//         <div className='w-[200px] relative'>
//         <div className='absolute top-0 left-0 w-full h-full overflow-auto'>
       
//        {/* funcionalidad para agregar tareas */}

//        <p className='mb-3 text-xl'>Listado de tareas</p>
       
//         {events.map((currentEvent) => (
//             <div key={currentEvent.id} className='p-4 mb-2 rounded-lg shadow-md bg-slate-200 dark:bg-background' >
//             <p className='font-bold'>{currentEvent.title}</p>
//             <p>{formatDate(currentEvent.start)}</p>
//             </div>
//         ))}
        
//         </div>
//         </div>
//         <div className='flex-1 calendar-container'>
//             <FullCalendar
//     plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, multiMonthPlugin]}  
//     headerToolbar={{
//         left: "prev, next today",
//         center: "title",
//         right: "timeGridDay, timeGridWeek, dayGridMonth, multiMonthYear, listMonth"
//     }}
    
//     height="80vh"
//         initialView='dayGridMonth'
//         weekends={false}
//         events={events}
//         eventContent={renderEventContent}
//         editable={true}
//         selectable={true}
//         selectMirror={true}
//         select={handleDateClick}
//         eventClick={handleEventClick}
// />
//         </div>
//         </div>
//         {/* agregamos para anadir  actividades  al calendario */}
//         <ModalAddEvent
//         open={open}
//         setOpen={setOpen}
//         setOnSaveNewEvent={setOnSaveNewEvent}
//         companies={companies}
//         setNewEvent={setNewEvent}
//             />
//         </div>
//     )
// }
// function renderEventContent(eventInfo: EventContentArg) {
//     return(
//     <div className='w-full p-1 bg-slate-200 dark:bg-background'>
//     <i>{eventInfo.event.title}</i>
//     </div>
//     )
// }

//--------------------------------
// "use client"

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import multiMonthPlugin from '@fullcalendar/multimonth'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import listPlugin from '@fullcalendar/list'
// import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js'
// import axios from 'axios';
// import { formatDate } from '@/lib/formatDate'

// import { CalendarProps } from "./Calendar.types";
// import { ModalAddEvent } from '../ModalAddEvent';
// import { ToastContainer, toast } from "react-toastify";

// export function Calendar(props: CalendarProps) {
//     const { companies, events } = props
//     const router = useRouter()
//     const [open, setOpen] = useState(false)
//     const [onSaveNewEvent, setOnSaveNewEvent] = useState(false)
//     const [selectedItem, setSelectedItem] = useState<DateSelectArg>()
//     const [newEvent, setNewEvent] = useState({
//         eventName: "",
//         companieSelected: {
//             name: "",
//             id: ""
//         }
//     })

//     const handleDateClick = async (selected: DateSelectArg) => {
//         setOpen(true)
//         setSelectedItem(selected)
//     }

//     useEffect(() => {
//         if (onSaveNewEvent && selectedItem?.view.calendar) {
//             const calendarApi = selectedItem.view.calendar
//             calendarApi.unselect()
            
//             const newEventPrisma = {
//                 companyId: newEvent.companieSelected.id,
//                 title: newEvent.eventName,
//                 start: new Date(selectedItem.start),
//                 allDay: false,
//                 timeFormat: 'H(:mm)'
//             }

//             axios.post(`/api/company/${newEvent.companieSelected.id}/event`, newEventPrisma)
//                 .then(() => {
//                     toast.success("Evento creado");
//                     router.refresh();
//                 })
//                 .catch(() => {
//                     toast.error("Error al crear el evento");
//                 })

//             setNewEvent({
//                 eventName: "",
//                 companieSelected: {
//                     name: "",
//                     id: ""
//                 }
//             })
//             setOnSaveNewEvent(false)
//         }
//     }, [onSaveNewEvent, selectedItem, events])
// //ojo arriba event
//     const handleEventClick = async (selected: any) => {
//         if (window.confirm(`Are you sure you want to delete this event ${selected.event.title}?`)) {
//             try {
//                 await axios.delete(`/api/event/${selected.event._def.publicId}`);
//                 toast.success("Event deleted");
//                 router.refresh();
//             } catch (error) {
//                 toast.error("Something went wrong");
//             }
//         }
//     }

//     return (
//         <div>
//             <div className='md:flex gap-x-3'>
//                 <div className='w-[200px] relative'>
//                     <div className='absolute top-0 left-0 w-full h-full overflow-auto'>
                       
//                         <p className='mb-3 text-xl'>Listado de tareas</p>
//                         {events.map((currentEvent) => (
//                             <div key={currentEvent.id} className='p-4 mb-2 rounded-lg shadow-md bg-slate-200 dark:bg-background'>
//                                 <p className='font-bold'>{currentEvent.title}</p>
//                                 <p>{formatDate(currentEvent.start)}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className='flex-1 calendar-container'>
//                     <FullCalendar
//                         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, multiMonthPlugin]}
//                         headerToolbar={{
//                             left: "prev,next today",
//                             center: "title",
//                             right: "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth"
//                         }}
//                         height="80vh"
//                         initialView='dayGridMonth'
//                         weekends={false}
//                         events={events}
//                         eventContent={renderEventContent}
//                         editable={true}
//                         selectable={true}
//                         selectMirror={true}
//                         select={handleDateClick}
//                         eventClick={handleEventClick}
//                     />
//                 </div>
//             </div>
//             <ModalAddEvent
//                 open={open}
//                 setOpen={setOpen}
//                 setOnSaveNewEvent={setOnSaveNewEvent}
//                 companies={companies}
//                 setNewEvent={setNewEvent}
//             />
//         </div>
//     )
// }

// function renderEventContent(eventInfo: EventContentArg) {
//     return (
//         <div className='w-full p-1 bg-slate-200 dark:bg-background'>
//             <i>{eventInfo.event.title}</i>
//         </div>
//     )
// }
//-----------------------------
"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import multiMonthPlugin from '@fullcalendar/multimonth'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"

// import { formatDate } from '@/lib/formatDate'

import { CalendarProps } from "./Calendar.types";
import { ModalAddEvent } from '../ModalAddEvent'

// Función de formato de fecha mejorada
function formatDate(date: Date | string): string {
    // Ensure we have a Date object
    const dateObject = date instanceof Date ? date : new Date(date)
    
    // Check if the date is valid
    if (isNaN(dateObject.getTime())) {
        return 'Fecha inválida'
    }

    // Format the date in Spanish
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }

    return dateObject.toLocaleDateString('es-ES', options)
}

export function Calendar(props: CalendarProps) {
    const { companies, events } = props
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [onSaveNewEvent, setOnSaveNewEvent] = useState(false)
    const [selectedItem, setSelectedItem] = useState<DateSelectArg>()
    const [newEvent, setNewEvent] = useState({
        eventName: "",
        companieSelected: {
            name: "",
            id: ""
        }
    })

    // Efecto para verificar los eventos recibidos
    useEffect(() => {
        console.log('Events received:', events)
    }, [events])

    const handleDateClick = async (selected: DateSelectArg) => {
        setOpen(true)
        setSelectedItem(selected)
    }

    useEffect(() => {
        if (onSaveNewEvent && selectedItem?.view.calendar) {
            const calendarApi = selectedItem.view.calendar
            calendarApi.unselect()
            const newEventPrisma = {
                companyId: newEvent.companieSelected.id,
                title: newEvent.eventName,
                start: new Date(
                    selectedItem.start.getFullYear(),
                    selectedItem.start.getMonth(),
                    selectedItem.start.getDate(),
                    new Date().getHours(),
                    new Date().getMinutes()
                ),
                allDay: false,
                timeFormat: 'H(:mm)'
            }

            axios.post(`/api/company/${newEvent.companieSelected.id}/event`, newEventPrisma)
                .then(() => {
                    toast.success("Evento creado")
                    router.refresh()
                })
                .catch(() => {
                    toast.error("Error al crear el evento")
                })

            setNewEvent({
                eventName: "",
                companieSelected: {
                    name: "",
                    id: ""
                }
            })
            setOnSaveNewEvent(false)
        }
    }, [onSaveNewEvent, selectedItem, newEvent, router])

    const handleEventClick = async (selected: any) => {
        if (window.confirm(`¿Estás seguro que deseas eliminar este evento: ${selected.event.title}?`)) {
            try {
                await axios.delete(`/api/event/${selected.event._def.publicId}`)
                toast.success("Evento eliminado")
                router.refresh()
            } catch (error) {
                toast.error("Algo salió mal")
            }
        }
    }

    return (
        <div>
            <div className='md:flex gap-x-3'>
                <div className='w-[200px] relative'>
                    <div className='absolute top-0 left-0 w-full h-full overflow-auto'>
                        <p className='mb-3 text-xl'>Listado de tareas</p>
                        {events.map((currentEvent) => (
                            <div key={currentEvent.id} 
                                 className='p-4 mb-2 rounded-lg shadow-md bg-slate-200 dark:bg-background'>
                                <p className='font-bold'>{currentEvent.title}</p>
                                <p>{formatDate(new Date(currentEvent.start))}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex-1 calendar-container'>
                    <FullCalendar
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                            multiMonthPlugin
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth"
                        }}
                        height="80vh"
                        initialView='dayGridMonth'
                        weekends={false}
                        events={events}
                        eventContent={renderEventContent}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        locale="es" // Añadido para mostrar el calendario en español
                    />
                </div>
            </div>
            <ModalAddEvent
                open={open}
                setOpen={setOpen}
                setOnSaveNewEvent={setOnSaveNewEvent}
                companies={companies}
                setNewEvent={setNewEvent}
            />
            <ToastContainer /> {/* Añadido para asegurar que los toasts se muestren */}
        </div>
    )
}

function renderEventContent(eventInfo: EventContentArg) {
    return (
        <div className='w-full p-1 bg-slate-200 dark:bg-background'>
            <i>{eventInfo.event.title}</i>
        </div>
    )
}