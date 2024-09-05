let divData = document.getElementById("divData")

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products",{method: "GET"});
    promesa.then( (response) => {
            response.json().then(
                (data)=>{
                    console.log(data);
                    createCards(data);
        }).catch((error)=> console.log("Prolema con el json", error));
    }).catch((err)=> console.log("Existió un problema con la solicitud", err));
}//getData

function createCards(products){
    console.log(products.length);
    console.log(products[0].name);

    products.forEach(product => {
        divData.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description.slice(0,20)}...</p>
        <p class="card-text">Precio <strong>$${product.price}</strong></p>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>
    </div>`)
    })
    
    //crear una Card por cada producto con sus datos esenciales
    // de preferencia foreach: name, description, image, price
}//createCards
getData();
