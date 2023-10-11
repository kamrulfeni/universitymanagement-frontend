"use client";

import StepperForm from "@/components/StepperFrom/StepperForm";
import StudentBasicInfo from "@/components/StudentFrom/StudentBasicInfo";
import GuardianInfo from "@/components/StudentFrom/StudentGurdian";
import StudentInfo from "@/components/StudentFrom/StudentInfo";
import LocalGuardianInfo from "@/components/StudentFrom/StudentLocalGuardianInfo";


const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
