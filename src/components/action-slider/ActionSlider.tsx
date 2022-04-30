import React, { ReactComponentElement } from 'react';
import './ActionSlider.scss';
import TinySlider, { TinySliderInfo, TinySliderSettings } from 'tiny-slider-react';
import NavButton, { NavButtonDirection } from '../nav-button/NavButton';

type RenderFn<T> = (data?: T) => ReactComponentElement<any>;

const settings: TinySliderSettings = {
  nav: false,
  mouseDrag: true,
  controls: false,
  loop: false
};

export interface ActionSliderProps<T = any> {
  renderHeader: RenderFn<T>;
  renderContent: RenderFn<T>;
  items?: T[];
}

export interface ActionSliderState {
  hasPrev: boolean;
  hasNext: boolean;
}

const DEFAULT_ITEMS = [
  {
    title: 'Ліса  Москоні «Їжа для мозку. Наука розумного харчування»',
    description:
      'У цій книжці нейродослідниця Ліса Москоні аналізує, що наука каже про харчування для здоров’я мозку, як раціон впливає на роботу цього органу й чому дієта для мозку може відрізнятися від тієї, що потрібна решті тіла.'
  },
  {
    title: 'Колін Кембелл та Томас Кембелл «Китайське дослідження»',
    description:
      'Це висновки найґрунтовнішого дослідження про взаємозв’язок між дієтою й ризиком розвитку захворювання. Найкраща інструкція з харчування.'
  },
  {
    title: `Джон Джозеф «М'ясо для слабаків»`,
    description: `Автор книги якому вже більше 50 років, він чемпіон світу з боїв без правил, і він так само займається боями, тріатлоном і бхакті-йогою. У своїй книзі  він розповів звідки бере білок, а ще зруйнував усі стереотипи про м'ясоїдіння та вегетаріанство`
  },
  {
    title: 'Колін Кембелл «Корисна їжа»',
    description:
      'Вагомі факти та докази про спрямовані дії ЦРД на наш організм. Колін наводить переконливі докази того, що офіційна наука міцно застрягла в минулому і не має сміливості визнати очевидні речі.'
  },
  {
    title: 'Девід Перлмуттер «Їжа і мозок. Що вуглеводи роблять зі здоров’ям, мисленням і пам’яттю»',
    description:
      'З цієї книги про харчування ви дізнаєтеся про взаємозв’язки між людським інтелектом і звичками харчування, а також всілякі порушення роботи мозку з соматичними захворюваннями. '
  }
];

class ActionSlider<T = any> extends React.Component<ActionSliderProps<T>, ActionSliderState> {
  constructor(public props: ActionSliderProps) {
    super(props);
    this.state = {
      hasPrev: false,
      hasNext: true
    };
  }

  public ts!: (TinySlider & { slider?: { goTo: (dir: 'prev' | 'next') => void } }) | null;

  public onGoTo = (dir: 'prev' | 'next') => this.ts?.slider?.goTo(dir);

  public handleIndexChanged = ({ index }: TinySliderInfo) => {
    this.setState({
      hasPrev: index > 0,
      hasNext: index !== DEFAULT_ITEMS.length - 1
    });
  };

  render() {
    return (
      <div className="action-slider">
        <div className="action-slider__header">{this.props.renderHeader()}</div>

        <div className="action-slider__content">
          <TinySlider settings={settings} ref={(ts) => (this.ts = ts)} onIndexChanged={this.handleIndexChanged}>
            {DEFAULT_ITEMS.map((item, index) => (
              <div key={index} className="action-slider__item">
                {this.props.renderContent(item)}
              </div>
            ))}
          </TinySlider>
        </div>

        <div className="action-slider__footer d-flex justify-between mt-16">
          <div className="action-slider__footer-btns d-flex">
            <NavButton direction={NavButtonDirection.BACK} clickHandler={() => this.onGoTo('prev')} disabled={!this.state.hasPrev} />
            <NavButton direction={NavButtonDirection.FORWARD} clickHandler={() => this.onGoTo('next')} disabled={!this.state.hasNext} />
          </div>

          <button className="btn">Більше</button>
        </div>
      </div>
    );
  }
}

export default ActionSlider;
