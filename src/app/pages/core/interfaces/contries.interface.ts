export interface CountryResponse {
  name:         Name;
  currencies?:  Currencies;
  capital?:     string[];
  region:       Region;
  subregion?:   string;
  translations: { [key: string]: Translation };
  latlng:       number[];
  flag?:        string;
  population:   number;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
}
export interface CoatOfArms {
  png?: string;
  svg?: string;
}
export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}
export interface Currencies {
  PGK?: Aed;
  EUR?: Aed;
  MKD?: Aed;
  NZD?: Aed;
  CNY?: Aed;
  LSL?: Aed;
  ZAR?: Aed;
  ANG?: Aed;
  MXN?: Aed;
  HTG?: Aed;
  THB?: Aed;
  USD?: Aed;
  MYR?: Aed;
  WST?: Aed;
  LBP?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  XCD?: Aed;
  ISK?: Aed;
  AFN?: Aed;
  ERN?: Aed;
  INR?: Aed;
  PYG?: Aed;
  UAH?: Aed;
  SCR?: Aed;
  KYD?: Aed;
  DZD?: Aed;
  GNF?: Aed;
  ZMW?: Aed;
  BHD?: Aed;
  MMK?: Aed;
  ETB?: Aed;
  SSP?: Aed;
  AUD?: Aed;
  MWK?: Aed;
  JOD?: Aed;
  BBD?: Aed;
  IDR?: Aed;
  KGS?: Aed;
  XAF?: Aed;
  BAM?: BAM;
  CZK?: Aed;
  FJD?: Aed;
  SOS?: Aed;
  GEL?: Aed;
  ZWL?: Aed;
  SBD?: Aed;
  GIP?: Aed;
  OMR?: Aed;
  MRU?: Aed;
  HKD?: Aed;
  CVE?: Aed;
  PEN?: Aed;
  YER?: Aed;
  MNT?: Aed;
  STN?: Aed;
  UZS?: Aed;
  BIF?: Aed;
  KHR?: Aed;
  EGP?: Aed;
  UYU?: Aed;
  GTQ?: Aed;
  XOF?: Aed;
  SHP?: Aed;
  QAR?: Aed;
  NPR?: Aed;
  BOB?: Aed;
  CHF?: Aed;
  AED?: Aed;
  CAD?: Aed;
  GBP?: Aed;
  BRL?: Aed;
  BWP?: Aed;
  KRW?: Aed;
  SGD?: Aed;
  MVR?: Aed;
  GHS?: Aed;
  AMD?: Aed;
  KMF?: Aed;
  ILS?: Aed;
  GYD?: Aed;
  SYP?: Aed;
  TVD?: Aed;
  NOK?: Aed;
  TWD?: Aed;
  ARS?: Aed;
  CDF?: Aed;
  VES?: Aed;
  MAD?: Aed;
  AWG?: Aed;
  LAK?: Aed;
  BZD?: Aed;
  BMD?: Aed;
  SDG?: BAM;
  GMD?: Aed;
  CLP?: Aed;
  DKK?: Aed;
  LKR?: Aed;
  XPF?: Aed;
  GGP?: Aed;
  COP?: Aed;
  MZN?: Aed;
  LRD?: Aed;
  RWF?: Aed;
  MUR?: Aed;
  AZN?: Aed;
  VUV?: Aed;
  TJS?: Aed;
  SRD?: Aed;
  AOA?: Aed;
  PLN?: Aed;
  SLL?: Aed;
  RUB?: Aed;
  BTN?: Aed;
  MDL?: Aed;
  IMP?: Aed;
  PKR?: Aed;
  JMD?: Aed;
  RON?: Aed;
  IQD?: Aed;
  BYN?: Aed;
  RSD?: Aed;
  NAD?: Aed;
  MOP?: Aed;
  KES?: Aed;
  UGX?: Aed;
  ALL?: Aed;
  TMT?: Aed;
  TND?: Aed;
  SAR?: Aed;
  BSD?: Aed;
  DOP?: Aed;
  VND?: Aed;
  IRR?: Aed;
  TZS?: Aed;
  BDT?: Aed;
  JPY?: Aed;
  KWD?: Aed;
  HRK?: Aed;
  FOK?: Aed;
  HNL?: Aed;
  PAB?: Aed;
  FKP?: Aed;
  TRY?: Aed;
  CRC?: Aed;
  LYD?: Aed;
  PHP?: Aed;
  CKD?: Aed;
  NIO?: Aed;
  BGN?: Aed;
  HUF?: Aed;
  DJF?: Aed;
  BND?: Aed;
  KZT?: Aed;
  KID?: Aed;
  JEP?: Aed;
  TOP?: Aed;
  MGA?: Aed;
  KPW?: Aed;
  SZL?: Aed;
  SEK?: Aed;
  NGN?: Aed;
  TTD?: Aed;
}
export interface Aed {
  name:   string;
  symbol: string;
}
export interface BAM {
  name: string;
}
export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}
export interface Translation {
  official: string;
  common:   string;
}
export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}
