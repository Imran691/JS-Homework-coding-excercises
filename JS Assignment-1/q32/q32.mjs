//checkning user names

let currentUsers = ["Ali", "Zaid", "Haris", "Kiran", "Faisal"];

let newUsers = ["Tahira", "ZAID", "Salman", "Kiran", "Javeria"];

for (var i = 0; i < newUsers.length; i++) 
    if(currentUsers[i].toLocaleLowerCase() === newUsers[i].toLocaleLowerCase()) {
        console.log("Please enter a new user name.");
    } else {
        console.log("User name is available");
    }