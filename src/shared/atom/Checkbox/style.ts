import styled from "styled-components";
import { Checkbox } from "antd";
import '@constant/color/Color.css';

export const CheckboxContainer = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--color-system-purple-purple-6);
    border-color: var(--color-system-purple-purple-6);
  }

  .ant-checkbox-checked::after {
    border-color: var(--color-system-purple-purple-6);
  }

  .ant-checkbox-inner {
    &:hover {
      border: 1px solid var(--color-system-purple-purple-6); !important;
    }
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border: 1px solid var(--color-system-purple-purple-6);
  }
`;
