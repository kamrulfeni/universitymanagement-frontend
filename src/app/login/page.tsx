import Login from "@/components/ui/Login";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "university management-Login",
  description: "created by kamrul hasan",
};

const LoginPage = () => {
  return (
    <div>
      <Login/>
    </div>
  );
};

export default LoginPage;