import { useState } from "react";
import { useNavigate } from "react-router";
import { 
  Menu, 
  X, 
  LayoutDashboard,
  Calendar,
  Home,
  UtensilsCrossed,
  Dumbbell,
  Armchair,
  Users,
  FileText,
  CreditCard,
  ImageIcon,
  Star,
  UserCircle,
  LogOut,
  Bell
} from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Events", path: "/events", icon: Calendar },
    { label: "Rooms", path: "/rooms", icon: Home },
    { label: "Dining", path: "/dining", icon: UtensilsCrossed },
    { label: "Sports", path: "/sports", icon: Dumbbell },
    { label: "Relax", path: "/relax", icon: Armchair },
    { label: "Affiliations", path: "/affiliations", icon: Users },
    { label: "Meetings", path: "/meetings", icon: FileText },
    { label: "Transactions", path: "/transactions", icon: CreditCard },
    { label: "Gallery", path: "/gallery", icon: ImageIcon },
    { label: "Review", path: "/review", icon: Star },
    { label: "Profile", path: "/profile", icon: UserCircle },
  ];

  const handleLogout = () => {
    // Demo mode - just navigate back to login
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-amber-400 transition-colors"
          >
            <Menu className="w-7 h-7" />
          </button>
          
          <div className="flex items-center gap-3">
            <img 
              src="https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/unnamed.png"
              alt="Logo"
              className="w-10 h-10"
            />
            <h1 className="text-white font-semibold text-lg tracking-wide">Dashboard</h1>
          </div>
          
          <button className="relative text-white hover:text-amber-400 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">3</span>
          </button>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-6">
                <img 
                  src="https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/unnamed.png"
                  alt="Logo"
                  className="w-16 h-16"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center">
                <p className="text-amber-400 font-semibold text-lg tracking-wide">APARNA</p>
                <p className="text-amber-300 text-sm tracking-wider">17° NORTH</p>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto py-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-4 px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-white/10">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-4 px-6 py-4 text-white/80 hover:text-red-400 hover:bg-white/10 transition-all group rounded-lg"
              >
                <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pb-8">
        {children}
      </main>
    </div>
  );
}
