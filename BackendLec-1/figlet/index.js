const figlet = require("figlet");
// const colors= require("colors");

figlet("TANISHA", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    // console.log(data.rainbow);
    console.log(data);

});



