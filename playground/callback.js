/* setTimeout(()=>{
    console.log("I'm a boss");
},2000);

const names = ['Andrew', "Jenny", "Jess"]

const shortNames = names.filter((name) => {
    return names.length <= 4
})

const geocode = (address, callback) => {
    const data = {
        latitude: 0,
        longtitude: 0
    }

    return data
}

const data = geocode('Philadelphia')

console.log(data) */

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callB) => {
    setTimeout(() => {
        return callB(a + b)
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
});