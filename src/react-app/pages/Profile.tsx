import { useEffect, useState } from "react";
import AppLayout from "@/react-app/components/AppLayout";
import { Mail, Phone, Calendar, Hash, Award, Users } from "lucide-react";

interface MemberProfile {
  id: number;
  member_id: string;
  full_name: string;
  email: string;
  phone: string;
  profile_image_url?: string;
  date_of_birth?: string;
  membership_class?: string;
  dependencies?: Array<{
    id: number;
    name: string;
    relationship: string;
    date_of_birth?: string;
  }>;
}

export default function Profile() {
  const [profile, setProfile] = useState<MemberProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Demo mode - skip auth check

  useEffect(() => {
    // Demo mode - use mock profile data
    const mockProfile: MemberProfile = {
      id: 1,
      member_id: "DEMO-001",
      full_name: "Demo Member",
      email: "demo@aparna17north.com",
      phone: "+91 98765 43210",
      profile_image_url: "",
      date_of_birth: "1990-01-15",
      membership_class: "Premium",
      dependencies: [
        {
          id: 1,
          name: "Jane Doe",
          relationship: "Spouse",
          date_of_birth: "1992-05-20"
        },
        {
          id: 2,
          name: "John Doe Jr.",
          relationship: "Child",
          date_of_birth: "2015-08-10"
        }
      ]
    };
    
    setProfile(mockProfile);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 shadow-xl text-center">
          <div className="relative inline-block mb-4">
            <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden">
              {profile?.profile_image_url ? (
                <img
                  src={profile.profile_image_url}
                  alt={profile.full_name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {(profile?.full_name || "D")[0].toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold mb-1">
            {profile?.full_name || "Member"}
          </h1>
          <p className="text-white/90 text-sm">
            {profile?.email || ""}
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-slate-800 font-bold text-lg mb-4">Contact Information</h2>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <div className="bg-amber-100 rounded-lg w-10 h-10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Email</p>
              <p className="text-sm font-medium text-slate-800">
                {profile?.email || "Not provided"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <div className="bg-green-100 rounded-lg w-10 h-10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Phone</p>
              <p className="text-sm font-medium text-slate-800">
                {profile?.phone || "Not provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Membership Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-slate-800 font-bold text-lg mb-4">Membership Details</h2>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center">
              <Hash className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Membership ID</p>
              <p className="text-sm font-medium text-slate-800">
                {profile?.member_id || "Not assigned"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <div className="bg-purple-100 rounded-lg w-10 h-10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Date of Birth</p>
              <p className="text-sm font-medium text-slate-800">
                {profile?.date_of_birth ? new Date(profile.date_of_birth).toLocaleDateString() : "Not provided"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <div className="bg-amber-100 rounded-lg w-10 h-10 flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Membership Class</p>
              <p className="text-sm font-medium text-slate-800">
                {profile?.membership_class || "Not assigned"}
              </p>
            </div>
          </div>
        </div>

        {/* Dependencies */}
        {profile?.dependencies && profile.dependencies.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-pink-100 rounded-lg w-10 h-10 flex items-center justify-center">
                <Users className="w-5 h-5 text-pink-600" />
              </div>
              <h2 className="text-slate-800 font-bold text-lg">Dependencies</h2>
            </div>
            
            <div className="space-y-3">
              {profile.dependencies.map((dep) => (
                <div key={dep.id} className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-slate-800">{dep.name}</p>
                      <p className="text-sm text-slate-600">{dep.relationship}</p>
                    </div>
                  </div>
                  {dep.date_of_birth && (
                    <p className="text-xs text-slate-500">
                      DOB: {new Date(dep.date_of_birth).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
