"use client";
import { CgArrowLongRight } from "react-icons/cg";
import { FormProvider, TextField, TextArea } from "./forms";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
export default function ContactForm() {
  const contactSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().required("required"),
    message: Yup.string().required("required"),
  });

  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const methods = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8 ">
        <div className="block space-y-8 sm:flex sm:space-x-4 sm:space-y-0">
          <TextField name="name" label="Your Name:" />
          <TextField name="email" label="Email:" />
        </div>
        <TextArea name="message" label="Your message" />
      </div>

      <button
        type="submit"
        className="mt-12 flex items-center space-x-12 bg-white px-6 py-4 font-raleway font-medium text-slate-800"
      >
        <h2>Send message</h2>
        <CgArrowLongRight />
      </button>
    </FormProvider>
  );
}
