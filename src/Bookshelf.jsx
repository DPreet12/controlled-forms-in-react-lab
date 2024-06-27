import { useState } from 'react';

import "./App.css"

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [ newBook, setNewbook] = useState({
        "title": "" ,
        "author" : ""
    });

    const handleInputChange = (event) => {
        setNewbook({...newBook, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('We no longer navigate away from this page');
        setBooks([...books, {title: newBook.title, author: newBook.author}]);
        setNewbook({title: "", author: ""})
    }

    return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title"
        name="title"
        value={newBook.title}
        onChange={handleInputChange} />

         <label htmlFor="author">Author:</label>
        <input id="author"
        name="author"
        value={newBook.author}
        onChange={handleInputChange} />
        <button type="submit">Add a book</button>
    </form>
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}
    {books.map((book, index) => (

      <div key = {index} className='bookList'>
   <h2> {book.title}</h2>
   <p> {book.author}</p>
      </div>
    )   
    )}
  </div>
</div>
    );
};

export default Bookshelf;