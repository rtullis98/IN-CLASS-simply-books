/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import AuthorCard from '../../components/AuthorCard';
// eslint-disable-next-line import/named
import { getFavoriteAuthor } from '../../api/authorData';

export default function FavoriteAuthor() {
  const { user } = useAuth();
  const [favoriteAuthor, setFavoriteAuthor] = useState([]);

  const getAllFavoriteAuthors = () => {
    getFavoriteAuthor(user.uid).then(setFavoriteAuthor);
  };

  useEffect(() => {
    getAllFavoriteAuthors();
  }, []);

  return (
    <div>{favoriteAuthor.map((author) => (
      <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllFavoriteAuthors} />
    ))}
    </div>
  );
}
