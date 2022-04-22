// Return false if not a number
// validateNumber = (number) => typeof number !== "number" ? console.log("Not a number") : console.log("tis indeed a number");
// validateValidNumber = (number) => number <= 3 && number >= 0 ? console.log("number in range") : console.log("number not in range");

validateNumber = (number) => typeof number === "number";
validateValidNumber = (number) => number <= 3 && number >= 0;


const poll = {
    question: "What is your favorite programming language?",
    options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const answer = Number(prompt("Your answer"))

        if( validateNumber(answer) && validateValidNumber(answer) ){
            this.answers[answer]++;
            console.log("adding")
        } else {
            console.log("not added, number either nan or out of bounds")
        }
    },

}

console.log(poll)
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

console.log(poll)
// poll.registerNewAnswer()
// console.log(poll)
