"use client";

import { DataContext } from "@/utils/context";
import { getWeatherAndAtmosphere } from "@/utils/common";
import { convertTemperature } from "@/utils/common";
import { ForecastListType } from "@/constants/types/openWeather";
import Image from "next/image";
import { useContext } from "react";
import Button from "@/components/Button/Button";
import ErrorOutline from "@/assets/icons/ErrorOutline";

const RightLayout = () => {
	const { forecast, tempUnit, forecastSuccess, toggleTempUnit } =
		useContext(DataContext);

	const forecastByDate =
		forecast?.list?.reduce<Record<string, ForecastListType[]>>((a, c) => {
			const date = new Date(c.dt * 1000);
			const month = date.getMonth() + 1;
			const day = date.getDate();
			const dateString = `${date.getFullYear()}-${
				month < 10 ? `0${month}` : month
			}-${day < 10 ? `0${day}` : day}`;

			return {
				...a,
				[dateString]: [...(a[dateString] || []), c],
			};
		}, {}) || {};

	const forecastEmpty = Object.keys(forecastByDate).length === 0;

	return (
		<div className="max-l:max-h-full grow max-h-[calc(100dvh-5rem)] rounded-2xl shadow-2xl bg-gray-primary overflow-auto py-10 text-gray-800">
			{forecastEmpty || !forecastSuccess ? (
				<div className="px-10 flex flex-col items-center justify-center">
					<ErrorOutline color="#1f2937" width={100} height={100} />
					<div className="text-center text-lg mt-2 font-semibold">
						There was a problem when retrieving the weather information
					</div>
					<Button
						data-testid="reloadButton"
						customClassName="mt-5"
						variant="black"
					>
						Reload
					</Button>
				</div>
			) : (
				<>
					<h1 className="text-xl font-semibold pl-10">5 Days Forecast</h1>
					<div className="mt-5">
						{Object.keys(forecastByDate).map((day) => {
							const dayDateObject = new Date(day);
							const dayName = dayDateObject.toLocaleDateString("en-US", {
								weekday: "long",
							});
							const forecastForCurrentDay = forecastByDate[day];
							return (
								<div key={day} className="mt-10">
									<h1 className="text-lg font-semibold pl-10 mb-5">
										{dayName}
									</h1>
									<div>
										{forecastForCurrentDay.map(
											(singleForecast, forecastIndex) => {
												const currentForecastDate = new Date(
													singleForecast.dt * 1000,
												);
												const time = currentForecastDate.toLocaleTimeString(
													"en-US",
													{
														hour: "numeric",
														minute: "numeric",
														hour12: false,
													},
												);
												const isFirstForecast = forecastIndex === 0;
												const weatherAndAtmosphere = getWeatherAndAtmosphere(
													singleForecast.weather,
												);
												const weatherDescription =
													weatherAndAtmosphere.weather[0].description;
												const mainTempCelcius = convertTemperature(
													singleForecast.main.temp,
												).C;
												const mainTempFahrenheit = convertTemperature(
													singleForecast.main.temp,
												).F;
												const iconUrl = `https://openweathermap.org/img/wn/${weatherAndAtmosphere.weather[0].icon}@2x.png`;
												const temp = {
													C: mainTempCelcius,
													F: mainTempFahrenheit,
												};
												return (
													<div
														key={singleForecast.dt}
														className={`${
															isFirstForecast ? "border-t-[1px]" : ""
														} border-b-[1px] border-gray-300 pt-3 pb-4 px-10`}
													>
														<div className="mb-2 font-semibold">{time}</div>
														<div className="flex items-center gap-5">
															<div className="relative w-[30px] h-[30px] bg-gray-300 rounded">
																<Image
																	fill
																	src={iconUrl}
																	alt={weatherDescription}
																/>
															</div>
															<div>
																{temp[tempUnit]}
																<span
																	onClick={toggleTempUnit}
																	className="cursor-pointer underline decoration-transparent transition-all hover:decoration-black"
																>
																	°{tempUnit}
																</span>
															</div>
															<div className="capitalize">
																{weatherDescription}
															</div>
														</div>
													</div>
												);
											},
										)}
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default RightLayout;
