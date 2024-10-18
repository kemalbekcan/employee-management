import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    default: "Geçersiz",
    required: "Zorunlu alan",
    min: "Değer en az ${min} olmalıdır",
  },
  string: {
    min: "En az ${min} karakter olmalıdır",
    email: "Geçersiz e-posta adresi",
  },
  number: {
    min: "Değer en az ${min} olmalıdır",
  },
});

export default Yup;
