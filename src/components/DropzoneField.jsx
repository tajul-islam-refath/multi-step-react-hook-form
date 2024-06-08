import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";

export const Dropzone = ({ name, multiple, error, register, ...rest }) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    ...rest,
  });

  return (
    <section>
      <div
        {...getRootProps()}
        className="w-full flex justify-center items-center border border-dashed border-gray-400 py-4">
        <input
          {...getInputProps({ ...register(name) })}
          name={name}
          id={name}
        />
        <p>Drag & drop file here, or click to select file</p>
      </div>
      {error && <span className="text-red-500">{error.message}</span>}
    </section>
  );
};
