
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-8">
      <div className="container mx-auto px-4">
        {/* Call to Action Button */}
        <div className="text-center mb-8">
          <Button 
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
          >
            <a 
              href="https://globaleducationaltours.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Plan a School Trip to Washington, D.C.
            </a>
          </Button>
        </div>
        
        {/* Sponsored By Section */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-3">Sponsored by</p>
          <a 
            href="https://globaleducationaltours.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src="/lovable-uploads/5256403c-3120-4462-95e6-cc1f28d44d18.png" 
              alt="Global Educational Tours"
              className="h-10 w-auto mx-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
