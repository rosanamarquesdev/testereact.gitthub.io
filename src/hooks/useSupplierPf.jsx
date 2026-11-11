import React from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/instance";

export function useSupplierPf() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const postSupplierPf = async (json, photo) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);
    try {
      const formData = new FormData();

      formData.append("json", JSON.stringify(json));
      formData.append("photo", photo);

      const response = await api.post("/fornecedor/fisico", formData);

      if (response.status === 201) {
        navigate("/cadastrar/cliente/novo/sucesso");
        return response;
      }

      console.log(`Status inesperado: ${response.status}`);
      return response;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.error("Erro do servidor:", status, data);

        if (status === 400) {
          console.log("Erro de validação. Verifique os dados enviados.");
          return error;
        }

        if (status === 404) {
          console.log("Endpoint não encontrado (404). Verifique a URL.");
          return error;
        }

        if (status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
          return error;
        }

        console.log(`Erro inesperado: ${status}`);
        return error;
      }

      if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
        return error;
      }

      console.error("Erro desconhecido:", error.message);
      return error;
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  const getSupplierPf = async (extraURL) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);

    try {
      const response = await api.get(`/fornecedor/fisico/${extraURL}`);

      if (response.status === 200) {
        return response.data;
      }

      if (response.status === 204) {
        console.log("Nenhum fornecedor encontrado.");
        return false;
      }

      console.log(`Status inesperado: ${response.status}`);
    } catch (error) {
      if (error.response) {
        console.error(
          "Erro do servidor:",
          error.response.status,
          error.response.data
        );

        if (error.response.status === 404) {
          console.log("Endpoint não encontrado (404). Verifique a URL.");
          return;
        }

        if (error.response.status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
          return;
        }

        console.log(`Erro inesperado: ${error.response.status}`);
        return;
      }

      if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
        return;
      }

      console.error("Erro desconhecido:", error.message);
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  const getSupplierPfById = async (id) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);

    try {
      const response = await api.get(`/fornecedor/fisico/${id}`);

      if (response.status === 200) {
        return response.data;
      }

      if (response.status === 204) {
        console.log(`Nenhum colaborador encontrado com o ID ${id}.`);
        return false;
      }

      console.log(`Status inesperado: ${response.status}`);
    } catch (error) {
      if (error.response) {
        console.error(
          "Erro ao buscar colaboradores:",
          error.response.status,
          error.response.data
        );

        if (error.response.status === 404) {
          console.log(`Colaborador com o ID ${id} não encontrado (404).`);
          return;
        }

        if (error.response.status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
          return;
        }

        console.log(`Erro inesperado: ${error.response.status}`);
      }

      if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
        return;
      }

      console.error("Erro desconhecido:", error.message);
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  const deleteSupplierPf = async (id) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);

    try {
      const response = await api.delete(`/fornecedor/fisico/${id}`);

      if (response.status === 200) {
        return response.data;
      }

      console.log(`Status inesperado: ${response.status}`);
      return response;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.error("Erro do servidor:", status, data);

        if (status === 400) {
          console.log("Erro de validação. Verifique os dados enviados.");
          return error;
        }

        if (status === 404) {
          console.log("Fornecedor ou endpoint não encontrado (404).");
          return error;
        }

        if (status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
          return error;
        }

        console.log(`Erro inesperado: ${status}`);
        return error;
      }

      if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
        return error;
      }

      console.error("Erro desconhecido:", error.message);
      return error;
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  const patchSupplierPf = async (id, json, photo) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);
    try {
      const formData = new FormData();

      formData.append("json", JSON.stringify(json));
      formData.append("photo", photo);

      const response = await api.patch(`/fornecedor/fisico/${id}`, formData);

      if (response.status === 200) {
        navigate("/cadastrar/cliente/novo/sucesso");
        return response;
      }

      console.log(`Status inesperado: ${response.status}`);
      return response;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.error("Erro do servidor:", status, data);

        if (status === 400) {
          console.log("Erro de validação. Verifique os dados enviados.");
          return error;
        }

        if (status === 404) {
          console.log("Endpoint não encontrado (404). Verifique a URL.");
          return error;
        }

        if (status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
          return error;
        }

        console.log(`Erro inesperado: ${status}`);
        return error;
      }

      if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
        return error;
      }

      console.error("Erro desconhecido:", error.message);
      return error;
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  return {
    postSupplierPf,
    getSupplierPf,
    isLoading,
    setIsLoading,
    getSupplierPfById,
    deleteSupplierPf,
    patchSupplierPf,
  };
}
