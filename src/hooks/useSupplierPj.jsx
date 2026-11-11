import React from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/instance";
import { useAuth } from "./useAuth";

function useSupplierPj() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  const postSupplierPj = async (json, photo) => {
    if (!token) {
      console.error("Token ausente. Usuário não está autenticado.");
      return;
    }

    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);

    try {
      const formData = new FormData();

      formData.append("photo", photo);
      formData.append("json", JSON.stringify(json));

      const response = await api.post(
        "/fornecedor/juridico/registro",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        // Falta criar card de sucesso especifico para o fornecedor pj
        navigate("/cadastrar/fornecedor/pessoa/juridica/novo/sucesso");
        return response;
      }

      console.log(`Erro inesperado: Status ${response.status}`);
      return response;
    } catch (error) {
      if (error.response) {
        console.error(
          `Erro da API: ${error.response.status} - ${
            error.response.data.message || error.message
          }`
        );
        return error;
      }

      console.error("Erro inesperado:", error.message || error);
      return error;
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  const getSupplierPj = async (extraUrl) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);

    try {
      const response = await api.get(`/fornecedor/juridico${extraUrl}`);

      if (response.status === 200) {
        return response.data;
      }

      if (response.status === 204) {
        console.log("Nenhum registro encontrado.");
        return null;
      }

      console.log(`Erro inesperado: Status ${response.status}`);
    } catch (error) {
      console.error("Erro ao buscar registros: ", error.message || error);
      return null;
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  const getSupplierPjById = async (id) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);

    try {
      const response = await api.get(`/fornecedor/juridico/${id}`);

      if (response.status === 200) {
        return response.data;
      }

      if (response.status === 204) {
        console.log(`Não foi encontrado fornecedor com o id ${id}.`);
        return null;
      }

      console.log(`Erro inesperado: Status ${response.status}`);
    } catch (error) {
      console.error("Erro ao buscar fornecedor: ", error.message || error);
      return null;
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  const deleteSupplierPj = async (id) => {
    try {
      const data = await api.delete(`/fornecedor/juridico/remover/${id}`, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const patchSupplierPj = async (id, json, photo) => {
    if (!token) {
      console.error("Token ausente. Usuário não está autenticado.");
      return null;
    }

    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 300);
    try {
      const formData = new FormData();

      formData.append("json", JSON.stringify(json));
      formData.append("photo", photo);

      const response = await api.patch(
        `/fornecedor/juridico/atualizar/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        //Depois fazer o card de sucesso
        navigate("/cadastrar/fornecedor/pessoa/juridica/editar/sucesso");
        return response;
      }

      console.log(`Erro inesperado: Status ${response.status}`);
      return response;
    } catch (error) {
      console.error("Erro ao atualizar fornecedor: ", error.message || error);
      return null;
    } finally {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    postSupplierPj,
    getSupplierPj,
    getSupplierPjById,
    deleteSupplierPj,
    patchSupplierPj,
  };
}

export { useSupplierPj };
