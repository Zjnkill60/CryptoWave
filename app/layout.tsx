import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Crypto.wave - Dịch vụ mạng xã hội Twitter',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
   <ClerkProvider>
     <html lang="en">
      <head>
        <script  src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" integrity="sha512-dLxUelApnYxpLt6K2iomGngnHO83iUvZytA3YjDUCjT0HDOHKXnVYdf3hU4JjM8uEhxf9nD1/ey98U3t2vZ0qQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" defer></script>
      </head>
      <body className={inter.className}>
        
        <ThemeProvider>
          {children}
        </ThemeProvider>
        </body>
    </html>
   </ClerkProvider>
  )
}
