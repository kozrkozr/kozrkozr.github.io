import TinySlider, { TinySliderInfo, TinySliderSettings } from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import React, { ReactComponentElement } from 'react';
import './Slider.scss';
import { TitleDescription } from '../../api';

export type SliderItem = TitleDescription;

const settings: TinySliderSettings = {
  nav: false,
  mouseDrag: true,
  controls: false,
  touch: true
};

export interface SliderState {
  activeItem: SliderItem | null;
  activeItemIndex: number;
}

export interface SliderProps {
  renderDescription: (item: SliderItem) => ReactComponentElement<any>;
  items: SliderItem[];
  handleItemChange?: (item: SliderItem, index: number) => void;
  handleMoreBtnClick?: (sliderState: SliderState) => void;
  initialItemIndex?: number;
}

export function Slider({ items, renderDescription, handleItemChange, handleMoreBtnClick, initialItemIndex }: SliderProps) {
  const [state, setState] = React.useState<SliderState>({ activeItem: null, activeItemIndex: 0 });

  let ts!: (TinySlider & { slider?: { goTo: (dir: 'prev' | 'next') => void } }) | null;

  let tsInit = false;

  const getSettings = (): TinySliderSettings => {
    if (!tsInit) {
      tsInit = true;
      return { ...settings, startIndex: initialItemIndex || 0 };
    }

    return settings;
  };

  const setSliderRef = (ref: (TinySlider & { slider?: { goTo: (dir: 'prev' | 'next') => void } }) | null) => (ts = ref);

  const onGoTo = (dir: 'prev' | 'next') => ts?.slider?.goTo(dir);

  const handleIndexChanged = (info: TinySliderInfo & { displayIndex?: number }) => {
    const index = (info?.displayIndex || 1) - 1;

    setState({
      activeItem: items[index],
      activeItemIndex: index
    });

    if (handleItemChange) {
      handleItemChange(items[index], index);
    }
  };

  React.useEffect(() => {
    if (items && items.length) {
      const index = initialItemIndex || 0;
      setState({ activeItem: items[index], activeItemIndex: index });
    }
  }, [items]);

  return (
    state.activeItem && (
      <div className="slider">
        <div className="slider__header">
          <div className="slider__header-title">{state.activeItem.title}</div>
          <div className="slider__header-thumb d-flex">
            {items.map((item, index) => (
              <span
                key={index.toString()}
                className={'slider__header-thumb-item ' + (state.activeItemIndex === index ? 'active' : '')}
              ></span>
            ))}
          </div>
        </div>
        <TinySlider settings={getSettings()} ref={(ts) => setSliderRef(ts)} onIndexChanged={handleIndexChanged}>
          {items.map((item, index) => (
            <div className="slider__item">
              <div className="slider__item-nav" onClick={() => onGoTo('prev')} />
              <div className="slider__item-nav" onClick={() => onGoTo('next')} />
              <div key={index} className="slider__item-description">
                {renderDescription(item)}
              </div>
            </div>
          ))}
        </TinySlider>
        <div className="pl-12 mt-12">
          <button className="btn" onClick={() => handleMoreBtnClick && handleMoreBtnClick(state)}>
            Більше
          </button>
        </div>
      </div>
    )
  );
}

export default Slider;
