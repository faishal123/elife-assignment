export const mockRouter = () => {
	return jest.mock("next/navigation", () => ({
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
};

export function mockFetch(data: any) {
	return jest.fn().mockImplementation(() =>
		Promise.resolve({
			ok: true,
			json: () => data,
		}),
	);
}

export const mockNavigator = () => {
	return {
		...global.navigator,
		geolocation: {
			getCurrentPosition: jest.fn(),
			clearWatch: jest.fn(),
			watchPosition: jest.fn(),
		},
	};
};

export const mockGlobal = ({ fetchData }: { fetchData?: any }) => {
	global = {
		...global,
		fetch: jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: true,
				json: () => fetchData,
			}),
		),
		navigator: {
			...global.navigator,
			geolocation: {
				getCurrentPosition: jest.fn(),
				clearWatch: jest.fn(),
				watchPosition: jest.fn(),
			},
		},
	};
};
