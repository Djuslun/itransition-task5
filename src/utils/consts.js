const REGIONS = {
  ru: {
    id: 'ru',
    title: 'RUS',
  },
  de: {
    id: 'de',
    title: 'DE',
  },
  us: {
    id: 'us',
    title: 'USA',
  },
}

const FAKE_DATA = {
  ru: {
    letters:
      'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
    middleName: [
      'Александров',
      'Алексеев',
      'Анатольев',
      'Андреев',
      'Антонов',
      'Аркадьев',
      'Арсеньев',
      'Артемов',
      'Афанасьев',
      'Богданов',
      'Борисов',
      'Вадимов',
      'Валентинов',
      'Валериев',
      'Васильев',
      'Викторов',
      'Витальев',
      'Владимиров',
      'Всеволодов',
      'Вячеславов',
      'Гаврилов',
      'Геннадиев',
      'Георгиев',
      'Глебов',
      'Григорьев',
      'Давыдов',
      'Данилов',
      'Денисов',
      'Дмитриев',
      'Евгеньев',
      'Егоров',
      'Емельянов',
      'Ефимов',
      'Иванов',
      'Игорев',
      'Иосифов',
      'Кириллов',
      'Константинов',
      'Корнеев',
      'Леонидов',
      'Львов',
      'Макаров',
      'Максимов',
      'Марков',
      'Матвеев',
      'Митрофанов',
      'Михайлов',
      'Назаров',
      'Наумов',
      'Николаев',
      'Олегов',
      'Павлов',
      'Петров',
      'Платонов',
      'Робертов',
      'Родионов',
      'Романов',
      'Савельев',
      'Семенов',
      'Сергеев',
      'Станиславов',
      'Степанов',
      'Тарасов',
      'Тимофеев',
      'Тихонов',
      'Федоров',
      'Феликсов',
      'Филиппов',
      'Эдуардов',
      'Юрьев',
      'Яковлев',
      'Ярославов',
    ],
  },
  de: {
    letters: 'aäbcdefghijklmnoöpqrstuüvwxyzAÄBCDEFGHIJKLMNOÖPQRSßTUÜVWXYZ',
  },
  us: {
    letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  },
};

const START_USER_QUANTITY = 20
const PAGE_STEP = 10
const MAX_SEED = 999999999
const RU_CITY_PREFIX = ['г.', 'д.', 'г.п.', 'город', 'деревня', 'дер.', 'село'];
const USER_MISTAKES_KEY = ['name', 'address', 'phone'];

const CSVHeaders = [
  { label: "Id", key: "id" },
  { label: "Name", key: "name" },
  { label: "Adress", key: "adress" },
  { label: "Telephone", key: "phone" },
];

export {
  REGIONS,
  FAKE_DATA,
  CSVHeaders,
  RU_CITY_PREFIX,
  START_USER_QUANTITY,
  PAGE_STEP, MAX_SEED,
  USER_MISTAKES_KEY,
}