// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  countriesApi_URL: "https://restcountries.com/v3.1/all",
  newsApi_URL: "https://newsapi.org/v2",
  currenciesConvertAPI_URL: "https://free.currconv.com/api/v7",
  weatherAPI_URL: "https://api.openweathermap.org/data/2.5",

  //API KEYS
  NEWS_API_KEY: "JVOjT55hOQLvN8VCd1076vWV64FjiY6Pa5S4JEkEMbY",
  CURRENCY_API_KEY: "5ead8ffabf4ef82ba5dd",
  WEATHER_API_KEY: "8163a2cb081337e670c7e2cea1137140",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
