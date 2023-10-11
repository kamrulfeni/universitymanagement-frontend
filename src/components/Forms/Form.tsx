"use client"
import React from "react";
import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
type FromConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FormProps =  {
    children?: ReactElement | ReactNode;
    submitHandler: SubmitHandler<any>
} & FromConfig;
//The useForm hook from "react-hook-form" is called with the formConfig object, and the result is stored in the methods variable.

//The methods object returned by useForm contains various methods and properties for handling the form.

const Form = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
}: FormProps) => {
  const formConfig: FromConfig = {};
  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
   if (!!resolver) formConfig["resolver"] = resolver;

  const methods = useForm<FormProps>(formConfig);
  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}> {children}</form>
    </FormProvider>
  );
};

export default Form;