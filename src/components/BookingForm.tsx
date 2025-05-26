
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Search } from "lucide-react";

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
    pickupTime: "",
    dropoffTime: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0 bg-white">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Book Your Perfect Car
            </CardTitle>
            <p className="text-gray-600 mt-2">Find and reserve your ideal vehicle in just a few clicks</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div className="space-y-2">
                  <Label htmlFor="pickupLocation" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-brand-blue" />
                    <span>Pickup Location</span>
                  </Label>
                  <Input
                    id="pickupLocation"
                    name="pickupLocation"
                    type="text"
                    placeholder="Enter pickup location"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>

                {/* Dropoff Location */}
                <div className="space-y-2">
                  <Label htmlFor="dropoffLocation" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-brand-orange" />
                    <span>Drop-off Location</span>
                  </Label>
                  <Input
                    id="dropoffLocation"
                    name="dropoffLocation"
                    type="text"
                    placeholder="Enter drop-off location"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>

                {/* Pickup Date */}
                <div className="space-y-2">
                  <Label htmlFor="pickupDate" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-brand-blue" />
                    <span>Pickup Date</span>
                  </Label>
                  <Input
                    id="pickupDate"
                    name="pickupDate"
                    type="date"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>

                {/* Dropoff Date */}
                <div className="space-y-2">
                  <Label htmlFor="dropoffDate" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-brand-orange" />
                    <span>Drop-off Date</span>
                  </Label>
                  <Input
                    id="dropoffDate"
                    name="dropoffDate"
                    type="date"
                    value={formData.dropoffDate}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>

                {/* Pickup Time */}
                <div className="space-y-2">
                  <Label htmlFor="pickupTime" className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-brand-blue" />
                    <span>Pickup Time</span>
                  </Label>
                  <Input
                    id="pickupTime"
                    name="pickupTime"
                    type="time"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>

                {/* Dropoff Time */}
                <div className="space-y-2">
                  <Label htmlFor="dropoffTime" className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-brand-orange" />
                    <span>Drop-off Time</span>
                  </Label>
                  <Input
                    id="dropoffTime"
                    name="dropoffTime"
                    type="time"
                    value={formData.dropoffTime}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-brand-blue hover:bg-blue-700 text-white h-14 text-lg font-semibold"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Available Cars
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
