let c = document.querySelectorAll(".formGrp")
let btn = document.querySelector("form");
let pass = document.querySelector(".PassWord");
let ret = document.querySelector(".Retype");
const re = /^\S+@\S+\.\S+$/;


btn.addEventListener("submit", () => {

    c.forEach(elementt => {
        let val = elementt.querySelector("input").value.trim();
        let input = elementt.querySelector("input")
        let para = elementt.querySelector("p")

        if (val === "") {
            elementt.classList.add("required")
        } else {
            elementt.classList.remove("required")
        }

        //email
        if (input.classList.contains("Email")) {
            if (!re.test(val) && val !== "") {
                elementt.classList.add("required")
                para.innerHTML = "Enter the Valid '@' '.' Email!";
            }
        }

        //pass
        if (input.classList.contains("Retype")) {
            if (pass.value !== ret.value) {
                elementt.classList.add("required")
                para.innerHTML = "Does not match the password!";
            }
        }


    });
});
