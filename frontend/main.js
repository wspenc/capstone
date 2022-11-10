const mealBtn = document.getElementById("meal-ideas")
const getMeal = () => {
    axios.get("http://localhost:4000/api/meal/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

mealBtn.addEventListener('click', getMeal)

const groceryForm = document.querySelector('#grocery-form')
// const enterBtn = document.querySelector("#enter");
const groceryItem = document.querySelector("#grocery-item");
const itemCount = document.querySelector("#quantity");
const deleteAll = document.querySelector('#delete-form');
const resultsSection = document.querySelector("#results-section")

const createGrocery = (event) => {
    event.preventDefault()
    eraseResultsSection()

    const body = {
        item: groceryItem.value,
        quantity: itemCount.value,
    }
    groceryItem.value = ''
    itemCount.value = ''

    axios.post("http://localhost:4000/api/create/", body)
    .then((res) => {
        let data = res.data
        for(let i = 0; i < data.length; i++){
            dsiplayGroceries(data[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
    function deleteList(event){
        // event.preventDefault()
        // eraseResultsSection()

        deleteGrocery = deleteAll.value

        axios.delete("http://localhost:4000/api/delete-all/" + deleteGrocery)
        .then((res) => {
            let data = res.data
            for(let i = 0; i < data.length; i++){
                dsiplayGroceries(data[i])
            }
        })
        .catch((err) => {
            console.log(err)
        })

        deleteAll.value = ''
    }


    function dsiplayGroceries(grocery) {
        let container = document.createElement('div')
        let item = document.createElement('li')
        let quantity = document.createElement('li')
    
        item.innerHTML = grocery.item
        quantity.innerHTML = 'qty: ' + grocery.quantity
    
    
        container.appendChild(item)
        container.appendChild(quantity)
    
        container.classList.add('grocery-container')
    
        resultsSection.appendChild(container)
    }
    
    function eraseResultsSection() {
        resultsSection.innerHTML = ''
    }
    

groceryForm.addEventListener('submit', createGrocery)
// enterBtn.addEventListener('submit', createGrocery)
deleteAll.addEventListener('submit', deleteList)




//-----Checkbox----//
// var i = 1;      // Just a counter.

// function createChk(obj) {
//     if (obj.value !== '') {
      
//       // Create checkbox (its a input box of type checkbox).
//       var chk = document.createElement('input');  
      
//       // Specify the type of element.
//       chk.setAttribute('type', 'checkbox');
//       chk.setAttribute('id', 'prodName' + i);  // Set an ID.
//       chk.setAttribute('value', obj.value);
//       chk.setAttribute('name', 'products');

//       // Create label for checkbox.
//       var lbl = document.createElement('label');  
//       lbl.setAttribute('for', 'prodName' + i);

//       // Create text node and append it to the label.
//       lbl.appendChild(document.createTextNode(obj.value));

//       // Append the newly created checkbox and label to the <p>.
//       container.appendChild(chk);
//       container.appendChild(lbl);

//       obj.value = '';
//       document.getElementById(obj.id).focus();

//       i = i + 1;
//     }
// }


