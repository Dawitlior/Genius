import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// CN library is a specially made library which uses Tailwind merge
// and clsx to ensure that there is a proper way to adding additional 
// dynamic class names to Tailwind elements

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
};
