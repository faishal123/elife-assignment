"use client";
import { getLocation } from "@/utils/common";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type GetLocationProps = { children: ReactNode };

const GetLocation: React.FC<GetLocationProps> = ({ children }) => {
	const router = useRouter();
	return (
		<button
			className="cursor-pointer underline transition-all decoration-transparent hover:decoration-[#e6e6e6]"
			onClick={() => {
				getLocation((data) => {
					const lat = data.coords.latitude;
					const long = data.coords.longitude;
					router.push(`/?lat=${lat}&long=${long}`);
				});
			}}
		>
			{children}
		</button>
	);
};

export default GetLocation;
