"use client"
import React, { useCallback, useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const CardSelect = ({option,id}:{id:string,option:{name:string,value:string}[]}) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const searchSelect = useSearchParams().get(id)
    const router = useRouter()
 

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )  
     
    const handleSelect = (value:string) => {
        console.log(value)
        router.push(pathname + '?' + createQueryString(id, value),{scroll:false})
    }


    if(!searchSelect) {
        router.push(pathname + '?' + createQueryString(id, id == "payment" ? "banking": id == "quantity" ? "1"  : "random"),{scroll:false})
    }
    
    console.log(searchSelect)
  return (
   <Select onValueChange={(value:any) => handleSelect(value)}  defaultValue={searchSelect ? searchSelect : id == "payment" ? "banking": id == "quantity" ? "1"  : "random" } >
        <SelectTrigger className="w-full min-h-[56px] dark:bg-nft-black-1 bg-nft-gray-1 hover:opacity-90">
            <SelectValue  />
        </SelectTrigger>
        <SelectContent className='dark:bg-nft-black-1 bg-nft-gray-1'>
            {option?.map(item => {
                return (
                <SelectItem key={item.value} className='hover:dark:bg-nft-black-4' value={item.value}>{item.name}</SelectItem> 
                )
            })}
          
        </SelectContent>
  </Select>
  )
}

export default CardSelect