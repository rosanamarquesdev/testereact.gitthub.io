import * as L from "../../Login/style";

import { Link } from "react-router-dom";
import Success from "/assets/registerSucess.svg";
import { Button } from "../../Forms/Button";
import { Card } from "../../Forms/Card";
import { Form } from "../../Forms/Form";
import { Text } from "../../Texts/Text";

export const StepCard = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <L._ContentWrapper>
      <Card variant="form-container-login" padding=" 9.5rem 4.5rem">
        <Form variant="secondary" onSubmit={handleSubmit}>
          <img
            src={Success}
            alt="Sucesso"
            style={{
              display: "block",
              margin: "0 auto",
              width: "100px",
              height: "100px",
            }}
          />

          <L._DivWrapper>
            <Text
              variant="large"
              bold="bold"
              style={{ marginBottom: "1.5rem" }}
            >
              Senha modificada com sucesso!
            </Text>
          </L._DivWrapper>

          <L._DivWrapper $margin="1.4rem 0 0 0">
            <Button height="4.8rem" type="submit">
              <Link to="/" style={{ color: "#FFFFFF" }}>
                Fazer Login
              </Link>
            </Button>
          </L._DivWrapper>
        </Form>
      </Card>
    </L._ContentWrapper>
  );
};
