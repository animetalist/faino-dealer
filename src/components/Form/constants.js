export const FIELDS = [
  {
    name: 'Name',
    placeholder: { uk: 'Ваше імʼя', ro: 'Numele dumneavoastră' },
    required: true,
  },
  {
    name: 'Phone',
    type: 'tel',
    placeholder: { uk: 'Номер телефону', ro: 'Număr de telefon' },
    pattern: /^[+]?[\d() -]*\d[\d() -]{8,}$/,
    required: true,
  },
  {
    name: 'Сomponent',
    placeholder: {
      uk: 'Назва запчастини / вузла',
      ro: 'Denumirea piesei de schimb / ansamblului',
    },
    isExtra: true,
  },
  {
    name: 'Model',
    placeholder: {
      uk: 'Марка та модель транспорту',
      ro: 'Marca și modelul vehiculului',
    },
    isExtra: true,
  },
  {
    name: 'Year',
    placeholder: { uk: 'Рік випуску', ro: 'Anul eliberării' },
    isExtra: true,
  },
  {
    name: 'VIN',
    placeholder: { uk: 'Номер шасі', ro: 'Numărul șasiului' },
    required: true,
    isExtra: true,
  },
  {
    name: 'Comment',
    type: 'textarea',
    placeholder: { uk: 'Ваш коментар', ro: 'Comentariul dumneavoastră' },
  },
]

export const BTN = {
  uk: 'Замовити',
  ro: 'Comandă',
}

export const ERROR_MESSAGE = {
  required: {
    uk: 'Обовʼязкове поле',
    ro: 'Câmp obligatoriu',
  },
  pattern: {
    uk: 'Невірний формат',
    ro: 'Format nevalabil',
  },
}

export const SUCCESS_MESSAGE = {
  uk: 'Заявка відправлена!',
  ro: 'Cererea a fost trimisă',
}
