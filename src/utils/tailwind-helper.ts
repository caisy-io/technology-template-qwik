import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function twStringify(tw: string) {
    // return string but replace spaces with _
    return tw.replace(/ /g, "_");
}
