import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 363px;
  height: 351px;

  font-family: "Inter", sans-serif;
  color: var(--tom-de-cinza);
  border: 1px solid var(--tom-de-cinza-3);
  border-radius: 4px;

  input,
  span {
    color: var(--tom-de-cinza-2);
  }

  .input__Descrição {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.275rem;
  }

  .input__Descrição > input {
    max-width: 19.625rem;
    margin-top: 7.5px;
    width: 85vw;
    height: 3rem;
  }

  label,
  span,
  select {
    font-size: 0.75rem;
  }

  .divForm {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 38px;
  }

  .transações {
    margin-bottom: 19px;
    margin-top: 17.7px;

    display: flex;
    align-items: center;
    gap: 5px;

    width: 100%;
    max-width: 19.625rem;
  }

  .transações > div {
    flex-direction: column;
    position: relative;
    display: flex;
    gap: 9px;
  }

  .transações > div:first-child {
    padding-right: 18px;
  }

  .valor__Select {
    padding-left: 18px;
  }

  .transações .valor__Input {
    max-width: 128px;
    width: 90%;
    height: 2.75rem;
    padding: 0px 30px 0px 8px;
  }

  abbr {
    left: 6.3rem;
    bottom: 1.2rem;
    position: absolute;
    color: var(--tom-de-cinza-5);
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .transações > div > input,
  select {
    width: 46.875vw;
    height: 3rem;
    max-width: 150px;
  }

  button {
    background-color: var(--cor-primaria);
    border: 2px solid var(--cor-primaria);
    color: var(--branco);

    border-radius: 8px;
    font-weight: 500;

    width: 100%;
    height: 3rem;
    max-width: 19.625rem;
  }

  input,
  select {
    background-color: var(--tom-de-cinza-4);
    border: 2px solid var(--tom-de-cinza-4);
    border-radius: 8px;
  }
`;
