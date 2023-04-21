/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { booksOnSale } from '../../api/bookData';
import BookCard from '../../components/BookCard';
import { useAuth } from '../../utils/context/authContext';

export default function BooksOnSale() {
  const { user } = useAuth();
  const [saleBooks, setSaleBooks] = useState([]);

  const getAllBooksOnSale = () => {
    booksOnSale(user.uid).then(setSaleBooks);
  };

  useEffect(() => {
    getAllBooksOnSale();
  }, []);

  return (
    <div>{saleBooks.map((book) => (
      <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllBooksOnSale} />
    ))}
    </div>
  );
}
