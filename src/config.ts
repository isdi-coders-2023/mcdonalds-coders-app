export const LOCALE = 'es-AR';
export const CURRENCY = 'ARS';
export const IMG_PATH = '/img/';

export const URLS = {
  ROOT: '/',
  ORDERS: '/orders/',
  ORDERS_CART: '/orders/cart/',
  ORDERS_CHECKOUT: '/orders/checkout/',
  ORDERS_CURRENT: '/orders/current/',
  ORDERS_ADD: '/orders/add/',
  DISCOUNTS: '/discounts/',
  COUPONS: '/coupons/',
  CATALOGUE: '/catalogue/',
};

export const STORAGE = {
  USER: 'user',
  ORDER: 'order',
  COUPONS: 'coupons',
};

export enum PAYMENT_TYPE {
  CASH = 'EFECTIVO',
  DEBIT = 'DEBITO',
  WIRE_TRANSFER = 'TRANSFERENCIA_BANCARIA'
}

export const DIGITS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
];

export enum ORDER_STATUS_LITERAL {
  CREATED = 'CREATED',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN PROGRESS',
  WAITING_TO_DELIVER = 'WAITING TO DELIVER',
  PICKED_UP = 'PICKED UP',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED'
}
