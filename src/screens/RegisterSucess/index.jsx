import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Forms/Button";
import { Card } from "../../components/Forms/Card";
import { FormsField } from "../../components/Forms/FormsField";
import { Text } from "../../components/Texts/Text";

export const CreateSucess = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Card>
        <FormsField variant="sucess">
          <img
            style={{ width: "5rem", height: "5rem", margin: "auto" }}
            src="/assets/registerSucess.svg"
            alt="Ícone de cadastro realizado com sucesso"
          />
          <Text variant="large" bold="bold">
            Cadastro realizado com sucesso!
          </Text>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              textDecoration: "none",
              color: "#474747",
              gap: "0.2rem",
            }}
            to="/cadastrar/cliente/novo"
          >
            Adicionar mais <img src="/assets/arrowSucess.svg" alt="" />
          </Link>
          <Text variant="xSmall">ou</Text>
          <Button variant="secondary" onClick={handleNavigate}>
            Dashboard
          </Button>
        </FormsField>
      </Card>
    </>
  );
};

export const UpdateSucess = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Card>
        <FormsField variant="sucess">
          <img
            style={{ width: "5rem", height: "5rem", margin: "auto" }}
            src="/assets/registerSucess.svg"
            alt="Ícone de cadastro realizado com sucesso"
          />
          <Text variant="large" bold="bold">
            Cadastro atualizado com sucesso!
          </Text>
          <Button variant="secondary" onClick={handleNavigate}>
            Dashboard
          </Button>
        </FormsField>
      </Card>
    </>
  );
};
