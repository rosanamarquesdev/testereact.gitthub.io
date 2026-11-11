import React from "react";
import * as L from "../../Login/style";

import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useResetPassword } from "../../../hooks/useResetPassword";
import { Button } from "../../Forms/Button";
import { Card } from "../../Forms/Card";
import { Form } from "../../Forms/Form";
import { Input } from "../../Forms/Inputs/Input";
import { Text } from "../../Texts/Text";

export const StepCode = () => {
  const [field, setField] = React.useState({
    code: "",
  });
  const { postCode } = useResetPassword();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!field.code) {
      toast.error("Preencha os dados corretamente", {
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

    await postCode(field);
  }

  return (
    <L._ContentWrapper>
      <Card variant="form-container-login">
        <Form variant="secondary" onSubmit={handleSubmit}>
          <L._DivWrapper>
            <Text
              variant="large"
              bold="bold"
              style={{ marginBottom: "1.5rem" }}
            >
              Digite aqui seu código.
            </Text>

            <Input
              variant="secondary"
              placeholder="Digite seu Código"
              type="number"
              name="code"
              value={field.code}
              onChange={({ target }) =>
                setField({
                  ...field,
                  [target.name]: target.value,
                })
              }
            >
              Código
            </Input>
          </L._DivWrapper>

          <L._DivWrapper $margin="1.4rem 0 0 0">
            <Button height="4.8rem" type="submit">
              Enviar
            </Button>

            <Text variant="x-small" color="#5B5B5B">
              Não recebeu o código? <span>Enviar novamente</span>
            </Text>

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
