import React, { useEffect, useState } from 'react';
import './Books.scss';
import DynamicHeader from '../../components/layout/DynamicHeader';
import { Book, getBooks } from './api';

function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const doGetBooks = async () => {
      const books = await getBooks();
      setBooks(books);
    };

    doGetBooks();
  }, []);

  return (
    <div>
      <section className="mb-52 position-sticky">
        <DynamicHeader title={'Книги'} />
      </section>

      <section className="mb-72">
        <div className="page-title-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/books/page-title.png)` }} />
      </section>

      <section className="mx-24 mb-72">
        <p>
          <span className="font-weight-md">«Так как же нам соскочить с «поезда смерти»?</span> <br />
          <span className="font-weight-300">
            Это просто как день: начинай постепенно. Замени нездоровый завтрак, например, парой фруктов, овсянкой и тостом из
            цельнозернового хлеба. На обед заточи веганский бургер, салат и свежевыжатый овощной (ну или фруктовый) сок. Купи пару книг с
            рецептами здоровых и полезных блюд или сходи пару раз в веганское кафе.
          </span>
        </p>
        <p className="font-size-sm line-height-md text-align-end mt-12">Книга "М'ясо - для слабаків" - Джозеф Джон</p>
      </section>

      <section className="mx-24">
        <div className="bordered-title mb-20">Всі книги</div>

        <div className="books-grid">
          {books.map((book, index) => (
            <div className="books-grid__item" key={index.toString()}>
              <img src={book.coverUrl} className="mb-12"/>
              <div className="font-size-sm font-weight-500 line-height-md mb-4 text-align-center">{book.title}</div>
              <div className="font-size-sm font-weight-500 line-height-md mb-4 color-muted text-align-center">{book.author}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Books;
