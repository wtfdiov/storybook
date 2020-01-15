import styled, { css } from "styled-components";
import colors from "../../../constants/colors";
import { getBackgroundColor, getTextColor } from "../../../utils/styleguide";

export const StyledButton = styled.button`
  text-align: center;
  border-radius: 4px;
  font-family: "Graphik-Regular";
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  user-select: none;
  border: none;
  &:disabled {
    cursor: not-allowed;
  }
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          font-size: 16px;
          height: 44px;
          padding: 14px 32px;
        `;
      default:
        return css`
          font-size: 16px;
          height: 44px;
          padding: 14px 16px;
        `;
    }
  }}
  ${({ type }) => {
    switch (type) {
      case "primary":
        return css`
          color: ${getTextColor("primary")};
          background-color: ${getBackgroundColor("primary")};
          &:hover {
            background-color: ${getBackgroundColor("primary", true)};
          }
        `;
      case "success":
        return css`
          color: ${getTextColor("success")};
          background-color: ${getBackgroundColor("success")};
          &:hover {
            background-color: ${getBackgroundColor("success", true)};
          }
        `;
      default:
        return css`
          color: ${colors.defaultBlack};
          background-color: transparent;
          &:hover {
            color: ${colors.primary};
          }
          &:disabled {
            color: ${colors.grey400};
          }
        `;
    }
  }}
`;
