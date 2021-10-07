import React from "react";
import { Form, FormBuilder } from "react-formio";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MySimpleForm() {
  return (
    <div>
      <FormBuilder
        form={{ display: "form" }}
        onChange={(schema) => console.log(schema)}
      />
    </div>
  );
}
