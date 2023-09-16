import { styled } from "styled-components";

export const ContainerNavbar = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-end;

  padding-bottom: 20px;

  background-color: purple;
`;

export const NavbarLinks = styled.div`
  margin-right: 30px;

  a {
    display: inline-flex;
    align-items: center;

    padding: 30px !important;

    font-size: 20px;

    position: relative;
    text-decoration: none;

    color: #fff;

    //Iphone12
    @media (max-width: 400px) {
      font-size: 18px;
    }

    &:active {
      opacity: 0.5;
    }

    .icon {
      margin-bottom: 5px;
    }
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #89c43a;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;
