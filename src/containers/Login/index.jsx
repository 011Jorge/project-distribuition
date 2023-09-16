import { FaUserAlt, FaArrowRight } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

import {
  ContainerLogin,
  ContainerForm,
  ContainerImageForm,
  ContainerInfoForm,
} from "./style";

import Image from "../../assets/imgLogin.jpg";

function Login() {
  return (
    <ContainerLogin>
      <ContainerForm>
        <ContainerImageForm>
          <img src={Image} alt="image-login" />
        </ContainerImageForm>
        <ContainerInfoForm>
          <form>
            <h1>Login</h1>
            <label>
              <FaUserAlt style={{ marginRight: 10 }} />
              Email
            </label>

            <input type="email" placeholder="Digite seu email..." />
            <label>
              <GiPadlock style={{ marginRight: 10 }} />
              Senha
            </label>
            <input type="password" placeholder="Digite sua senha..." />
            <a href="#" id="link-password">
              Esqueci minha senha!
            </a>
            <button style={{ marginTop: 75, marginBottom: 25 }}>
              Sign In <FaArrowRight style={{ margin: 10 }} />
            </button>

            <a href="#">
              Ainda não possui uma conta? <br /> Crie uma agora mesmo!
            </a>
          </form>
        </ContainerInfoForm>
      </ContainerForm>
    </ContainerLogin>
  );
}

export default Login;
