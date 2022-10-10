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
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%"
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: "20%"
    }
  ];
  return columns;
};

export const getDummyData = () => {
  return new Array(1000).fill("").map((item: any, index) => {
    const dummyObject = {
      id: Math.random(),
      name: "name" + index,
      price: "price" + index,
      city: "city" + index
    };
    return dummyObject;
  });
};
