import logout from "../../assets/icons/logout.svg";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function LogOut() {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const handleLOgOut = () => {
        setAuth({});
        navigate("/login");
    };
  return (
    <button className="icon-btn"onClick={handleLOgOut}>
      <img src={logout} alt="Logout" />
    </button>
  );
}

export default LogOut;
