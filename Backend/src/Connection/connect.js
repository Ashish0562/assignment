const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Ashish:nlbVcppCXlauYvAX@insta.t49o2tv.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Login successful")})
    .catch((err) => {
    console.log(err)
});

