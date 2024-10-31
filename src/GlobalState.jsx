import { useState, createContext } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [user, setUser] = useState({
    details: { name: null, email: null, password: null },
    carDetails: [{ brand: "", type: "" }],
    numCars: 1,
    subscriptionFee: null,
    location: "TygerValley",
  });

  // function to update user details
  const updateUserDetails = (details) => {
    setUser((prev) => ({
      ...prev,
      details,
    }));
  };

  // Function to update car details
  const updateCarDetails = (carDetails) => {
    setUser((prev) => ({
      ...prev,
      carDetails,
      numCars: carDetails.length,
    }));
  };

  // Function to update subscription fee (adjusted to number of cars registered)
  const updateSubscriptionFee = (fee) => {
    setUser((prev) => ({
      ...prev,
      subscriptionFee: fee * user.numCars,
    }));
  };

  // Function to update location user chooses
  const updateLocation = (location) => {
    setUser((prev) => ({
      ...prev,
      location,
    }));
  };
  return (
    <GlobalStateContext.Provider
      value={{
        user,
        updateUserDetails,
        updateCarDetails,
        updateSubscriptionFee,
        updateLocation,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
