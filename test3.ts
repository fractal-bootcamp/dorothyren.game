//Score of a String Leetcode

function convertTemperature(celsius: number): number[] {
    const Kelvin = (celsius) + 273.15
    const Fahrenheit = (celsius) * 1.80 + 32.00
    const ans = [];

    ans.push(Kelvin, Fahrenheit)

    return (
        ans
    )
};

console.log(convertTemperature(32))
    ;