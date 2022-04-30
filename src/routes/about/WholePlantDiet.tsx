import React from 'react';
import './WholePlantDiet.scss';
import DynamicHeader from '../../components/layout/DynamicHeader';

function WholePlantDiet() {
  return (
    <div>
      <div className="mb-52">
        <DynamicHeader title={'Цільно-харчова рослинна дієта'} />
      </div>

      <section className="px-24 mb-72">
        <div className="font-weight-500 font-size-xxl line-height-xxlg mb-20">ЩО ТАКЕ ПОВНОЦІННЕ ХАРЧУВАННЯ НА РОСЛИННІЙ ОСНОВІ?</div>
        <p className="font-weight-300 mb-20">Цільно-харчова рослинна дієта заснована на наступних принципах:</p>
        <p className="font-weight-300 mb-20">
          <span className="font-size-md font-style-italic font-weight-400">«Цільна їжа»:</span> натуральні продукти, які не піддаються
          інтенсивній обробці. Це означає цілі, нерафіновані або мінімально очищені інгредієнти.
        </p>
        <p className="font-weight-300 mb-20">
          <span className="font-size-md font-style-italic font-weight-400">«Рослинна»:</span> їжа, яка походить із рослин і не містить
          інгредієнтів тваринного походження, таких як м’ясо, молоко, яйця або мед.
        </p>
        <p className="font-weight-300">
          Між повноцінною, рослинною (WFPB) і веганською є схожості, але є також деякі ключові відмінності. Веганська дієта може включати
          високо оброблену імітацію м’яса та сиру; дієта WFPB уникає цих продуктів на користь повних або мінімально оброблених продуктів,
          близьких до природи, які дозволяють легко задовольнити ваші потреби в харчуванні.{' '}
        </p>
      </section>

      <section className="w-100 mb-72">
        <img className="w-100" src={`${process.env.PUBLIC_URL}/images/whole-plant-diet/sandwich.png`} />
      </section>

      <section className="px-24 mb-72">
        <p className="mb-20 font-weight-300">Яйця і бекон на сніданок, стейк на вечерю — традиційне харчування багатьох людей сьогодні.</p>
        <p className="mb-20 font-weight-300">
          При переході на рослинну дієту, ваше харчування має бути зосереджена навколо продуктів з рослин.
        </p>
        <p className="mb-20 font-weight-300">
          Якщо ви продовжуєте вживати продукти тваринного походження, то вони повинні бути у великій меншості і тільки хорошої якості
          (фермерське м’ясо, а не салямі з супермаркету).
        </p>
        <p className="mb-20 font-weight-300">
          Молочні продукти, яйця, птиця, м’ясо і морепродукти, повинні використовуватися в якості доповнення основної рослинної їжі, а не як
          основна їжа.
        </p>
      </section>

      <section className="px-24 py-40 mb-72 background-light-brown">
        <div className="text-align-end font-weight-500 font-size-md line-height-lg mb-10">
          ПЕРЕВАГИ ПОВНОЦІННОЇ <br /> РОСЛИННОЇ ДІЄТИ
        </div>
        <p className="font-weight-300 mb-20">
          &nbsp;Перехід на рослинне харчування має кілька головних переваг, які підтверджуються наукою. Ці переваги включають:{' '}
        </p>
        <ul className="pl-12 font-weight-300 disc">
          <li className="mb-20">
            Легке управління вагою: люди, які їдять рослинну дієту, як правило, стрункіші, ніж ті, хто цього не робить, і дієта дозволяє
            легко схуднути та утримати її — без підрахунку калорій.
          </li>
          <li className="mb-20">
            Профілактика захворювань: повноцінна їжа на рослинній основі може запобігти, зупинити, а в деяких випадках і повернути назад
            хронічні захворювання. Наукові дані є особливо вражаючими, коли мова йде про серцеві захворювання та діабет, але дослідження
            також пов’язують рослинну дієту зі зниженням рівня артриту , покращенням функції печінки та здоров’ям нирок.
          </li>
          <li>Менший вплив на навколишнє середовище: рослинна дієта створює набагато менше навантаження на навколишнє середовище.</li>
        </ul>
      </section>

      <section className="px-24 mb-72">
        <div className="bordered-title mb-20">Рекомендовані продукти</div>
        <ul className="pl-12 font-weight-300 mb-20 disc">
          <li className="mb-20">
            <span className="font-weight-500">Фрукти: </span>ягоди, цитрусові, груші, персики, ананас, банани і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Овочі: </span>капуста, шпинат, помідори, броколі, цвітна капуста, морква, спаржа, болгарський
            перець і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Крохмалисті овочі: </span>картопля, солодка картопля, гарбуз тощо.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Цілісні зерна: </span>коричневий рис, овес, булгур, киноа, амарант, коричнева рисова паста,
            ячмінь і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Здорові жири: </span>авокадо, оливкова олія, кокосове масло і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Бобові: </span>горох, нут, сочевиця, арахіс, чорні боби і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Насіння, горіхи і горіхові масла: </span>мигдаль, кеш’ю, горіхи макадамії, гарбузове насіння,
            насіння соняшнику, натуральне арахісове масло, тахини і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Несолодко рослинне молоко: </span>кокосове молоко, мигдальне молоко, молоко кешью і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Спеції, трави і приправи: </span>базилік, розмарин, куркума, карі, чорний перець, морська сіль
            і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Приправи: </span>сальса, гірчиця, соєвий соус, оцет, лимонний сік і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Рослинний білок: </span>тофу, рослинні білкові джерела або порошки без додавання цукру або
            штучних інгредієнтів.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Напої: </span>кава, чай, вода і т.д.
          </li>
        </ul>
        <p className="font-weight-300 mb-20">
          Якщо ви додасте в раціон на основі рослин продукти тваринного походження, вибирайте якісну продукцію з продуктових магазинів або,
          ще краще, купіть їх у місцевих фермерів.
        </p>
        <ul className="font-weight-300 pl-12 disc">
          <li className="mb-20">
            <span className="font-weight-500">Яйця: </span>фермерські, якщо можливо.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Птах: </span>вільна, органічна, якщо можливо.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Яловичина і свинина: </span>тварини що вирощуються на пасовищах, якщо можливо.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Морепродукти: </span>спіймані в диких умовах, а не розведені на фермі
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Молочні продукти: </span>органічні молочні продукти з тварин, що вирощуються на пасовищах,
            якщо можливо.
          </li>
        </ul>
      </section>

      <section className="px-24 mb-72">
        <p>
          &nbsp; Здорова рослинна дієта повинна зосередитися на вживанні продуктів рослин, таких як овочі, фрукти, цільні зерна, бобові,
          горіхи і насіння. Якщо ви їсте продукти тваринного походження, їх слід вживати в менших кількостях в порівнянні з рослинними
          продуктами.
        </p>
      </section>

      <section className="w-100 mb-72">
        <img className="w-100" src={`${process.env.PUBLIC_URL}/images/whole-plant-diet/pancake.png`} />
      </section>

      <section className="px-24 mb-72">
        <div className="bordered-title mb-20">Продукти, які слід уникати</div>
        <p className="font-weight-300 mb-20">
          &nbsp;Рослинна дієта — це раціон харчування , який фокусується на споживанні продуктів в їх самій природній формі. Це означає, що
          сильно оброблені харчові продукти виключаються.
        </p>
        <p className="font-weight-300 mb-20">
          &nbsp; При покупці круп і хліба, зосередьтеся на свіжих продуктах і купуючи продукти з етикеткою, будьте націлені на предмети з
          найменшою кількістю можливих інгредієнтів.
        </p>

        <ul className="pl-12 disc">
          <li className="mb-20">
            <span className="font-weight-500">Фаст-фуд: </span>картопля фрі, чізбургери, хот-доги, курячі нагетси і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Добавки цукру і солодощі: </span>цукор, газовані напої, сік, випічка, печиво, цукерки,
            солодкий чай, солодкі злаки і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Рафіновані зерна: </span>білий рис, білі макарони, білий хліб, бублики і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Напівфабрикати: </span>чіпси, крекери, пластівці, заморожені обіди і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Оброблені «вегетаріанські» продукти: </span>спеціальні м’ясні продукти, штучні сири,
            вегетаріанські масла і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Штучні підсолоджувачі: </span>синтетичні цукрозамінники і т.д.
          </li>
          <li className="mb-20">
            <span className="font-weight-500">Оброблені продукти тваринного походження: </span>бекон, м’ясо, ковбаса і т.д.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default WholePlantDiet;
