import React from "react";
import * as L from "../../Login/style";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";
import { useResetPassword } from "../../../hooks/useResetPassword";
import { Button } from "../../Forms/Button";
import { Card } from "../../Forms/Card";
import { Form } from "../../Forms/Form";
import { Input } from "../../Forms/Inputs/Input";
import { Text } from "../../Texts/Text";

export const StepPassword = () => {
  const [pass1, setPass1] = React.useState({
    password: "",
  });
  const [newPass1, setNewPass1] = React.useState({
    newPassword: "",
  });

  const { postPassword } = useResetPassword();

  async function handleSubmit(e) {
    e.preventDefault();
    const regex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;

    if (pass1.password !== newPass1.newPassword) {
      toast.error("As senhas devem ser iguais", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return;
    }

    if (!regex.test(newPass1.newPassword)) {
      toast.error(
        "Senha inválida. A senha deve incluir ao menos uma letra maiúscula e um caractere especial",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );

      return;
    }

    await postPassword(newPass1);
    return;
  }

  return (
    <L._ContentWrapper>
      <Card variant="form-container-login" padding="6rem 8.5rem">
        <Form variant="secondary" onSubmit={handleSubmit}>
          <L._DivWrapper>
            <Text
              variant="large"
              bold="bold"
              style={{ marginBottom: "1.5rem" }}
            >
              Digite aqui sua senha.
            </Text>

            <Input
              variant="secondary"
              placeholder="Digite sua senha"
              id="password"
              type="password"
              value={pass1.password}
              onChange={({ target }) =>
                setPass1({
                  ...pass1,
                  [target.id]: target.value,
                })
              }
            >
              Sua senha
            </Input>

            <Input
              variant="secondary"
              placeholder="Repita sua senha"
              id="newPassword"
              type="password"
              value={newPass1.newPassword}
              onChange={({ target }) =>
                setNewPass1({
                  ...newPass1,
                  [target.id]: target.value,
                })
              }
            >
              Repita sua senha
            </Input>
          </L._DivWrapper>

          <L._DivWrapper $margin="1.4rem 0 0 0">
            <Button height="4.8rem" type="submit">
              Enviar
            </Button>

            <Text
              variant="medium"
              color="#5B5B5B"
              style={{ marginTop: "1rem" }}
            >
              <Link to="/" style={{ fontSize: "inherit" }}>
                voltar
              </Link>
            </Text>
          </L._DivWrapper>
        </Form>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        style={{
          fontSize: "2.5rem",
        }}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </L._ContentWrapper>
  );
};
