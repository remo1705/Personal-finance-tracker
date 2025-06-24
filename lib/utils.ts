import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}; 

export function convertAmountFromMiliunits(amount: number) {
  return (amount / 1000); 
  // we skipped rounding from the function Math.round()
};

export function convertAmountToMiliunits(amount: number) {
  return Math.round(amount * 1000); 
};

export function formatCurrency(value: number) {
  return Intl.NumberFormat("en-HK", {
    style: "currency",
    currency: "HKD", 
    minimumFractionDigits: 2, 
  }).format(value); 
}; 
