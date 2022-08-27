import React from "react";
import styled from "styled-components";
export const FormFieldWrapper = styled.div`
 margin-bottom:var(--spacing-4);
`;
export const Value = styled.span`
    font-size: 14px;
    font-weight: 500;
    white-space: pre-line;
    margin-right: 5px;
    margin-bottom: 12px;
    display: block;
    color: var( --color-system-gray-gray-17);
    word-break: break-word;
`;

export const Title = styled.span`
font-size: 12px;
line-height: 20px;
padding-bottom: 4px;
color: var(--color-system-gray-gray-18);
font-family: Poppins;
font-weight: 400;
word-break: break-word;
`;
interface FormDataProps {
  heading: string;
  value?: React.ReactNode;
}
const FormDataView: React.FC<FormDataProps> = ({ heading, value }) => {
  return (
    <FormFieldWrapper>
      <Title>{heading}</Title>
      <Value>{value}</Value>
    </FormFieldWrapper>
  );
};
export default FormDataView;

