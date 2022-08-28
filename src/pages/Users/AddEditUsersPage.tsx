import React from "react";
import { useFormik } from "formik";
import { Flex } from "@atom/Flex";
import { Label } from "@atom/FormLable";
import { Input } from "@atom/Input";

import { validationSchema } from "./schema";

export default function AddEditUsers() {
  const onSubmit = (values: any) => {};

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      branch: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => onSubmit(values)
  });

  const { handleChange, values } = formik;

  return (
    <Flex direction="column">
      <title>Edit Users</title>
      <Flex direction="column">
        <Label text="Name" ismandatory={true} />
        <Input
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name}
          type={"text"}
          placeholder="Enter your name"
        />
      </Flex>
      <Flex direction="column">
        <Label text="Age" ismandatory={true} />
        <Input
          id="age"
          name="age"
          onChange={handleChange}
          value={values.age}
          type={"number"}
          placeholder="Enter your age"
        />
      </Flex>
      <Flex direction="column">
        <Label text="Branch" ismandatory={true} />
        <Input
          id="branch"
          name="branch"
          onChange={handleChange}
          value={values.branch}
          type={"text"}
          placeholder="Enter your branch"
        />
      </Flex>
    </Flex>
  );
}
