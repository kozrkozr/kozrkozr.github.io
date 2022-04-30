import React, { useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import { getTopicsInfo, TitleDescription } from '../../api';
import Slider, { SliderItem } from '../../components/slider/Slider';
import NavButton, { NavButtonDirection } from '../../components/nav-button/NavButton';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function About() {
  const [topicsInfo, setTopicsInfo] = useState<TitleDescription[]>([]);
  const [activeTopicIndex, setActiveTopicIndex] = useState<number>(0);

  const navigate = useNavigate();
  const location = useLocation();

  const topicsRoutes = ['healthy-food', 'whole-plant-diet', 'vegetarianism'];

  const getActiveTopicIndex = (): number => {
    const currentTopicRoute = location.pathname.replace('/about/', '');
    const index = topicsRoutes.findIndex((route) => route === currentTopicRoute);
    return index > -1 ? index : 0;
  };

  const topicChanged = (_: SliderItem, index: number) => {
    navigate(`/about/${topicsRoutes[index]}`);
  };

  useEffect(() => {
    const doGetTopicsInfo = async () => {
      const topics = await getTopicsInfo();
      setTopicsInfo(topics);
    };

    setActiveTopicIndex(getActiveTopicIndex());

    doGetTopicsInfo();
  }, []);

  return (
    <div className="about">
      <Header menuOpened={false} />
      <div className="about__nav-btn py-16 px-24 mb-52">
        <NavButton direction={NavButtonDirection.BACK} clickHandler={() => navigate('/')} />
      </div>

      <section className="mb-72">
        <Slider
          initialItemIndex={activeTopicIndex}
          handleItemChange={topicChanged}
          items={topicsInfo}
          renderDescription={(item: SliderItem) => <p className="rendered">{item.description}</p>}
        />
      </section>

      <Outlet />
    </div>
  );
}

export default About;
