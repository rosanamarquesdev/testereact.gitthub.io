import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import DropDown from "/assets/arrow.svg";
import Cart from "/assets/cart.svg";
import Client from "/assets/client.svg";
import Dashboard from "/assets/dashboard.svg";
import Register from "/assets/register.svg";
import Service from "/assets/services.svg";
import Exit from "/assets/log-out.svg"
import { NavItem } from "./NavItem";
import {
  OptionContainer,
  OptionText,
  Options,
  SubOptions,
} from "./NavItem/style";
import { StyledNavbar } from "./style";


const navItems = [
  {
    id: "Dashboard",
    img: Dashboard,
    span: "Dashboard",
    route: "/dashboard",
    options: [],
  },
  {
    id: "Cadastro",
    img: Register,
    span: "Cadastro",
    arrowImg: DropDown,
    options: [
      {
        id: "Cliente",
        img: Client,
        label: "Cliente",
        route: "/cadastrar/cliente",
      },
      {
        id: "Fornecedor",
        img: Service,
        label: "Fornecedor",
        subOptions: [
          {
            id: "Pessoa Física",
            img: Client,
            label: "Pessoa Física",
            route: "/cadastrar/fornecedor/pessoa/fisica",
          },
          {
            id: "Pessoa Jurídica",
            img: Client,
            label: "Pessoa Jurídica",
            route: "/cadastrar/fornecedor/pessoa/juridica",
          },
        ],
      },
      {
        id: "Produtos",
        img: Cart,
        label: "Produtos",
        route: "/cadastrar/produtos",
      },
    ],
  },
  {
    id: "Serviço",
    img: Service,
    span: "Serviço",
    arrowImg: DropDown,
    options: [
      {
        id: "Venda",
        img: Cart,
        label: "Venda",
        route: "/servico/venda",
      },
      {
        id: "Alocação",
        img: Cart,
        label: "Alocação",
        route: "/servico/alocacao",
      },
    ],
  },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const { signOut } = useContext(AuthContext)


  const [navState, setNavState] = useState({
    ativo: "", // Controla o item principal ativo
    optionAtivo: "", // Controla a sub-opção ativa
  });

  const openItem = (item) => {
    setNavState((prev) => ({
      ativo: prev.ativo === item ? "" : item,
      optionAtivo: "", // Vai resetar sub-opções ao abrir outro item
    }));
  };

  const openOption = (option) => {
    setNavState((prev) => ({
      ...prev,
      optionAtivo: prev.optionAtivo === option ? "" : option,
    }));
  };

  const handleNavigation = (route) => {
    if (route) navigate(route);
  };

  return (
    <StyledNavbar>
      {navItems.map((item) => (
        <OptionContainer key={item.id}>
          {/* NavItem são os itens principais do sidebar */}
          <NavItem
            img={item.img}
            span={item.span}
            ativo={navState.ativo === item.id}
            onClick={() => {
              openItem(item.id);
              handleNavigation(item.route);
            }}
            arrowImg={item.arrowImg}
          />

          {/* Vai renderizar caso o item pricipal tenha opções */}
          {navState.ativo === item.id && item.options.length > 0 && (
            <Options>
              {item.options.map((option) => (
                <OptionContainer key={option.id}>
                  <OptionText
                    onClick={() => {
                      openOption(option.id);
                      handleNavigation(option.route);
                    }}
                    $ativo={navState.optionAtivo === option.id}
                  >
                    <img
                      src={option.img}
                      alt={`Ícone representando a aba ${option.label}`}
                    />
                    {option.label}
                  </OptionText>
                  {/* Vai renderizar caso as opções possuam sub-opções */}
                  {navState.optionAtivo === option.id && option.subOptions && (
                    <SubOptions>
                      {option.subOptions.map((subOption) => (
                        <OptionText
                          key={subOption.id}
                          onClick={() => handleNavigation(subOption.route)}
                        >
                          <img
                            src={subOption.img}
                            alt={`Ícone representando a aba ${subOption.label}`}
                          />
                          {subOption.label}
                        </OptionText>
                      ))}
                    </SubOptions>
                  )}
                </OptionContainer>
              ))}
            </Options>
          )}
        </OptionContainer>
      ))}
                  <NavItem
              img={Exit}
              span="Sair"
              onClick={signOut}
            />
    </StyledNavbar>
  );
};
