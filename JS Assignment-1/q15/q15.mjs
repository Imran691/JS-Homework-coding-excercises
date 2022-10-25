//changing guests list

let myGuests = ["Farooq", "Zaid", "Salman", "Aslam"];

console.log("Hi " + myGuests[0] + ", would you join me for dinner today?");

console.log("Hi " + myGuests[1] + ", would you join me for dinner today?");

console.log("Hi " + myGuests[2] + ", would you join me for dinner today?");

console.log("Hi " + myGuests[3] + ", would you join me for dinner today?");

console.log("Sorry to say but " + myGuests[2] + ", will not be able to join us for dinner today due to some engagemants.");



myGuests.splice(2, 1, "Naveed");



console.log("Hi " + myGuests[0] + ", would you join me for dinner today?");

console.log("Hi " + myGuests[1] + ", would you join me for dinner today?");

console.log("Hi " + myGuests[2] + ", would you join me for dinner today?");

console.log("Hi " + myGuests[3] + ", would you join me for dinner today?");

