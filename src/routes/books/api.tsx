export interface Book {
  title: string;
  author: string;
  coverUrl: string;
}

export const BOOKS: Book[] = [
  {
    title: '«Їжа для мозку. Наука розумного харчування»',
    author: 'Ліса  Москоні',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1.png`
  },
  {
    title: '«Рослинний парадокс»',
    author: 'Стівен Р. Ґандрі , Олівія Бел-Буель',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-9.png`
  },
  {
    title: '«Китайське дослідження»',
    author: 'Колін Кемпбелл, Томас Кемпбелл',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-1.png`
  },
  {
    title: '«Без цукру»',
    author: 'Джейкоб Тейтельбаум, Крістл Фідлер',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-12.png`
  },
  {
    title: '«Їжа. Відправний пункт»',
    author: 'Бі Вілсон',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-2.png`
  },
  {
    title: '«Священна корова»',
    author: 'Девід Духовни',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-17.png`
  },
  {
    title: '«Їжа і мозок»',
    author: 'Девід Перлмуттер',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-3.png`
  },
  {
    title: '«Жири на дієті»',
    author: 'Джозеф Меркола',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-10.png`
  },
  {
    title: '«Смак»',
    author: 'Боб Холмс',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-11.png`
  },
  {
    title: '«Тезаурус смаків»',
    author: 'Нікі Сегніт',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-13.png`
  },
  {
    title: '«Дилема всеїдного»',
    author: 'Майкл Поллан',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-4.png`
  },
  {
    title: '«Нація фастфуду»',
    author: 'Ерік Шлоссер',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-14.png`
  },
  {
    title: '«Їж і біжи»',
    author: 'Скотт Джурек, Стівен Фрідман ',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-19.png`
  },
  {
    title: '«Чому зебри не страждають на виразку»',
    author: 'Роберт Сапольскі',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-18.png`
  },
  {
    title: '«Код ожиріння. Секрети втрати ваги»',
    author: 'Джейсон Фанг',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-6.png`
  },
  {
    title: '«Код людства. Дивовижна історія наших генів»',
    author: 'Едвін Кірк',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-15.png`
  },
  {
    title: "«М'ясо для слабаків»",
    author: 'Джон Джозеф',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-8.png`
  },
  {
    title: '«Корисна їжа»',
    author: 'Колін Кемпбелл ',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-16.png`
  },
  {
    title: '«Гормони. Як тестостерон, ендорфіни і Ко впливають на наше життя»',
    author: 'Франка Паріанен',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-5.png`
  },
  {
    title: '«Дивовижний імунітет. Про антитіла, інфекції та інші цікавинки імунної системи»',
    author: 'Філіп Деттмер',
    coverUrl: `${process.env.PUBLIC_URL}/images/books/1950296272_w640_h640_1950296272 1-7.png`
  }
];

export const getBooks = (): Promise<Book[]> => {
  return Promise.resolve(BOOKS);
};
