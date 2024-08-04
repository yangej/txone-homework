/** API doc: https://openweathermap.org/current */
export type CurrentWeather = {
  coord: {
    /**
     * desc: longitude of the location
     * */
    lon: number;
    /**
     * desc: latitude of the location
     * */
    lat: number;
  };
  weather: [
    {
      id: number;
      /**
       * desc: weather type
       */
      main: string;
      /**
       * desc: weather condition
       */
      description: string;
      /**
       * desc: weather icon id
       */
      icon: string;
    },
  ];
  base: string;
  main: {
    /**
     * unit: Celsius
     */
    temp: number;
    /**
     * unit: Celsius
     */
    feels_like: number;
    /**
     * unit: Celsius
     */
    temp_min: number;
    /**
     * unit: Celsius
     */
    temp_max: number;
    /**
     * unit: hPa
     */
    pressure: number;
    /**
     * unit: %
     */
    humidity: number;
    /**
     * unit: hPa
     */
    sea_level: number;
    /**
     * unit: hPa
     */
    grnd_level: number;
  };
  /**
   * unit: meter
   */
  visibility: number;
  wind: {
    /**
     * unit: meter/sec
     */
    speed: number;
    /**
     * desc: wind direction
     * unit: degree
     */
    deg: number;
  };
  clouds: {
    /**
     * desc: cloudiness
     * unit: %
     */
    all: number;
  };
  /**
   * desc: time of data calculation
   * unit: UTC
   */
  dt: number;
  sys: {
    type: number;
    id: number;
    /**
     * desc: country code - e.g.: TW
     */
    country: string;
    /**
     * desc: sunrise time
     * unit: UTC
     */
    sunrise: number;
    /**
     * desc: sunset time
     * unit: UTC
     */
    sunset: number;
  };
  timezone: number;
  /**
   * desc: city id
   */
  id: number;
  /**
   * desc: city name
   */
  name: string;
  cod: number;
};

export type GetCurrentWeatherPayload = {
  country: string;
  city: string;
};

export type GetCurrentWeatherResponse = CurrentWeather;
