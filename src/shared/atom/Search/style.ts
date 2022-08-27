import styled from "styled-components";
import { Input } from "antd";
import { SearchIcon } from "@assets/index";
import "@constant/color/Color.css";

export const FormInput = styled(Input)`
  font-size: 14px;
  font-family: Poppins;
  line-height: 12px;
  background: transparent;
  color: var(--color-system-gray-gray-17);
  font-weight: 500;
  border: none;
  padding-left: 0px;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: rgba(183, 183, 188, 1);
    font-weight: 400;
    font-size: 12px;
  }
`;
export const SearchbarWrapper = styled.div`
  font-size: 14px;
    font-family: Poppins;
    line-height: 12px;
    padding: 8px 18px 8px 16px;
    border: none;
    background: transparent;
    border-radius: 4px;
    color: var(--color-system-gray-gray-17);
    width: 350px;
    background: var(--color-system-gray-gray-1);
    align-items: center;
    display: flex;
    &.ViewBranchDetailSearch{
    padding: 2px 12px;
    border: 1px solid var(--color-system-gray-gray-16);
    border-radius: 8px;
    width: 320px;
    }
&::after{
  content:url(${SearchIcon}) }};
 
}
@media(max-width:1400px){
  width: auto;
}
`;
export const SearchbarWrapperOutline = styled.div`
height: 46px;
align-self: stretch;
flex-grow: 0;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 12px;
padding: 12px;
border-radius: 8px;
border: solid 1px var(--color-system-gray-gray-5);
background-color: var(--color-system-gray-gray-1);
&:hover{
   border: 1px solid var(--color-system-gray-gray-21);
}
&::before{
  content:url(${SearchIcon}) }};
  
}
`;
