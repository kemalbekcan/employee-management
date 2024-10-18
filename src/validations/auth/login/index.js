import Yup from "@/utils/yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup
        .string()
        .matches(passwordRules, { message: "Lütfen daha güçlü bir şifre oluşturun." })
        .required(),
});