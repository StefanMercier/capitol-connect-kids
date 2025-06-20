
import { Calendar, MapPin } from "lucide-react";

export const Header = () => {
  return (
    <div 
      className="bg-blue-600 text-white p-6 shadow-lg relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.8)), url('/lovable-uploads/b7903a09-c94f-41a2-9545-787271cb9fd1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">Capitol Hill Visit Checklist</h1>
            <p className="text-blue-100 mb-4">Your guide to meeting elected officials in Washington, D.C.</p>
          </div>
          <a 
            href="https://globaleducationaltours.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 ml-4"
          >
            <img 
              src="/lovable-uploads/5256403c-3120-4462-95e6-cc1f28d44d18.png" 
              alt="Global Educational Tours"
              className="h-12 w-auto"
            />
          </a>
        </div>
        
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
