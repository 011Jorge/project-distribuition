import ImgLogin from "../../assets/imgLogin.jpg";

import { ContainerLogin, ContainerImage, ContainerInfo } from "./style";

function Login() {
  return (
    <ContainerLogin>
      <ContainerImage>
        <img src={ImgLogin} alt="image-login" />
      </ContainerImage>
      <ContainerInfo>
        <h1>Login</h1>
        <input type="text" placeholder="Email" />
        <input
          type="password"
          name="inputPassword"
          id="inputPassword"
          placeholder="Senha"
        />
        <a href="#">Esqueci minha senha</a>
        <button>Entrar</button>
      </ContainerInfo>
    </ContainerLogin>
  );
}

export default Login;
