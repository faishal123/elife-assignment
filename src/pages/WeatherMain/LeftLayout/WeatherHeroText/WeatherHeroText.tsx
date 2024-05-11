"use client";

import Wind from "@/assets/icons/Wind";
import { DataContext } from "@/utils/context";
import Humidity from "@/assets/icons/Humidity";
import {
	convertTemperature,
	getWeatherAndAtmosphere,
	mpsToMph,
} from "@/utils/common";
import Error from "@/assets/icons/Error";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import Button from "@/components/Button/Button";
import GetLocation from "@/components/GetLocation/GetLocation";
import { sendGTMEvent } from "@next/third-parties/google";

const WeatherHeroText = () => {
	const [windUnit, setWindUnit] = useState<"m/s" | "mph">("m/s");
	const searchParams = useSearchParams();
	const latFromParam = searchParams?.get("lat");
	const longFromParam = searchParams?.get("long");
	const { city, weathers, tempUnit, toggleTempUnit, weatherSuccess } =
		useContext(DataContext);

	const cityName =
		!city?.[0]?.name &&
		!latFromParam &&
		!longFromParam &&
		!weathers?.coord?.lat &&
		!weathers?.coord?.lon
			? ""
			: city?.[0]?.name ||
			  `${weathers?.coord?.lat || latFromParam}° N, ${
					weathers?.coord?.lon || longFromParam
			  }° E`;
	const temps = weathers?.main;
	const currentTemp = convertTemperature(temps?.temp);
	const tempCelcius = currentTemp.C;
	const tempFahrenheit = currentTemp.F;
	const weatherAndAtmosphere = getWeatherAndAtmosphere(weathers?.weather);

	const toggleWindUnit = () => {
		setWindUnit((prev) => (prev === "m/s" ? "mph" : "m/s"));
	};

	const windSpeed = {
		mph: mpsToMph(weathers?.wind?.speed),
		"m/s": weathers?.wind?.speed,
	};

	const humidity = weathers?.main?.humidity;

	return (
		<div className="p-20 w-full box-border max-[800px]:p-[15%]">
			{weatherSuccess ? (
				<>
					{cityName && (
						<div className="z-10 relative">
							<GetLocation>
								<div className="text-lg font-medium text-left">{cityName}</div>
							</GetLocation>
						</div>
					)}
					{(!!tempCelcius || !!tempFahrenheit) && (
						<div className="flex items-start">
							<span className="max-xs:text-8xl text-9xl font-light">
								{Math.floor(tempUnit === "C" ? tempCelcius : tempFahrenheit)}
							</span>
							<span
								data-testid="toggleTempUnit"
								className="max-xs:text-4xl text-5xl cursor-pointer transition-all p-2 rounded-lg hover:bg-[rgba(0,0,0,.25)] select-none"
								onClick={() => {
									toggleTempUnit && toggleTempUnit();
									sendGTMEvent({ event: "buttonClicked", value: "xyz" });
								}}
							>
								°{tempUnit}
							</span>
						</div>
					)}
					<div className="capitalize">
						{weatherAndAtmosphere?.weather?.[0]?.description}
					</div>
					{humidity && (
						<div className="flex gap-1 mt-1 items-center">
							<Humidity width={20} height={20} color="#e6e6e6" /> {humidity}%
							Humidity
						</div>
					)}
					{windSpeed[windUnit] && (
						<div
							data-testid="toggleWindUnit"
							className="flex gap-1 mt-1 items-center cursor-pointer w-max"
							onClick={toggleWindUnit}
						>
							<Wind width={20} height={20} color="#e6e6e6" />{" "}
							{`${windSpeed[windUnit]} ${windUnit}`}
						</div>
					)}
				</>
			) : (
				<div className="flex flex-col items-center justify-center">
					<Error color="#e6e6e6" width={100} height={100} />
					<div className="text-center text-lg mt-2 font-semibold">
						There was a problem when retrieving the weather information
					</div>
					<Button
						dataTestId="reloadButton"
						customClassName="mt-5"
						onClick={() => {
							window.location.reload();
						}}
					>
						Reload
					</Button>
				</div>
			)}
		</div>
	);
};

export default WeatherHeroText;
