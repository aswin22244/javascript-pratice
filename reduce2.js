const items = [
    {
        name: "asus",
        price: "70000"
    },
    {
        name: "lenovo",
        price: "65000"
    },
    {
        name: "mac",
        price: "85000"
    }
];

const totalprice = items.reduce((total, item) => {
    console.log(total);
    console.log(item.name);
    console.log(item.price);
    // Convert price string to a number using parseInt or parseFloat
    return total + parseInt(item.price); // Using parseInt for integer price values
    // return total + parseFloat(item.price); // Use parseFloat for floating point price values
}, 0);//first value of total is 0


console.log(totalprice);
