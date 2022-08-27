import React from "react";
const CustomError = ({ showerror, error, fieldName }: any) => {
  return (
    <>
      {showerror ? (
        <p style={{ color: "red" }}>
          {error && error[fieldName] && error[fieldName][0]
            ? error[fieldName][0].toString()
            : ""}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomError;
