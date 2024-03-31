export type WeatherType = {
	id:
		| 200
		| 201
		| 202
		| 210
		| 211
		| 212
		| 221
		| 230
		| 231
		| 232
		| 300
		| 301
		| 302
		| 310
		| 311
		| 312
		| 313
		| 314
		| 321
		| 500
		| 501
		| 502
		| 503
		| 504
		| 511
		| 520
		| 521
		| 522
		| 531
		| 600
		| 601
		| 602
		| 611
		| 612
		| 615
		| 616
		| 620
		| 621
		| 622
		| 701
		| 711
		| 721
		| 731
		| 741
		| 751
		| 761
		| 762
		| 771
		| 781
		| 800
		| 801
		| 802
		| 803
		| 804;
	main:
		| "Thunderstorm"
		| "Drizzle"
		| "Rain"
		| "Snow"
		| "Clear"
		| "Clouds"
		| "Mist"
		| "Smoke"
		| "Haze"
		| "Dust"
		| "Fog"
		| "Sand"
		| "Ash"
		| "Squall"
		| "Tornado";
	description:
		| "thunderstorm with light rain"
		| "thunderstorm with rain"
		| "thunderstorm with heavy rain"
		| "light thunderstorm"
		| "thunderstorm"
		| "heavy thunderstorm"
		| "ragged thunderstorm"
		| "thunderstorm with hlight drizzle"
		| "thunderstorm with drizzle"
		| "thunderstorm with heavy drizzle"
		| "light intensity drizzle"
		| "drizzle"
		| "heavy intensity drizzle"
		| "light intensity drizzle rain"
		| "drizzle rain"
		| "heavy intensity drizzle rain"
		| "shower rain and drizzle"
		| "heavy shower rain and drizzle"
		| "shower drizzle"
		| "light rain"
		| "moderate rain"
		| "heavy intensity rain"
		| "very heavy rain"
		| "extreme rain"
		| "freezing rain"
		| "light intensity shower rain"
		| "shower rain"
		| "heavy intensity shower rain"
		| "ragged shower rain"
		| "light snow"
		| "snow"
		| "heavy snow"
		| "sleet"
		| "light shower sleet"
		| "shower sleet"
		| "light rain and snow"
		| "rain and snow"
		| "light shower snow"
		| "shower snow"
		| "heavy shower snow"
		| "mist"
		| "smoke"
		| "haze"
		| "sand/dust shirls"
		| "fog"
		| "sand"
		| "dush"
		| "volcanic ash"
		| "squall"
		| "tornado"
		| "clear sky"
		| "few clouds"
		| "scattered clouds"
		| "broken clouds"
		| "overcast clouds";
	icon:
		| "01d"
		| "01n"
		| "02d"
		| "02n"
		| "03d"
		| "03n"
		| "04d"
		| "04n"
		| "09d"
		| "09n"
		| "10d"
		| "10n"
		| "11d"
		| "11n"
		| "13d"
		| "13n"
		| "50d"
		| "50n";
};

type MainWeatherType = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level?: number;
	grnd_level?: number;
	temp_kf?: number;
};

type CoreWeatherResopnse = {
	dt: number;
	main: MainWeatherType;
	weather: WeatherType[];
	clouds: { all: number };
	wind: { speed: number; deg: number; gust?: number };
	visibility: number;
	sys: Record<string, string | number>;
};

export interface CurrentWeatherResponse extends CoreWeatherResopnse {
	coord: { lon: number; lat: number };
	base: string;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

type ReverseGeoCodingSingleResponse = {
	name: string;
	local_names?: Record<string, string>;
	lat: number;
	lon: number;
	country: string;
	state?: string;
};

export type ReverseGeoCodingResponse = ReverseGeoCodingSingleResponse[];

export interface ForecastListType extends CoreWeatherResopnse {
	dt_txt: string;
	pop: number;
}

export type ForecastResponse = {
	cod: string;
	message: number;
	cnt: number;
	list: ForecastListType[];
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		};
		country: string;
		population: number;
		timezone: number;
		sunrise: number;
		sunset: number;
	};
};
