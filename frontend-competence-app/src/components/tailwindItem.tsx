"use client";

import { useState } from "react";

import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
	ChevronDown,
	ChevronDownCircleIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "lucide-react";

interface TailwindItemProps {
	title: string;
	description?: string;
	attributes: string[];
	attributes2?: string[];
	defaultAttribute?: string;
	code?: string;
	children: React.ReactNode;
}

export default function TailwindItem({
	title,
	description,
	attributes,
	attributes2,
	defaultAttribute,
	children,
}: TailwindItemProps) {
	const [selectedAttribute, setSelectedAttribute] = useState(attributes[0]);
	const [selectedAttribute2, setSelectedAttribute2] = useState(
		attributes2 ? attributes2[0] : "",
	);
	const [showDetails, setShowDetails] = useState(false);
	const handleShowDetails = () => {
		setShowDetails(!showDetails);
	};
	return (
		<>
			<div className="max-w-2xl mx-auto p-6 bg-white dark:bg-violet-300 rounded-lg shadow-md mb-8">
				<div className="flex flex-wrap justify-between gap-2 items-start mb-4">
					<div className="flex flex-wrap w-full h-full justify-start">
						<h2 className="flex items-center justify-between w-full text-2xl font-bold text-gray-800">
							{title}
							<Button onClick={handleShowDetails} variant="ghost" size="icon">
								{showDetails ? <ChevronUpIcon /> : <ChevronDownIcon />}
							</Button>
						</h2>

						<p>{description}</p>
					</div>
					{showDetails && (
						<div className="flex space-x-2 w-full gap-2 bg-cyan-100 p-2 rounded-md border-black border-2 items-center justify-center">
							<RadioGroup
								defaultValue={selectedAttribute}
								onValueChange={setSelectedAttribute}
							>
								<div className="grid bg-cyan-50 grid-flow-row grid-cols-2 p-2 m-2 rounded-md gap-2 drop-shadow-xl ">
									{attributes.map((value) => (
										<div className="flex items-center space-x-2" key={value}>
											<RadioGroupItem key={value} value={value} />
											<Label> {value} </Label>
										</div>
									))}
								</div>
							</RadioGroup>
							{!!attributes2 && (
								<RadioGroup
									defaultValue={selectedAttribute2}
									onValueChange={setSelectedAttribute2}
								>
									<div className="grid bg-cyan-50 grid-flow-row grid-cols-2 p-2 m-2 rounded-md gap-2 drop-shadow-xl">
										{attributes2?.map((value) => (
											<div className="flex items-center space-x-2" key={value}>
												<RadioGroupItem key={value} value={value} />
												<Label> {value} </Label>
											</div>
										))}
									</div>
								</RadioGroup>
							)}
						</div>
					)}
				</div>

				{showDetails && (
					<div
						className={`p-4 gap-2 ${defaultAttribute} bg-slate-200 dark:bg-cyan-900 rounded-md  ${selectedAttribute} ${selectedAttribute2} text-center`}
					>
						{children}
					</div>
				)}
			</div>
		</>
	);
}
const firstStyle = "bg-green-300 p-4 rounded-md";
const secondStyle = "bg-red-300 p-4 rounded-md";
const thirdStyle = "bg-blue-300 p-4 rounded-md";

export const FlexDirectionItem = () => {
	return (
		<TailwindItem
			title="Flex Direction"
			attributes={["flex flex-col", "flex flex-row"]}
			defaultAttribute="min-w-[330px] min-h-[330px] text-center"
		>
			<div className={firstStyle}>Item 1</div>
			<div className={secondStyle}>Item 2</div>
			<div className={thirdStyle}>Item 3</div>
		</TailwindItem>
	);
};

export const FlexColumn = () => {
	return (
		<TailwindItem
			title="Align-items (flex-col)"
			defaultAttribute="flex flex-col min-w-[330px] min-h-[330px]"
			description="Default value flex flex-col "
			attributes={["items-center", "items-start", "items-end"]}
			attributes2={[
				"justify-center",
				"justify-start",
				"justify-end",
				"justify-between",
				"justify-evenly",
			]}
		>
			<div className={firstStyle}>Item 1</div>
			<div className={secondStyle}>Item 2</div>
			<div className={thirdStyle}>Item 3</div>
		</TailwindItem>
	);
};
export const FlexRow = () => {
	return (
		<TailwindItem
			title="Align-items (flex-row)"
			defaultAttribute="flex flex-row min-w-[330px] min-h-[330px]"
			description="Default value flex flex-row"
			attributes={["items-center", "items-start", "items-end"]}
			attributes2={[
				"justify-center",
				"justify-start",
				"justify-end",
				"justify-between",
				"justify-evenly",
			]}
		>
			<div className={firstStyle}>Item 1</div>
			<div className={secondStyle}>Item 2</div>
			<div className={thirdStyle}>Item 3</div>
		</TailwindItem>
	);
};
