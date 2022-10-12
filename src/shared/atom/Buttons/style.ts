import styled from "styled-components";
import { Button } from "antd";
import "../../constant/color/Color.css";

export const PrimaryBtn = styled(Button)`

  background-color: var(--color-system-purple-purple-6);
  background: var(--color-system-purple-purple-6);
  border-color: var(--color-system-purple-purple-6);
  height: auto;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
  border-radius: 8px!important;
  letter-spacing: 0px;
  color: var(--color-system-gray-gray-1);
  font-family: Poppins;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    border: 0px;
    background-color: var(--color-system-gray-gray-6) !important;;
    color: var(--color-system-gray-gray-4) !important;;
    cursor: default;
    &:hover {
      background: var(--color-system-gray-gray-14) !important;
      border-color: var(--color-system-gray-gray-5) !important;
    }
  }

  &:hover {
    background: var(--color-system-purple-purple-3) !important;
    border-color: var(--color-system-purple-purple-3) !important;
  }

  &:focus {
    background: var(--color-system-purple-purple-3) !important;
    border-color: var(--color-system-purple-purple-3) !important;
  }
`;

export const SecondaryBtn = styled(Button)`

  background-color: var(--color-system-gray-gray-1);
  background: var(--color-system-gray-gray-1);
  border-color: var(--color-system-purple-purple-6);
  height: auto;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
  border-radius: 8px !important;
  letter-spacing: 0px;
  color: var(--color-system-purple-purple-6);
  font-family: Poppins;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    background: var(--color-system-gray-gray-14) !important;
    color: var(--color-system-gray-gray-15) !important;
    cursor: default;
    &:hover {
      background: transparent !important;
      border-color: var(--color-system-gray-gray-5) !important;
    }
  }

  &:hover {
    background: var(--color-system-gray-gray-14) !important;
    border-color: var(--color-system-purple-purple-3) !important;
    color: var(--color-system-purple-purple-3);
  }

  &:focus {
    background: var(--color-system-gray-gray-14) !important;
    border-color: var(--color-system-purple-purple-3) !important;
    color: var(--color-system-purple-purple-3);
  }
`;

export const TertiaryBtn = styled(Button)`

  background-color: var(--color-system-purple-purple-1);
  background: var(--color-system-purple-purple-1);
  border: none;
  height: auto;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
  border-radius: 8px!important;
  letter-spacing: 0px;
  color: var(--color-system-purple-purple-6);
  font-family: Poppins;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    background: var(--color-system-gray-gray-14) !important;
    color: var(--color-system-gray-gray-15) !important;
    cursor: default;
    &:hover {
      background: var(--color-system-gray-gray-14) !important;
    }
  }

  &:hover {
    background: var(--color-system-purple-purple-2) !important;
    color: var(--color-system-purple-purple-4);
  }

  &:focus {
    background: var(--color-system-purple-purple-3) !important;
    color: var(--color-system-purple-purple-6);
  }
`;

export const GhostBtn = styled(Button)`

  background-color: transpernt;
  background: transpernt;
  border: none;
  border-radius: 0px;
  height: auto;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
  border-radius: 8px!important;
  letter-spacing: 0px;
  color: var(--color-system-purple-purple-7);
  font-family: Poppins;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    background: var(--color-system-gray-gray-14) !important;
    color: var(--color-system-gray-gray-15) !important;
    cursor: default;
    &:hover {
      background: var(--color-system-gray-gray-14) !important;
    }
  }

 
`;
