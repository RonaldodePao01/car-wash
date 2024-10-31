import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../GlobalState";

const Subscriptions = () => {
  // get state and function from context
  const { user, updateSubscriptionFee } = useContext(GlobalStateContext);
  let numCars = user.numCars;

  const navigate = useNavigate();

  return (
    <>
      <h1 className="mt-12 text-center text-5xl">Choose your subscription</h1>
      <h3 className="mt-4 text-center text-lg">
        Disclaimer: Prices are adjusted based on the number of cars you have
        registered
      </h3>
      <div className="my-12 mx-0 flex flex-col gap-6">
        <div className=" xs:w-[70%] w-[30%] flex flex-col my-0 mx-auto border-2 rounded-md p-4 bg-yellow-400  text-black">
          <h3 className="ml-2">Deluxe</h3>
          {/* price is adjusted based on number of cars */}
          <h3 className="ml-2">R{300 * numCars}</h3>
          <p className="m-2">
            Ceramic Sealant, FastWax, Wheel Bright, Underbody, Tire Shine
          </p>
          <button
            className="m-2 py-2 px-4 w-fit bg-black text-white rounded-md"
            // update subscription when btn is clicked
            onClick={() => {
              updateSubscriptionFee(300);
              //navigate to next page (location )
              navigate("/location");
            }}
          >
            Select
          </button>
        </div>
        <div className=" xs:w-[70%] w-[30%] flex flex-col my-0 mx-auto border-2 rounded-md p-4 bg-slate-400 text-black">
          <h3 className="ml-2">Premium</h3>
          {/* price is adjusted based on number of cars */}
          <h5 className="ml-2">R{200 * numCars}</h5>
          <p className="m-2">FastWax, Wheel Bright, tire shine</p>
          <button
            className="m-2 py-2 px-4 w-fit bg-black text-white rounded-md"
            onClick={() => {
              updateSubscriptionFee(200);
              navigate("/location");
            }}
          >
            Select
          </button>
        </div>
        <div className="xs:w-[70%] w-[30%] flex flex-col my-0 mx-auto border-2 rounded-md p-4 bg-amber-800 text-black">
          <h3 className="ml-2">Basic</h3>
          <h5 className="ml-2">R{120 * numCars}</h5>
          <p className="m-2">Clear Coat, Wheel Bright, Underbody</p>
          <button
            className="m-2 py-2 px-4 w-fit bg-black text-white rounded-md"
            onClick={() => {
              updateSubscriptionFee(120);
              navigate("/location");
            }}
          >
            Select
          </button>
        </div>
      </div>
    </>
  );
};
export default Subscriptions;
