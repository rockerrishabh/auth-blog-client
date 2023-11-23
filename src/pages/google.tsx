import { useContext, useLayoutEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.ts";
import { AuthContext } from "../contexts/userContext.tsx";
import Layout from "../layout/index.tsx";

function Google() {
  const [searchParams] = useSearchParams();
  const { googleCallback } = useAuth();
  const { setAuth, auth } = useContext(AuthContext);
  const code = searchParams.get("code");
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (code) {
      googleCallback(code)
        .then((res) => {
          console.log(res);
          if (res) {
            setAuth({
              token: res.token,
              user: res.user,
            });
            navigate("/dashboard");
          }
        })
        .catch((e) => console.log("error", e));
    }
  }, [code, googleCallback, navigate, setAuth, auth]);
  return <Layout title="Google Login">Logging In....</Layout>;
}

export default Google;
