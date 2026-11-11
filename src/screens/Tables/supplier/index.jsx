import React from "react";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import { MdOutlineFilterList, MdOutlineFilterListOff } from "react-icons/md";
//Externos
import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "../../../components/Modal";
import { Table } from "../../../components/Table";
// Internos
import * as T from "../../../components/Table/style";
import { Text } from "../../../components/Texts/Text";
import { Title } from "../../../components/Texts/Title";
import { useForm } from "../../../hooks/useForm";
import { useSupplierPf } from "../../../hooks/useSupplierPf";
import { useSupplierPj } from "../../../hooks/useSupplierPj";
import { debounce } from "../../../utils/debounce";

export const PfSupplierTable = () => {
  // Estados de interação
  const [selectedItem, setSelectedItem] = React.useState("active");
  const [fetchStatus, setFetchStatus] = React.useState(true);

  // Estados de controle
  const navigate = useNavigate();
  const [supplierPF, setSupplierPF] = React.useState([]);
  const { mask } = useForm();
  const [searchSupplierPf, setSearchSupplierPf] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const [page, setPage] = React.useState(1);
  const { getSupplierPf, deleteSupplierPf, getSupplierPfById, isLoading } =
    useSupplierPf();

  React.useEffect(() => {
    if (search) {
      setPage(1);
      setSupplierPF([]);
      fetchClientsBySearch();
      return;
    }
    setSearchSupplierPf([]);
    fetchSupplierPF();
  }, [search, page]);

  React.useEffect(() => {
    if (search) {
      setSearch("");
      setSearchSupplierPf([]);
    }
    setPage(1);
    setSupplierPF([]);
    fetchSupplierPF();
  }, [fetchStatus]);

  // Função para buscar todos os fornecedores pessoa física
  const fetchSupplierPF = async () => {
    try {
      const data = await getSupplierPf(
        `status/?${fetchStatus ? `status=${fetchStatus}&` : ""}page=${page}`
      );

      const newData = data.map((supplier) => ({
        ...supplier,
        phone: mask("phone", supplier.phone),
      }));

      setSupplierPF((prev) => {
        const existingIds = prev.map((supplier) => supplier.id);
        const filteredNewData = newData.filter(
          (supplier) => !existingIds.includes(supplier.id)
        );

        return [...prev, ...filteredNewData];
      });
    } catch (error) {
      console.error("Erro na busca de clientes:", error);
    }
  };

  const fetchClientsBySearch = React.useCallback(
    debounce(async () => {
      try {
        const data = await getSupplierPf(
          `filtrar/?value=${search}&page=${page}`
        );

        const newData = data.map((supplier) => ({
          ...supplier,
          phone: mask("phone", supplier.phone),
        }));

        setSearchSupplierPf(newData);
      } catch (error) {
        console.error("Erro na busca filtrada de clientes:", error);
      }
    }, 500),
    [search, fetchStatus]
  );

  //? Ârea funcional
  const handleDelete = async (row) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteSupplierPf(row.original.id);
        setSupplierPF((prev) =>
          prev.filter((supplier) => supplier.id !== row.original.id)
        );
        setSearchSupplierPf((prev) =>
          prev.filter((supplier) => supplier.id !== row.original.id)
        );
      } catch (error) {
        console.error("Erro ao deletar fornecedor:", error);
      }
    }
  };

  const handleEdit = async (row) => {
    try {
      const data = await getSupplierPfById(row.original.id);
      const { supplierResponseMap, supplierImage } = supplierFormMap(data[0]);

      navigate("/cadastrar/fornecedor/pessoa/fisica/editar", {
        state: {
          data: supplierResponseMap,
          id: row.original.id,
          supplierImage,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar fornecedor:", error.message);
    }
  };

  // Lógica de enviar os dados para outros componentes
  const supplierFormMap = (supplierResponse) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    let birthDate = supplierResponse.birth_date;

    if (!regex.test(birthDate)) {
      birthDate = birthDate.split("T")[0];
    }

    const supplierResponseMap = {
      supplier: {
        supplier_name: supplierResponse.supplier_name ?? "",
        supplier_code: supplierResponse.supplier_code ?? "",
        email: supplierResponse.email ?? "",
        phone: mask("phone", supplierResponse.phone) ?? "",
        rg: supplierResponse.rg,
        cpf: mask("cpf", supplierResponse.cpf) ?? "",
        birth_date: birthDate ?? "",
      },
      address: {
        cep:
          mask("cep", supplierResponse.address_supplier_pf[0].address.cep) ??
          "",
        street: supplierResponse.address_supplier_pf[0].address.street ?? "",
        number: supplierResponse.address_supplier_pf[0].address.number ?? "",
        complement:
          supplierResponse.address_supplier_pf[0].address.complement ?? "",
        city: supplierResponse.address_supplier_pf[0].address.city ?? "",
        neighborhood:
          supplierResponse.address_supplier_pf[0].address.neighborhood ?? "",
        state: supplierResponse.address_supplier_pf[0].address.state ?? "",
      },
    };

    const supplierImage = supplierResponse.supplier_imagem;

    return {
      supplierImage,
      supplierResponseMap,
    };
  };

  const columns = React.useMemo(() => [
    { accessorKey: "supplier_name", header: "Nome do fornecedor", size: 200 },
    { accessorKey: "email", header: "Email", size: 200 },
    { accessorKey: "phone", header: "Telefone", size: 100 },
    {
      header: "Opções",
      cell: (props) => (
        <T.IconContainer>
          {/* Trocar rota */}
          <NavLink to={"/home"}>
            <HiEye className="icon" />
          </NavLink>
          <HiTrash className="icon" onClick={() => handleDelete(props.row)} />
          <HiPencilAlt className="icon" onClick={() => handleEdit(props.row)} />
        </T.IconContainer>
      ),
    },
  ]);

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
      data={searchSupplierPf.length > 0 ? searchSupplierPf : supplierPF}
      setPage={setPage}
      page={page}
      isLoading={isLoading}
      setSearch={setSearch}
      search={search}
      filterModal={
        <Modal
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          setFetchStatus={setFetchStatus}
          filterModalItens={filterModalItens}
        />
      }
      filterControl={fetchStatus}
      title={
        <>
          <Title bold="bold" variant="small">
            Meus fornecedores - pessoa física
          </Title>

          <Text>
            <NavLink to="/cadastrar/fornecedor/pessoa/fisica/novo">
              Cadastrar novo
            </NavLink>
          </Text>
        </>
      }
    />
  );
};

export const PjSupplierTable = () => {
  const { getSupplierPj, getSupplierPjById, deleteSupplierPj, isLoading } =
    useSupplierPj();
  const [selectedItem, setSelectedItem] = React.useState("active");
  const [fetchStatus, setFetchStatus] = React.useState(true);
  const navigate = useNavigate();
  const [supplierPj, setSupplierPj] = React.useState([]);
  const { mask } = useForm();
  const [searchSupplierPj, setSearchSupplierPj] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    if (search) {
      setPage(1);
      setSupplierPj([]);
      fetchSupplierBySearch();
      return;
    }
    setSearchSupplierPj([]);
    fetchSupplierPj();
  }, [search, page]);

  React.useEffect(() => {
    if (search) {
      setSearch("");
      setSearchSupplierPj([]);
    }
    setPage(1);
    setSupplierPj([]);
    fetchSupplierPj();
  }, [fetchStatus]);

  const fetchSupplierPj = async () => {
    try {
      const data = await getSupplierPj(
        `?limit=20&status/?${fetchStatus ? `status=${fetchStatus}&` : ""}page=${page}`
      );

      const newData = data.map((supplier) => ({
        ...supplier,
        phone: mask("phone", supplier.phone),
      }));

      setSupplierPj((prev) => {
        const existingIds = prev.map((supplier) => supplier.id);
        const filteredNewData = newData.filter(
          (supplier) => !existingIds.includes(supplier.id)
        );

        return [...prev, ...filteredNewData];
      });
    } catch (error) {
      console.error("Erro na busca de fornecedores: ", error);
    }
  };

  const fetchSupplierBySearch = React.useCallback(
    debounce(async () => {
      try {
        const data = await getSupplierPj(`/filtrar?value=${search}`);

        const newData = data.map((supplier) => ({
          ...supplier,
          phone: mask("phone", supplier.phone),
        }));

        setSearchSupplierPj(newData);
      } catch (error) {
        console.error("Erro na busca filtrada de fornecedores:", error);
      }
    }, 500),
    [search, fetchStatus]
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteSupplierPj(id);
        setSupplierPj((prev) => prev.filter((supplier) => supplier.id !== id));
        setSearchSupplierPj((prev) =>
          prev.filter((supplier) => supplier.id !== id)
        );

        alert("Cliente excluído com sucesso!");
      } catch (error) {
        alert("Erro ao deletar fornecedor. Tente novamente.");
        console.error("Erro ao deletar fornecedor:", error);
      }
    }
  };

  const handleEdit = async (row) => {
    try {
      const supplierResponse = await getSupplierPjById(row.original.id);

      const { supplierResponseMap, supplierImage } =
        supplierFormMap(supplierResponse);

      navigate("/cadastrar/fornecedor/pessoa/juridica/editar", {
        state: {
          data: supplierResponseMap,
          id: row.original.id,
          supplierImage,
        },
      });
    } catch (error) {
      alert("Erro ao buscar fornecedor. Tente novamente.");
      console.error("Erro ao buscar fornecedor:", error);
    }
  };

  const supplierFormMap = (supplierResponse) => {
    const supplierResponseMap = {
      pj: {
        fantasy_name: supplierResponse.fantasy_name ?? "",
        answerable: supplierResponse.answerable ?? "",
        email: supplierResponse.email ?? "",
        cnpj: supplierResponse.cnpj ?? "",
        phone: supplierResponse.phone ?? "",
        corporate_reason: supplierResponse.corporate_reason ?? "",
        state_registration: supplierResponse.state_registration ?? "",
        type_contribuition: supplierResponse.type_contribuition ?? "",
        suframa_registration: supplierResponse.suframa_registration ?? "",
        municipal_registration: supplierResponse.municipal_registration ?? "",
      },
      address: {
        cep: supplierResponse.cep ?? "",
        street: supplierResponse.street ?? "",
        number: supplierResponse.number ?? "",
        complement: supplierResponse.complement ?? "",
        city: supplierResponse.city ?? "",
        neighborhood: supplierResponse.neighborhood ?? "",
        state: supplierResponse.state ?? "",
      },
    };

    const supplierImage = supplierResponse.path;

    return {
      supplierImage,
      supplierResponseMap,
    };
  };

  const columns = React.useMemo(
    () => [
      { header: "Fornecedor", accessorKey: "corporate_reason" },
      { header: "Responsável", accessorKey: "answerable" },
      { header: "Email", accessorKey: "email" },
      { header: "Telefone", accessorKey: "phone" },
      {
        header: "Opções",
        cell: (props) => (
          <T.IconContainer>
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
      data={searchSupplierPj.length > 0 ? searchSupplierPj : supplierPj}
      setPage={setPage}
      page={page}
      isLoading={isLoading}
      setSearch={setSearch}
      search={search}
      filterModal={
        <Modal
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          setFetchStatus={setFetchStatus}
          filterModalItens={filterModalItens}
        />
      }
      filterControl={fetchStatus}
      title={
        <>
          <Title bold="bold" variant="small">
            Meus fornecedores - pessoa jurídica
          </Title>

          <Text>
            <NavLink to="/cadastrar/fornecedor/pessoa/juridica/novo">
              Cadastrar novo
            </NavLink>
          </Text>
        </>
      }
    />
  );
};
