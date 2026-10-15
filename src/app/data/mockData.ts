export interface Metric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Pending' | 'Completed';
  amount: string;
}

export const metricsData: Metric[] = [
  { title: "Total Revenue", value: "$48,259.80", change: "+12.5%", isPositive: true },
  { title: "Active Customers", value: "1,248", change: "+8.2%", isPositive: true },
  { title: "Conversion Rate", value: "3.42%", change: "-0.4%", isPositive: false },
  { title: "AI Automations Run", value: "14,892", change: "+24.1%", isPositive: true },
];

export const customersData: Customer[] = [
  { id: "1", name: "Alex Johnson", email: "alex@example.com", status: "Completed", amount: "$1,200.00" },
  { id: "2", name: "Sarah Miller", email: "sarah@example.com", status: "Active", amount: "$850.00" },
  { id: "3", name: "David Chen", email: "david@example.com", status: "Pending", amount: "$340.00" },
  { id: "4", name: "Emma Watson", email: "emma@example.com", status: "Completed", amount: "$2,100.00" },
];
