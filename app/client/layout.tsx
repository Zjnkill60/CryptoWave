import LeftSideBar from '@/components/LeftSidebar/LeftSideBar';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className=" relative ">
          <Navbar />
          <div className="flex">
            <LeftSideBar />
            <section className="flex min-h-screen bg-nft-gray-1 dark:bg-nft-black-2 flex-1  px-6 pb-6 pt-32 max-md:pb-14 sm:px-14">
                <div className=" w-full dark:bg-nft-dark bg-nft-gray-0 p-4 rounded-md">
                {children}
                </div>
            </section>
          </div>
        </main>
      );
}

export default Layout