import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails'
import { v4 as uuidv4 } from 'uuid'

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                { books.map(book => {
                    return ( <BookDetails book={book} key={uuidv4(book)} /> )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read. Hello free time :)</div>
    )
}
 
export default BookList;