import main from "./src/script/view/main.js";
import "./src/script/component/app-bar.js";

document.addEventListener("DOMContentLoaded", main);

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 

const user = {
    introduce: name => console.log(`Nama saya ${name}`)
}

user.introduce('haha')

const make = (ing) => {
    return new Promise((resolve, reject) => {
        if(ing){
            resolve("yes")
        } else {
            reject("no")
        }
    })
}

make()
.then(console.log)
.catch(console.log)