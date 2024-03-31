import { render, act } from "@testing-library/react";
import { useContext } from "react";
import { RenderResult } from "@testing-library/react";
import { DataProvider, DataContext, ContextDataType } from "@/utils/context";

let container: RenderResult;

const TestingComponent = () => {
	const { tempUnit, toggleTempUnit } = useContext(DataContext);

	return (
		<div>
			<button data-testid="toggleButton" onClick={toggleTempUnit}>
				toggle
			</button>
			<div data-testid="tempUnitValue">{tempUnit}</div>
		</div>
	);
};

describe("DataProvider", () => {
	it("should render correctly", () => {
		const { container } = render(
			<DataProvider defaultValue={{}}>
				<p>test</p>
			</DataProvider>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it("should render with defaultValue", () => {
		const { container } = render(
			<DataProvider
				defaultValue={{
					forecastSuccess: true,
					weatherSuccess: true,
					citySuccess: true,
					picturesSuccess: true,
				}}
			>
				<p>test</p>
			</DataProvider>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it("should be able to toggle temp unit", async () => {
		act(() => {
			container = render(
				<DataProvider
					defaultValue={{
						forecastSuccess: true,
						weatherSuccess: true,
						citySuccess: true,
						picturesSuccess: true,
					}}
				>
					<TestingComponent />
				</DataProvider>,
			);
		});

		expect(container.queryByTestId("tempUnitValue")).toHaveTextContent("C");
		const button = container.queryByTestId("toggleButton");

		act(() => {
			if (button) {
				button.click();
			}
		});

		expect(container.queryByTestId("tempUnitValue")).toHaveTextContent("F");

		act(() => {
			if (button) {
				button.click();
			}
		});

		expect(container.queryByTestId("tempUnitValue")).toHaveTextContent("C");
	});
});
