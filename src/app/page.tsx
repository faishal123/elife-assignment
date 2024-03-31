import WeatherMain from "@/pages/WeatherMain/WeatherMain";
import Image from "next/image";
import {
	CurrentWeatherResponse,
	ForecastResponse,
	ReverseGeoCodingResponse,
} from "@/constants/types/openWeather";
import { getWeatherAndAtmosphere } from "@/utils/common";
import { DataProvider } from "@/utils/context";
import { UnsplashResponseType } from "@/constants/types/unsplash";

const defaultLat = 35.672855;
const defaultLong = 139.817413;

const Home = async ({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const usedLat = searchParams?.lat || defaultLat;
	const usedLong = searchParams?.long || defaultLong;
	const reverseGeoCodingResponse = await fetch(
		`http://api.openweathermap.org/geo/1.0/reverse?lat=${usedLat}&lon=${usedLong}&appid=${process.env.OPENWEATHER_APIKEY}`,
	);
	const reverseGeoCodingResponseJson: ReverseGeoCodingResponse =
		await reverseGeoCodingResponse.json();

	const weatherApiResponse = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${usedLat}&lon=${usedLong}&appid=${process.env.OPENWEATHER_APIKEY}`,
	);
	const weatherApiResponseJson: CurrentWeatherResponse =
		await weatherApiResponse.json();
	const weather = getWeatherAndAtmosphere(weatherApiResponseJson.weather);

	const fiveDaysForecastResponse = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${usedLat}&lon=${usedLong}&appid=${process.env.OPENWEATHER_APIKEY}`,
	);
	const fiveDaysForecastResponseJson: ForecastResponse =
		await fiveDaysForecastResponse.json();

	const unsplashApiResponse = await fetch(
		`https://api.unsplash.com/search/photos?query=${encodeURI(
			`${weather?.weather?.[0]?.main || "Rain"}`,
		)}&per_page=1`,
		{
			method: "GET",
			headers: {
				Authorization: `Client-ID ${process.env.UNSPLASH_ACCESSKEY}`,
			},
		},
	);

	const unsplashApiResponseJson: UnsplashResponseType =
		await unsplashApiResponse.json();

	return (
		<DataProvider
			defaultValue={{
				forecastSuccess: fiveDaysForecastResponse.ok,
				weatherSuccess: weatherApiResponse.ok,
				citySuccess: reverseGeoCodingResponse.ok,
				picturesSuccess: unsplashApiResponse.ok,
				forecast: fiveDaysForecastResponseJson,
				weathers: weatherApiResponseJson,
				city: reverseGeoCodingResponseJson,
				pictures: unsplashApiResponseJson,
			}}
		>
			<WeatherMain />
		</DataProvider>
	);
};

export default Home;
