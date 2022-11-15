

const mealBtn = document.getElementById("meal-ideas")
const getMeal = () => {
    axios.get("")
        .then(res => {
            const data = res.data;
            
            Swal.fire({
                title: data,
                imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F04%2Fnaruto-ramen-ichiraku-official-twtr.jpg?w=960&cbr=1&q=90&fit=max',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonColor: "#AF1212 ",
                confirmButtonText: '美味しそう' 
              })
     });
};

mealBtn.addEventListener('click', getMeal)

const groceryForm = document.querySelector('#grocery-form')
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

    axios.post(body)
    .then((res) => {
        let data = res.data
        for(let i = 0; i < data.length; i++){
            displayGroceries(data[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
    function deleteList(){
        axios.delete()
        .then((res) => {
            let data = res.data
            for(let i = 0; i < data.length; i++){
                displayGroceries(data[i])
                
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }


    function displayGroceries(grocery) {
        let container = document.createElement('div')
        let item = document.createElement('label')
        let checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.name = "checkbox";
                    checkbox.value = "checkbox";
                    checkbox.id = "cb";
    
                  

        item.innerHTML = `${grocery.item} qty: ${grocery.quantity}`

        container.appendChild(checkbox)
        container.appendChild(item)    
        container.classList.add('grocery-container')
    
        resultsSection.appendChild(container)
    }
    
    function eraseResultsSection() {
        resultsSection.innerHTML = ''
    }
    

groceryForm.addEventListener('submit', createGrocery)
deleteAll.addEventListener('click', deleteList)






