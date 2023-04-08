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

