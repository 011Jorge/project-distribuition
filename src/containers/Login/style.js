import { styled } from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #8b4869;
`;

export const ContainerForm = styled.div`
  width: 1500px;
  height: 700px;

  display: flex;

  background-color: #f4e9ed;

  border-radius: 30px;
`;

export const ContainerImageForm = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 700px;
    height: auto;

    border-radius: 30px 0 0 30px;
  }
`;

export const ContainerInfoForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 150px;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 28px;
    color: #000;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 14px;
    color: #000;
    margin-top: 28px;
    margin-bottom: 20px;
  }

  input {
    width: 400px;
    height: 60px;
    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    font-size: 17px;
  }

  button {
    font-size: 18px;
    height: 60px;
    border: none;
    border-radius: 10px;
    background-color: #8b4869;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover {
      opacity: 0.9;
    }
  }

  a {
    text-align: center;
    color: #8b4869;

    &:hover {
      color: blue;
    }
  }

  #link-password {
    text-align: left !important;
    margin-top: 20px;
  }
`;
