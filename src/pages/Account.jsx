import { useContext } from "react";
import { GlobalStateContext } from "../GlobalState";

const Account = () => {
  //get user state from context
  const { user } = useContext(GlobalStateContext);
  return (
    <div className=" flex-col text-center mt-40 ">
      <div className="flex flex-col mx-auto w-[30%]  xs:w-[80%] bg-blue-400 rounded-2xl py-8 mb-6">
        <h1 className="text-4xl mb-5">Account details</h1>
        <h2>Name</h2>
        <p className="mb-4">{user.details.name}</p>
        <h2>Email</h2>
        <p className="mb-4">{user.details.email}</p>
        <h2 className="mt-2">Cars registered for service:</h2>
        {/* map through carDetails state, if multiple cars: display different element */}
        {user.carDetails.map((car, index) => {
          return (
            <div key={index}>
              {user.carDetails.length > 1 && (
                <h2 className="text-lg">car {index + 1}:</h2>
              )}
              <p className="mb-4">
                {car.brand} {car.type}
              </p>
            </div>
          );
        })}
        <h2 className="mt-2">Subscription fee:</h2>
        <p className="mb-2">{user.subscriptionFee}</p>
        <h2 className="mt-2">Location:</h2>
        <p className="mb-2">{user.location}</p>
      </div>
    </div>
  );
};
export default Account;
