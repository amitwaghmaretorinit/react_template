import React from "react";
import styled from "styled-components";
import { JsxElement, JsxFragment } from "typescript";

export const LabelText = styled.label`
font-family: Poppins;
font-size: 14px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.57;
letter-spacing: normal;
text-align: left;
color: var(--color-system-gray-gray-10);
display:block;
`;

interface FormLabelProps {
  text: string | React.ReactNode;
  isMandatory?: boolean;
}

export const Label = (props: FormLabelProps): JSX.Element => {
  const { text , isMandatory} = props;
  return (
  <LabelText>
      {text} 
      {isMandatory?<span style={{color:"red"}}>*</span>:null}
  </LabelText>
  );
};
