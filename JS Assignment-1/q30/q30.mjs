//hello admin

let userNames = ["admin", "Ali", "Gia", "Ayra", "Zaid"];

for (var i = 0; i < userNames.length; i++)
if (userNames[i] === "admin") {
    console.log("Hello " + userNames[i] + ", would you like to see a status report?");

} else if (userNames[i] !== "admin") {
    console.log("Hello " + userNames[i] + ", thank you for logging in again.");
}


