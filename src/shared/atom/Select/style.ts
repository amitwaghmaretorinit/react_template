import styled from "styled-components";
import { Select } from "antd";
import { DropdownIcon } from "@assets/index";
import  SearchIcon  from "@assets/search.svg";
import "@constant/color/Color.css";

export const InputFormWrapperForMultiCheckBox = styled.div<{ error: any }>`
  .ant-select-selector {
    padding: 8px 0px !important;
    height: auto !important ;
    border:1px solid;
    border-color: ${(props: any) => props.error ? 'var(--color-system-red-red-5) !important' : ' var(--color-system-gray-gray-21) !important'};
    border-radius: 8px !important; 
   
  }
 
  .ant-select-arrow {
    top: 43%;
    display:block;
    margin-top: 0px;
    font-size: 10px;
    color: var(--color-system-gray-gray-13);
    font-weight:bold;
    right: 20px;
  }
  .errormsg{
    margin-bottom:18px;
    display:block
  }

  .ant-select-selection-item{
    padding: 3px 16px;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    display: flex;
    align-items: center;
    height: auto;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    margin-left: var(--spacing-2);
    color: var(--color-system-purple-purple-6);
    border-radius: 23px;
    border: solid 1px var(--color-system-gray-gray-5);
    background-color: var(--color-system-gray-gray-1);
    
  }
  .ant-select-multiple .ant-select-selection-item-remove{
    color: var(--color-system-purple-purple-6) !important;
  }
  .ant-select-multiple .ant-select-selection-item-content{
    color: var(--color-system-purple-purple-6) !important;
    max-width:555px !important;
  }
  .ant-select-selection-overflow{
    flex:unset !important;
    max-width:100%!important;
    
    width:100%;
  }
  .ant-select-multiple .ant-select-selection-search {
    width: 100% !important;
    overflow: hidden;
}

`;

export const InputFormWrapper = styled.div`
  margin-bottom: 18px;
  @media(max-width:600px){
    margin-bottom: 18px !important;
  }
  &.bottom-0 {
    margin-bottom: 0px;
    @media(max-width:600px){
      margin-bottom: 18px !important;
    }
  }
  &.rightradius0 .ant-select-selector{
    border-radius: 8px 0px 0px 8px !important;
  }
  width: 100%;
  .errormsg {
    color: red;
    font-family: Poppins;
  }

  .ant-select-multiple .ant-select-selection-item {
    font-size: 14px !important;
    line-height: 22px;
    border-radius: 8px;
    background: var(--color-system-gray-gray-23) !important;
  }
  .ant-select-multiple input {
    padding: 0px 0px !important;
  }
  .ant-select-multiple .ant-select-selection-item-remove > .anticon svg {
    color: var(--color-system-gray-gray-13);
  }
  .ant-select-multiple .ant-select-selection-search{
    margin-left:0px;
  }
  &.showSearch .ant-select-selector::before{
    content: url(${SearchIcon});
    display: flex;
    align-items: center;
    padding-right:var(--spacing-2);
   }
   &.showSearch .ant-select-selection-search-input{
    padding-left:var(--spacing-4) !important;
   }

   .errorClass{
    border-color:red;
    color:red !important;
  }

  .errorClass:hover{
    border-color:red !important;

  }
  .errormsg {
    color: red;
    font-family: Poppins;
  }
`;
export const CustomInput = styled(Select)<{ error: any }>`
  .ant-select-selector {
    border-radius: 8px !important;
    margin-bottom: 0px;
    border-color: ${(props: any) => props.error ? 'var(--color-system-red-red-5) !important' : ' var(--color-system-gray-gray-16) !important'};
  }
  .ant-select-arrow {
    top: 43%;
    margin-top: 0px;
    font-size: 10px;
    color: var(--color-system-gray-gray-13);
    right: 20px;
  }
  input {
    padding: 12px 0px !important;
    height: auto !important;
  }
  .ant-select-multiple .ant-select-selection-search-input {
    width: 100%;
    padding: 0px 0px !important;
    min-width: 100%;
  }

  .anticon.anticon-down {
    background: url(${DropdownIcon}) no-repeat;
    display: block;
    width: 14px;
    height: 10px;
  }
  .anticon.anticon-down svg {
    display: none;
  }
  .ant-select-selector {
    width: 100%;
    height: auto !important;
    padding: 7px 12px !important;
    line-height: 22px;
  }

  .ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 44px;
  }
  .ant-select-selection-placeholder {
    color: var(--color-system-gray-gray-18);
    font-weight: 400;
  }

 
`;
