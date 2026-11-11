import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "../../../components/Modal";
import { Table } from "../../../components/Table";
import * as T from "../../../components/Table/style";

import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import { MdOutlineFilterList, MdOutlineFilterListOff } from "react-icons/md";
import { Text } from "../../../components/Texts/Text";
import { Title } from "../../../components/Texts/Title";

export const EmployeeTable = () => {
  // Estados de Interação
  const [isLoading, setIsLoading] = React.useState(false);
  const [fetchStatus, setFetchStatus] = React.useState(true);
  const [selectedItem, setSelectedItem] = React.useState("active");

  const [employee, setEmployee] = React.useState([]);
  const navigate = useNavigate();

  // Fetch clientes usando o arquivo json como teste
  const fetchEmployee = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/fornecedorespf.json");
      setEmployee(data);
    } catch (error) {
      console.error("Erro na busca de fornecedores: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect para carregar os cadastros
  React.useEffect(() => {
    fetchEmployee();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteClient(id);
        setClients((prev) => prev.filter((client) => client.id !== id));
        toast.success("Cliente excluído com sucesso!");
      } catch (error) {
        toast.error("Erro ao excluir cliente.");
        console.error("Erro ao deletar cliente:", error);
      }
    }
  };

  const handleEdit = (row) => {
    navigate("/cadastrar/funcionario/editar", {
      state: { clients: row.original },
    });
  };

  const columns = React.useMemo(
    () => [
      { header: "Nome", accessorKey: "nome" },
      { header: "Email", accessorKey: "email" },
      { header: "CPF", accessorKey: "cpf" },
      { header: "Nascimento", accessorKey: "nascimento" },
      { header: "CEP", accessorKey: "cep" },
      { header: "Logradouro", accessorKey: "logradouro" },
      { header: "Número", accessorKey: "numero" },
      { header: "Bairro", accessorKey: "bairro" },
      { header: "Cidade", accessorKey: "cidade" },
      { header: "Telefone", accessorKey: "telefone" },
      { header: "Celular", accessorKey: "celular" },
      {
        header: "Opções",
        cell: (props) => (
          <T.IconContainer>
            {/* Trocar rota */}
            <NavLink to={"/home"}>
              <HiEye className="icon" />
            </NavLink>
            <HiTrash
              className="icon"
              onClick={() => handleDelete(props.row.original.id)}
            />
            <HiPencilAlt
              className="icon"
              onClick={() => handleEdit(props.row)}
            />
          </T.IconContainer>
        ),
      },
    ],
    []
  );

  const filterModalItens = [
    {
      id: 1,
      icon: <MdOutlineFilterListOff />,
      text: "Limpar Filtros",
      value: "clear",
      query: "",
    },
    {
      id: 2,
      icon: <MdOutlineFilterList />,
      text: "Filtrar por ativos",
      value: "active",
      query: "true",
    },
    {
      id: 3,
      icon: <MdOutlineFilterList />,
      text: "Filtrar por Inativos",
      value: "inactive",
      query: "false",
    },
  ];

  return (
    <Table
      columns={columns}
      data={employee}
      isLoading={isLoading}
      filterModal={
        <Modal
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          setFetchStatus={setFetchStatus}
          filterModalItens={filterModalItens}
        />
      }
      title={
        <>
          <Title bold="bold" variant="small">
            Meus Funcionários
          </Title>

          <Text>
            <NavLink to="/cadastrar/funcionarios/novo">Cadastrar novo</NavLink>
          </Text>
        </>
      }
    />
  );
};
