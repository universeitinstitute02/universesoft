// import { useContext } from "react";
// import { AuthContext } from "../context/Login.Context";
// import { Navigate, useLocation } from "react-router-dom";
// import PropTypes from 'prop-types'
// // import Loader from "./shared/Loader";

// const Private = ({ children }) => {
//   const token = localStorage.getItem("token");
//   const {
//     loggedUser: [loginInfo, setLoginInfo],
//   } = useContext(AuthContext);
//   const location = useLocation();

//   // if (loader) {
//   //    <Loader />
//   // }

//   return (
//     <div>
//       {token && loginInfo ? (
//         children
//       ) : (
//         <Navigate to="/login" state={{ prev: location.pathname }} />
//       )}
//     </div>
//   );
// };
// Private.propTypes = {
//   children: PropTypes.object
// }

// export default Private;
