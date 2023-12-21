// import React, { useContext, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { Context , server} from "../main";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Login = () => {
//   const [password, setpassword] = useState("");
//   const [email, setemail] = useState("");

//   const { isAuthenticated, setisAutheticated, loading, setloading } = useContext(Context);

//   if (isAuthenticated) return <Navigate to={"/"} />;

//   const submitHandler = async () => {
//     e.preventDefault();
//     setloading(true);
//     try {
//       // setloading(true);
//       const  data  = await axios.post(
//         `${server}/users/login`,
//         {
//           email,
//           password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setisAutheticated(true);
//       setloading(false);
//     } catch (error) {
//       toast.error("error occured");
//       // console.log("error", error);
//       setisAutheticated(false);
//     }
//   };
//   return (
//     <div className="login">
//       <section>
//         <form onSubmit={submitHandler}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setpassword(e.target.value)}
//           />
//           <button disabled={loading} type="submit">Login</button>
//           <h4>Or</h4>
//           <Link to={"/register"}>Sign Up</Link>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Login;

import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../main";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={loading} type="submit">
            Login
          </button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
