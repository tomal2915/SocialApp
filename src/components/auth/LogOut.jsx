import logout from "../../assets/icons/logout.svg";
import {useNavigate} from "react-router-dom";

function LogOut() {
    const navigate = useNavigate();

    const handleLOgOut = () => {
        navigate("/login");
    };
  return (
    <button className="icon-btn"onClick={handleLOgOut}>
      <img src={logout} alt="Logout" />
    </button>
  );
}

export default LogOut;
