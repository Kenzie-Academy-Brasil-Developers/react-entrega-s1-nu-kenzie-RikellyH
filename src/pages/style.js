import styled from "styled-components";

export const MainContainer = styled.main`
  /* min-height: 100vh; */
  margin: 40px auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
    background-color: var(--cor-primaria);
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .div__aux {
    width: 90%;
    max-width: 363px;
  }

  @media (min-width: 767px) {
    section {
      width: 100%;
      gap: 3.688rem;
      flex-wrap: nowrap;
    }

    .gpbMUP .button__container {
      gap: 1rem;
    }

    .gpbMUP .button__container > button {
      font-size: 0.875rem;
      max-width: 5rem;
    }
  }
`;
