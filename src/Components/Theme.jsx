import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f0f0f0',
  text: '#333;',
  leftSection: '#f0f0f0',
  rightSection: '#f0f0f0',
};

export const darkTheme = {
  body: '#000',
  text: '#fff',
  leftSection: '#000',
  rightSection: '#000',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .left-section {
    background-color: ${({ theme }) => theme.leftSection};
  }

  .right-section {
    background-color: ${({ theme }) => theme.rightSection};
  }
  .left-panel__settings-icon{
    background-color: ${({ theme }) => theme.body};
  }
`;
