import { useFormContext, Controller } from "react-hook-form";

export default function TextField({ name, label, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className=" w-full ">
          <label className="font-raleway font-medium text-slate-600">
            {label}
          </label>
          <br></br>
          <textarea
            type="text"
            name="first"
            className="w-full border border-transparent 
                      border-b-slate-800 bg-slate-50 px-0 py-2 font-raleway  focus:outline-none "
            {...other}
            {...field}
          />
        </div>
      )}
    />
  );
}
