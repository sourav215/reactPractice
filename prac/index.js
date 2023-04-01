async function getData() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (err) {
    console.log(err);
  }
}

function displayData(allItems) {
  let container = document.querySelector(".container");
  container.innerHTML= "";

  allItems.forEach((ele, i) => {
    let div = document.createElement("div");
    let title = document.createElement("h2");
    title.textContent = ele.title;
    let img = document.createElement("img");
    img.src = ele.image;
    let description = document.createElement("p");
    description.textContent  = ele.description;
    div.append(title, img, description);
    container.append(div);


  });
}

document.querySelector("#button").addEventListener("click", getData);
