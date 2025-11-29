import AppLayout from "@/react-app/components/AppLayout";
import { UtensilsCrossed } from "lucide-react";

export default function Dining() {
  // Demo mode - skip auth check

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-full w-24 h-24 flex items-center justify-center mb-6 shadow-lg">
            <UtensilsCrossed className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Dining</h1>
          <p className="text-slate-600 text-center">Experience world-class cuisine</p>
        </div>
      </div>
    </AppLayout>
  );
}
