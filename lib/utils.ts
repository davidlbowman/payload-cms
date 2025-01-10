import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isExpandedDoc<T extends { id: string | number }>(
	doc: T | string | number,
): doc is T {
	return typeof doc === "object" && doc !== null && "id" in doc;
}
