import styled from "styled-components";
import { Input } from "antd";
import "@constant/color/Color.css";
const { TextArea } = Input;

export const TextAreaInputContainer = styled(TextArea)`
  font-size: 12px;
  font-family: Poppins;
  line-height: 16px;
  background: transparent;
  border-radius: 8px;
  color: var(--color-system-gray-gray-17);
  font-weight: 500;
  line-height: 22px;
 
  
`;

export const InputFormWrapper = styled.div<{ error: any }>`
  margin-bottom: 18px;
  width: 100%;
  .errormsg {
    color: red;
    font-family: Poppins;
  }
  &.bottom-0 {
    margin-bottom: 0px;
  }
  .ant-input[disabled] {
    border: 1px solid var(--color-system-gray-gray-21);
    color: var(--color-system-gray-gray-18);
    background-color: var(--color-system-gray-gray-22);
  }

  .ant-form-item-has-error .ant-input:focus {
    border-color: var(--color-system-red-red-5) !important;
    box-shadow: none;
  }

  .ant-form-item-has-error.ant-form-item-has-feedback
    .ant-form-item-children-icon {
    margin-top: -21px !important;
  }

  .on-success {
    border: 1px solid var(--color-system-green-green-6) !important;
  }
  .ant-input-textarea-show-count::after{
    float:left;
    color:rgba(123, 123, 151, 1);
    font-size:14px;
    line-height:22px;
    font-family:Poppins;
    font-weight:400;
  }
  textarea.ant-input{
    border-radius:8px;
    border-color: ${(props: any) => props.error ? 'var(--color-system-red-red-5) !important' : ' var(--color-system-gray-gray-21) !important'};
  }
 
`;
