import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <main className="xs:flex-wrap flex w-[100vw] mt-30 items-center h-[90vh] justify-around ">
      <div className="xs:w-[100%]  w-[50%] flex justify-end mr-6">
        <h1 className="xs:text-5xl  text-8xl font-bold max-w-[10ch] leading-tight">
          Keep Your <span className="text-blue-400">Car Clean</span> Always
        </h1>
      </div>
      <div className="w-[50%] mt-[8%]">
        <p className="max-w-[45ch] pb-4">
          We offer dedicated, professional and efficient servicing from wash to
          dry, valet with vacuum and silicone tyre service.
        </p>
        {/* CTA */}
        <Link to="/signup">
          <p className="text-blue-600 inline">
            Sign up <FontAwesomeIcon icon={faArrowRightLong} />
          </p>
        </Link>

        <img
          className="w-[80%]"
          src="/images/hero.jpg"
          alt="powerwashing car"
        />
      </div>
    </main>
  );
};
export default Landing;
