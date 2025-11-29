import AppLayout from "@/react-app/components/AppLayout";
import { CreditCard } from "lucide-react";

export default function Transactions() {
  // Demo mode - skip auth check

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full w-24 h-24 flex items-center justify-center mb-6 shadow-lg">
            <CreditCard className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Transactions</h1>
          <p className="text-slate-600 text-center">View your transaction history</p>
        </div>
      </div>
    </AppLayout>
  );
}
