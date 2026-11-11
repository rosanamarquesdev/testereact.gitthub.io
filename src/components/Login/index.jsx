import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as S from "./style";

import { Button } from "../../components/Forms/Button";
import { Card } from "../../components/Forms/Card";
import { Input } from "../../components/Forms/Inputs/Input";
import { Text } from "../../components/Texts/Text";
import { useForm } from "../../hooks/useForm";
import { Form } from "../Forms/Form";

export const Login = () => {
  const [form, setForm] = React.useState({ cnpj: "", password: "" });
  const { mask } = useForm();
  const navigate = useNavigate();
  const { isAuth, singIn } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (isAuth) {
      navigate("/*");
    }
  }, [isAuth, navigate]);

  function handleChanges(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: mask(name, value) }));
  }

  function handleLogin(e) {
    e.preventDefault();
    if (!isAuth) {
      singIn(form);
    }
  }

  // React.useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (token) {
  //     navigate("/home");
  //   }
  // }, [navigate]);

  return (
    <>
      <S._ContentWrapper>
        <Card variant="form-container-login">
          <Form variant="secondary" onSubmit={handleLogin}>
            <S._DivWrapper>
              {/* <FormsField $variant="file"> */}

              <Input
                style={{
                  fontSize: "1.4rem",
                  letterSpacing: "0px",
                }}
                variant="secondary"
                placeholder="CNPJ"
                type="text"
                name={"cnpj"}
                value={form.cnpj}
                onChange={handleChanges}
              >
                CNPJ
              </Input>
              <Input
                variant="secondary"
                placeholder="Senha"
                type="password"
                name={"password"}
                value={form.password}
                style={{
                  fontSize: "1.4rem",
                  letterSpacing: "0px",
                }}
                onChange={handleChanges}
              >
                Senha
              </Input>
              {/* </FormsField> */}
            </S._DivWrapper>

            <S._DivWrapper $margin="1.4rem 0 0 0">
              {/* Me diga a diferença de 14 pixeis para 16 bea, me diga a difrença */}
              <Button height="4.8rem" type="submit">
                Entrar
              </Button>

              <Text
                variant="x-small"
                color="#5B5B5B"
                style={{
                  fontSize: "14px",
                  letterSpacing: "0px",
                }}
              >
                Esqueceu a senha?{" "}
                <Link to="/resetar/senha/email">Recuperar</Link>
              </Text>
            </S._DivWrapper>
          </Form>
        </Card>
      </S._ContentWrapper>
    </>
  );
};
