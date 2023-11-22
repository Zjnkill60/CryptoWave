"use client"
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import Image from "next/image"
import { ITEM_SIDEBAR } from "@/constant/constant"
import { usePathname } from "next/navigation"


export default function MenuMobile() {
    const pathName = usePathname()

  return (
    <Sheet >
      <SheetTrigger asChild>
            <FontAwesomeIcon icon={faBars} style={{width:30,height:30}} className='dark:invert' />
      </SheetTrigger>
      <SheetContent  side={"left"} className="dark:bg-nft-black-2 dark:border-nft-black-1 p-3 sm:w-[85%] md:w-[70%] ">

            <SheetHeader>
                <Link href="/client" className='flex items-center  dark:text-dark-green font-sans'>
                    <Image
                        src={"/assets/avatar.jpg"}
                        height={10}
                        width={27}
                        alt='avatar'
                        className='rounded-full mr-2 '
                        />
                        <h4 className=' font-semibold text-xl sm:text-lg dark:text-white'>CryptoWave</h4>
                        <h4 className=' font-semibold text-xl sm:text-lg'>.com</h4>
                </Link>
            </SheetHeader>

          
           
            <div className='flex flex-col mt-14 gap-5 text-sm dark:text-white'>
                {ITEM_SIDEBAR.map(item => {
                return (
                    <SheetClose asChild>
                        <Link key={item.name} href={item.link} className={`${pathName ==(item.link) ? 'bg-green-lightmode dark:bg-green-darkmode text-text-light-green dark:text-white':''} 
                        flex items-center gap-10 p-3  rounded-lg hover:dark:bg-green-darkmode hover:bg-green-lightmode hover:opacity-90`}>
                        <Image
                                src={item.icon}
                                height={10}
                                width={17}
                                alt='avatar'
                                className='dark:invert text-green-lightmode'
                                />
                            <h4>{item.name}</h4>
                        </Link>
                   </SheetClose>
                )
                })}
                
            </div>
            
           
     
      </SheetContent>
    </Sheet>
  )
}
