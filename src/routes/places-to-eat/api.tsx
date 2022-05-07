export interface PlaceToEat {
  name: string;
  description: string;
  address: string;
  imageUrl: string;
  cityId: string;
}

export interface City {
  id: string;
  name: string;
}

export const CITIES: City[] = [
  {
    id: '1',
    name: 'Київ'
  },
  {
    id: '2',
    name: 'Вінниця'
  },
  {
    id: '3',
    name: 'Дніпро'
  },
  {
    id: '4',
    name: 'Донецьк'
  },
  {
    id: '5',
    name: 'Житомир'
  },
  {
    id: '6',
    name: 'Запоріжжя'
  },
  {
    id: '7',
    name: 'Івано-Франківськ'
  },
  {
    id: '8',
    name: 'Кропивницький'
  },
  {
    id: '9',
    name: 'Луганськ'
  },
  {
    id: '10',
    name: 'Луцьк'
  },
  {
    id: '11',
    name: 'Львів'
  },
  {
    id: '12',
    name: 'Миколаїв'
  },
  {
    id: '13',
    name: 'Одеса'
  },
  {
    id: '14',
    name: 'Полтава'
  },
  {
    id: '15',
    name: 'Рівне'
  },
  {
    id: '16',
    name: 'Сімферополь'
  },
  {
    id: '17',
    name: 'Суми'
  },
  {
    id: '18',
    name: 'Тернопіль'
  },
  {
    id: '19',
    name: 'Ужгород'
  },
  {
    id: '20',
    name: 'Харків'
  },
  {
    id: '21',
    name: 'Херсон'
  },
  {
    id: '22',
    name: 'Хмельницький'
  },
  {
    id: '23',
    name: 'Черкаси'
  },
  {
    id: '24',
    name: 'Чернівці'
  },
  {
    id: '25',
    name: 'Чернігів'
  }
];

export const PLACES_TO_EAT: PlaceToEat[] = [
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img.png`,
    name: 'Green 13',
    description: 'Стритфуд із вегетаріанською та веганською їжею від колишнього шеф-кухаря Vegano Hooligano Володимира Євлаха',
    address: 'Київ. Бессарабська площа, 2; бульвар Шевченка, 26/4'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_1.png`,
    name: 'Orang+Utan',
    description:
      'Мережа вегетаріанських закладів у форматі з собою. У меню десять видів сендвічів, включно з шаурмою із сейтаном та поєднанням фалафелю і баклажана',
    address: 'Київ. Вулиця Січових Стрільців, 72; вулиця Петлюри, 16/108'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_2.png`,
    name: 'Shankara Food',
    description:
      'Вегетаріанський ресторан, в актуальному меню – панцанела з трьома видами томатів, салат з ожиною і копченою кукурудзою та лазанья з баклажанів',
    address: 'Київ. Бехтерівський провулок, 4'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_3.png`,
    name: 'Imbir',
    description:
      '«Імбир» називають «територією вегетаріанства у центрі Києва». У закладі на Жилянській побудували меню на «принципах ведичної кулінарії»',
    address: 'Київ.  Вулиця Жилянська, 7'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_4.png`,
    name: 'Soupculture',
    description:
      'Фастфуд-мережа, що спеціалізується на супах у їстівних хлібних стаканах. Хлібний стаканчик не протікає і не розпадається, готують його з рисового чи гречаного борошна без додавання дріжджів. В актуальному меню – вегетаріанські супи з грибами та сиром',
    address: 'Київ. Вулиця Володимирська, 40/2; вулиця Федорова, 9'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_5.png`,
    name: 'Eat easy',
    description:
      'Показати на власному прикладі, що корисна їжа може й має бути смачною й різноманітною? «Легко!» — говорять в eat easy. Це перший український бренд цілісного і здорового харчування, заснований 5 років тому',
    address: 'Київ. Вул. Шота Руставелі, 15; ТЦ Good Life, вул. Іоанна Павла II, 5ж; пр-т Академіка Глушкова, 12А'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_6.png`,
    name: 'MoMo',
    description:
      'МоМо пропонують усім, хто піклується про своє харчування, понад 50 різноманітних здорових страв. Неважливо, веган ви, м’ясоїд, поціновувач риби чи, може, не вживаєте глютен, тут знайдеться збалансований смаколик для кожного',
    address: 'Київ. Вул. П. Сагайдачного, 24; вул. Антоновича, 176 (ТРЦ Ocean Plaza)'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_7.png`,
    name: 'Bali Bowl Cafe',
    description:
      'Разом із досвідченим нутриціологом тут розробили та постійно змінюють і вдосконалюють спеціальне меню. Головна роль у ньому відведена фруктовим і овочевим боулам, смузі та сокам власного виробництва',
    address: 'Київ. Вул. Велика Васильківська, 14'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_8.png`,
    name: 'Mira cafe',
    description:
      'Мережа закладів Mira cafe активно пропагує здорове харчування. B закладах можна скуштувати салати з куркою, тунцем, буряком, кіноа, шпинатом та хумусом, а також лососем',
    address: 'Київ. Вул. Мечникова, 22А; вул. Ярославів Вал, 20; вул. Воздвиженська, 22'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_9.png`,
    name: 'Smartass Kitchen & Bar',
    description:
      'І ресторан, і бар повністю відмовилися від цукру та рафінованих продуктів та сконцентрувалися на збалансованості й максимальній користі. А дивовижно те, що, попри відсутність шкідливого й солодкого, їхні страви виглядають і смакують просто фантастично',
    address: 'Київ. Вул. Жилянська, 41А'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_10.png`,
    name: 'Be Healthy cafe',
    description:
      'Тут пропонують здорову їжу, ґрунтуючись на найкорисніших способах обробки продуктів і процесах приготування.А головний концепт філософії закладу несе соціальну значимість: здорова їжа – це основа якісного повноцінного життя',
    address: 'Київ. проспект Валерія Лобановського, 6А'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_11.png`,
    name: 'Krasivo Est',
    description:
      'У меню можна побачити вегетаріанські та веганські страви, страви без вмісту глютену та органічне безалкогольне вино. Також є корисні солодощі власного виробництва',
    address: 'Київ. Вул. Крутий узвіз, 6/2; вул. Глибочицька, 40'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_12.png`,
    name: 'Fish Fetish ',
    description:
      'Fish Fetish продовжує готувати безліч страв із риби, серед яких є healthy food: сашимі авокадо, запечена камбала з томатами та японськими грибами, рибний рамен',
    address: 'Київ. Проспект Правди, 47 (у ТРЦ «Retroville»)'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_13.png`,
    name: 'Hey Guys',
    description:
      'Хоча в закладі роблять піцу, у меню можна знайти корисні страви, як-от філе сома в імбирному соусі з тайським салатом і стейка з молодої капусти або ж тунця з авокадо та броколі',
    address: 'Київ. Вул. Дмитрівська, 60/19'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_14.png`,
    name: 'Alltrueeast',
    description:
      'Альтруїст» – це не лише про їжу, це про благодійність, це про істинне значення альтруїзму. Саме тому в їхньому меню є м’ясо рослинного походження та знижки для захисників тварин. У меню знайдете шакшуку, салати та інші страви як для веганів, так і з м’ясними основами',
    address: 'Київ. Вул. Антоновича, 1'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_15.png`,
    name: 'Zigzag',
    description:
      '«Зигзаг» – це не про крайнощі, це про вміння обходитися зі своїми почуттями. Тут ви не знайдете суто корисне меню, але й корисність теж побачите. Тут немає надто солодких десертів, радше з кислинкою, але якісні',
    address: 'Київ. Вул. Рейтарська, 13'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_16.png`,
    name: 'Koneko',
    description:
      'Якщо хочеться спробувати азійську кухню з healhy-нотками, то вам сюди. У меню бістро можна знайти: різноманітні роли, рамен і сашимі, а також органічний чай, натуральне вино та каву',
    address: 'Київ. Вул. Михайла Драгомирова, 7'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_17.png`,
    name: 'Asian Bowl',
    description:
      ' Asian Bowl – невеликий заклад, у якому можна скуштувати боули з рисом, локшину з батату, удон та їхнє домашнє кімчі. Заклад позиціює себе як pets friendly. Окрім смачної їжі, тут є звичайна кава та матча-лате',
    address: 'Київ. Вул. Гоголівська, 1'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_18.png`,
    name: '108 food and yoga',
    description:
      'Простір, у якому після виснажливого тренування можна смачно та корисно поїсти. Гречка з мусом пармезан, млинці в апельсиновому соусі з випареного лікеру Куантро та кулькою пломбіру чи просто тост із джемом',
    address: 'Київ. Вул. Велика Житомирська, 21'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_19.png`,
    name: 'Hum Hum',
    description:
      ' У меню закладу пропонують велику кількість корисної їжі: хумус, запечений батат, фалафель, різноманітні салати, натуральне вино та класичні коктейлі за баром',
    address: 'Київ. Вул. Межигірська, 13'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_20.png`,
    name: 'Small Talking',
    description:
      'Small Talking — мережа кафе-бутиків, що сповідують філософію швидкого та корисного харчування. Тут гостям пропонують здорові сендвічі, салати, чіабати, а також супи — усе приготовано з органічних продуктів',
    address: 'Київ. Вул. Миколи Лисенка, 3; вул. Сагайдачного, 25; Оболонська набережна, 19; Пушкiнська, 11а'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_21.png`,
    name: 'Simple',
    description:
      'У лейтмотив меню Simple. — корисні та поживні боули, піти та сендвічі, а також смузі. Вирушайте сюди за стравами, збагаченими суперфудами',
    address: 'Київ. Вул. Саксаганського, 102'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_22.png`,
    name: 'Avocado Cafe',
    description:
      'Це єдиний в Україні заклад, де головний продукт — авокадо. Кафе позиціонує себе як health-friendly, а тому в меню переважають корисні страви. Замість звичної бургерної булочки — половинки стиглого авокадо, а як заправка — натуральні соуси',
    address: 'Київ. Вул. Інститутська 27/6'
  },
  {
    cityId: '1',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_23.png`,
    name: 'Thailand.hi',
    description:
      'Затишний заклад зі стравами тайської кухні в приміщенні з високими стелями й безліччю рослин. Працює бар. В меню Пад Тай з морепродуктами, сибас в солі, Мелта з сиром і кокосове морозиво',
    address: 'Київ. Чеховський провулок, 2'
  },

  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_24.png`,
    name: 'Om nom nom',
    description: ' В меню закладу "Om nom nom" представлені салати, хот-доги та бургери з соєвим м\'ясом та тофу і різноманітні роли',
    address: 'Львів. Вул. Римлянина, 10'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_25.png`,
    name: 'Green',
    description:
      'Меню вегетаріанського кафе Green – поєднання традиційних страв народів світу з авторськими стравами шеф-кухаря. Тут представлені вегетаріанські, веганські, сироїдські, безглютенові страви та солодощі, що не містять цукру',
    address: 'Львів. Вул. Братів Рогатинців, 5.'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_26.png`,
    name: 'Power Food',
    description:
      'Power food - перший у Львові ресторан здорового харчування. Кухарі розробили унікальне меню з урахуванням кількості калорій, білків, жирів та вуглеводів',
    address: 'Львів. Вулиця. Порохова 20'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_27.png`,
    name: 'Avocado Organic Food',
    description:
      'У закладі ви знайдете широкий вибір страв для справжніх поціновувачів такого фрукту як авокадо. Кожна страва створена з його додаванням: будь це суші, бургери чи солодкі десерти',
    address: 'Львів.  Вулиця Жилянська, 7'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_28.png`,
    name: 'Salalat',
    description:
      'За словами засновників – це перша львівська салатерія. У меню є декілька видів салатів і паст. Можна замовити сніданок, суп дня, десерт, крафтовий чай та каву. Також в меню є боули та смузі',
    address: 'Львів.  проїзд Крива Липа, 7'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_29.png`,
    name: 'Vegano Hooligano',
    description:
      'Це веганське кафе. У меню – паста, піца, рис, сендвічі, фалафелі, салати, крем-супи і суші. Є веганські солодощі та чимало десертів з натуральних продуктів. Великий вибір фрешів та смузі',
    address: 'Львів. Вулиця Римлянина, 10'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_30.png`,
    name: 'Magic Bowls',
    description:
      'Боули є трендом здорового харчування. У зручній формі вони поєднують білки, жири, повільні вуглеводи та клітковину. Запропоновані боули можна змінювати, обираючи щоразу іншу основу та соус. Перчинкою меню є супи – кисло-гострий Том Ям, ароматний Том Кха та традиційний рамен',
    address: 'Львів. проїзд Крива Липа, 9'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_31.png`,
    name: "It's Falafel, Baby!",
    description: 'Фета, свіжі овочі, йогуртовий соус з тахіні ідеально пасують до пряного фалафелю, а коли все це загорнути в піту...',
    address: 'Львів.  Вулиця Староєврейська, 10'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_32.png`,
    name: 'Kitsune',
    description: 'Корисні десерти, смузі, печиво та батончики.\n' + 'А все тому, що він totally vegan.',
    address: 'Львів.  Вулиця Староєврейська, 10'
  },
  {
    cityId: '11',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_33.png`,
    name: 'Tikithai',
    description:
      'Ресторан швидкого харчування з автентичними азійськими стравами, що приготовлені за тайською, корейською та японською рецептурою з використанням оригінальних соусів, спецій та інших автентичних інгредієнтів',
    address: 'Львів.  Вулиця Староєврейська, 4'
  },

  {
    cityId: '7',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_34.png`,
    name: 'E2GO',
    description:
      'здорова їжа  з доставкою;\n' + 'персональні програми харчування з доставкою;\n' + 'максимум позитивних емоцій та користі.',
    address: "Івано-Франківськ. Вул. Зв'язкова, 6"
  },
  {
    cityId: '7',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_35.png`,
    name: 'Mondays',
    description:
      'Страви переважно з рослинних складників та цільних продуктів, без м’яса, риби та яєць. Не ма/ть класичного цукру, білого борошна, соняшникової олії',
    address: 'Івано-Франківськ. Вул. Франка, 11'
  },
  {
    cityId: '7',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_36.png`,
    name: 'Vegano Hooligano',
    description: 'Веган-кафе в меню якого є бургери з котлетою з рослинного фаршу, роли з тофу та фалафелем',
    address: 'Івано-Франківськ. Вул. Вагилевича 10'
  },
  {
    cityId: '7',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_37.png`,
    name: 'Resto&shop "СИСТЕМА"',
    description:
      'Тут ви можете в меню знайти ексклюзивні страви та солодощі - шоколадки з сушеними огірками та фруктами, салат з печеним буряком, зелений хумус зі свіжими овочами, тости з крем-сиром та гуакамоле та навіть мигдально-шоколадна паста власного виробництва',
    address: 'Івано-Франківськ. Вул.  Бельведерська, 4/4'
  },

  {
    cityId: '2',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_38.png`,
    name: 'HEF',
    description:
      'Кафе здорового харчування. На вас чекає асортимент здорової їжі з правильно порахованими калоріями та збалансованим раціоном',
    address: 'Вінниця. Вул. Кропивницького, 7.'
  },
  {
    cityId: '2',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_39.png`,
    name: 'Батискаф',
    description:
      'У меню ресторану є спеціально виділені пропозиції, де вказано 100% vegan. В «Батискафі» можна замовити сир тофу-гриль з овочами. Це 250 грам рослинного сиру з овочами',
    address: 'Вінниця. Пр-т. Коцюбинського, 43'
  },

  {
    cityId: '3',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_40.png`,
    name: 'Vegan Cafe',
    description:
      'Vegan Cafe, простір, де:\n' + '- великий вибір vegan страв\n' + '- натуральні RAW-десерти та торти, які роблять на замовлення',
    address: 'Дніпро. Вул. Павла Нірінберга 10'
  },
  {
    cityId: '3',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_41.png`,
    name: 'Jaipur',
    description: 'Кафе правильного харчування (кафе ПП). Здорове меню. Смачні та корисні страви',
    address: 'Дніпро. Вул. Мостова, 4А'
  },

  {
    cityId: '13',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_42.png`,
    name: 'Bloom ',
    description: 'Сніданки цілий день;\n' + 'Балійська, мексиканська та тайська кухня;\n' + 'Корисна їжа та десерти без цукру.',
    address: 'Одесса. Вул. Катерининська, 48'
  },
  {
    cityId: '13',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_43.png`,
    name: 'True',
    description:
      "Збалансовані страви зі свіжих овочів і фруктів, всілякі смузі, натуральні солодощі і трав'яні чаї підійдуть не тільки вегетаріанцям і сироїдам, але припадуть до смаку і тим, хто просто хоче урізноманітнити свій раціон корисною та смачною їжею",
    address: 'Одесса. Сабанський провулок, 1'
  },
  {
    cityId: '13',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_44.png`,
    name: 'Alive',
    description:
      'Тут готують корисні смузі-боули та десерти без цукру, а також звичні ранкові позиції, але в більш «здоровому» варіанті: наприклад, можна взяти цільнозерновий авокадо-тост із мікрогрином, скрембл із тофу або лляну кашу на мигдальному молоці',
    address: 'Одесса. Вулиця Буніна, 19'
  },
  {
    cityId: '13',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_45.png`,
    name: 'Espresso bar Тишина.',
    description:
      "У меню традиційні ранкові позиції особливому прочитанні: наприклад, до авокадо-тосту подають песто з в'ялених томатів, до вівсянки – артишоки, а сирникам – м'ятний соус",
    address: 'Одесса. Вулиця Грецька, 1'
  },
  {
    cityId: '13',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_46.png`,
    name: 'Buddha bowl',
    description: 'В меню боули, роли, смузі',
    address: 'Одесса. Вулиця Маршала Говорова, 18'
  },
  {
    cityId: '13',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_47.png`,
    name: 'KACHOROVSKA',
    description: 'В меню авокадо тости, сендвічі з куркою, салат з лососем та сніданки увесь день (сирники, омлет, вівсяна каша)',
    address: 'Одесса. Вулиця Буніна, 19'
  },
  {
    cityId: '13',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_48.png`,
    name: 'Vegano Hooligano Odessa',
    description:
      'Вегатеріанський/веганський рестора. Меню Vegano Hooligano Family складається виключно з компонентів рослинного походження. Це покращує здоров’я, зберігає ресурс планети та дарує тваринам свободу',
    address: 'Одесса. Вулиця Мала Арнаутська 59'
  },

  {
    cityId: '15',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_49.png`,
    name: 'KASHKA',
    description:
      'Всі кашки є цільнозерновими, а отже є прямими джерелами багатьох мікроелементів та вітамінів\n' +
      'Якщо ви веган, вегетаріанець, спортсмен, бажаєте привести тіло у форму - ви точно знайдете щось для себе',
    address: 'Рівне. Вул. Директорії, 5'
  },
  {
    cityId: '15',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_50.png`,
    name: 'Foodies',
    description:
      'Foodies - це ресторан швидкого та ЗДОРОВОГО харчування з цінами "як для своїх". Ви можете обрати все, що до душі:  легенький супчик або ситний гарнір зі стейком, соковиту рибку або овочі гриль.\n' +
      'Ну і безпрограшний варіант - свіжий весняний салатик',
    address: 'Рівне. Вул. Кавказька, 2/1'
  },
  {
    cityId: '15',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_51.png`,
    name: 'Мила, це я',
    description:
      'В основі меню представлені популярні страви європейської, американської й паназіатської кухонь, які готують з натуральних продуктів локального походження. У ресторані самостійно випікають хліб, а також використовують локшину і різні азіатські соуси власного приготування',
    address: 'Рівне. Вул. Пересопницька, 3'
  },

  {
    cityId: '18',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_49.png`,
    name: 'KASHKA',
    description:
      'Всі кашки є цільнозерновими, а отже є прямими джерелами багатьох мікроелементів та вітамінів\n' +
      'Якщо ви веган, вегетаріанець, спортсмен, бажаєте привести тіло у форму - ви точно знайдете щось для себе',
    address: 'Рівне. Вул. Директорії, 5'
  },
  {
    cityId: '18',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_50.png`,
    name: 'Їжme',
    description:
      'Складаючи меню,  користувались принципами «смачно, швидко, поживно та корисно для здоров’я». Смачні салати, оригінальні пасти, ситні каші, овочі al dente, крем-супи, буріто з оригінальними соусами, риба, соковите м’ясо.',
    address: 'Тернопіль. Вул. 15 квітня, 1е'
  },
  {
    cityId: '18',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_51.png`,
    name: 'Tikithai',
    description:
      'Ресторан швидкого харчування з автентичними азійськими стравами, що приготовлені за тайською, корейською та японською рецептурою з використанням оригінальних соусів, спецій та інших автентичних інгредієнтів',
    address: "Тернопіль. Вул. В'ячеслава Чорновола, 4"
  },

  {
    cityId: '19',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_52.png`,
    name: 'Chia',
    description: 'Корисні та смачні страви\n' + 'Десерти без цукру, лактози та муки.\n' + 'Боули\n' + 'Здорові салати',
    address: "Ужгород. Слов'янська набережна, 1"
  },
  {
    cityId: '19',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_53.png`,
    name: 'Eat Me Cafe!',
    description:
      'Сімейне затишне кафе про Каву Вафлі і Любов! Американські вафлі та сніданки цілий день, випічка та сиропи власного приготування',
    address: 'Ужгород. Вул. Волошина, 22'
  },
  {
    cityId: '19',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_54.png`,
    name: 'Indigo Shanti-Cafe',
    description: 'Вегетаріанська кухня з різних куточків світу. Понад 50 сортів китайського чаю',
    address: 'Ужгород. Площа Шандора Петефі, 34'
  },
  {
    cityId: '19',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_55.png`,
    name: 'Food.varysh',
    description:
      'Food Varysh допоможе правильно харчуватись і підтримувати ідеальну вагу. Також  здійснюють доставку страв за наступними програмами: Ланч-тайм; Збалансоване харчування; Харчування при цукровому діабеті; Вегетаріанське меню; Меню без лактози і глютена',
    address: 'Ужгород. Вул. Льва Толстого, 44'
  },

  {
    cityId: '22',
    imageUrl: `${process.env.PUBLIC_URL}/images/places-to-eat/img_56.png`,
    name: 'Ola Healthy Cafe',
    description: 'Вегетаріанське кафе🌱Pets friendly\n' + 'Багато фрешів🍊 та веганських страв',
    address: 'Хмельницкий, пер. Пекарский 6'
  }
];

export const getCities = (): Promise<City[]> => {
  return Promise.resolve(CITIES);
};

export const getPlacesToEat = (selectedCityId?: string): Promise<PlaceToEat[]> => {
  const placesToEat = selectedCityId ? PLACES_TO_EAT.filter(({ cityId }) => cityId === selectedCityId) : PLACES_TO_EAT;

  return Promise.resolve(placesToEat);
};
