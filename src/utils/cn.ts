import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

// Utilidad para concatenar clases en un solo string
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
