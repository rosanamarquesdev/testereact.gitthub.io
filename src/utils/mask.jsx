export const phoneNumberMask = (value) => {
  if (!value) return "";

  return value
    .replace(/[\D]/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)/, "$1");
};

export const cpfMask = (value) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3}\.\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3}\.\d{3}\.\d{3})(\d)/, "$1-$2");
};

export const cnpjMask = (value) => {
  if (!value) return "";

  return value
    .replace(/[\D]/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})(\d+?)/, "$1");
};

export const cepMask = (value) => {
  if (!value) return "";

  return value
    .replace(/[\D]/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})(\d+?)/, "$1");
};

export const birthMask = (value) => {
  if (!value) return "";

  return value
    .replace(/[\D]/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d+?)/, "$1");
};

export const currencyMask = (value) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/^0+/, "")
    .padStart(3, "0")
    .replace(/(\d+)(\d{2})$/, "R$ $1,$2")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const phoneMask = (value) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "") // Remove tudo que não é número
    .replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3") // Formato com DDD e 9 dígitos
    .replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3") // Formato com DDD e 8 dígitos
    .replace(/^(\d{5})(\d{4})$/, "$1-$2") // Formato sem DDD e 9 dígitos
    .replace(/^(\d{4})(\d{4})$/, "$1-$2"); // Formato sem DDD e 8 dígitos
};
