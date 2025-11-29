import AppLayout from "@/react-app/components/AppLayout";
import { Armchair } from "lucide-react";

export default function Relax() {
  // Demo mode - skip auth check

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-full w-24 h-24 flex items-center justify-center mb-6 shadow-lg">
            <Armchair className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Relax</h1>
          <p className="text-slate-600 text-center">Unwind in our relaxation zones</p>
        </div>
      </div>
    </AppLayout>
  );
}
