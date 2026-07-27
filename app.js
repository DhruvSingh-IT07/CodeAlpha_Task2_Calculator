const input = document.getElementById("inputBox");

const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if(value === "="){

            try{

                let result = expression
                    .replace(/÷/g,"/")
                    .replace(/×/g,"*");

                expression = eval(result).toString();

                input.value = expression;

            }
            catch{

                input.value = "Error";

                expression = "";
            }

        }

        else if(value === "AC"){

            expression = "";

            input.value = "";

        }

        else if(value === "DEL"){

            expression = expression.slice(0,-1);

            input.value = expression;

        }

        else{

            expression += value;

            input.value = expression;
        }

    });

});