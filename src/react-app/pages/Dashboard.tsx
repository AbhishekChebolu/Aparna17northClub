import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import AppLayout from "@/react-app/components/AppLayout";
import { 
  Sofa, 
  UtensilsCrossed, 
  Dumbbell, 
  Armchair, 
  UserCircle,
  Calendar,
  FileText,
  CreditCard,
  ImageIcon,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const affiliatesScrollRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/WhatsApp-Image-2025-11-29-at-12.20.25-(2).jpeg",
    "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/WhatsApp-Image-2025-11-29-at-12.20.25.jpeg",
    "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/WhatsApp-Image-2025-11-29-at-12.20.25-(1).jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const userName = "Demo Member";

  const allServices = [
    { label: "Living", icon: Sofa, path: "/rooms", color: "from-blue-400 to-blue-500" },
    { label: "Dining", icon: UtensilsCrossed, path: "/dining", color: "from-orange-400 to-orange-500" },
    { label: "Sports", icon: Dumbbell, path: "/sports", color: "from-green-400 to-green-500" },
    { label: "Relax", icon: Armchair, path: "/relax", color: "from-purple-400 to-purple-500" },
    { label: "Events", icon: Calendar, path: "/events", color: "from-amber-400 to-amber-500" },
    { label: "Meetings", icon: FileText, path: "/meetings", color: "from-indigo-400 to-indigo-500" },
    { label: "Transactions", icon: CreditCard, path: "/transactions", color: "from-emerald-400 to-emerald-500" },
    { label: "Gallery", icon: ImageIcon, path: "/gallery", color: "from-rose-400 to-rose-500" },
    { label: "Review", icon: Star, path: "/review", color: "from-yellow-400 to-yellow-500" },
    { label: "Profile", icon: UserCircle, path: "/profile", color: "from-teal-400 to-teal-500" },
  ];

  const affiliates = [
    { name: "Partner Club A", logo: "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp", color: "bg-slate-600" },
    { name: "Partner Club B", logo: "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp", color: "bg-slate-700" },
    { name: "Partner Club C", logo: "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp", color: "bg-slate-800" },
    { name: "Partner Club D", logo: "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp", color: "bg-slate-900" },
    { name: "Partner Club E", logo: "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp", color: "bg-slate-600" },
    { name: "Partner Club F", logo: "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp", color: "bg-slate-700" },
    { name: "Partner Club G", logo: "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp", color: "bg-slate-800" },
    { name: "Partner Club H", logo: "https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp", color: "bg-slate-900" },
  ];

  const scrollAffiliates = (direction: 'left' | 'right') => {
    if (affiliatesScrollRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? affiliatesScrollRef.current.scrollLeft - scrollAmount
        : affiliatesScrollRef.current.scrollLeft + scrollAmount;
      
      affiliatesScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AppLayout>
      <div className="px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 shadow-lg">
          <h1 className="text-white text-2xl font-bold mb-1">Welcome {userName}</h1>
        </div>

        {/* Carousel */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-56">
            {carouselImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Armchair className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-center mb-2">Relax</h3>
            <p className="text-slate-600 text-xs text-center leading-relaxed">
              17° North has created a setting where the young and the elderly can replenish their energy and improve their fitness levels.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-center mb-2">Sports Tariff</h3>
            <p className="text-slate-600 text-xs text-center leading-relaxed mb-3">
              17° North has created a setting where the young and the elderly can replenish their energy and improve their fitness levels.
            </p>
            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold py-2 rounded-lg hover:shadow-lg transition-shadow">
              Download Tariff
            </button>
          </div>
        </div>

        {/* Affiliates */}
        <div>
          <h2 className="text-slate-800 font-bold text-lg mb-4">Our Affiliates</h2>
          <div className="relative">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollAffiliates('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-slate-800" />
            </button>

            {/* Affiliates Container */}
            <div 
              ref={affiliatesScrollRef}
              className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-10"
            >
              {affiliates.map((affiliate) => (
                <div
                  key={affiliate.name}
                  className={`${affiliate.color} rounded-xl min-w-[80px] aspect-square flex items-center justify-center shadow-md hover:shadow-lg transition-shadow snap-center flex-shrink-0`}
                >
                  <div className="text-white text-center p-2">
                    <p className="text-xs font-semibold">{affiliate.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollAffiliates('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5 text-slate-800" />
            </button>
          </div>
        </div>

        {/* All Services */}
        <div>
          <h2 className="text-slate-800 font-bold text-xl mb-5">Services</h2>
          <div className="grid grid-cols-3 gap-4">
            {allServices.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.label}
                  onClick={() => navigate(service.path)}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md hover:shadow-xl transition-all group-hover:scale-105 border border-slate-200">
                    <Icon className="w-9 h-9 text-slate-900 group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold text-center leading-tight">{service.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h2 className="text-slate-800 font-bold text-lg mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-amber-500 text-white rounded-lg px-3 py-2 text-center min-w-[60px]">
                <p className="text-xs font-semibold">DEC</p>
                <p className="text-2xl font-bold">15</p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 text-sm">Annual Gala Night</h3>
                <p className="text-slate-600 text-xs mt-1">Join us for an evening of elegance and entertainment</p>
                <p className="text-amber-600 text-xs font-medium mt-1">7:00 PM - Grand Hall</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-500 text-white rounded-lg px-3 py-2 text-center min-w-[60px]">
                <p className="text-xs font-semibold">DEC</p>
                <p className="text-2xl font-bold">20</p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 text-sm">Sports Tournament</h3>
                <p className="text-slate-600 text-xs mt-1">Inter-club badminton championship finals</p>
                <p className="text-blue-600 text-xs font-medium mt-1">9:00 AM - Sports Complex</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-green-500 text-white rounded-lg px-3 py-2 text-center min-w-[60px]">
                <p className="text-xs font-semibold">DEC</p>
                <p className="text-2xl font-bold">25</p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 text-sm">Christmas Celebration</h3>
                <p className="text-slate-600 text-xs mt-1">Festive dinner with live music and entertainment</p>
                <p className="text-green-600 text-xs font-medium mt-1">6:00 PM - Main Dining</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 pb-4 border-t border-slate-200">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 mb-3">
              <img 
                src="https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/unnamed.png"
                alt="Logo"
                className="w-10 h-10"
              />
              <div className="text-left">
                <p className="text-amber-600 font-bold text-sm tracking-wide">APARNA</p>
                <p className="text-amber-500 text-xs tracking-wider">17° NORTH</p>
              </div>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm mx-auto">
              Experience luxury living at its finest with world-class amenities and exceptional service
            </p>
            <div className="flex items-center justify-center gap-4 text-slate-500 text-xs pt-2">
              <span>© 2025 Aparna 17° North</span>
              <span>•</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
