import { FaUserAlt, FaArrowRight } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

import {
  ContainerLogin,
  ContainerForm,
  ContainerImageForm,
  ContainerInfoForm,
} from "./style";

import Image from "../../assets/imgLogin.jpg";

function Register() {
  return (
    <ContainerLogin>
      <ContainerForm>
        <ContainerImageForm>
          <img src={Image} alt="image-login" />
        </ContainerImageForm>
        <ContainerInfoForm>
          <form>
            <h1>Cadastre-se</h1>
            <label>
              <FaUserAlt style={{ marginRight: 10 }} />
              Nome
            </label>
            <input type="text" placeholder="Digite seu nome..." />
            <label>
              <FaUserAlt style={{ marginRight: 10 }} />
              Email
            </label>
            <input type="email" placeholder="Digite seu email..." />
            <label>
              <GiPadlock style={{ marginRight: 10 }} />
              Senha
            </label>
            <input type="password" placeholder="Crie sua senha..." />

            <button style={{ marginTop: 75, marginBottom: 25 }}>
              Cadastrar <FaArrowRight style={{ margin: 10 }} />
            </button>

            <a href="#">
              Já tenho uma conta! <br /> Entrar agora mesmo
            </a>
          </form>
        </ContainerInfoForm>
      </ContainerForm>
    </ContainerLogin>
  );
}

export default Register;
