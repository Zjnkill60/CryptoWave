import LeftSideBar from '@/components/LeftSidebar/LeftSideBar';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className=" relative ">
          <Navbar />
          <div className="flex">
            <LeftSideBar />
            <section className="flex min-h-screen bg-nft-gray-1 dark:bg-nft-black-2 flex-1   pb-6 pt-24 pl-[256px] md:pl-0 max-md:pb-14 ">
                <div className=" w-full  dark:text-nft-gray-1 text-nft-black-4">
                {children}
                </div>
            </section>
          </div>
        </main>
      );
}

export default Layout