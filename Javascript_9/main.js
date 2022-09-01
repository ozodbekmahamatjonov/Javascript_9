// let element = document.querySelector(".container p");
// // document.getElementsByTagName("div");
// console.log(element);


// let elements = document.querySelectorAll("img");
// console.log(elements);
// elements[0].src = "./computer.jpg";
// elements[0].alt = "Computer Costs";

// function validate() {
//     event.preventDefault();
//         let form = document.querySelector('input').value;
//         let h1 = document.querySelector('h1');
//         if (form == "") {
//             h1.innerText = " Bad ";
//         }
//         else {
//             h1.innerText = " Success ";
//         }
//     }



function myFunction() {
    let width = document.querySelector('.w').value;
    let height = document.querySelector('.h').value;
    let border = document.querySelector('.b').value;

    let box = document.getElementsByClassName('box');
    box.style.width = width;
}
myFunction()