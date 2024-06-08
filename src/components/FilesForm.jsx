import React, { useEffect, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import FormField from "./FormField ";
import { FormContext } from "../context/FormContext";
import { Dropzone } from "./DropzoneField";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const FilesForm = () => {
  const { filesForm } = useContext(FormContext);

  const [files, setFiles] = useState([]);

  const onDrop = async (acceptedFiles) => {
    filesForm.setValue("profileImage", acceptedFiles[0]);
    const isValid = await filesForm.trigger("profileImage");

    if (isValid) {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    } else {
      setFiles([]);
    }
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  return (
    <section>
      <p className="text-gray-500 font-sans font-medium text-sm md:text-lg">
        Profile Image
      </p>
      <Dropzone
        name="profileImage"
        multiple={false}
        error={filesForm?.formState?.errors?.profileImage}
        register={filesForm.register}
        onDrop={onDrop}
      />
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default FilesForm;
