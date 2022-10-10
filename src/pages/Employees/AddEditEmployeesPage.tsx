import React from "react";
import { Flex } from "@atom/Flex";
import { Label } from "@atom/FormLable";
import { Input } from "@atom/Input";
import { useFormik } from "formik";
import { validationSchema } from "./schema";

export default function AddEditEmployees() {
  const onSubmit = (values: any) => {};
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      branch: "",
      city: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => onSubmit(values)
  });

  const { handleChange, values } = formik;

  return (
    <Flex direction="column">
      <title>Edit Employees</title>

      <Flex direction="column">
        <Label text="Product Name" ismandatory={true} />
        <Input
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name}
          type={"text"}
          placeholder="Enter your product name"
        />
      </Flex>
      <Flex direction="column">
        <Label text="Price" ismandatory={true} />
        <Input
          id="age"
          name="age"
          onChange={handleChange}
          value={values.age}
          type={"number"}
          placeholder="Enter your price"
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
      <Flex direction="column">
        <Label text="City" ismandatory={true} />
        <Input
          id="city"
          name="city"
          onChange={handleChange}
          value={values.city}
          type={"text"}
          placeholder="Enter your city"
        />
      </Flex>
    </Flex>
  );
}
