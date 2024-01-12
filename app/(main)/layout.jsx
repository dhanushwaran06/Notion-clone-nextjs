"use client";
import Spinner from "@/components/provider/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";
import Navigation from "./_components/Navigation";
import SearchCommand from "@/components/SearchCommand";

const MainLayout = ({ children }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
        {/* <h1 className=" text-2xl">You Need to Login</h1> */}
      </div>
    );
  }
  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className=" flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
