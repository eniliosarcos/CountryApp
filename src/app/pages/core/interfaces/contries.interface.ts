export interface CountryResponse {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag?:        string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
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

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
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

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
