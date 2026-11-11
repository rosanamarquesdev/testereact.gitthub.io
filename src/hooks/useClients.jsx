import React from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/instance";
import { useAuth } from "./useAuth";

export function useClients() {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const postClient = async (json, formPhotos) => {
    try {
      // Verifique se as fotos e o JSON estão definidos
      if (!json || !formPhotos || formPhotos.length === 0) {
        throw new Error("Dados inválidos: JSON ou fotos não fornecidos.");
      }

      // Criação do FormData
      const formData = new FormData();

      // Adicionando as fotos ao FormData
      formPhotos.forEach((photo) => {
        formData.append("photos", photo);
      });

      // Adicionando o JSON ao FormData
      formData.append("json", JSON.stringify(json));

      // Enviando a requisição
      const response = await api.post("/clientes/registro", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Redirecionamento após sucesso
      navigate("/cadastrar/cliente/novo/sucesso");

      return response;
    } catch (error) {
      // Em caso de erro, loga uma mensagem mais clara
      console.error("Erro ao enviar os dados do cliente:", error);

      // Pode retornar o erro com uma mensagem mais amigável
      return {
        error: error.message || "Erro desconhecido ao registrar o cliente",
      };
    }
  };

  const getClients = async (extraUrl) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);
    try {
      const response = await api.get(`/clientes/${extraUrl}`);

      if (response.status === 200) {
        return response.data;
      }

      if (response.status === 204) {
        console.log("Nenhum Cliente encontrado.");
        return;
      }

      console.log(`Status inesperado: ${response.status}`);
    } catch (error) {
      if (error.response) {
        console.error(
          "Erro do servidor: ",
          error.response.status,
          error.response.data
        );
        if (error.response.status === 404) {
          console.log("Endpoint não encontrado (404). Verifique a URL.");
        } else if (error.response.status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
        } else {
          console.log(`Erro inesperado: ${error.response.status}`);
        }
      } else if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
      } else {
        console.error("Erro desconhecido:", error.message);
      }
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  const getClientByID = async (id) => {
    try {
      //Colocando um endpoint genérico apenas para montar a estrutura
      const response = await api.get(`/clientes/${id}`);

      if (response.status === 200) {
        return response.data;
      }
      if (response.status === 204) {
        console.log(`Nenhum colaborador encontrado com o ID ${id}.`);
        return;
      }

      console.log(`Status inesperado: ${response.status}`);
    } catch (error) {
      if (error.response) {
        console.error("Erro ao buscar colaboradores: ", error);
        if (error.response.status === 404) {
          console.log(`Colaborador com o ID ${id} não foi encontrado (404).`);
        } else if (error.response.status === 400) {
          console.log(
            "Requisição inválida. Verifique se o ID está correto (400)."
          );
        } else if (error.response.status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
        } else {
          console.log(`Erro inesperado: ${error.response.status}`);
        }
      } else if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
      } else {
        console.error("Erro desconhecido:", error.message);
      }
    }
  };

  const deleteClient = async (id) => {
    try {
      const data = await api.delete(`/clientes/remover/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const patchClient = async (id, updatedInfo, updatePhoto) => {
    try {
      const formData = new FormData();
      formData.append("json", JSON.stringify(updatedInfo));

      updatePhoto?.forEach((photo) => {
        formData.append("photos", photo);
      });

      const endpoint = `/clientes/atualizar/${id}`;
      await api.patch(endpoint, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/cadastrar/cliente/editar/sucesso");
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
    }
  };

  return {
    postClient,
    getClients,
    getClientByID,
    deleteClient,
    setIsLoading,
    isLoading,
    patchClient,
  };
}
