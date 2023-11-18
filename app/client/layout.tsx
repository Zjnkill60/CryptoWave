import LeftSideBar from '@/components/LeftSidebar/LeftSideBar';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className=" relative ">
          <Navbar />
          <div className="flex">
            <LeftSideBar />
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
              <div className="mx-auto w-full ">{children}</div>
            </section>
          </div>
        </main>
      );
}

export default Layout