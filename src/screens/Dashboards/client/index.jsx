import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import BaseCircle from "/assets/BaseCircle.svg";
import BaseRetangle from "/assets/BaseRetangle.svg";
import { Table } from "../../../components/Table";
import * as T from "../../../components/Table/style";
import { Text } from "../../../components/Texts/Text";
import { Title } from "../../../components/Texts/Title";
import { SidebarContext } from "../../../contexts/SidebarContext";
import { useForm } from "../../../hooks/useForm";
import { theme } from "../../../theme/theme";
import * as S from "./style";

export const ClientDashboard = () => {
  // Estados de estilos
  const { isActive } = React.useContext(SidebarContext);
  const { mask } = useForm();

  // Estados de dados
  const [companyData, setCompanyData] = React.useState({
    cliente: {
      corporate_reason: "",
      fantasy_name: "",
      cnpj: "",
      state_registration: "",
      type_contribuition: "",
      branch_activity: "",
      image_company: "",
    },
    endereco_empresa: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      neighborhood: "",
    },
    endereco_entrega: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      neighborhood: "",
    },
    financeiro: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
      cpf: "",
      image: "",
    },
    comercial: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
      cpf: "",
      image: "",
    },
    contabil: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
      cpf: "",
      image: "",
    },
    socio: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
      cpf: "",
      image: "",
    },
  });
  const contactTableData = React.useMemo(() => getTableData(), [companyData]);
  const { state } = useLocation();
  let control = "";
  const navigate = useNavigate();

  React.useState(() => {
    if (state?.data) {
      setCompanyData(state.data.clientResponseMap);
      control = state.data;
    }
    applyMasks();
  }, [state]);

  //? Ârea Funcional
  const handleEdit = async () => {
    try {
      navigate("/cadastrar/cliente/editar", {
        state: { data: control },
      });
    } catch (error) {
      console.error("Erro ao buscar cliente:", error.message);
      alert("Não foi possível carregar os dados do cliente.");
    }
  };

  function applyMasks() {
    setCompanyData((prevState) => {
      return {
        ...prevState,
        cliente: {
          ...prevState.cliente,
          cnpj: mask("cnpj", prevState.cliente.cnpj),
        },
        endereco_empresa: {
          ...prevState.endereco_empresa,
          cep: mask("cep", prevState.endereco_empresa.cep),
        },
        endereco_entrega: {
          ...prevState.endereco_entrega,
          cep: mask("cep", prevState.endereco_entrega.cep),
        },
        socio: {
          ...prevState.socio,
          cpf: mask("cpf", prevState.socio.cpf),
          phone: mask("phone", prevState.socio.phone),
          cell_phone: mask("phone", prevState.socio.cell_phone),
        },
        comercial: {
          ...prevState.comercial,
          cpf: mask("cpf", prevState.comercial.cpf),
          phone: mask("phone", prevState.comercial.phone),
          cell_phone: mask("phone", prevState.comercial.cell_phone),
        },
        contabil: {
          ...prevState.contabil,
          cpf: mask("cpf", prevState.contabil.cpf),
          phone: mask("phone", prevState.contabil.phone),
          cell_phone: mask("phone", prevState.contabil.cell_phone),
        },
        financeiro: {
          ...prevState.financeiro,
          cpf: mask("cpf", prevState.financeiro.cpf),
          phone: mask("phone", prevState.financeiro.phone),
          cell_phone: mask("phone", prevState.financeiro.cell_phone),
        },
      };
    });
  }

  function getTableData() {
    const sections = [
      { key: "socio", label: "Sócio Proprietário" },
      {
        key: "comercial",
        label: "Contato Comercial",
      },
      {
        key: "contabil",
        label: "Contato Contábil",
      },
      {
        key: "financeiro",
        label: "Contato Financeiro",
      },
    ];

    return sections.map(({ key, label }) => ({
      image: companyData[key].image,
      position: { label },
      name: companyData[key].name,
      email: companyData[key].email,
      phone: companyData[key].phone
        ? companyData[key].phone
        : companyData[key].cell_phone,
      rg: companyData[key].rg,
      cpf: companyData[key].cpf,
    }));
  }

  //? Ârea para defiições de estrutura
  const infoAreaData = [
    {
      id: 1,
      title: "Localização",
      data1: `${companyData.endereco_empresa.street ?? "Logradouro não cadastrado"} - ${companyData.endereco_empresa.number ?? "Número não cadastrado"}, ${companyData.endereco_empresa.cep ?? "Endereço não cadastrado"}`,
      data2: companyData.endereco_empresa.city ?? "Não Cadastrado",
    },
    {
      id: 2,
      title: "Informações",
      data1: `CNPJ: ${companyData.cliente.cnpj ?? "CPNJ não cadastrado"}`,
      data2: `Tipo: ${companyData.cliente.type_contribuition ?? "Tipo não cadastrado"} `,
    },
  ];

  // Definições das colunas da tabela 1
  const columns1 = React.useMemo(
    () => [
      {
        accessorKey: "image",
        header: " ",
        size: 48,
        className: "w-5em",
        cell: ({ row }) => (
          <S.ContactImage>
            <img
              src={row.original.image ?? BaseCircle}
              alt={`Foto do contato ${row.original.name}`}
            />
          </S.ContactImage>
        ),
      },
      {
        accessorKey: "position",
        header: "Posição",
        cell: ({ row }) => <>{row.original.position.label}</>,
      },
      { accessorKey: "name", header: "Nome" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Telefone/Celular" },
      // { accessorKey: "cell_phone", header: "Celular" },
      { accessorKey: "rg", header: "RG" },
      { accessorKey: "cpf", header: "cpf" },
      {
        header: " ",
        size: 50,
        className: "w-5em",
        cell: ({ row }) => (
          <T.IconContainer onClick={() => handleEdit(row)}>
            <FaRegEdit />
          </T.IconContainer>
        ),
      },
    ],
    []
  );

  // Definições das colunas da tabela 2
  // const columns2 = React.useMemo(
  //   () => [
  //     { accessorKey: "sale", header: "Venda" },
  //     { accessorKey: "type_sale", header: "Tipo de Venda" },
  //     { accessorKey: "date_sale", header: "Data da Venda" },
  //     { accessorKey: "payment", header: "Pagamento" },
  //     { accessorKey: "fabrication", header: "Fabricação" },
  //     { accessorKey: "delivery", header: "Entrega" },
  //     {
  //       accessorKey: "update",
  //       sort: false,
  //       header: "",
  //       cell: () => (
  //         <Text variant="small" color={theme.colors.lightGray}>
  //           atualizar
  //         </Text>
  //       ),
  //     },
  //   ],
  //   []
  // );

  return (
    <>
      <S.CompanyArea $width={isActive ? "88%" : "97%"}>
        <div className="company-texts">
          <div>
            <Title variant="x-small" bold="bold">
              {companyData.cliente.fantasy_name ?? "Nome Fantasia"}
            </Title>
            <Text variant="small" color={theme.colors.lightGray}>
              {companyData.cliente.corporate_reason ?? "Razão Social"}
            </Text>
          </div>
          <div>
            {infoAreaData.map((item) => (
              <S.InfoArea key={item.id}>
                <Text variant="large" bold="bold">
                  {item.title}
                </Text>
                <Text variant="small" color={theme.colors.lightGray}>
                  {item.data1}
                </Text>
                <Text variant="small" color={theme.colors.lightGray}>
                  {item.data2}
                </Text>
              </S.InfoArea>
            ))}
          </div>
        </div>
        <div className="company-image">
          <S.CompanyImage
            src={companyData.cliente.image_company ?? BaseRetangle}
            alt="Imagem da Empresa"
          />
        </div>
      </S.CompanyArea>
      <S.TablesArea>
        <Table
          variant="contact-table"
          columns={columns1}
          data={contactTableData}
          sort={false}
          isPagination={false}
          header={false}
          title={
            <Text variant="large" bold="bold">
              Contatos
            </Text>
          }
        />

        {/* <Table columns={columns2} /> */}
      </S.TablesArea>
    </>
  );
};
