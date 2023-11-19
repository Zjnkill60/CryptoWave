import { Background } from '@/components/Background'
import { auth } from '@clerk/nextjs'


export default function Home() {
  const {userId} = auth() as any
  // let user = createNewUser({
  //   clerkId : "123",
  //   name : "da",
  //   username :"dadadada",
  //   email : "@@@@",
  //   picture:"asd"

  // })
  return (
    <main className='w-screen	bg-black min-h-screen'>
     <Background userId ={userId}></Background>
    </main>
  )
}
