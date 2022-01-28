export class Expense{
    id:number;
    title: string;
    note: string;
    amount: number;
    category: 'Clothing'|'Entertainment'|'Food'|'Fuel'|'Health'|'Salary'|'Misc';
    createdAt: string
}