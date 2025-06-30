import { IconType } from "react-icons"; 
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; 

const boxVariant = cva(
    "rounded-md p-3", 
    {
        variants: {
            variant: {
                default: "bg-blue-500/20",
                success: "bg-emerald-500/20",
                danger: "bg-rose-500/20",
                warning: "bg-yellow-500/20",
            }
        }, 
        defaultVariants: {
            variant: "default", 
        }, 
    }, 
); 

const iconVariant = cva(
    "size-6", 
    {
        variants: {
            variant: {
                default: "fill-blue-500",
                success: "fill-emerald-500",
                danger: "fill-rose-500",
                warning: "fill-yellow-500",
            }
        }, 
        defaultVariants: {
            variant: "default", 
        }, 
    }, 
); 

type BoxVariants = VariantProps<typeof boxVariant>;
type IconVariants = VariantProps<typeof iconVariant>;

interface DataCardProps extends BoxVariants, IconVariants {
    title: string;
    icon: IconType; 
    value?: number;
    dateRange: string; 
    percentageChange?: number; 
}

export const DataCard = ({}: DataCardProps) => {
    return (
        <div>
            Data Card 
        </div>
    )
}