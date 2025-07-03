"use client"; 

import { Suspense } from "react";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { formatDateRange } from "@/lib/utils";

import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6"; 
import { DataCard, DataCardLoading } from "@/components/data-card";

const DataGridInner = () => {
    const { data, isLoading } = useGetSummary(); 

    // Use a default date range label since we're getting the filtered data from useGetSummary
    const dateRangeLabel = "Current Period";
    
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
                <DataCardLoading />
                <DataCardLoading />
                <DataCardLoading />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
            <DataCard 
                title="Remaining"
                value={data?.remainingAmount}
                percentageChange={data?.remainingChange}
                icon={FaPiggyBank}
                dateRange={dateRangeLabel}
            />
            <DataCard 
                title="Income"
                value={data?.incomeAmount}
                percentageChange={data?.incomeChange}
                icon={FaArrowTrendUp}
                dateRange={dateRangeLabel}
            />
            <DataCard 
                title="Expenses"
                value={data?.expensesAmount}
                percentageChange={data?.expensesChange}
                icon={FaArrowTrendDown}
                dateRange={dateRangeLabel}
            />
        </div>
    ); 
};

export const DataGrid = () => {
    return (
        <Suspense fallback={
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
                <DataCardLoading />
                <DataCardLoading />
                <DataCardLoading />
            </div>
        }>
            <DataGridInner />
        </Suspense>
    ); 
}; 