import React from 'react';
import './Vegetarianism.scss';
import DynamicHeader from '../../components/layout/DynamicHeader';

function Vegetarianism() {
  return (
    <div>
      <div className="mb-52">
        <DynamicHeader title={'Вегатеріанство та веганство'} />
      </div>
      <section className="px-24 mb-72">
        <div className="font-size-xxl font-weight-500 line-height-xxlg">Веганство та вегетаріанство:</div>
        <div className="font-size-lg line-height-lg font-weight-300 mb-12">особливості та відмінності</div>
        <p className="font-weight-300">
          Вегетаріанство - це підхід до харчування, який має на увазі відмову від їжі тваринного походження. Основу раціону становить
          рослинна їжа. При цьому люди, які дотримуються такої дієти, можуть вживати яйця та молочні продукти.
        </p>
      </section>
      <section className="mb-72">
        <img src={`${process.env.PUBLIC_URL}/images/vegetarianism/green-drink.png`} />
      </section>
      <section className="px-24 mb-72">
        <div className="bordered-title mb-20">Три напрямки вегетаріанства:</div>
        <p className="font-weight-300 mb-20">
          <span className="font-weight-400 font-size-md">Оволактовегетаріанство </span>- вид дієти, при якій, крім рослинної їжі, можна
          вживати молочні продукти та яйця;Лактовегетаріанство - це тип харчування, що передбачає відмову від риби, м'яса, морепродуктів та
          яєць. При цьому прихильники напряму їдять рослинні та молочні продукти.
        </p>
        <p className="font-weight-300 mb-20">
          <span className="font-weight-400 font-size-md">Ововегетаріанство </span>- для прихильників цього типу харчування яйця – це єдиний
          продукт тваринного походження, дозволений до вживання. Також вони їдять рослинну їжу;
        </p>
        <p className="font-weight-300 mb-20">
          <span className="font-weight-400 font-size-md">Лактовегетаріанство </span>- це тип харчування, що передбачає відмову від риби,
          м'яса, морепродуктів та яєць. При цьому прихильники напряму їдять рослинні та молочні продукти.
        </p>
      </section>

      <section className="px-24 py-40 background-light-brown font-weight-300">
        <p className="mb-20">
          <span className="font-size-md font-weight-400">&nbsp;Веганство</span> у свою чергу, має на увазі, що людина їсть тільки їжу
          рослинного походження і в деяких випадках мед. З раціону виключаються м'ясо, риба, морепродукти, яйця, молоко, а також різні
          речовини, які були виготовлені з використанням тваринної сировини, наприклад, желатин або кармін.
        </p>
        <p className="mb-20">
          &nbsp;Для багатьох людей вегетаріанство та веганство – це не просто дієта, а спосіб життя. Тому вони не лише відмовляються від
          вживання певних продуктів. Вони не користуються одягом та побутовими предметами, які були виготовлені з тваринної сировини, не
          застосовують косметику та побутову хімію, протестовану на тваринах.
        </p>
        <p className="mb-20">
          &nbsp;Є безліч причин, через які люди стають вегетаріанцями або веганами. Вони можуть мати етичний, екологічний, економічний,
          медичний чи релігійний характер. Деякі приймають рішення не їсти м'ясо, щоб підтримувати фізичну форму і добре почуватися.
        </p>
      </section>

      <section className="mb-72 w-100">
        <img src={`${process.env.PUBLIC_URL}/images/vegetarianism/go-vegan.png`} />
      </section>

      <section className="px-24 mb-100">
        <div className="bordered-title mb-20">Запитання</div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">1. Що вегани не їдять?</div>
          <p className="font-weight-300">
            Продукти тваринного походження: м'ясо, птицю, рибу, морепродукти (ракоподібних та інших морських та річкових мешканців), молочні
            продукти (молоко, вершки, йогурт, сир, масло тощо), яйця, мед, желатин та інші продукти, які містять перераховані інгредієнти
            навіть у незначних кількостях.
          </p>
        </div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">2. Що ж вегани їдять?</div>
          <p className="font-weight-300">
            Продукти рослинного походження: овочі, фрукти, бобові (квасоля, сочевицю, горох тощо), зернові (рис, пшеницю, жито, кукурудзу
            тощо), горіхи, насіння, гриби, морські рослини, тофу та інші продукти з соєвих бобів, рослинне молоко: соєве, вівсяне, рисове,
            мигдальне та ін. олії та деякі види маргарину.
          </p>
        </div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">4. Чим відрізняється веган від вегетаріанця?</div>
          <p className="font-weight-300">
            Вегетаріанець виключає зі свого раціону тільки м'ясо (у тому числі птицю та рибу), але вживає в їжу молочні продукти, яйця та
            мед. Поняття «вегетаріанець» часто пов'язане лише з харчуванням, тобто вегетаріанці нерідко не обмежують себе в інших сферах
            життя (одяг, косметика, розваги тощо).
          </p>
        </div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">5. Чи складно бути веганом?</div>
          <p className="font-weight-300">
            У суспільстві, в якому переважає змішане харчування, веганський спосіб життя спочатку може здатися складним. Однак ми бачимо, що
            популярність вегетаріанства росте: в Естонії вже майже в будь-якому супермаркеті можна знайти рослинні варіанти таких звичних
            продуктів харчування як майонез, морозиво та йогурт. Спочатку вивчення етикеток на продуктах дійсно може займати багато часу,
            але ж веганство - це усвідомлений вибір, що йде на користь самої людини, тварин та навколишнього середовища. Багато веганів
            стверджують, що перехід на веганське харчування відкрив їм цілий світ абсолютно нових смаків, а докладне вивчення інгредієнтів
            зробило їх більш усвідомлених споживачів.
          </p>
        </div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">6. Як веганство сприяє благополуччю тварин?</div>
          <p className="font-weight-300">
            Виробництво м'яса, яєць та молока вже давно не нагадує сільську ідилію. Тварин утримують у стиснених умовах, у них відбирають
            свободу і можливість жити відповідно до своїх біологічних особливостей. На підприємствах інтенсивного тваринництва до тварин
            ставляться як до машин отримання прибутку. Бойкотуючи ці галузі, вегани сподіваються знизити рівень прибутку на цих галузях і
            цим підтримати виробництво альтернативних продуктів. Чим більше людей почне «голосувати» гаманцем, тим відчутніше це позначиться
            на виробниках тваринних продуктів. В умовах глобалізованої економіки споживачі мають величезний вибір альтернативних продуктів
            неживотного походження як у тому, що стосується всіляких продуктів харчування, одягу та косметики, так і в інших областях.
          </p>
        </div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">
            7. Чому веганство сприятливо впливає на навколишнє середовище?
          </div>
          <p className="font-weight-300">
            При виробництві тваринної їжі витрачається набагато більше природних ресурсів, ніж у виробництві рослинної їжі. Вживаючи в їжу
            м'ясо травоїдних тварин, ви подовжуєте харчовий ланцюжок і витрачаєте більше ресурсів, ніж якби ви отримували необхідні поживні
            речовини безпосередньо з рослин. Наприклад, для «виробництва» шматка м'яса, що дає 100 ккал, використовується кількість рослин,
            еквівалентна 200-700 ккал. Це веде до збільшення необхідних земельних площ (для вирощування кормів та під пасовища) та зростання
            відбиття води (для вирощування кормів та для утримання тварин). Крім цього, тваринництво — одна з основних причин забруднення
            води, а обсяг метану та інших парникових газів, що виділяються тваринницькими господарствами, становить мільйони тонн на рік,
            внаслідок чого тваринництво впливає на потепління клімату більше.
          </p>
        </div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">8. Чи отримує веган із їжі все необхідне?</div>
          <p className="font-weight-300 mb-20">
            Поняття «різноманіття» та «веганство» не суперечать одне одному. Щоденний раціон вегана має бути різноманітним: цільнозернові
            злаки, овочі, фрукти, бобові, горіхи, насіння, а також, по можливості, багатий на білок тофу та інші соєві продукти.
            Різноманітне веганське харчування дозволяє отримати всі необхідні амінокислоти.
          </p>
          <p className="font-weight-300">
            Як і людям із змішаним раціоном, веганам необхідно приймати деякі харчові добавки. Особливо важливою добавкою є вітамін В12, що
            отримується в лабораторії з таких самих бактерій, які виробляють його в організмі тварин. Варто уточнити, що не всі харчові
            добавки із вітаміном В12 є веганськими. Все залежить від середовища, на якому їх готують - це може бути коров'яче молоко, а
            можуть бути і рослинні продукти (наприклад, соєві). Також у період з осені по весну рекомендується додатково приймати вітамін 0.
            Веганським вважається вітамін Ш, що отримується з рослин, а невеганським - 03, що отримується з тваринних продуктів, хоча
            останнім часом з'явився ряд фірм, які виробляють вітамін 03 з лишайників. Такий вітамін підходить і веганам.
          </p>
        </div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">9. Чим погані молоко та яйця?</div>
          <p className="font-weight-300">
            Так само, як грудне молоко жінки призначене для немовляти, молоко корови призначене для теля. Вживання молока дорослою людиною
            неприродне, якщо це молоко іншого біологічного виду. 75% людей на нашій планеті після першого року життя втрачає можливість
            виробляти фермент, необхідний для травлення лактози (молочного цукру). Тому так поширені непереносимість лактози та алергія на
            молоко. Іншим людям із віком теж стає все важче перетравлювати молоко. Крім того, молоко ускладнює засвоєння заліза. Щоб
            забезпечити безперервне виробництво молока, корів на фермах постійно тримають вагітними, а новонароджених бичків, непотрібних
            для молока, вбивають. У таких умовах корови, які в природі могли б дожити і до 20 років, вже до п'ятого року життя повністю
            виснажені. і їх вбивають або через хвороби, або через зниження надоїв. На яєчному виробництві всіх курчат чоловічої статі
            вбивають відразу після вилуплення, а яйценоські кури живуть у неприродних умовах, позбавлені можливості побачити сонячне світло
            та розправити крила.
          </p>
        </div>

        <div className="mb-20">
          <div className="font-weight-400 font-size-md mb-8 font-style-italic">
            10. Як можна відмовитися від м'яса, якщо воно таке смачне?
          </div>
          <p className="font-weight-300">
            Зазвичай, це останній аргумент любителів м'яса, коли інших аргументів уже не залишається. Проте смак та текстуру м'ясних
            продуктів легко зімітувати. Рослинні замінники м'ясних продуктів можна знайти у магазинах або легко приготувати вдома. Що
            важливіше — звичка чи турбота про власне здоров'я, добробут тварин, збереження навколишнього середовища? Кожен вирішує це собі
            сам.
          </p>
        </div>
      </section>

      <section className="d-flex justify-center mb-72">
        <div className="font-size-sm font-weight-400">Матеріал виданий Веганською спільнотою Естонії.</div>
      </section>
    </div>
  );
}

export default Vegetarianism;
