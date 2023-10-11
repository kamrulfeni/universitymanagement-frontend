"use client"
import { Layout } from "antd";
const {Content} = Layout;
import React from "react";
import Header from "./Header";
import UMBreadCrumb from "./UMBreadCrumb";

const Contents = ({children}:{children:React.ReactNode}) => {

    const base = "admin"
    return (
      <Content style={{ minHeight: "100vh", color: "black" }}>

        <Header/>
        <UMBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "student",
              link: `/${base}/student`,
            },
          ]}
        />
        {children}
      </Content>
    );
};

export default Contents;