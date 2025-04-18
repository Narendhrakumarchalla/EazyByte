import { useContext } from "react";
import  AuthContext  from "../contexts/AuthContent";
 const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
