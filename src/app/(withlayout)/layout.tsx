"use client"
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ( {children}:{children:React.ReactNode}) => {
  const userLogedIn = isLoggedIn();
  const router = useRouter()
  const [isLoading, setLoading] = useState<boolean>(false)
   
  useEffect(()=>{
    if (!userLogedIn){
      router.push("/login")
    }
    setLoading(true)
  },[router, isLoading])
   //true  kore deya
  if (!isLoading) {
    return <p>loading</p>;
  }

  return<Layout hasSider>
    <Sidebar/>
    <Contents>{children}</Contents>
    </Layout>
};

export default DashboardLayout;


