import styled from "styled-components";
import { Input } from "antd";
import "@constant/color/Color.css";

export const InputFormWrapper = styled.div`
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
    color: var(--color-system-gray-gray-18);
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
  .ant-input-affix-wrapper-disabled {
    border: solid 1px var(--color-system-gray-gray-5);
    background-color: var(--color-system-gray-gray-4);
  }
  .ant-input-prefix {
    margin-right: var(--spacing-3);
  }
`;

export const PasswordFormInput = styled(Input.Password)`
  font-size: 12px;
  font-family: Poppins;
  border: 1px solid var(--color-system-gray-gray-21);
  background: transparent;
  border-radius: 8px;
  color: var(--color-system-gray-gray-17);
  font-weight: 500;
  line-height: 22px;
  padding:11px 12px;
  &:hover {
    border: 1px solid var(--color-system-purple-purple-6) !important;
    outline: none;
    box-shadow: none;
  }
  &:focus {
    border: 1px solid var(--color-system-purple-purple-6); !important;
    outline: none;
    box-shadow: none;
  }
  &:active {
    border: 1px solid var(--color-system-purple-purple-6); !important;
    outline: none;
    box-shadow: none;
  }
`;
