import { styled } from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #c62368;
`;

export const ContainerImage = styled.div`
  width: 700px;
  height: 900px;
  background: #fafafa;
  border-radius: 30px 0 0 30px;

  img {
    width: 700px;
    height: 900px;

    border-radius: 30px 0 0 30px;
  }
`;

export const ContainerInfo = styled.div`
  width: 700px;
  height: 900px;

  background: #fafafa;

  h1 {
    text-align: center;
    font-size: 45px;
  }

  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    width: 500px;
    height: 50px;
    border-radius: 10px;
    border: none;
  }
`;
