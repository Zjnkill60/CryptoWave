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

export const convertTaskname = (task : string) => {
  if(task == "view") return "View"
  if(task == "folow") return "Follow"
  if(task == "combo") return "Combo BKT"
}

export const convertNameClone = (task : string) => {
  if(task == "vietnam") return "Việt Nam"
  if(task == "foreign") return "Nước Ngoài"
  if(task == "random") return "Random"
}

export const convertAvatarClone = (task : string) => {
  if(task == "nft") return "Ảnh NFT"
  if(task == "human") return "Ảnh Người"
  if(task == "cat") return "Ảnh Mèo"
  if(task == "random") return "Random"
}

export const convertTimeZone = (task : string) => {
  if(task !== "random") return "Ngày"
}

export const convertQuantity = (quantity : number ,packedName : string) => {
  if(packedName == "view") return `${quantity}M View`
  if(packedName == "folow") return `${quantity * 100} Follow`
  if(packedName == "combo") return `1`
}

export const formatDate = (date:string) => {
  const now = new Date(date);
  const timezone = 'Asia/Jakarta';
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    hour :'2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: timezone
  }).formatToParts(now).map(part => part.value).join('');
  return formattedDate
}

export function formatDateDetail(date:string) {
  const now = new Date(date);
  const timezone = 'Asia/Jakarta';
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    second:'numeric',
    minute:'2-digit',
    hour :'2-digit',
    timeZone: timezone
  }).formatToParts(now).map(part => part.value).join('');
  return formattedDate
}