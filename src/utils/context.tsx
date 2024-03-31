"use client";

import { createContext, ReactNode, useState } from "react";
import { UnsplashResponseType } from "@/constants/types/unsplash";
import {
	CurrentWeatherResponse,
	ReverseGeoCodingResponse,
	ForecastResponse,
} from "@/constants/types/openWeather";

type DefaultContextValueType = {
	forecastSuccess?: boolean;
	weatherSuccess?: boolean;
	citySuccess?: boolean;
	picturesSuccess?: boolean;
	forecast?: ForecastResponse;
	weathers?: CurrentWeatherResponse;
	pictures?: UnsplashResponseType;
	city?: ReverseGeoCodingResponse;
};

export interface ContextDataType extends DefaultContextValueType {
	tempUnit: "C" | "F";
	toggleTempUnit?: () => void;
}

const DataContext = createContext<ContextDataType>({
	tempUnit: "C",
});

const DataProvider = ({
	children,
	defaultValue,
}: {
	children: ReactNode;
	defaultValue: DefaultContextValueType;
}) => {
	const [tempUnit, setTempUnit] = useState<"C" | "F">("C");

	const toggleTempUnit = () => {
		setTempUnit((prev) => (prev === "C" ? "F" : "C"));
	};
	return (
		<DataContext.Provider value={{ ...defaultValue, tempUnit, toggleTempUnit }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };
