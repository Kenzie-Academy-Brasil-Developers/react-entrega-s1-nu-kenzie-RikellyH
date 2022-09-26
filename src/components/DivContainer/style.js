import styled from "styled-components";

export const Container = styled.div`
  max-height: 627px;
  max-width: 560px;
  padding: 0px 5px;

  height: 100%;
  width: 100%;

  .div__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .div__header span {
    color: var(--tom-de-cinza);
    font-weight: 700;
  }

  .button__container {
    display: flex;
    gap: 0.5rem;
  }

  .button__container > button {
    max-width: 4.313rem;
    width: 100%;
    height: 2.5rem;

    color: var(--branco);
    font-weight: 600;
    font-size: 0.75rem;

    border-radius: 8px;
    border: 1.4px solid var(--cor-primaria);
  }

  .div__body {
    margin-top: 27px;
  }

  .div__body h2 {
    font-weight: 700;
    font-size: 0.875rem;
    color: var(--tom-de-cinza-5);
  }

  .financa {
    background-color: var(--tom-de-cinza-4);
    margin-bottom: 32px;
    border-radius: 4px;
    padding: 0px 13px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .financa__info {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 0.125rem;
  }

  .financa__info h3 {
    font-weight: 700;
  }

  .financa p {
    font-size: 0.75rem;
  }

  .financa__info p {
    color: var(--tom-de-cinza-5);
  }

  .deletar__icone {
    background-color: var(--icone-background);
    color: var(--icone-color);
    padding: 7px;
    border-radius: 4px;
    font-size: 0.925rem;

    cursor: pointer;
    transition: color 0.2s;
  }

  .deletar__icone:hover {
    color: var(--icone-hover);
    filter: brightness(0.9);
  }

  @media (min-width: 767px) {
    .div__body h2 {
      font-size: 1.375rem;
    }
  }
`;
