import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useRef } from 'react'
import axios from 'axios'


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function Navbar() {
    let inputTitle = useRef(null);
    let url = 'https://meeting-app-63ad9-default-rtdb.asia-southeast1.firebasedatabase.app/'


    const [date, setDate] = useState();

    function handleAddMeeting(){
        axios.post(`${url}meet.json` , {
            title:inputTitle.current.value,
            date:date
        }).then(()=>{

            // console.log('data saved')
        })

    }

  return (

    <>
    <div className="flex justify-between border-b py-3 px-40 items-center">
        <h1 className="text-2xl font-semibold">Meeting App</h1>




        <div className="flex gap-4 items-center">
            <Link to='/previous' className='text-sm font-semibold border py-[8px] px-[16px] rounded-[5px]'>Past Meetings</Link>
            <Sheet>
      <SheetTrigger asChild>
        <Button className="border rounded-[5px] ">Add Meetings</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Meetings</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">

            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" placeholder="Meeting Title" ref={inputTitle} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date-input" className="text-right">
              Date
            </Label>
            <Input type="date" id="date-input"  value={date} onChange={(e)=>{setDate(e.target.value)}} className="col-span-3" />

          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleAddMeeting}>Add Meeting</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>


        </div>




    </div>




    </>
  )
}

export default Navbar
