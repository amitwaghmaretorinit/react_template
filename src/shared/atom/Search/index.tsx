import React from "react";
import { FormInput, SearchbarWrapper, SearchbarWrapperOutline } from "./style";

interface SearchFieldProps {
  type?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  onChange?: any;
  style?:any
  onEnter?:any
  value?:any,
  defaultValue?:any
}

export const SearchBar = (props: SearchFieldProps): JSX.Element => {
  const { type, id, className, placeholder, onChange } = props;
  return (
    <SearchbarWrapper className={className}>
      <FormInput
        placeholder={placeholder}
        type={type}
        id={id}
        className={className}
        onChange={onChange}
      />
    </SearchbarWrapper>
  );
};

export const SearchBarOuline = (props: SearchFieldProps): JSX.Element => {
  const { type, id, className, placeholder, onChange,style,onEnter,value,defaultValue } = props;
  return (
    <SearchbarWrapperOutline style={style}>
      <FormInput
        placeholder={placeholder}
        type={type}
        onPressEnter={onEnter}
        id={id}
        className={className}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
      />
    </SearchbarWrapperOutline>
  );
};
