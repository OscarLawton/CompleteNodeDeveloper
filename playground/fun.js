/* const square = function(){
    return x * x
} */
/* const square = (x) => {
    return x * x;
} */

/* const square = (x) => x * x
console.log(square(5)); */

const event = {
    name: "Birthday Party",
    guestList: ["greg", "dana", "janice", "paul", "samantha"],
    printGuestLis() {
        console.log("Guess list for " + this.name)
        this.guestList.forEach((e) => {
            console.log(e);
        });
    }
}

event.printGuestList()