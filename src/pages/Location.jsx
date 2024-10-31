import { useContext } from "react";
import { GlobalStateContext } from "../GlobalState";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Branch = () => {
  // Get the global location state and the function to update it
  const { location, updateLocation } = useContext(GlobalStateContext);

  const locations = [
    "TygerValley",
    "Table View",
    "Pinelands",
    "Durbanville",
    "Somerset West",
  ];

  const handleLocationChange = (e) => {
    console.log(e.target.value);
    updateLocation(e.target.value); // Update local state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLocation(location); // Update global state
  };

  return (
    <div className="flex flex-col justify-center mx-auto mt-20">
      <h1 className="text-4xl text-center mb-4">Last step!</h1>
      <h1 className="text-xl mx-auto xs:text-2xl xs:text-center">
        Select Your Preferred Car Wash Location
      </h1>
      <div className="mx-auto mt-3">
        <form
          className="bg-blue-500 m-5 p-10 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h3 className="text-3xl">Choose a location</h3>

          <select
            className="p-2 w-full mt-2  rounded-md"
            value={location}
            onChange={handleLocationChange}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <Link to="/">
            <button
              onClick={() => toast.success("sign up complete!")}
              className="bg-black text-white p-3 rounded-xl mx-auto mt-4"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>

      {location && <p>Your selected location: {location}</p>}
    </div>
  );
};

export default Branch;
