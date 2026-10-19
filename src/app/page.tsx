import React from 'react';
import { metricsData, customersData } from './data/mockData';
import AIChat from './components/AIChat';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between hidden md:flex">
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg text-white">N</div>
            <span className="text-xl font-bold tracking-tight">Nexus<span className="text-indigo-500">.AI</span></span>
          </div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 font-medium text-sm">
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-200 font-medium text-sm transition-colors">
              <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-200 font-medium text-sm transition-colors">
              <span>Customers</span>
            </a>
          </nav>
        </div>
        <div className="text-xs text-slate-500 font-mono">v1.0.0 // macOS Core</div>
      </aside>

      {/* Main panel */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Executive Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Real-time business performance with an AI assistant (simulated demo).</p>
          </div>
        </header>

        {/* Metrics grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metricsData.map((metric, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-sm">
              <p className="text-slate-400 text-sm font-medium">{metric.title}</p>
              <div className="flex items-baseline justify-between mt-4">
                <span className="text-2xl md:text-3xl font-bold tracking-tight">{metric.value}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                  metric.isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Grid: customers table + chat */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-100">Recent Transactions</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                      <th className="pb-3 font-medium">Customer</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-sm">
                    {customersData.map((customer) => (
                      <tr key={customer.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3.5">
                          <div className="font-medium text-slate-200">{customer.name}</div>
                          <div className="text-xs text-slate-500">{customer.email}</div>
                        </td>
                        <td className="py-3.5">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            customer.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' :
                            customer.status === 'Active' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-amber-500/10 text-amber-400'
                          }`}>
                            {customer.status}
                          </span>
                        </td>
                        <td className="py-3.5 text-right font-semibold text-slate-200">{customer.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AIChat />
          </div>
        </section>
      </main>
    </div>
  );
}
