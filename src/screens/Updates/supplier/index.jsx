import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../../components/Forms/Button";
import { Card } from "../../../components/Forms/Card";
import { Form } from "../../../components/Forms/Form";
import { FormsField } from "../../../components/Forms/FormsField";
import { FileInput } from "../../../components/Forms/Inputs/File";
import { Input } from "../../../components/Forms/Inputs/Input";
import { useForm } from "../../../hooks/useForm";
import { useSupplierPf } from "../../../hooks/useSupplierPf";
import { useSupplierPj } from "../../../hooks/useSupplierPj";
import { SpanError } from "../style";

export const UpdateSupplierPf = () => {
  const [formValues, setFormValues] = React.useState({
    supplier: {
      supplier_name: "",
      supplier_code: "",
      email: "",
      phone: "",
      rg: "",
      cpf: "",
      birth_date: "",
    },
    address: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      neighborhood: "",
      state: "",
    },
  });
  const [photo, setPhoto] = React.useState(null);

  const { state } = useLocation();

  const [errorImage, setErrorImage] = React.useState(false);

  const { mask, onBlur, removeErrorOnChange, error } = useForm();
  const { patchSupplierPf } = useSupplierPf();

  React.useEffect(() => {
    if (state?.data) {
      setFormValues(state.data);
      const image = state.supplierImage[0];
      setPhoto(image);
    }
  }, [state]);

  function handleImage({ target }) {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const file = target.files[0];

    if (!allowedTypes.includes(file.type)) {
      setErrorImage(true);
      setTimeout(() => {
        setErrorImage(false);
      }, 2000);
      return;
    }

    setPhoto(file);
  }

  const handleInputChange = (field) => (event) => {
    const { name, value } = event.target;

    removeErrorOnChange(name);

    setFormValues({
      ...formValues,
      [field]: {
        ...formValues[field],
        [name]: mask(name, value),
      },
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = Object.keys(error).length === 0;

    if (isValid) {
      patchSupplierPf(state.id, formValues, photo);
      return;
    }

    console.log("Não enviado", error);
  }

  return (
    <Form title="Editar Fornecedor" onSubmit={handleSubmit}>
      <Card>
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              name="supplier_name"
              id="supplier_name"
              height="4.8rem"
              value={formValues.supplier.supplier_name}
              onChange={handleInputChange("supplier")}
              onBlur={onBlur}
            >
              Nome do fornecedor *
              {error.name && <SpanError>{error.name}</SpanError>}
            </Input>

            <Input
              id="email"
              name="email"
              value={formValues.supplier.email}
              onChange={handleInputChange("supplier")}
              onBlur={onBlur}
              height="4.8rem"
              type="email"
            >
              Email
              {error.email && <SpanError>{error.email}</SpanError>}
            </Input>
          </FormsField>

          <FileInput
            id={"fotoProduto"}
            error={errorImage}
            image={photo}
            handleRemove={() => setPhoto(null)}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={55}
          />
        </FormsField>

        <Input
          id="phone"
          name="phone"
          value={formValues.supplier.phone}
          onChange={handleInputChange("supplier")}
          onBlur={onBlur}
          height="4.8rem"
        >
          Telefone
          {error.cell_phone && <SpanError>{error.cell_phone}</SpanError>}
        </Input>

        <FormsField variant="triple">
          <Input
            id="rg"
            name="rg"
            value={formValues.supplier.rg}
            onChange={handleInputChange("supplier")}
            onBlur={onBlur}
            height="4.8rem"
          >
            RG
            {error.rg && <SpanError>{error.rg}</SpanError>}
          </Input>
          <Input
            id="cpf"
            name="cpf"
            value={formValues.supplier.cpf}
            onChange={handleInputChange("supplier")}
            onBlur={onBlur}
            height="4.8rem"
          >
            CPF *{error.cpf && <SpanError>{error.cpf}</SpanError>}
          </Input>
          <Input
            id="birth_date"
            name="birth_date"
            value={formValues.supplier.birth_date}
            onChange={handleInputChange("supplier")}
            height="4.8rem"
            type="date"
          >
            Data de nascimento
          </Input>
        </FormsField>
      </Card>

      <Card title="Endereço do fornecedor">
        <FormsField variant="triple">
          <Input
            id="street"
            name="street"
            value={formValues.address.street}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Logradouro
            {error.street && <SpanError>{error.street}</SpanError>}
          </Input>
          <Input
            id="number"
            name="number"
            value={formValues.address.number}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Número
            {error.number && <SpanError>{error.number}</SpanError>}
          </Input>
          <Input
            id="cep"
            name="cep"
            value={formValues.address.cep}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            CEP
            {error.cep && <SpanError>{error.cep}</SpanError>}
          </Input>
        </FormsField>

        <Input
          id="complement"
          name="complement"
          value={formValues.address.complement}
          onChange={handleInputChange("address")}
          height="4.8rem"
        >
          Complemento
        </Input>

        <FormsField variant="double">
          <Input
            id="neighborhood"
            name="neighborhood"
            value={formValues.address.neighborhood}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Bairro
            {error.neighborhood && <SpanError>{error.neighborhood}</SpanError>}
          </Input>

          <Input
            id="city"
            name="city"
            value={formValues.address.city}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Cidade
            {error.city && <SpanError>{error.city}</SpanError>}
          </Input>
        </FormsField>

        <Input
          id="state"
          name="state"
          value={formValues.address.state}
          onChange={handleInputChange("address")}
          height="4.8rem"
        >
          Estado
        </Input>
      </Card>
      <Card>
        <Button type="submit" height="4.8rem">
          Editar
        </Button>
      </Card>
    </Form>
  );
};

export const UpdateSupplierPJ = () => {
  const { patchSupplierPj } = useSupplierPj(); 
  const { mask, onBlur, removeErrorOnChange, error } = useForm(); 
  const { state } = useLocation(); 
  const [formValues, setFormValues] = React.useState({ 
    pj: {
      fantasy_name: "",
      answerable: "",
      email: "",
      cnpj: "",
      phone: "",
      corporate_reason: "",
      state_registration: "",
      type_contribuition: "",
      suframa_registration: "",
      municipal_registration: "",
    },
    address: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      neighborhood: "",
      state: "",
    },
  });
  const [errorImage, setErrorImage] = React.useState(false); 
  const [photo, setPhoto] = React.useState(null);  

  React.useEffect(() => {
    if (state?.data) {
      setFormValues(state.data);
      const image = state.supplierImage;    
      setPhoto(image);
    }
  }, [state]);

  const handleInputChange = (field) => (event) => {
    const { name, value } = event.target;

    removeErrorOnChange(name);

    setFormValues({
      ...formValues,
      [field]: {
        ...formValues[field],
        [name]: mask(name, value),
      },
    });
  };

  const handleImage = ({ target }) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const file = target.files[0];

    if (!allowedTypes.includes(file.type)) {
      setErrorImage(true);
      setTimeout(() => {
        setErrorImage(false);
      }, 2000);
      return;
    }

    setPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateAllFields = Object.keys(error).length === 0;

    if (validateAllFields) {
      patchSupplierPj(state.id, formValues, photo);
      return;
    }

    alert("Erro ao atualizar. Tente novamente");
  };

  return (
    <Form onSubmit={handleSubmit} title="Atualizar Fornecedor">
      <Card>
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              id="corporate_reason"
              name="corporate_reason"
              value={formValues.pj.corporate_reason}
              onChange={handleInputChange("pj")}
              onBlur={onBlur}
              height="4.8rem"
            >
              Razão social *
              {error.corporate_reason && (
                <SpanError>{error.corporate_reason}</SpanError>
              )}
            </Input>
            <Input
              id="fantasy_name"
              name="fantasy_name"
              value={formValues.pj.fantasy_name}
              onChange={handleInputChange("pj")}
              onBlur={onBlur}
              height="4.8rem"
            >
              Nome fantasia
              {/* {error.fantasy_name && (
                <SpanError>{error.fantasy_name}</SpanError>
              )} */}
            </Input>
          </FormsField>
          <FileInput
            id={"fotoProduto"}
            error={errorImage}
            image={photo}
            handleRemove={() => setPhoto(null)}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={55}
          />
        </FormsField>

        <Input
          id="answerable"
          name="answerable"
          value={formValues.pj.answerable}
          onChange={handleInputChange("pj")}
          onBlur={onBlur}
          height="4.8rem"
        >
          Responsável
          {/* {error.responsible && <SpanError>{error.responsible}</SpanError>} */}
        </Input>

        <Input
          id="cnpj"
          name="cnpj"
          value={formValues.pj.cnpj}
          onChange={handleInputChange("pj")}
          onBlur={onBlur}
          height="4.8rem"
        >
          CNPJ *{error.cnpj && <SpanError>{error.cnpj}</SpanError>}
        </Input>

        <FormsField variant="triple">
          <Input
            id="state_registration"
            name="state_registration"
            value={formValues.pj.state_registration}
            onChange={handleInputChange("pj")}
            height="4.8rem"
          >
            Inscrição estadual
          </Input>

          <Input
            id="suframa_registration"
            name="suframa_registration"
            value={formValues.pj.suframa_registration}
            onChange={handleInputChange("pj")}
            height="4.8rem"
          >
            Inscrição SUFRAMA
          </Input>

          <Input
            id="municipal_registration"
            name="municipal_registration"
            value={formValues.pj.municipal_registration}
            onChange={handleInputChange("pj")}
            height="4.8rem"
          >
            Inscrição municipal
          </Input>
        </FormsField>

        <FormsField variant="double">
          <Input
            id="email"
            name="email"
            value={formValues.pj.email}
            onChange={handleInputChange("pj")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Email
            {/* {error.price && <SpanError>{error.price}</SpanError>} */}
          </Input>
          <Input
            id="phone"
            name="phone"
            value={formValues.pj.phone}
            onChange={handleInputChange("pj")}
            height="4.8rem"
          >
            Telefone
          </Input>
        </FormsField>

        <Input
          id="type_contribuition"
          name="type_contribuition"
          value={formValues.pj.type_contribuition}
          onChange={handleInputChange("pj")}
          height="4.8rem"
        >
          Tipo de contribuinte
        </Input>
      </Card>

      <Card title="Endereço do fornecedor">
        <FormsField variant="triple">
          <Input
            id="street"
            name="street"
            value={formValues.address.street}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Logradouro
            {error.street && <SpanError>{error.street}</SpanError>}
          </Input>
          <Input
            id="number"
            name="number"
            value={formValues.address.number}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Número
            {error.number && <SpanError>{error.number}</SpanError>}
          </Input>
          <Input
            id="cep"
            name="cep"
            value={formValues.address.cep}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            CEP
            {error.cep && <SpanError>{error.cep}</SpanError>}
          </Input>
        </FormsField>

        <Input
          id="complement"
          name="complement"
          value={formValues.address.complement}
          onChange={handleInputChange("address")}
          height="4.8rem"
        >
          Complemento
        </Input>

        <FormsField variant="double">
          <Input
            id="neighborhood"
            name="neighborhood"
            value={formValues.address.neighborhood}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Bairro
            {error.neighborhood && <SpanError>{error.neighborhood}</SpanError>}
          </Input>
          <Input
            id="city"
            name="city"
            value={formValues.address.city}
            onChange={handleInputChange("address")}
            onBlur={onBlur}
            height="4.8rem"
          >
            Cidade
            {error.city && <SpanError>{error.city}</SpanError>}
          </Input>
        </FormsField>

        <Input
          id="state"
          name="state"
          value={formValues.address.state}
          onChange={handleInputChange("address")}
          height="4.8rem"
        >
          Estado
        </Input>
      </Card>

      <Card>
        <Button type="submit" height="4.8rem">
          Atualizar
        </Button>
      </Card>
    </Form>
  );
};
