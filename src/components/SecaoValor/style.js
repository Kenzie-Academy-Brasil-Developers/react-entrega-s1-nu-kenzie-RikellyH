import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 96px;
  max-width: 363px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin: 16px 0px;
  border-radius: 4px;
  border: 1px solid var(--tom-de-cinza-3);

  h2 {
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--tom-de-cinza-5);
  }

  span {
    color: var(--cor-primaria);
    font-weight: 700;
  }

  .dinheiro__gif {
    display: block;
  }
`;
