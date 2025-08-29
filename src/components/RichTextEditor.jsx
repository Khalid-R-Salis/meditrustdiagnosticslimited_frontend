import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`rounded-lg p-2 bg-white ${
          error ? "border border-red-500" : "border border-[#E5E7EA]"
        }`}
      >
        <Editor
          apiKey="lgpt8xv54pz3vqhu4krdpz4z0k82zski4vlhr1et5drrx2jq"
          value={value}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic underline forecolor backcolor | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | removeformat | " +
              "fontsizeselect table | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={(content) => onChange(content)}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default RichTextEditor;
