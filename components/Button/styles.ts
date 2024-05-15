import styled, { css } from 'styled-components';
import { IButtonPropsStyle } from './types';


export const ButtonContainer = styled.button<IButtonPropsStyle>`
    width: 100%;
    height: 42px;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    ${({disabled}) => disabled === false && css`
        cursor: not-allowed;
        pointer-events: none;
        color: #c0c0c0;
        background-color: #ffffff;
        border: 1px solid #c0c0c0;
    `}

    ${({disabled}) => disabled === true && css`
        background-color: #81259D;
        color: #FFF;
        border: 1px solid #81259D;
    `}

`