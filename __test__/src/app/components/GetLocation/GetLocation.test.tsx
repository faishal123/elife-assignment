import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockRouter, mockNavigator } from "../../../../mocks/mocks";
import GetLocation from "@/components/GetLocation/GetLocation";

const mockGetCurrentPosition = jest.fn((onSuccess, onError) => {
	onSuccess({ coords: { latitude: 0, longitude: 0 } });
});
mockRouter();

const alertMock = jest.fn();
jest.spyOn(window, "alert").mockImplementation(alertMock);

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			prefetch: () => null,
			push: () => null,
		};
	},
	useSearchParams() {
		return {
			get: () => null,
		};
	},
}));

describe("Get Location", () => {
	it("Should render", async () => {
		render(<GetLocation>GetLocation</GetLocation>);
		const textElement = screen.getByText("GetLocation");
		textElement.click();
		expect(textElement).toBeInTheDocument();
		expect(alertMock.mock.calls[0][0]).toBe(
			"This browser doesn't support geolocation.",
		);
	});

	it("Test with navigator", async () => {
		(global as any).navigator.geolocation = {
			getCurrentPosition: mockGetCurrentPosition,
		};
		render(<GetLocation>GetLocation</GetLocation>);
		const textElement = screen.getByText("GetLocation");
		textElement.click();
		expect(mockGetCurrentPosition).toHaveBeenCalled();
	});
});
