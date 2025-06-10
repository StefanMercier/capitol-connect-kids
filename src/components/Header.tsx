
import { Calendar, MapPin } from "lucide-react";

export const Header = () => {
  return (
    <div className="bg-blue-600 text-white p-6 shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-2">Capitol Hill Visit Checklist</h1>
        <p className="text-blue-100 mb-4">Your guide to meeting elected officials in Washington, D.C.</p>
        
        <div className="flex items-center gap-4 text-sm text-blue-100">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Washington, D.C.</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Student Travel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
