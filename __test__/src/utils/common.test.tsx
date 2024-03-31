import {
	convertTemperature,
	getWeatherAndAtmosphere,
	mpsToMph,
	getLocation,
} from "@/utils/common";

describe("mpsToMph", () => {
	it("test mpsToMph with 0 input", () => {
		expect(mpsToMph(0)).toBe(0);
	});
	it("test mpsToMph with 1 input", () => {
		expect(mpsToMph(1)).toBe(0.62);
	});
});

describe("convertTemperature", () => {
	it("test convertTemperature with undefined input", () => {
		expect(convertTemperature(undefined)).toEqual({ C: 0, F: 0 });
	});
	it("test convertTemperature with valid input", () => {
		expect(convertTemperature(280.5)).toEqual({ C: 7, F: 45 });
	});
});

describe("getWeatherAndAtmosphere", () => {
	it("test with undefined input", () => {
		expect(getWeatherAndAtmosphere(undefined)).toEqual({
			weather: [],
			atmosphere: [],
		});
	});
	it("test with empty input", () => {
		expect(getWeatherAndAtmosphere([])).toEqual({
			weather: [],
			atmosphere: [],
		});
	});
	it("test with atmosphere only", () => {
		expect(
			getWeatherAndAtmosphere([
				{ id: 731, main: "Haze", description: "haze", icon: "01d" },
			]),
		).toEqual({
			weather: [{ id: 731, main: "Haze", description: "haze", icon: "01d" }],
			atmosphere: [{ id: 731, main: "Haze", description: "haze", icon: "01d" }],
		});
	});
	it("test with weather only", () => {
		expect(
			getWeatherAndAtmosphere([
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" },
			]),
		).toEqual({
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" },
			],
			atmosphere: [],
		});
	});
	it("test with mixed input", () => {
		expect(
			getWeatherAndAtmosphere([
				{ id: 731, main: "Haze", description: "haze", icon: "01d" },
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" },
				{ id: 751, main: "Haze", description: "haze", icon: "01d" },
			]),
		).toEqual({
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" },
			],
			atmosphere: [
				{ id: 731, main: "Haze", description: "haze", icon: "01d" },
				{ id: 751, main: "Haze", description: "haze", icon: "01d" },
			],
		});
	});
});

describe("getLocation", () => {
	it("Should call the onSuccess callback", () => {
		const onSuccessMock = jest.fn();
		(global as any).navigator.geolocation = {
			getCurrentPosition: (
				success: (data: {
					coords: { latitude: number; longitude: number };
				}) => void,
			) => success({ coords: { latitude: 0, longitude: 0 } }),
		};
		getLocation(onSuccessMock);
		expect(onSuccessMock).toHaveBeenCalled();
	});

	it("Should alert if permission is denied", () => {
		const alertMock = jest.spyOn(window, "alert").mockImplementation(jest.fn());
		(global as any).navigator.geolocation = {
			getCurrentPosition: (
				_: any,
				error: (error: {
					PERMISSION_DENIED: 1;
					POSITION_UNAVAILABLE: 2;
					TIMEOUT: 3;
					code: number;
				}) => void,
			) =>
				error({
					PERMISSION_DENIED: 1,
					POSITION_UNAVAILABLE: 2,
					TIMEOUT: 3,
					code: 1,
				}),
		};
		getLocation(() => {});
		expect(alertMock).toHaveBeenCalledWith("Location request has been denied.");
	});

	it("Should alert if location information is unavailable", () => {
		const alertMock = jest.spyOn(window, "alert").mockImplementation(jest.fn());
		(global as any).navigator.geolocation = {
			getCurrentPosition: (
				_: any,
				error: (error: {
					PERMISSION_DENIED: 1;
					POSITION_UNAVAILABLE: 2;
					TIMEOUT: 3;
					code: number;
				}) => void,
			) =>
				error({
					PERMISSION_DENIED: 1,
					POSITION_UNAVAILABLE: 2,
					TIMEOUT: 3,
					code: 2,
				}),
		};
		getLocation(() => {});
		expect(alertMock).toHaveBeenCalledWith(
			"Unable to get location information.",
		);
	});

	it("Should alert if request times out", () => {
		const alertMock = jest.spyOn(window, "alert").mockImplementation(jest.fn());
		(global as any).navigator.geolocation = {
			getCurrentPosition: (
				_: any,
				error: (error: {
					PERMISSION_DENIED: 1;
					POSITION_UNAVAILABLE: 2;
					TIMEOUT: 3;
					code: number;
				}) => void,
			) =>
				error({
					PERMISSION_DENIED: 1,
					POSITION_UNAVAILABLE: 2,
					TIMEOUT: 3,
					code: 3,
				}),
		};
		getLocation(() => {});
		expect(alertMock).toHaveBeenCalledWith("Location request timed out");
	});

	it("Should alert if an unknown error occurs", () => {
		const alertMock = jest.spyOn(window, "alert").mockImplementation(jest.fn());
		(global as any).navigator.geolocation = {
			getCurrentPosition: (
				_: any,
				error: (error: {
					PERMISSION_DENIED: 1;
					POSITION_UNAVAILABLE: 2;
					TIMEOUT: 3;
					code: number;
				}) => void,
			) =>
				error({
					PERMISSION_DENIED: 1,
					POSITION_UNAVAILABLE: 2,
					TIMEOUT: 3,
					code: 123,
				}),
		};
		getLocation(() => {});
		expect(alertMock).toHaveBeenCalledWith("An unknown error has occurred.");
	});

	it("Should alert if browser doesn't support geolocation", () => {
		const alertMock = jest.spyOn(window, "alert").mockImplementation(jest.fn());
		(global as any).navigator.geolocation = undefined;
		getLocation(() => {});
		expect(alertMock).toHaveBeenCalledWith(
			"This browser doesn't support geolocation.",
		);
	});
});
