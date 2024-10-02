import {
	FlexColumn,
	FlexDirectionItem,
	FlexRow,
} from "@/components/tailwindItem";

export default function Tailwind() {
	return (
		<>
			<div className="w-full items-center p-4">
				<h1 className="flex w-full text-2xl font-bold">Tailwind CSS Page</h1>
				<p className="w-full mt-2">
					This page demonstrates Tailwind CSS styling.
				</p>
			</div>
			<FlexDirectionItem />

			<FlexColumn />
			<FlexRow />
		</>
	);
}
