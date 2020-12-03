import styled from "styled-components";
import {  primaryFont} from "../../utils";
import { typeScale } from "../../utils";

import { applyStyleModifiers } from "styled-components-modifiers";
// to modify buttons as large small medium sucess danger etc...

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({theme}) => `
    background: none;
    color: ${theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({theme}) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonWarning: ({theme}) => `
    border: 2px solid ${theme.status.warningColor};
  `,
  error: ({theme}) => `
    background: none;
    color: ${theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${theme.status.errorColorHover};
      outline: 3px solid ${theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({theme}) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonError: ({theme}) => `
    border: 2px solid ${theme.status.errorColor};
  `,
  success: ({theme}) => `
    background: none;
    color: ${theme.status.successColor};
    &:hover, &:focus {
      background-color: ${theme.status.successColorHover};
      outline: 3px solid ${theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({theme}) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({theme}) => `
    border: 2px solid ${theme.status.successColor};
  `
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family:${primaryFont};

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

 
`;

// overriding base button styles in specifc button styles
export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  border: 2px solid transparent;
  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};  
    cursor:not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}  
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};
  background: none;
  &:disabled {
    background:none;
    border: 2px solid ${props => props.theme.disabled};
    color: ${props => props.theme.disabled};
    cursor:not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};  
  background:none;

  &:disabled {
    background:none;
    color: ${props => props.theme.disabled};
    cursor:not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;