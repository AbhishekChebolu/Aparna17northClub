import AppLayout from "@/react-app/components/AppLayout";
import { Calendar } from "lucide-react";

export default function Events() {
  // Demo mode - skip auth check

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-full w-24 h-24 flex items-center justify-center mb-6 shadow-lg">
            <Calendar className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Events</h1>
          <p className="text-slate-600 text-center">Stay tuned for upcoming club events</p>
        </div>
      </div>
    </AppLayout>
  );
}
