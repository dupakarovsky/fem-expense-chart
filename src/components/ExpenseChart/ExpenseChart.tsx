import { SetStateAction, useState } from "react";
import "./ExpenseChart.css";

/*
    ================
    * EXPENSE CHART
    ================
*/
type Expense = {
    day: string;
    amount: number;
};
type ExpenseChartProps = {
    balance: number;
    expenses: Expense[];
};

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ balance, expenses }) => {
    const totalExpenses: number = expenses.reduce((total: number, expense: Expense) => {
        return total + expense.amount;
    }, 0);

    return (
        <div className="expense-chart">
            <Header balance={balance} />
            <Display>
                <DisplayChartTitle />
                <DisplayChartArea expenses={expenses}></DisplayChartArea>
                <DisplayFooter totalExpenses={totalExpenses} />
            </Display>
        </div>
    );
};

/*
    ================
    * HEADER 
    ================
*/
type HeaderType = {
    balance: number;
};
const Header: React.FC<HeaderType> = ({ balance }) => {
    return (
        <div className="header">
            <span className="header-title">My balance</span>
            <span className="header-balance">${balance}</span>
            <img className="header-logo" src="logo.svg" alt="Logo" />
        </div>
    );
};

/*
    ================
    * DISPLAY
    ================
*/
type DisplayProps = {
    children?: React.ReactNode;
};
const Display: React.FC<DisplayProps> = ({ children }) => {
    return <div className="display">{children}</div>;
};

/*
    ================
    * DIPSLAY FOOTER 
    ================
*/
type DisplayFooterType = {
    totalExpenses: number;
};
const DisplayFooter: React.FC<DisplayFooterType> = ({ totalExpenses }) => (
    <div className="display-footer">
        <div className="display-footer-col col-left">
            <span className="display-footer-heading">Total this month</span>
            <span className="display-footer-total">${totalExpenses}</span>
        </div>
        <div className="display-footer-col col-right">
            <span className="display-footer-percent">+2.4%</span>
            <span className="display-footer-text">from last month</span>
        </div>
    </div>
);

/*
    ======================
    * DISPLAY CHART TITLE 
    ======================
*/
const DisplayChartTitle: React.FC = () => {
    return <div className="display-title">Spending - Last 7 days</div>;
};

/*
    =====================
    * DISPLAY CHART AREA 
    =====================
*/
type DisplayChartAreaProps = {
    expenses: Expense[];
    children?: React.ReactNode;
};
const DisplayChartArea: React.FC<DisplayChartAreaProps> = ({ expenses }) => {
    const [active, setActive] = useState<Expense | null>(null);

    const topExpense: number = expenses.reduce((max, current) => {
        if (current.amount > max) return current.amount;
        return max;
    }, 0);

    const bars = expenses.map((expense, idx) => {
        return (
            <DisplayBar
                key={idx}
                expense={expense}
                topExpense={topExpense}
                active={active}
                setActive={setActive}
            ></DisplayBar>
        );
    });
    return <ul className="display-chart-area">{bars}</ul>;
};

/*
    ================
    * DISPLAY BAR 
    ================
*/
type DisplayBarProps = {
    topExpense: number;
    expense: Expense;
    active: Expense | null;
    setActive: React.Dispatch<SetStateAction<Expense | null>>;
};
const DisplayBar: React.FC<DisplayBarProps> = ({ expense, topExpense, active, setActive }) => {
    const height: string = ((150 * expense.amount) / topExpense).toFixed(2) + "px";

    const handleActive = () => {
        setActive((currActive) => {
            if (currActive === expense) return null;
            return expense;
        });
    };

    return (
        <li className="display-bar">
            <div className="bar" onClick={handleActive} data-is-active={active === expense} style={{ height }}></div>
            <span className="weekday">{expense.day}</span>
            <span className="tool-tip" style={{ bottom: height }}>
                ${expense.amount}
            </span>
        </li>
    );
};
