export enum CurrencyType {
  EUR = 'EUR',
  USA = 'USA',
  RUB = 'RUB',
  PLN = 'PLN',
}

export interface Currency {
  id: number;
  name: CurrencyType;
}
