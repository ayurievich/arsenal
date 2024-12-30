import protect from "@/public/protect.svg"
import silence from "@/public/silence.svg"
import design from "@/public/design.svg"
import windowNoise from "@/public/windowNoise.svg"
import windowView from "@/public/windowView.svg"
import windowSafe from "@/public/windowSafe.svg"
import i1 from "~/assets/img/icon/s5.svg";
import i2 from "~/assets/img/icon/s6.svg";
import i3 from "~/assets/img/icon/s7.svg";

export const data = {
  hero: {
    title: "Остекление окон и балконов под ключ в квартирах и домах",
    subtitle: "Наши услуги позволят вам стать уверенными в качестве остекления вашей квартиры и дома",
    buttonText: "Подробнее"
  },
  about: {
    title: "Наша компания и услуги",
    text: "Мы занимаемся установкой окон в квартирах и домах.\n\nРаботаем с немецкой компанией Montblanc. Это компании зарекомендовавшая себя качеством в разработке профилей и остекления.\n\nНа сайте вы можете сами подобрать материалы и типы остекления и сделать рассчет или вызвать бесплатно замерщика. Он же поможет составить смету и договор. Мы стараемся сделать весь процесс быстрым и удобным.\n\nИзучите наш каталог и отправьте ваш запрос или свяжитесь с нами по телефону для консультации."
  },
  benefits: {
    list: [
      {
        icon: protect,
        text: "Долговечность и прочность"
      },
      {
        icon: silence,
        text: "Система шумоподавления"
      },
      {
        icon: design,
        text: "Дизайн и качество"
      }
    ],
    text: "Мы бесплатно поможем вам с замером и раcсчетом стоимости ваших окон.",
    buttonText: "Закажите обратный звонок"
  },
  examples: {
    title: "Примеры окон в квартирах и домах",
    list: [
      {
        image: "/images/example1.jpg",
        text: "Одностворчатое окно с поворотом",
        list: [
          {
            name: "Eco Line",
            price: 10500
          },
          {
            name: "Lux Line",
            price: 12900
          },
          {
            name: "Multi Line",
            price: 23000
          }
        ]
      },
      {
        image: "/images/example2.jpg",
        text: "Двустворчатое окно с поворотом",
        list: [
          {
            name: "Eco Line",
            price: 10500
          },
          {
            name: "Lux Line",
            price: 12900
          },
          {
            name: "Multi Line",
            price: 23000
          }
        ]
      },
      {
        image: "/images/example3.jpg",
        text: "Трехстворчатое окно с поворотом",
        list: [
          {
            name: "Eco Line",
            price: 15600
          },
          {
            name: "Lux Line",
            price: 18900
          },
          {
            name: "Multi Line",
            price: 28000
          }
        ]
      },
      {
        image: "/images/example4.jpg", // Changed to example4.jpg for uniqueness
        text: "Балкон и окно с поворотом",
        list: [
          {
            name: "Eco Line",
            price: 20500
          },
          {
            name: "Lux Line",
            price: 27900
          },
          {
            name: "Multi Line",
            price: 36000
          }
        ]
      }
    ],
    buttonText: "Закажите обратный звонок"
  },
  montage: {
    title: "Устанавливаем разные виды профилей",
    list: [
      {
        title: "– Шумоподавляющие свойства стеклопакета обеспечивают тишину в городе",
        icon: windowNoise
      },
      {
        title: "– Вы можете выбрать теплое или холодное освещение из окна",
        icon: windowSafe
      },
      {
        title: "– Зимой теплый воздух сохраняется в помещении очень долго",
        icon: windowView
      }
    ]
  },
  keyWorking: {
    title: "Что входит в установку окон и дверей «Под ключ»",
    list: [
      "Работа замерщика",
      "Изготовление окон. От 3-х недель",
      "Доставка",
      "Монтаж. Весь монтаж производится за 1 день",
      "Базовые комплектующие. Подоконники, ручки, откосы, крепежи.",
      "Гарантия 15 лет"
    ],
    buttonText: "Рассчитать стоимость"
  },
  experience: {
    title: "Осуществили более 1600 заказов по установке",
    text: "За время опыта работы мы придумали удобную систему коммуникации в телеграм и быстрый способ доставки и установки "
  },
  contacts: [
    {
      icon: i1,
      name: "+7 (962) 072-76-34",
      link: "tel:+79620727634"
    },
    {
      icon: i2,
      name: "yuri6464@mail.ru",
      link: "mailto:yuri6464@mail.ru"
    },
  ]
};