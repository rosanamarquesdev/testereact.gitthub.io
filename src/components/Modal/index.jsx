import React from "react";
import * as S from "./style";

// Externos
import { MdOutlineFilterList } from "react-icons/md";
import { Text } from "../Texts/Text";

export const Modal = ({
  variant = "filter-modal",
  setFetchStatus,
  filterModalItens,
  setSelectedItem,
  selectedItem,
}) => {
  const [isActive, setIsActive] = React.useState(false);
  const modal = React.useRef(null);

  // Função de clickOutside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (modal.current && !modal.current.contains(event.target)) {
        setIsActive(!isActive);
      }
    }

    if (isActive) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  const handleItemClick = (item) => {
    if (setSelectedItem) {
      setSelectedItem(item.value);
    }
    if (setFetchStatus) {
      // Responsável por fazer a requisição baseado no filtro colocado
      setFetchStatus(item.query);
    }
    if (setIsActive) {
      setIsActive(false);
    }
  };

  if (variant === "filter-modal")
    return (
      <S._Modal $variant={variant} ref={modal}>
        <MdOutlineFilterList onClick={() => setIsActive(!isActive)} />

        <S.ModalArea className={isActive ? "active" : ""}>
          {filterModalItens?.map((item) => (
            <S.ModalItens
              key={item.id}
              onClick={() => handleItemClick(item)}
              disabled={selectedItem === item.value}
              className={selectedItem === item.value ? "disabled" : ""}
            >
              {item.icon}
              <Text bold={"600"} variant="small">
                {" "}
                {item.text}
              </Text>
            </S.ModalItens>
          ))}
        </S.ModalArea>
      </S._Modal>
    );
};
