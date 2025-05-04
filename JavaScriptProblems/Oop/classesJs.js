function book(title, author){
    this.title = title
    this.author = author
}

const newbook = new book('Ramayana', 'Balmiki')

console.log(typeof(newbook));
console.log(newbook)