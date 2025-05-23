"use client";

import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  username?: string; // Make it optional because we don't need it for login page
  email: string;
  password: string;
}

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      // type === "register"
      // ? { username: "", email: "", password: "" }
      // :
      { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    let res;

    // if (type === "register") {
    //   res = await fetch("/api/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (res.ok) {
    //     router.push("/login");
    //   } else {
    //     toast.error("Something went wrong");
    //   }
    // }

    // if (type === "login") {
    // res = await signIn("credentials", {
    //   ...data,
    //   redirect: false,
    // });

    // if (res && res.ok) {
    router.push("/");
    // } else {
    // toast.error("Invalid credentials");
    // }
    // }
  };

  return (
    <div className="auth">
      <div className="overlay">
        <div className="content">
          <img src="/logo.png" alt="logo" className="logo" />

          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {/* {type === "register" && (
              <>
                <div className="input">
                  <input
                    {...register("username", {
                      required: "Usuário é obrigatório",
                      validate: (value: string | undefined) => {
                        if (!value || value.length < 2) {
                          return "Usuário deve ter pelo menos 2 caracteres";
                        }
                        return true;
                      },
                    })}
                    type="text"
                    placeholder="Usuário"
                    className="input-field"
                  />
                  <PersonOutline sx={{ color: "white" }} />
                </div>
                {errors.username && (
                  <p className="error">{errors.username.message}</p>
                )}
              </>
            )} */}

            <div className="input">
              <input
                {...register("email", {
                  required: "Email é obrigatório",
                })}
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined sx={{ color: "white" }} />
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}

            <div className="input">
              <input
                {...register("password", {
                  required: "Senha é obrigatória",
                  validate: (value: string | undefined) => {
                    if (
                      !value ||
                      value.length < 3
                      // value.length > 20 ||
                      // !value.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/)
                    ) {
                      return "Senha deve ter pelo menos 3 caracteres";
                    }
                    return true;
                  },
                })}
                type="password"
                placeholder="********"
                className="input-field"
              />
              <LockOutlined sx={{ color: "white" }} />
            </div>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}

            <button className="button" type="submit">
              {/* {type === "register" ? "Cadastrar" : "Entrar"} */}
              Entrar
            </button>
          </form>

          {/* {type === "register" ? (
            <Link href="/login">
              <p className="link">Já tem uma conta? Entre Aqui</p>
            </Link>
          ) : (
            <Link href="/register">
              <p className="link">Ainda não tem uma conta? Cadastre-se Aqui</p>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
