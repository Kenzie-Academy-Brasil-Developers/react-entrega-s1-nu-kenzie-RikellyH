import styled from "styled-components";

export const Container = styled.header`
  > div {
    width: 100%;
    max-width: 1500px;
    padding: 10px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  }

  .logo2 {
    display: block;
  }

  button {
    width: 4rem;
    height: 2.5rem;

    font-family: "Nunito";
    font-weight: 600;
    font-size: 0.875rem;

    border-radius: 8px;
    background-color: var(--tom-de-cinza-3);
    border: 1.4px solid var(--tom-de-cinza-3);
  }

  @media (min-width: 767px) {
    > div {
      padding: 1.5rem 4.5rem;
    }
  }
`;
