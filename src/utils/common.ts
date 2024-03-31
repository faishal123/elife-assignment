import { WeatherType } from "@/constants/types/openWeather";

export const mpsToMph = (mps?: number): number => {
	if (!mps) return 0;
	return Math.round(((mps * 2.23693629) / 3.6 + Number.EPSILON) * 100) / 100;
};

export const getLocation = (onSuccess: (data: GeolocationPosition) => void) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onSuccess, (error) => {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					alert("Location request has been denied.");
					break;
				case error.POSITION_UNAVAILABLE:
					alert("Unable to get location information.");
					break;
				case error.TIMEOUT:
					alert("Location request timed out");
					break;
				default:
					alert("An unknown error has occurred.");
					break;
			}
		});
	} else {
		alert("This browser doesn't support geolocation.");
	}
};

export const convertTemperature = (tempK?: number) => {
	if (!tempK) return { C: 0, F: 0 };
	const tempC = Math.round(tempK - 273.15);
	const tempF = Math.round(((tempK - 273.15) * 9) / 5 + 32);
	return {
		C: tempC,
		F: tempF,
	};
};

export const getWeatherAndAtmosphere = (weather?: WeatherType[]) => {
	if (!weather) return { weather: [], atmosphere: [] };
	const grouped = weather.reduce<{
		weather: WeatherType[];
		atmosphere: WeatherType[];
	}>(
		(a, c) => {
			if (c.id < 800 && c.id >= 700) {
				return { ...a, atmosphere: [...a.atmosphere, c] };
			}
			return { ...a, weather: [...a.weather, c] };
		},
		{
			weather: [],
			atmosphere: [],
		},
	);
	if (!grouped.weather.length) {
		grouped.weather = grouped.atmosphere;
	}
	return grouped;
};
