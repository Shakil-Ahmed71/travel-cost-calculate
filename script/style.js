
const allBtn = document.getElementsByClassName('btn-primary');
let count = 0;

for (const btn of allBtn){
    btn.addEventListener("click", function (e) {
        count = count + 1;


        // show the name and price under the cart box
        const cartNameShow = e.target.parentNode.parentNode.childNodes[1].innerText;
        const cartPrice = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-place-container');

        const li  = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = cartNameShow;
        const p2 = document.createElement('p');
        p2.innerText = cartPrice;

        li.appendChild(p);
        li.appendChild(p2);
        li.style.display = "flex";
        li.style.gap = "15px";
        li.style.fontSize = "20px";
        selectedContainer.appendChild(li);



        // show the total cost undet the cart
        const totalCost = document.getElementById("total-cost").innerText;
        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(cartPrice);
        document.getElementById("total-cost").innerText = sum;

        

        setInnerText("card-count", count);
    });
}









