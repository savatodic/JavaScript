function createBook(title, author, readingStatus) {
    return {
      title: title,
      author: author,
      readingStatus: readingStatus,
  
      displayStatus: function() {
        if (this.readingStatus) {
          alert(`Already read '${this.title}' by ${this.author}.`);
        } else {
         alert(`You still need to read '${this.title}' by ${this.author}.`);
        }
      }
    };
  }
  
  const title = prompt('Enter the book title:');
  const author = prompt('Enter the author:');
  const readingStatus = confirm('Have you already read the book?');

  const book = createBook(title, author, readingStatus);
  book.displayStatus();