import Cookies from "js-cookie";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { api } from "../services/instance";

export function useResetPassword() {
  const navigate = useNavigate();

  const postEmail = async (email) => {
    try {
      toast.info("Enviando dados", {
        toastId: "email",
      });
      console.log(email);

      const response = await api.post("/adm/recuperar/email", email);

      if (response.status === 200) {
        toast.update("email", {
          render: "E-mail enviado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });

        Cookies.set("tokenRecieve", response.data, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });

        setTimeout(() => {
          navigate("/resetar/senha/codigo");
        }, 1000);
        return response.data;
      }

      toast.update("email", {
        render: "Erro inesperado",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.error("Erro do servidor:", status, data);

        if (status === 400) {
          console.log("Erro de validação. Verifique os dados enviados.");
          toast.update("email", {
            render: "Dados incorretos",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
          return error;
        }

        if (status === 404) {
          console.log("Endpoint não encontrado (404). Verifique a URL.");
        }

        if (status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
        }

        toast.update("email", {
          render: "Erro inesperado, entre em contato com o suporte!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return error;
      }

      if (error.request) {
        console.error("Sem resposta do servidor:", error.request);

        toast.update("email", {
          render: "Erro inesperado, entre em contato com o suporte!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return error;
      }
    }
  };

  const postCode = async (code) => {
    try {
      toast.info("Enviando dados", {
        toastId: "code",
      });

      const token = Cookies.get("tokenRecieve");

      const response = await api.post("/adm/recuperar/code", code, {
        headers: {
          Recieve: token,
        },
      });

      if (response.status === 200) {
        toast.update("code", {
          render: "Código enviado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });

        setTimeout(() => {
          navigate("/resetar/senha/novasenha");
        }, 1000);
        return response.data;
      }

      toast.update("code", {
        render: "Erro inesperado",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.error("Erro do servidor:", status, data);

        if (status === 401) {
          console.log("Erro no código.");
          toast.update("code", {
            render: "Código inválido.",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
          return error;
        }

        if (status === 400) {
          console.log("Erro de validação. Verifique os dados enviados.");
          toast.update("code", {
            render: "Erro no envio do código, contate o suporte!",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
          return error;
        }

        if (status === 403) {
          toast.update("code", {
            render: "Código expirado.",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
          return error;
        }

        if (status === 404) {
          console.log("Endpoint não encontrado (404). Verifique a URL.");
        }

        if (status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
        }

        toast.update("code", {
          render: "Erro inesperado, entre em contato com o suporte!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return error;
      }

      if (error.request) {
        console.error("Sem resposta do servidor:", error.request);

        toast.update("code", {
          render: "Erro inesperado, entre em contato com o suporte!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return error;
      }
    }
  };

  const postPassword = async (password) => {
    try {
      toast.info("Enviando dados", {
        toastId: "password",
      });

      const token = Cookies.get("tokenRecieve");

      const response = await api.post("/adm/recuperar/senha", password, {
        headers: {
          Recieve: token,
        },
      });

      if (response.status === 201) {
        toast.update("password", {
          render: "Senha alterada com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });

        setTimeout(() => {
          navigate("/resetar/senha/sucesso");
        }, 1000);
        return response.data;
      }

      toast.update("password", {
        render: "Erro inesperado",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.error("Erro do servidor:", status, data);

        if (status === 400) {
          console.log("Erro de validação. Verifique os dados enviados.");
          toast.update("password", {
            render: "Dados incorretos",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
          return error;
        }

        if (status === 404) {
          console.log("Endpoint não encontrado (404). Verifique a URL.");
        }

        if (status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
        }

        toast.update("password", {
          render: "Erro inesperado, entre em contato com o suporte!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return error;
      }

      if (error.request) {
        console.error("Sem resposta do servidor:", error.request);

        toast.update("password", {
          render: "Erro inesperado, entre em contato com o suporte!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return error;
      }
    }
  };
  return {
    postEmail,
    postCode,
    postPassword,
  };
}
