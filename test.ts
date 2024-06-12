
function scoreOfString(s: string): number {

    let total = 0
    for (let i = 0; i < s.length - 1; i++) {
        console.log(s.charCodeAt(i))
        total = total + Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i))
    }

    return total
};

console.log(scoreOfString("hello"))

//put each distinct letter using .split method into an array
//now you have an array of letters in "string"
//loop through the array to find what each value is for each letter using .charCode
//find absolute value using math.abs
//add all values together 


