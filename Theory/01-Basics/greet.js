// window.addEventListener("load", initEvent);

// function initEvent() {
//     document.querySelector("#btn").addEventListener("click", greet); 
// }

// wait for loading window -> complete HTML
// Then it will load JS
// window.addEventListener("load", () => {
//     // when we click on button then it will call greet
//     document.querySelector("#btn").addEventListener("click", greet); 
// });


document.querySelector("#btn").addEventListener("click", greet); 

function greet() {
    console.log("Hello User...");

    let box_1 = document.querySelector("#box");
    let username = box_1.value;
    // Truthy and Falsy
    // null, undefined, 0, ""
    if(!username) {
        alert("Please enter a valid username");
    }
    else {
        console.log(`Hello: ${username}`);
        document.querySelector("#output").innerText = username;            
        box_1.value = "";
    }
}
