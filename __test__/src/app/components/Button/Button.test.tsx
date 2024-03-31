import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button/Button";

describe("Button", () => {
	it("Should render", async () => {
		render(<Button>Button</Button>);
		const textElement = screen.getByText("Button");
		expect(textElement).toBeInTheDocument();
	});
});
