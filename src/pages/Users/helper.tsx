import * as Yup from "yup";

export const getColumns = (onAction: (row: any, type: any) => void) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "40%"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%"
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
      width: "40%"
    }
  ];
  return columns;
};

export const getDummyData = () => {
  return new Array(1000).fill("").map((item: any, index) => {
    const dummyObject = {
      name: "name" + index,

      age: "age" + index,

      branch: "branch" + index
    };
    return dummyObject;
  });
};
