import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export  const formatter = new Intl.NumberFormat('en-US', {
  currency: 'vnd',

});

export  function getPrice  (type:string,quantity:number) {
  if(type == "view") return 28000 * quantity
  if(type == "folow") return 8000 * quantity
  if(type == "combo") return 155000
  return 0
}