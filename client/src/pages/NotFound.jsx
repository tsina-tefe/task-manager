import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>Page Not Found</h2>
      <Link to={"/"}>Back Home</Link>
    </>
  );
};

export default NotFound;
