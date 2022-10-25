// adding more guests

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

console.log("Hi firends, luckily a bigger table is available at the restaurant.");



myGuests.unshift("Zain");


myGuests.splice(3, 0, "Nazim");


myGuests.push("Ali");


console.log("Hey " + myGuests[0] + ", can you please join me for dinner today?");

console.log("Hey " + myGuests[1] + ", can you please join me for dinner today?");

console.log("Hey " + myGuests[2] + ", can you please join me for dinner today?");

console.log("Hey " + myGuests[3] + ", can you please join me for dinner today?");

console.log("Hey " + myGuests[4] + ", can you please join me for dinner today?");

console.log("Hey " + myGuests[5] + ", can you please join me for dinner today?");

console.log("Hey " + myGuests[6] + ", can you please join me for dinner today?");

