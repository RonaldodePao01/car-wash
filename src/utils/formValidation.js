// name must be letter characters only
export const validateName = (name) => {
  if (typeof name !== "string" || name.trim() === "") {
    return "Name must contain characters";
  }
  if (!/^[A-Za-z\s]+$/.test(name)) {
    return "Name can only contain letters";
  }
  return "";
};

// email must match standard email address
export const validateEmail = (email) => {
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Please provide a valid email";
  }
  return "";
};

// password must be min 7 characters and contain at least 1 uppercase letter and 1 number
export const validatePassword = (password) => {
  if (password.length < 7) {
    return "Password must be at least 7 characters long.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number.";
  }
  return "";
};
