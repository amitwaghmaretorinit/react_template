import React, { FC, useState } from "react";
import { Flex } from "@atom/Flex";
import {
  CustomInput,
  InputFormWrapper,
  InputFormWrapperForMultiCheckBox,
} from "./style";
import { TreeSelect } from "antd";
import { DropdownIcon } from "@assets/index";
import { SearchOutlined } from "@ant-design/icons";
import Error from "@atom/Error";

const { SHOW_PARENT } = TreeSelect;

const { Option } = CustomInput;
export interface SelectProps {
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  onSearch?: any;
  options?: any;
  children?: any;
  name?: any;
  id?: string;
  value?: any;
  error?: any;
  placeholdertitle?: any;
  defaultValue?: any;
  mode?: "multiple" | "tags" | undefined;
  allowClear?: boolean;
  onKeyUp?: any;
  className?: any;
  maxTagTextLength?:number;
  showArrow?:boolean;
  style?:React.CSSProperties;
}

const SelectInput: FC<SelectProps> = ({
  onChange,
  onFocus,
  onBlur,
  onSearch,
  options,
  children,
  name,
  error,
  value,
  id,
  placeholdertitle,
  defaultValue,
  mode,
  allowClear,
  onKeyUp,
  className,
  showArrow,
  style
}) => {
  return (
    <InputFormWrapper style={style} className={className}>
      <CustomInput
        mode={mode}
        showSearch={true}
        id={id}
        showArrow={showArrow}
        style={{ width: "100%" }}
        placeholder={placeholdertitle}
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        options={options}
        value={value}
        allowClear={allowClear}
        error={error}
        //className={`${className} ${error?'errorClass':''}`}
        getPopupContainer={trigger => trigger.parentElement}
      >
        {children}
      </CustomInput>

      <span className="errormsg" style={{ color: "red" }}>
        {error ? <Error error={error} /> : ""}
      </span>
    </InputFormWrapper>
  );
};

export const SelectInputWithCheckBox: FC<SelectProps> = ({
  onChange,
  onFocus,
  onBlur,
  onSearch,
  options,
  children,
  name,
  error,
  value,
  id,
  placeholdertitle,
  defaultValue,
  mode,
  allowClear,
  onKeyUp,
  className,
  maxTagTextLength,
}) => {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <InputFormWrapperForMultiCheckBox  error={error}>
      <TreeSelect
        id={id}
        value={value}
        defaultValue={defaultValue}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        getPopupContainer={trigger => trigger.parentElement}
        onChange={onChange}
        onFocus={() => {
          setToggleIcon(!toggleIcon);
        }}
        onBlur={(e: any) => {
          setToggleIcon(false);
          onBlur(e);
        }}
        showCheckedStrategy={SHOW_PARENT}
        placeholder={placeholdertitle}
        treeData={options}
        treeCheckable={true}
        multiple
        treeDefaultExpandAll
        showArrow={true}
        treeNodeFilterProp="title"
        showSearch={true}
       
        allowClear={allowClear}
        //className={`${className} ${error?'errorClass':''}`}
        suffixIcon={() =>
          toggleIcon ? <SearchOutlined /> : <img alt="" src={DropdownIcon} />
        }
        style={{ width: "100%" }}
      />
      <span className="errormsg" style={{ color: "red" }}>
        {error ? <Error error={error} /> : ""}
      </span>
    </InputFormWrapperForMultiCheckBox>
  );
};

export default SelectInput;
