import React from "react";
import { render, screen } from "@testing-library/react";
import { DataProvider } from "@/utils/context";
import RightLayout from "../../../../../src/pages/WeatherMain/RightLayout/RightLayout";
import {
	CurrentWeatherResponse,
	ForecastResponse,
} from "@/constants/types/openWeather";

const defaultWeather: CurrentWeatherResponse = {
	coord: {
		lon: 139,
		lat: 35,
	},
	weather: [
		{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01n",
		},
	],
	base: "stations",
	main: {
		temp: 280.55,
		feels_like: 278.92,
		temp_min: 280.15,
		temp_max: 282.11,
		pressure: 1016,
		humidity: 93,
	},
	visibility: 10000,
	wind: {
		speed: 1.5,
		deg: 200,
	},
	clouds: {
		all: 1,
	},
	dt: 1643650600,
	sys: {
		type: 3,
		id: 2019346,
		country: "JP",
		sunrise: 1643603380,
		sunset: 1643646060,
	},
	timezone: 32400,
	id: 1850147,
	name: "Tokyo",
	cod: 200,
};

const defaultForecast: ForecastResponse = {
	city: {
		id: 0,
		name: "London",

		coord: {
			lon: -0.1257,
			lat: 51.5085,
		},
		country: "GB",
		population: 0,
		timezone: 0,
		sunrise: 0,
		sunset: 0,
	},
	cod: "200",
	message: 0.0068,
	cnt: 40,
	list: [
		{
			dt: 1728089339,
			main: {
				temp: 282.14,
				feels_like: 277.28,
				temp_min: 282.14,
				temp_max: 282.14,
				pressure: 1016,
				sea_level: 1016,
				grnd_level: 997,
				humidity: 85,
				temp_kf: 0,
			},
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			clouds: {
				all: 0,
			},
			wind: {
				speed: 1.57,
				deg: 250,
			},
			sys: {
				pod: "d",
			},
			dt_txt: "2022-02-09 12:00:00",
			pop: 0,
			visibility: 100,
		},
		{
			dt: 1728096539,
			main: {
				temp: 282.14,
				feels_like: 277.28,
				temp_min: 282.14,
				temp_max: 282.14,
				pressure: 1016,
				sea_level: 1016,
				grnd_level: 997,
				humidity: 85,
				temp_kf: 0,
			},
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			clouds: {
				all: 0,
			},
			wind: {
				speed: 1.57,
				deg: 250,
			},
			sys: {
				pod: "d",
			},
			dt_txt: "2022-02-09 12:00:00",
			pop: 0,
			visibility: 100,
		},
		{
			dt: 1725929339,
			main: {
				temp: 282.14,
				feels_like: 277.28,
				temp_min: 282.14,
				temp_max: 282.14,
				pressure: 1016,
				sea_level: 1016,
				grnd_level: 997,
				humidity: 85,
				temp_kf: 0,
			},
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			clouds: {
				all: 0,
			},
			wind: {
				speed: 1.57,
				deg: 250,
			},
			sys: {
				pod: "d",
			},
			dt_txt: "2022-02-09 12:00:00",
			pop: 0,
			visibility: 100,
		},
		{
			dt: 1725932939,
			main: {
				temp: 282.14,
				feels_like: 277.28,
				temp_min: 282.14,
				temp_max: 282.14,
				pressure: 1016,
				sea_level: 1016,
				grnd_level: 997,
				humidity: 85,
				temp_kf: 0,
			},
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			clouds: {
				all: 0,
			},
			wind: {
				speed: 1.57,
				deg: 250,
			},
			sys: {
				pod: "d",
			},
			dt_txt: "2022-02-09 12:00:00",
			pop: 0,
			visibility: 100,
		},
	],
};

test("renders the rightlayout component", () => {
	const { container } = render(
		<DataProvider
			defaultValue={{
				weathers: defaultWeather,
				forecast: defaultForecast,
				forecastSuccess: true,
			}}
		>
			<RightLayout />
		</DataProvider>,
	);
	expect(screen.getByText("5 Days Forecast")).toBeInTheDocument();
});
