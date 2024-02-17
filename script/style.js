
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


        // alert a popup if the lowest budget
        const budget = document.getElementById("budget").innerText;
        const convertedBudget = parseInt(budget);
        if(convertedBudget - parseInt(cartPrice) <0 ){
            alert("Please erne more and come back");
            return;
        }
        document.getElementById("budget").innerText = convertedBudget - parseInt(cartPrice);
        


        // show the total cost undet the cart
        const totalCost = document.getElementById("total-cost").innerText;
        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(cartPrice);
        document.getElementById("total-cost").innerText = sum;

        // show the grand total unde the cart

        const grandTotal = document.getElementById("grand-total").innerText;
        const convertGrandTotal = parseInt(grandTotal);
        const sum2 = convertGrandTotal + parseInt(cartPrice);
        document.getElementById("grand-total").innerText = sum2;


        setInnerText("card-count", count);
    });
}


function grandTotalElement(category) {
    const totalCost = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(totalCost);

    if (category === "bus") {
        setInnerText("grand-total", convertedTotalCost + 100);
    }
    else if (category === "train"){
        setInnerText("grand-total", convertedTotalCost - 200);
    }
    else if (category === "flight"){
        setInnerText("grand-total", convertedTotalCost + 500);
    }
    else{
        setInnerText("grand-total", convertedTotalCost);
    }
}








