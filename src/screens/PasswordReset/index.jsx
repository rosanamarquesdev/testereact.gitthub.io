import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "/assets/logoafk.svg";
import { Header } from "../../components/Header";
import { LogoLogin } from "../../components/Logo";
import { StepCard } from "../../components/ResetPassword/StepCard";
import { StepCode } from "../../components/ResetPassword/StepCode";
import { StepEmail } from "../../components/ResetPassword/StepEmail";
import { StepPassword } from "../../components/ResetPassword/StepPassword";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PasswordReset = () => {
  const location = useLocation();

  let content;

  switch (location.pathname) {
    case "/resetar/senha/email":
      content = <StepEmail />;
      break;
    case "/resetar/senha/codigo":
      content = <StepCode />;
      break;
    case "/resetar/senha/novasenha":
      content = <StepPassword />;
      break;
    case "/resetar/senha/sucesso":
      content = <StepCard />;
      break;
  }

  return (
    <>
      <PageWrapper>
        <Header variant="login">
          <LogoLogin src={Logo} alt="Logo da empresa AFK" href="" />
        </Header>

        {content}
      </PageWrapper>
    </>
  );
};
