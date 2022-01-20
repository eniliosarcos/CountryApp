export interface WeatherResponse {
  weather:    Weather[];
  base:       string;
  main:       Main;
  wind:       Wind;
  clouds:     Clouds;
  name:       string;
}
export interface Clouds {
  all: number;
}
export interface Main {
  temp:       number;
  temp_min:   number;
  temp_max:   number;
  humidity:   number;
}
export interface Weather {
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
}
