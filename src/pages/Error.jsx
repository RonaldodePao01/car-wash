import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">
        {"Oops! We can't seem to find the page you're looking for."}
      </p>
      {/* let users navigate to home page if page not found */}
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};
export default Error;
