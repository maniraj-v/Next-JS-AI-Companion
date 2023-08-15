import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <aside className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </aside>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};
export default RootLayout;
