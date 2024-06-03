import React, { useEffect } from "react";
import logo from "./images/logo.png";
import ask from "./images/ask.png";
import left from "./images/left-arrow.png";
import rostelecom from "./images/rostelecom.png";
import sberbank from "./images/sberbank.png";
import dodo from "./images/DODO.png";
import rzd from "./images/RZD.png";
import avito from "./images/Avito.png";
import canon from "./images/Canon.png";
import alibaba from "./images/alibaba.png";
import right from "./images/right-arrow.png";
import elearning from "./images/elearning.png";
import result from "./images/result 1.png";
import report from "./images/report.png";
import constr from "./images/constr_1.png";
import constrr from "./images/constr_2.png";
import notebook from "./images/notebook.png";
import table from "./images/table.png";
import word from "./images/word.png";
import pdf from "./images/pdf.png";
import excel from "./images/excel.png";
import shop from "./images/shopping.png";
import data from "./images/data.png";
import work from "./images/work.png";
import iso from "./images/ISO.png";
import man from "./images/man.png";
import woman from "./images/woman.png";
import stroke from "./images/stroke.png";
import settings from "./images/settings.png";
import security from "./images/security.png";
import content from "./images/phone.png";
import network from "./images/network.png";
import ev from "./images/evgenia.png";
import nat from "./images/natalia.png";
import logoo from "./images/logo_.png";
import send from "./images/send.png";
import facebook from "./images/send.png";
import instagram from "./images/instagram.png";
import wk from "./images/Wk.png";
import ok from "./images/OK.png";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
export function Home() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col xl:flex-row gap-2 xl:mb-0 xl:mt-0 xl:items-center xl:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a className="hover:cursor-pointer flex items-center" target="_blank">
          ТАРИФЫ И ЦЕНЫ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a className="hover:cursor-pointer flex items-center" target="_blank">
          БАЗА РЕСПОНДЕНТОВ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a className="hover:cursor-pointer flex items-center" target="_blank">
          ДЕМО-ВЕРСИЯ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a className="hover:cursor-pointer flex items-center" target="_blank">
          КОНСТРУКТОР ТЕСТОВ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a className="hover:cursor-pointer flex items-center" target="_blank">
          КОНТАКТЫ
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-10">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 xl:px-8 xl:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium flex items-center gap-4">
              <img src={logo} alt="logo" width="40px" />
              <div>
                <h1 className="text-dark_blue font-semibold text-[20px]">
                  Анкетолог
                </h1>
                <h4 className="text-[10px]">Конструктор анкет</h4>
              </div>
            </Typography>
            <div className="mr-4 hidden xl:block">{navList}</div>
            <div className="flex items-center gap-4">
              <div className="flex flex-row items-center gap-x-4">
                <button
                  className="bg-transpatent rounded-md border border-light_blue px-4 outline-none py-1 text-black"
                  size="sm"
                >
                  <a href="/auth/login">Войти</a>
                </button>
                <img
                  src={ask}
                  alt="ask"
                  size="sm"
                  className="border border-light_blue rounded-full py-[10px] px-[11px]"
                />
              </div>
              <IconButton
                variant="text"
                className="ml-0 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>{navList}</MobileNav>
        </Navbar>
      </header>
      <main className="flex flex-col text-center pb-10 gap-24">
        <section className="bg-bg_img bg-cover h-[640px] flex flex-col items-center justify-between pt-32">
          <div className="flex flex-col items-center justify-center gap-y-10 text-center">
            <h1 className="text-white font-[300] lg:text-[42px] max-w-[800px] text-md">
              ПОМОЖЕМ ПРОВЕСТИ ОПРОС И ПОЛУЧИТЬ КАЧЕСТВЕННЫЕ ДАННЫЕ
            </h1>
            <p className="text-white text-[15px] w-[370px]">
              Профессиональный сервис для создания опросов и проведения
              исследований
            </p>
            <div className="flex justify-center items-center gap-3 sm:gap-10 text-center">
              <button className="bg-light_blue text-white py-2 px-4 font-extralight rounded-[3px] border border-transparent hover:bg-transparent hover:border-white duration-300">
                СОЗДАТЬ ОПРОС
              </button>
              <button className="bg-light_blue text-white py-2 px-4 font-extralight rounded-[3px] border border-transparent hover:bg-transparent hover:border-white duration-300">
                ТАРИФЫ И ЦЕНЫ
              </button>
            </div>
          </div>
          <div className="bg-white flex justify-between items-center gap-x-10 2xl:gap-16 rounded-t-2xl py-5 px-10">
            <img src={left} alt="arrow" className="hover:cursor-pointer" />
            <a href="https://msk.rt.ru/">
              <img src={rostelecom} alt="rostelecom" />
            </a>
            <a href="https://dodopizza.uz/tashkent">
              <img src={dodo} alt="dodo pizza" />
            </a>
            <a href="https://www.rzd.ru/" className="hidden md:flex">
              <img src={rzd} alt="rzd" />
            </a>
            <a href="https://www.avito.ru/" className="hidden md:flex">
              <img src={avito} alt="avito" />
            </a>
            <a href="sberbank.ru/ru/person" className="hidden xl:flex">
              <img src={sberbank} alt="sberbank" />
            </a>
            <a href="https://www.canon.uz/" className="hidden xl:flex">
              <img src={canon} alt="canon" />
            </a>
            <a href="https://russian.alibaba.com/" className="hidden xl:flex">
              <img src={alibaba} alt="alibaba" />
            </a>
            <img src={right} alt="arrow" className="hover:cursor-pointer" />
          </div>
        </section>
        <section className="flex flex-col gap-12 bg-gradient-to-b from-white from-5% to-gray-50 tp-90%">
          <h1 className="text-[34px] flex justify-center font-extralight">
            Провести опрос – это просто
          </h1>
          <div className="flex flex-row flex-wrap gap-y-16 min-h-96 justify-evenly items-center text-center">
            <div className="flex flex-col text-left max-w-[350px] py-10 pl-6 pr-10 rounded-md gap-4 min-h-[270px] max-h-[300px] hover:cursor-pointer transition-all duration-700">
              <img src={elearning} alt="elearning" width={40} height={40} />
              <span className="font-bold">Создайте опрос</span>
              <p>
                Онлайн-конструктор анкет поможет{" "}
                <span className="font-bold">создать вопросы</span> и настроить{" "}
                <span className="font-bold">логические правила</span>
              </p>
            </div>
            <div className="flex flex-col text-left max-w-[350px] py-10 pl-6 pr-10 rounded-md gap-4 min-h-[270px] max-h-[300px] hover:cursor-pointer transition-all duration-700">
              <img src={result} alt="result" width={40} height={40} />
              <span className="font-bold">Собирайте ответы</span>
              <p>
                Проведите-mail или СМС-рассылку, воспользуйтесь{" "}
                <span className="font-bold">
                  панелью респондентов «Анкетолог»
                </span>
              </p>
            </div>
            <div className="flex flex-col text-left max-w-[350px] py-10 pl-6 pr-10 rounded-md gap-4 min-h-[270px] max-h-[300px] hover:cursor-pointer transition-all duration-700">
              <img src={report} alt="report" width={40} height={40} />
              <span className="font-bold">Получайте результаты</span>
              <p>
                Наблюдайте за ходом опроса онлайн. Выгружайте статистику или
                ответы{" "}
                <span className="font-semibold">в нужном вам формате</span>{" "}
                <div className="flex gap-3">
                  <img src={table} alt="table" />
                  <img src={word} alt="word" />
                  <img src={pdf} alt="pdf" />
                  <img src={excel} alt="excel" />
                </div>
              </p>
            </div>
          </div>
        </section>
        <section className="hidden md:flex flex-col gap-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-[32px]">Возможности конструктора анкет</h1>
            <span className="font-semibold">
              18 типов вопросов в конструкторе
            </span>
            <p className="flex justify-center w-[520px]">
              одиночный и множественный выбор, шкала, ранжирование и даже
              матрица с выпадающим списком и индекс NPS
            </p>
          </div>
          <div className="flex items-center justify-between">
            <img
              src={constr}
              alt="constructor1"
              width={450}
              height={360}
              className="hidden 2xl:flex"
            />
            <img src={left} alt="arrow" />
            <img
              src={notebook}
              alt="notebook"
              width={580}
              height={360}
              className=""
            />
            <img src={right} alt="arrow" />
            <img
              src={constrr}
              alt="constructor2"
              width={440}
              height={360}
              className="hidden 2xl:flex"
            />
          </div>
        </section>
        <section className="bg-[#F4F5F9] pt-20 pb-14">
          <h1 className="text-[30px]">
            Для кого сервис онлайн-опросов будет полезен?
          </h1>
          <div className="flex flex-row flex-wrap justify-evenly items-center min-h-[550px] gap-y-16 gap-x-4 pt-20">
            <div className="text-left bg-white max-w-[400px] min-h-[418px] max-h-[418px] flex flex-col gap-4 rounded-md py-12 px-7 transition-all duration-700 hover:cursor-pointer">
              <img src={shop} alt="shop" />
              <p className="font-semibold text-[20px]">
                Владельцы торговых сетей и интернет-магазинов
              </p>
              <ul className="list-disc">
                <li>Опросы клиентов</li>
                <li>Оценка уровня удовлетворенности</li>
                <li>Оценка уровня лояльности</li>
                <li>Получение обратной связи</li>
                <li>Изучение поведения покупателей</li>
              </ul>
            </div>
            <div className="text-left bg-white max-w-[400px] min-h-[418px] max-h-[418px] flex flex-col gap-4 rounded-md py-12 px-7 transition-all duration-700 hover:cursor-pointer">
              <img src={data} alt="data" />
              <p className="font-semibold text-[20px] h-20 max-w-[200px]">
                Маркетологи и бренд-менеджеры
              </p>
              <ul className="list-disc min-h-36">
                <li>Маркетинговые исследования</li>
                <li>Тестирование продуктов и услуг</li>
                <li>Претестирование рекламных макетов, роликов</li>
                <li>Измерение уровня известности бренда</li>
                <li>Изучение предпочтений потребителей</li>
              </ul>
            </div>
            <div className="text-left bg-white max-w-[400px] min-h-[418px] max-h-[418px] flex flex-col gap-4 rounded-md py-12 px-7 transition-all duration-700 hover:cursor-pointer">
              <img src={work} alt="work" />
              <p className="font-semibold text-[20px]">
                HR и руководители компаний
              </p>
              <ul className="list-disc">
                <li>Опросы сотрудников</li>
                <li>Оценка уровня удовлетворенности</li>
                <li>Оценка уровня вовлеченности и мотивации</li>
                <li>Получение обратной связи</li>
                <li>Анкетирование кандидатов</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="text-left flex flex-col gap-y-16">
          <h1 className="text-[30px] flex justify-center">
            Преимущества сервиса
          </h1>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="rounded-md flex flex-col justify-between gap-y-10 px-10 pb-3 pt-10 hover:cursor-pointer transition-all duration-700 max-w-[490px] max-h-[330px]">
              <div>
                <h1 className="font-black text-[25px]">Шаблоны анкет</h1>
                <p className="text-gray">
                  Более 100{" "}
                  <span className="font-semibold">готовых шаблонов</span> анкет
                  для разных целей
                </p>
              </div>
              <div className="flex justify-end text-light_gray">
                <h1 className="text-gray-400 font-whin text-[50px]">01</h1>
              </div>
            </div>
            <div className="rounded-md flex flex-col justify-between gap-y-10 px-10 pb-3 pt-10 hover:cursor-pointer transition-all duration-700 max-w-[490px] max-h-[330px]">
              <div>
                <h1 className="font-black text-[25px]">Панель респондентов</h1>
                <p className="text-gray">
                  Обширная онлайн-панель респондентов{" "}
                  <span className="font-bold">138 500 чел.</span> c
                  возможностями таргетинга по 70+ критериям
                </p>
              </div>
              <div className="flex justify-end text-light_gray">
                <h1 className="text-gray-400 font-whin text-[50px]">02</h1>
              </div>
            </div>
            <div className="rounded-md flex flex-col justify-between gap-y-10 px-10 pb-3 pt-10 hover:cursor-pointer transition-all duration-700 max-w-[490px] max-h-[330px]">
              <div>
                <h1 className="font-black text-[25px]">
                  Корпоративный мультиаккаунт
                </h1>
                <p className="text-gray">
                  Объедините своих коллег в одну команду и проводите
                  исследования организованно
                </p>
              </div>
              <div className="flex justify-end text-light_gray">
                <h1 className="text-gray-400 font-whin text-[50px]">03</h1>
              </div>
            </div>
            <div className="rounded-md flex flex-col justify-between gap-y-10 px-10 pb-3 pt-10 hover:cursor-pointer transition-all duration-700 max-w-[490px] sm:max-h-[330px] max-h-[370px]">
              <div>
                <h1 className="font-black text-[25px]">
                  Безопасность пользователей и соблюдение закона{" "}
                </h1>
                <p className="text-gray">
                  Обеспечение защищенного соединения при помощи протокола https;
                  размещение серверов сервиса на территории России
                </p>
              </div>
              <div className="flex justify-end text-light_gray">
                <h1 className="text-gray-400 font-whin text-[50px]">04</h1>
              </div>
            </div>
            <div className="rounded-md flex justify-between gap-2 gap-y-10 px-10 pb-3 pt-10 flex-col xl:flex-row max-w-[490px] xl:max-w-[1020px] min-h-[350px]">
              <div className="max-w-[450px] flex flex-col items-start">
                <h1 className="font-semibold text-[30px]">
                  Профессиональные услуги
                </h1>
                <p className="text-gray pb-10 pt-3">
                  Наши специалисты{" "}
                  <span className="font-bold">качественно и быстро</span>{" "}
                  подготовят анкету, проведут исследование, осуществят расчет
                  индексов, составят статистический и аналитический отчеты
                </p>
                <Button variant="outlined" className="outline-none">
                  ОСТАВИТЬ ЗАЯВКУ
                </Button>
              </div>
              <div className="flex flex-col items-center gap-10">
                <div className="flex items-center gap-10">
                  <img src={iso} alt="ISO" />
                  <p>
                    Компания сертифицирована по стандарту ISO 20252:2019{" "}
                    <span className="text">Посмотреть сертификат</span>
                  </p>
                </div>
                <div className="flex items-center gap-10">
                  <img src={man} alt="man" />
                  <p>
                    Компания сертифицирована по стандарту ISO 20252:2019{" "}
                    <span className="text">Посмотреть сертификат</span>
                  </p>
                </div>
                <div className="flex items-center gap-10">
                  <img src={woman} alt="wooman" />
                  <p>
                    Компания сертифицирована по стандарту ISO 20252:2019{" "}
                    <span className="text">Посмотреть сертификат</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap gap-16">
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex items-center justify-center text-[33px]">
                <img src={stroke} alt="stroke" />
                200<p className="text-red">к</p>
              </h1>
              <p className="max-w-[157px] text-center font-semibold">
                пользователей сервиса
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex items-center justify-center text-[33px]">
                <img src={stroke} alt="stroke" />
                600
              </h1>
              <p className="max-w-[157px] text-center font-semibold">
                корпоративных клиентов
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex flex-row items-center justify-center text-[33px]">
                <img src={stroke} alt="stroke" />
                145<p className="text-red">к</p>
              </h1>
              <p className="max-w-[157px] text-center font-semibold">
                Респондентов в базе
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex items-center justify-center text-[33px]">
                <img src={stroke} alt="stroke" />
                10<p className="text-red">лет</p>
              </h1>
              <p className="max-w-[157px] text-center font-semibold">
                занимаемся онлайн- опросами
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex items-center justify-center text-[33px]">
                <img src={stroke} alt="stroke" />
                160<p className="text-red">к</p>
              </h1>
              <p className="max-w-[157px] text-center font-semibold">
                анкет создано пользователями
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-center gap-y-10">
          <div>
            <h1 className="text-[30px] text-gray font-light">
              Корпоративным клиентам
            </h1>
            <p className="flex justify-center items-center font-semibold max-w-[500px]">
              Создайте собственную систему опросов с помощью Anketolog Box
            </p>
          </div>
          <img src={notebook} alt="notebook" className="xl:hidden flex" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-y-0 gap-x-7">
            <div className="flex flex-col text-center md:text-end gap-y-10">
              <div className="flex flex-col items-center md:items-end max-w-[350px]">
                <img src={settings} alt="settings" />
                <h1 className="font-semibold text-[19px]">
                  Профессиональный конструктор
                </h1>
                <p>
                  с 18 типами вопросов, настройкой внутренней логики и внешнего
                  вида анкеты
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end max-w-[350px]">
                <img src={security} alt="security" />
                <h1 className="font-semibold text-[19px]">Хранение</h1>
                <p>всех анкет и ответов на Вашем сервере</p>
              </div>
            </div>
            <div className="hidden xl:flex flex-col items-center gap-y-4">
              <img src={notebook} alt="notebook" width={650} />
              <div className="flex flex-row gap-10">
                <button className="bg-light_blue text-white py-2 px-4 font-extralight rounded-[3px] border border-transparent hover:bg-transparent hover:text-black hover:border-gray duration-300">
                  Узнать подробнее
                </button>
                <button className="bg-light_blue text-white py-2 px-4 font-extralight rounded-[3px] border border-transparent hover:bg-transparent hover:text-black hover:border-gray duration-300">
                  Запросить стоимость
                </button>
              </div>
            </div>
            <div className="flex flex-col text-center md:text-start gap-y-10">
              <div className="flex flex-col items-center md:items-start max-w-[350px]">
                <img src={content} alt="content" />
                <h1 className="font-semibold text-[19px]">
                  Возможность проведения опроса
                </h1>
                <p>на любом устройстве: компьютере, планшете, смартфоне</p>
              </div>
              <div className="flex flex-col items-center md:items-start max-w-[350px]">
                <img src={network} alt="network" />
                <h1 className="font-semibold text-[19px]">
                  Создание рабочих групп
                </h1>
                <p>и администрирование доступа сотрудников</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-y-10 h-full">
          <h1 className="text-[30px]">Отзывы наших клиентов</h1>

          <div className="h-full flex gap-x-16 items-center justify-center">
            <img src={left} alt="arrow" className="flex" />
            <div className="flex h-full flex-row gap-8">
              <div class="h-full flex w-full max-w-[27rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 pl-6 pr-10 gap-4 lg:max-h-[270px] hover:cursor-pointer">
                <div class="h-full flex sm:flex-row flex-col items-center gap-4 pt-6 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent rounded-xl bg-clip-border">
                  <img
                    src={ev}
                    alt="Tania Andrew"
                    class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                  />
                  <div class="flex w-full flex-col gap-2 items-left">
                    <div class="flex items-center justify-center sm:justify-between">
                      <h5 class="block font-sans font-semibold text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
                        Евгения Синицына
                      </h5>
                      <div class="hidden sm:flex items-center gap-0.5">
                        <img src={dodo} alt="dodo pizza logo" />
                      </div>
                    </div>
                    <p className="flex justify-center sm:justify-normal items-start">
                      ДоДо Пицца
                    </p>
                  </div>
                </div>
                <div class="h-full p-0 mb-6">
                  <p class="h-full font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    Мы пользовались сервисом «Анкетолог» для проведения
                    исследований, касающихся бренда и продукта. С помощью
                    сервиса нам удалось оценить, как возросло знание бренда
                    после проведения рекламной кампании.
                  </p>
                </div>
              </div>

              <div class="h-full w-full max-w-[27rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 pl-6 pr-10  gap-4 max-h-[270px] hover:cursor-pointer hidden lg:flex">
                <div class="flex items-center gap-4 pt-6 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent rounded-xl bg-clip-border">
                  <img
                    src={nat}
                    alt="Tania Andrew"
                    class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                  />
                  <div class="flex w-full flex-col gap-2 items-left">
                    <div class="flex items-center justify-between">
                      <h5 class="block font-sans font-semibold text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
                        Наталия Вялкина
                      </h5>
                      <div class="flex items-center gap-0 5">
                        <img src={rostelecom} alt="dodo pizza logo" />
                      </div>
                    </div>
                    <p className="flex items-start">ООО «Ростелеком»</p>
                  </div>
                </div>
                <div class="p-0 mb-6">
                  <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    «Институт общественного мнения Анкетолог» регулярно проводит
                    количественные исследования для компании «Ростелеком». Его
                    сотрудников отличает профессионализм и глубокая экспертиза.
                  </p>
                </div>
              </div>
            </div>
            <img src={right} alt="arrow" className="flex" />
          </div>
          <button className="bg-light_blue text-white py-2 px-10 font-extralight rounded-[3px] border border-transparent hover:bg-transparent hover:text-black hover:border-gray duration-300">
            Создать опрос
          </button>
        </section>
      </main>
      <footer className="bg-dark_blue text-white flex flex-col gap-y-20 2xl:gap-y-0 2xl:flex-row justify-between items-center py-16 px-10">
        <div className="max-w-[1098px] flex flex-col items-start gap-4">
          <div className="">
            <h1 className="font-semibold text-white">Конструктор анкет</h1>
            <p className="text-dark_gray md:flex gap-x-4 hidden">
              О конструкторе <p className="text-[#7D7D7D]">|</p> Тарифы{" "}
              <p className="text-[#7D7D7D]">|</p> База респондентов{" "}
              <p className="text-[#7D7D7D]">|</p> Демо-версия{" "}
              <p className="text-[#7D7D7D]">|</p>
              Конструктор тестов <p className="text-[#7D7D7D]">|</p> Образцы
              анкет
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-white">Продукты</h1>
            <p className="text-dark_gray md:flex gap-x-4 hidden">
              Anketolog BOX <p className="text-[#7D7D7D]">|</p> Rapid
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-white">Услуги</h1>
            <p className="text-dark_gray md:flex gap-x-4 hidden">
              Маркетинговые исследования <p className="text-[#7D7D7D]">|</p>{" "}
              Тестирование макетов <p className="text-[#7D7D7D]">|</p> Опросы
              потребителей <p className="text-[#7D7D7D]">|</p> Опросы
              сотрудников <p className="text-[#7D7D7D]">|</p> Оценка
              узнаваемости бренда
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-white">Магазин Исследований</h1>
            <p className="text-dark_gray md:flex gap-x-4 hidden">
              Каталог исследований <p className="text-[#7D7D7D]">|</p> О
              магазине исследований <p className="text-[#7D7D7D]">|</p>{" "}
              Специальные предложения
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-white">
              Сообщество респондентов
            </h1>
            <p className="text-dark_gray md:flex gap-x-4 hidden">
              О сообществе <p className="text-[#7D7D7D]">|</p>{" "}
              Благотворительность <p className="text-[#7D7D7D]">|</p> FAQ
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-white">Информационный ресурс</h1>
            <p className="text-dark_gray md:flex gap-x-4 hidden">
              Материалы <p className="text-[#7D7D7D]">|</p> СМИ о нас{" "}
              <p className="text-[#7D7D7D]">|</p> Качество данных{" "}
              <p className="text-[#7D7D7D]">|</p> Реклама на сайте
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-white">Партнерская программа</h1>
            <p className="text-dark_gray md:flex gap-x-4 hidden">
              Привлечение респондентов <p className="text-[#7D7D7D]">|</p>{" "}
              Привлечение заказчиков <p className="text-[#7D7D7D]">|</p> FAQ
            </p>
          </div>
        </div>
        <div className="flex 2xl:flex-col flex-row gap-20">
          <div className="flex md:flex-row flex-col md:items-center 2xl:flex-col gap-10">
            <div className="flex flex-col gap-y-7">
              <h1 className="text-[23px]">Подпишитесь на нашу рассылку</h1>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Ваш-mail"
                  className="bg-[#253544] pl-5"
                />{" "}
                <img src={send} alt="send button" />
              </div>
            </div>
            <div className="flex flex-col gap-y-7">
              <h1 className="text-[23px]">Мы в соцсетях:</h1>
              <div className="flex gap-9">
                <img src={facebook} alt="facebook" />
                <img src={wk} alt="WK" />
                <img src={ok} alt="OK" />
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
          <img src={logoo} alt="logo" className="hidden 2xl:flex" />
        </div>
      </footer>
    </>
  );
}

export default Home;
