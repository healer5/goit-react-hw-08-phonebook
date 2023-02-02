// import styled from 'styled-components';

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// export const Input = styled.input`
//   width: 220px;
//   border-radius: 4px;
//   cursor: pointer;
//   height: 20px;
//   margin: 0 auto;
//   cursor: pointer;
//   :hover,
//   :focus {
//     outline: 1px solid #73372a;
//   }
// `;
import styled from 'styled-components';

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  opacity: 0.9;
  width: 400px;
  & p {
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const FilterInput = styled.input`
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  borders: ${p => p.theme.borders.normal};
  font-size: ${p => p.theme.fontSizes.m};
  align-items: center;
  &:hover {
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  }
`;
