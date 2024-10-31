MongoDB for the database-

1. Models:

   const userSchema = new mongoose.Schema({
   name: {type: String, required: true},
   email: {type: String, required: true, unique: true},
   password: {type: String, required: true},
   cars: [{brand: String, model: String}]
   })

   const subscriptionSchema = new mongoose.Schema({
   userId: {type: mongoose.Schema.types.ObjectId, ref: "User", required: true},
   tier: {type: String, enum: ['deluxe', 'premium', 'basic'], required: true},
   totalPrice: Number,
   subscribeDate: {type: Date, default: Date.now},
   cancellationDate: {type: Date}
   })

   const LocationSchema = new mongoose.Schema({
   location: {
   type: String,
   required: true},
   })

2. Key API endpoints:
   // add new user
   POST /api/users/signup
   // get subscription plans
   GET /plans
   // user selects subscription
   POST /api/subscriptions
   //get locations (branches)
   GET /api/locations

   Authentication
   JWT to authenticate login credentials

3. Front-End and Back-End Interaction
   3.1. use axios for POST request to server when user is signing up (adding user data to DB)
   3.2. successful login - GET request to server to get available subscription plans
   3.3. POST request when user chooses their subscription plan and update state (add users sub choice to DB)
   3.4 GET request to get locations (fetching available locations from DB)
   3.5 POST request to store users location choice
