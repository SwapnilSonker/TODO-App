// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Header from "./components/Header";
// import { Toaster } from "react-hot-toast";
// import { useContext, useEffect } from "react";
// import { Context, server } from "./main";
// import axios from "axios";

// function App() {
//   const { setuser, setisAutheticated, setloading } = useContext(Context);
//   useEffect(() => {
//     setloading(true);
//     axios
//       .get(`${server}/users/me`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         console.log("res", res);
//         setuser(res?.data?.user);
//         setisAutheticated(true);
//         setloading(false);
//       })
//       .catch((error) => {
//         // console.log("error", error);
//         setuser({});
//         setisAutheticated(false);
//         setloading(false)
//       });

//     // console.log("res" , user);
//   }, []);

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//       <Toaster />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context, server } from "./main";

function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
