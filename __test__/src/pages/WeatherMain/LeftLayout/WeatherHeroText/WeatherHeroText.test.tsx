import { render, screen } from "@testing-library/react";
import { DataProvider } from "@/utils/context";

import { mockRouter } from "../../../../../mocks/mocks";
import { act, RenderResult } from "@testing-library/react";
import WeatherHeroText from "@/pages/WeatherMain/LeftLayout/WeatherHeroText/WeatherHeroText";

let container: RenderResult;

const reloadMock = jest.fn();

Object.defineProperty(window, "location", {
	configurable: true,
	value: { reload: reloadMock },
});

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			prefetch: () => null,
			push: () => null,
		};
	},
	useSearchParams() {
		return {
			get: () => 10,
		};
	},
}));

describe("test", () => {
	it("renders the weatherherotext component", () => {
		act(() => {
			container = render(
				<DataProvider
					defaultValue={{
						weatherSuccess: true,
						weathers: {
							coord: {
								lon: -42.6043,
								lat: 71.7069,
							},
							weather: [
								{
									id: 804,
									main: "Clouds",
									description: "overcast clouds",
									icon: "04n",
								},
							],
							base: "stations",
							main: {
								temp: 242.86,
								feels_like: 235.86,
								temp_min: 242.86,
								temp_max: 242.86,
								pressure: 1051,
								humidity: 75,
								sea_level: 1051,
								grnd_level: 710,
							},
							visibility: 10000,
							wind: {
								speed: 2.74,
								deg: 126,
								gust: 2.64,
							},
							clouds: {
								all: 100,
							},
							dt: 1711869839,
							sys: {
								country: "GL",
								sunrise: 1711871392,
								sunset: 1711922323,
							},
							timezone: -3600,
							id: 3425505,
							name: "Greenland",
							cod: 200,
						},
					}}
				>
					<WeatherHeroText />
				</DataProvider>,
			);
		});
		const toggleWindUnitButton = container.queryByTestId("toggleWindUnit");
		const toggleTempUnitButton = container.queryByTestId("toggleTempUnit");

		act(() => {
			if (toggleWindUnitButton) {
				toggleWindUnitButton.click();
			}
		});

		expect(screen.getByText("1.7 mph")).toBeInTheDocument();

		act(() => {
			if (toggleWindUnitButton) {
				toggleWindUnitButton.click();
			}
		});

		expect(screen.getByText("2.74 m/s")).toBeInTheDocument();

		act(() => {
			if (toggleTempUnitButton) {
				toggleTempUnitButton.click();
			}
		});

		expect(screen.getByText("°F")).toBeInTheDocument();

		act(() => {
			if (toggleTempUnitButton) {
				toggleTempUnitButton.click();
			}
		});

		expect(screen.getByText("°C")).toBeInTheDocument();
	});

	it("renders the weatherherotext with empty data", () => {
		act(() => {
			container = render(
				<DataProvider
					defaultValue={{
						weatherSuccess: true,
					}}
				>
					<WeatherHeroText />
				</DataProvider>,
			);
		});

		expect(screen.queryByTestId("toggleWindUnit")).not.toBeInTheDocument();
	});

	it("test reload button", () => {
		act(() => {
			container = render(
				<DataProvider defaultValue={{ weatherSuccess: false }}>
					<WeatherHeroText />
				</DataProvider>,
			);
		});

		const reloadButton = container.queryByTestId("reloadButton");
		act(() => {
			if (reloadButton) {
				reloadButton.click();
			}
		});

		expect(reloadButton).toBeInTheDocument();
		expect(reloadMock).toHaveBeenCalled();
	});
});
