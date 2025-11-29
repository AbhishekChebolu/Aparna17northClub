import AppLayout from "@/react-app/components/AppLayout";
import { Dumbbell } from "lucide-react";

export default function Sports() {
  // Demo mode - skip auth check

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-full w-24 h-24 flex items-center justify-center mb-6 shadow-lg">
            <Dumbbell className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Sports</h1>
          <p className="text-slate-600 text-center">Stay fit with our sports facilities</p>
        </div>
      </div>
    </AppLayout>
  );
}
