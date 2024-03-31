import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { mockRouter, mockFetch } from "./mocks/mocks";

import { Suspense } from "react";
import Home from "../src/app/page";
import { useSearchParams } from "next/navigation";

global.fetch = mockFetch({});

mockRouter();

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

describe("Page", () => {
	it("Should error", async () => {
		render(await Home({ params: { slug: "" }, searchParams: {} }));
		const textElement = screen.getByText(
			"There was a problem when retrieving the weather information",
		);
		expect(textElement).toBeInTheDocument();
	});
});
