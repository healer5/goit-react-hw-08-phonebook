import styled from 'styled-components';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  opacity: 0.9;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  & p {
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const LabelLogin = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const InputLogin = styled.input`
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  borders: ${p => p.theme.borders.normal};
  font-size: ${p => p.theme.fontSizes.m};
  align-items: center;
  &:hover {
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonLogin = styled.button`
  width: ${p => p.theme.space[7]}px;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.background};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
`;