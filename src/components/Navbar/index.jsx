import { FaHeartbeat, FaUserAlt } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { ContainerNavbar, NavbarLinks } from "./styles";

function Navbar() {
  return (
    <ContainerNavbar>
      <NavbarLinks>
        <a href="#">
          <FaHeartbeat style={{ margin: 10 }} />
          Quem somos?
        </a>
        <a href="#">
          <BsFillChatLeftDotsFill style={{ margin: 10 }} />
          Chat online
        </a>
        <a href="#">
          <FaUserAlt style={{ margin: 10 }} />
          Meu perfil
        </a>
      </NavbarLinks>
    </ContainerNavbar>
  );
}

export default Navbar;
