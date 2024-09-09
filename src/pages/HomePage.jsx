import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

function HomePage() {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div>
      <p>Home page</p>
      <Link to="/myProfile">go to profile</Link>
    </div>
  );
}

export default HomePage;
