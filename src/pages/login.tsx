import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/index.tsx";
import { useAuth } from "../hooks/useAuth.ts";
import { AuthContext } from "../contexts/userContext.tsx";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (email && password) {
      const res = await login({ email, password });
      if (res) {
        setAuth({
          token: res.token,
          user: res.user,
        });
        navigate("/dashboard");
      }
    }
  };
  return (
    <Layout title="Login">
      {JSON.stringify(auth?.user)}
      <div className="m-10 flex flex-col items-center justify-center rounded py-20 shadow-md">
        <h2 className="mb-4 text-3xl font-semibold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-72 rounded-md border px-3 py-2 leading-tight text-gray-700 outline-none focus:border-none focus:shadow-sm focus:ring-2 focus:ring-teal-500"
              id="email"
              type="email"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-72 rounded-md border px-3 py-2 leading-tight text-gray-700 outline-none focus:border-none focus:shadow-sm focus:ring-2 focus:ring-teal-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <section className="mb-4 flex items-center justify-center space-x-4">
            <p>Or Login with</p>
            <Link to="http://localhost:5000/api/user/google">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                className="h-6 w-6 cursor-pointer hover:opacity-90"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </Link>
          </section>
          <button
            className="focus:shadow-outline w-72 rounded bg-teal-500 px-4 py-2 font-bold text-white hover:bg-opacity-90 focus:outline-none"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
