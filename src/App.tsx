import React from 'react';
import './App.scss';
import Header from './components/layout/Header';
import MenuToggle from './components/layout/MenuToggle';
import Navigation, { NavigationItem } from './components/layout/Navigation';
import Slider, { SliderItem, SliderState } from './components/slider/Slider';
import { Outlet, useNavigate } from 'react-router-dom';
import ActionSlider from './components/action-slider/ActionSlider';
import Quote from './components/quote/Quote';
import Review from './components/review/Review';
import { getTopicsInfo, TitleDescription } from './api';
import { getTopicRoute } from './routes/common';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    url: '/books',
    label: 'Книги'
  },
  {
    url: '/recipes',
    label: 'Рецепти'
  },
  {
    url: '/places-to-eat',
    label: 'Заклади харчування'
  }
];

function App() {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [topicsInfo, setTopicsInfo] = React.useState<TitleDescription[]>([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    const doGetTopicsInfo = async () => {
      const topics = await getTopicsInfo();
      setTopicsInfo(topics);
    };

    doGetTopicsInfo();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <Header menuOpened={menuOpened} />
        <MenuToggle menuOpenedHandler={setMenuOpened} />
      </div>

      {menuOpened && (
        <div className="navigation">
          <Navigation items={NAVIGATION_ITEMS} />
        </div>
      )}

      <section className="mb-24">
        <Slider
          handleMoreBtnClick={({ activeItemIndex }: SliderState) => navigate(getTopicRoute(activeItemIndex))}
          items={topicsInfo}
          renderDescription={(item: SliderItem) => <p className="rendered">{item.description}</p>}
        />
      </section>

      <section className="main-img-container w-100 mb-72">
        <img src={`${process.env.PUBLIC_URL}/red-drink.png`} className="w-100 h-100" />
      </section>

      <section className="px-24 mb-72">
        <ActionSlider
          renderHeader={() => <div className="bordered-title mb-20">Книги</div>}
          renderContent={(item: SliderItem) => (
            <div>
              <div className="title mb-10 font-size-md">{item.title}</div>
              <p className="font-size-sm line-height-md">{item.description}</p>
            </div>
          )}
          navigation={() => navigate('/books')}
        />
      </section>

      <section className="mx-24 mb-24">
        <Quote>
          <span>
            Краще нічого не їсти, <br /> ніж їсти в метушні.
          </span>
        </Quote>
      </section>

      <section className="mb-60">
        <div className="d-flex justify-end">
          <img src={`${process.env.PUBLIC_URL}/quote-img.png`} />
        </div>
      </section>

      <section className="p-24 background-light-brown d-flex flex-column mb-72">
        <div className="d-flex justify-end align-center mb-36">
          <div className="font-weight-md font-size-md">Рецепти</div>
          <img className="ml-10 mb-8" src={`${process.env.PUBLIC_URL}/receipes.svg`} />
        </div>

        <div className="mb-36">
          <p className="mb-20 font-size-md">Рецепти здорового харчування можуть бути не тільки корисними, але й смачними.</p>
          <p className="font-size-sm line-height-md">
            {' '}
            Велику кількість смачних страв на кожен день, можна знайти тут. Включаючи також вегатеріанські та веганські.
          </p>
        </div>

        <div className="d-flex justify-end">
          <button className="btn" onClick={() => navigate('/recipes')}>
            Більше
          </button>
        </div>
      </section>

      <section className="mb-72">
        <div className="px-24 mb-24">
          <div className="bordered-title mb-12">Фільми</div>
          <p className="font-weight-300">
            Рекомендую кожному переглянути фільми зі списку. Дізнатись основні аспекти впливу їжі на планету Земля та людину.
          </p>
        </div>

        <ul className="bordered">
          {['Девід Аттенборо: Життя на нашій планеті', 'Роберт Кеннер: Корпорація «Їжа»', 'Лі Фалкерсон: Виделки замість ножів'].map(
            (film, index) => (
              <li className="d-flex align-center" key={index}>
                <img src={`${process.env.PUBLIC_URL}/icons/play.svg`} />
                <span className="ml-24 font-weight-400 font-size-md">{film}</span>
              </li>
            )
          )}
        </ul>
      </section>

      <section className="mb-24">
        <div className="d-flex">
          <img src={`${process.env.PUBLIC_URL}/figs.png`} />
        </div>
      </section>

      <section className="mx-24 mb-72 d-flex justify-end">
        <Quote>
          <span>
            Наші тіла - це наші сади - <br />
            наші заповіти - наші садівники.
          </span>
        </Quote>
      </section>

      <section className="p-24 mb-72 background-light-brown d-flex flex-column">
        <div className="d-flex justify-end align-center mb-36">
          <div className="font-weight-md font-size-md">Заклади харчування</div>
          <img className="ml-10" src={`${process.env.PUBLIC_URL}/icons/restaurant-building.svg`} />
        </div>

        <div className="mb-36">
          <p>Тофу, бургер з гарбузовю котлетою або фалафель обирай, що ти будеш на обід з мого списку закладів в Україні.</p>
        </div>

        <div className="d-flex">
          <button className="btn" onClick={() => navigate('/places-to-eat')}>
            Більше
          </button>
        </div>
      </section>

      <section className="w-100 px-24 mb-20">
        <Review />
      </section>

      <Outlet />
    </div>
  );
}

export default App;
