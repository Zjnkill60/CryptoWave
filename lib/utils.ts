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

export function generateRandomString() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = chars.length;
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}