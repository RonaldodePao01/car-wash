import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../GlobalState";
import { toast } from "react-toastify";
// validation functions for form data
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../utils/formValidation";

const SignUp = () => {
  // getting functions from context
  const { updateUserDetails, updateCarDetails } =
    useContext(GlobalStateContext);

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numCars, setNumCars] = useState(1);
  const [carDetails, setCarDetails] = useState([{ brand: "", type: "" }]);

  // usenavigate => navigating from signup page to subscriptions page
  const navigate = useNavigate();

  // function that updates users car details that are entered in the form
  const handleCarDetailsChange = (index, field, value) => {
    const updatedCars = [...carDetails];
    updatedCars[index][field] = value;
    setCarDetails(updatedCars);
  };

  // function that updates the number of cars user enters
  const handleNumCarsChange = (e) => {
    const carCount = parseInt(e.target.value);
    setNumCars(carCount);

    // Adjust carDetails length based on number of cars selected
    const updatedCars = [...carDetails];
    if (carCount > carDetails.length) {
      for (let i = carDetails.length; i < carCount; i++) {
        updatedCars.push({ brand: "", type: "" });
      }
    } else {
      updatedCars.length = carCount;
    }
    setCarDetails(updatedCars);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    // validation function from utils for invalid name
    const nameError = validateName(name);
    if (nameError) {
      // display toast error notification
      toast.error(nameError);
      return;
    }
    // validation function from utils for invalid email
    const emailError = validateEmail(email);
    if (emailError) {
      // display toast error notification
      toast.error(emailError);
      return;
    }
    // validation function from utils for invalid password
    const passwordError = validatePassword(password);
    if (passwordError) {
      // display toast error notification
      toast.error(passwordError);
      return;
    }
    // Update user state in context
    updateUserDetails({ name, email, password });
    updateCarDetails(carDetails);

    // Navigate to subscriptions page after signup is successful
    toast.success("Signup successful! Redirecting to subscriptions...");
    navigate("/subscriptions");
  };

  return (
    <>
      <form
        className="lg:w-[35%] mt-5 mb-10 mx-auto bg-blue-400 rounded-[50px] p-10 px-4 xs:px-0 xs:rounded-xl"
        onSubmit={handleSubmitData}
      >
        <h1 className="text-6xl font-bold flex justify-center mb-2">
          Welcome!
        </h1>
        <p className="text-center mb-3">
          Sign up and enter your details to get your subscription started
        </p>

        <div className="w-[50%] flex flex-col my-0 mx-auto justify-center">
          <label>
            <p className="mt-2 mx-0 text-lg text-black">Name</p>
            <input
              autoFocus
              className="rounded-md p-2 border-0 shadow-none w-full"
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <p className="mt-2 mx-0 text-lg text-black">Email</p>
            <input
              className="rounded-md p-2 border-0 shadow-none w-full"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p className="mt-2 mx-0 text-lg text-black">Password</p>
            <p className=" text-black text-sm">
              must contain at least 1 uppercase letter and 1 number
            </p>
            <input
              className="rounded-md p-2 border-0 shadow-none w-full"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <p className="mt-2 mx-0 text-lg text-black">Number of Cars</p>
            <select value={numCars} onChange={handleNumCarsChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </label>

          {carDetails.map((car, i) => (
            <div key={i}>
              {/* conditional rendering based on number of cars entered*/}
              {carDetails.length > 1 && (
                <h4 className="text-black mt-4">Car {i + 1}</h4>
              )}
              <label>
                <p className="mx-0 text-lg text-black">Car Brand</p>
                <input
                  className="rounded-md p-2 border-0 shadow-none w-full"
                  type="text"
                  value={car.brand}
                  required
                  onChange={(e) =>
                    handleCarDetailsChange(i, "brand", e.target.value)
                  }
                />
              </label>
              <label>
                <p className="mt-2 mx-0 text-lg text-black">Car Type</p>
                <input
                  className="rounded-md p-2 border-0 shadow-none w-full"
                  type="text"
                  value={car.type}
                  required
                  onChange={(e) =>
                    handleCarDetailsChange(i, "type", e.target.value)
                  }
                />
              </label>
            </div>
          ))}

          <button
            className="rounded-md my-4 py-2 px-1 bg-black text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
