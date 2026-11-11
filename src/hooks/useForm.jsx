import React from "react";
import {
  birthMask,
  cepMask,
  cnpjMask,
  cpfMask,
  currencyMask,
  phoneNumberMask,
} from "../utils/mask";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
  cnpj: {
    regex: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    message: "CNPJ inválido",
  },
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    message: "CPF inválido",
  },
  rg: {
    regex: /^[0-9A-Za-z.-\s]{7,15}$/,
    message: "RG inválido",
  },
  state_registration: {
    regex: /^\d{2,14}$/,
    message: "Inscrição inválido",
  },
  cell_phone: {
    regex: /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/,
    message: "Telefone inválido",
  },

  phone: {
    regex: /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/,
    message: "Telefone inválido",
  },
};

export const useForm = () => {
  const [error, setError] = React.useState({});

  function validate(field, value) {
    if (value.length === 0) {
      setError({ ...error, [field]: "Preencha o campo" });
    } else if (types[field] && !types[field].regex.test(value)) {
      setError({ ...error, [field]: types[field].message });
    } else {
      setError((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[field]; // Remove o erro se o campo estiver válido
        return updatedErrors;
      });
    }
  }

  function removeErrorOnChange(field) {
    setError((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[field]; // Remove apenas o erro do campo específico
      return updatedErrors;
    });
  }

  function mask(name, value) {
    if (name === "cnpj") {
      return cnpjMask(value);
    }
    if (name === "cep") {
      return cepMask(value);
    }

    if (name === "cpf") {
      return cpfMask(value);
    }

    if (name === "phone" || name === "cell_phone") {
      return phoneNumberMask(value);
    }
    if (name === "date") {
      return birthMask(value);
    }

    if (name === "price") {
      return currencyMask(value);
    }

    return value;
  }

  function onBlur({ target }) {
    const { name, value } = target;

    validate(name, value);
  }

  function validateAllFields({ cliente }) {
    if (!cliente) {
      return;
    }
    const { cnpj, corporate_reason } = cliente;
    const newErrors = { ...error };
    if (!cnpj) {
      newErrors.cnpj = "Preencha o campo";
    } else {
      delete newErrors.cnpj;
    }
    if (types.cnpj && !types.cnpj.regex.test(cnpj)) {
      newErrors.cnpj = types.cnpj.message;
    }
    if (!corporate_reason) {
      newErrors.corporate_reason = "Preencha o campo";
    } else {
      delete newErrors.corporate_reason;
    }
    setError(newErrors);
    return Object.keys(newErrors).length > 0;
  }

  return {
    validateAllFields,
    mask,
    onBlur,
    removeErrorOnChange,
    error,
    setError,
  };
};
