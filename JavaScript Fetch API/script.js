const body = document.body;
const popup = document.createElement("div");
const loading = document.createElement("div");

function myloading() {
    loading.classList.add("loading");
    loading.innerHTML = "loading...";
    popup.appendChild(loading);
    popup.classList.add("popup");
    body.appendChild(popup);
}



// document.querySelector("#btn1").addEventListener("click", function() {
//     getData();
// });
getData();
// const getData2= async function() {
//     let url = "https://reanweb.com/api/teaching/get-menu.php";
//     const rp=await fetch(url);
//     const rs=await rp.json();
//     let txt="";
//     rs.map((e,i)=>{
//         txt += `<li>
//             <a href="#">
//                 ${e["name"]}
//             </a>
//         </li>`;
//     });
//     document.querySelector(".menu").children[0].innerHTML = txt;
// }        
// getData2();


async function getData() {
    myloading();
    let url = "https://reanweb.com/api/teaching/get-menu.php";
    const rp = await fetch(url);
    const rs = await rp.json();
    let txt = "";
    rs.map((e, i) => {
        txt += `<li><a href="#">${e["name"]}</a></li>`;
    });
    document.querySelector(".menu").children[0].innerHTML = txt;
    document.querySelector(".popup").remove();
}