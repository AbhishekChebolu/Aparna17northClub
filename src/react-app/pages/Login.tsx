import { Eye, EyeOff, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Demo mode - accept any credentials and navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: 'url(https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/premium-club-in-mokila.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-none" />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Logo */}
        <div className="mb-12 text-center">
          <img 
            src="https://mocha-cdn.com/019ace94-784d-71eb-b5fe-894a987149dc/unnamed.png"
            alt="Aparna 17° North"
            className="w-40 h-40 mx-auto mb-6 drop-shadow-2xl"
          />
          <h1 className="text-4xl font-bold text-amber-400 tracking-wide mb-2">
            APARNA
          </h1>
          <h2 className="text-3xl font-light text-amber-300 tracking-wider">
            17° NORTH
          </h2>
          <p className="text-amber-200 text-sm mt-2 tracking-widest">
            THE CONNOISSEUR CLUB
          </p>
        </div>

        {/* Login Card */}
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="space-y-6">
            {/* Member ID Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Member ID"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/90 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/90 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-600 hover:text-amber-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Version */}
        <p className="mt-8 text-white/60 text-sm">Version 1.2.14</p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8">
          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
