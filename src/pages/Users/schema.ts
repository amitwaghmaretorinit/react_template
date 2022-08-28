import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required(),
  age: Yup.number().required(),
  branch: Yup.string().required()
});
