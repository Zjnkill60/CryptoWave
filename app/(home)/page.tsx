import { Background } from '@/components/Background'
import { auth } from '@clerk/nextjs'


export default function Home() {
  const {userId} = auth() as any

  return (
    <main className='w-screen	'>
     <Background userId ={userId}></Background>
    </main>
  )
}
