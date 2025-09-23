class Book { //class keyword used to declare a class followed by the class name Book
  constructor(title, author, year){//constructor's a special method used to instantiate new Book objects with distinct properties 
    this.title = title //instance property (unique for each instance of the Book class)
    this.author = author //instance property
    this.year = year //instance property
  }
  logDetails(){//method that acts on the instance's properties
    console.log(`${this.title} is quite an interesting text by ${this.author}, published in ${this.year}!`)
  }
  static comment(){//static methods belong to the class itself and not the instances
    return `You should read more!`
  }
}


let book1 = new Book("Athena the Brave", "Suzanne Williams", 2010)//creating a new instance of the Book class called book1
book1.logDetails();//accessing the method of this particular instance of the Book class
console.log(Book.comment())//logging the static method which belongs to the class itself and not the instances
