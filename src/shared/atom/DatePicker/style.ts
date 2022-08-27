import styled from "styled-components";
import { DatepickerIcon } from "@assets/index";
import "@constant/color/Color.css";

export const Content = styled.div<{ error: any }>`
  margin-bottom: 18px;
  &.bottom-0 {
    margin-bottom: 0px;
  }
  .ant-picker {
    font-size: 14px;
    font-family: Poppins;
    padding: 11px 12px;
    border: ${(props: any) => props.error ? '1px solid var(--color-system-red-red-5) !important' : '1px solid var(--color-system-gray-gray-16) !important'};
    background: transparent;
    border-radius: 8px;
    color: var(--color-system-gray-gray-17);
    font-weight: 500;
    line-height: 22px;
    width: 100%;
    font-family: Poppins;
  }
  .ant-picker-suffix {
    color: var(--color-system-gray-gray-17);
  }
  .anticon.anticon-calendar svg {
    display: none;
  }
  .anticon.anticon-calendar {
    background: url(${DatepickerIcon}) no-repeat;
    display: block;
    width: 18px;
    height: 18px;
  }
  input {
    &::placeholder {
      color: var(--color-system-gray-gray-18);
      font-weight: 400;
    }
  }
  @media(max-width:600px){
    margin-bottom:18px !important;
  }
`;
