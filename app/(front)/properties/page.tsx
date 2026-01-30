
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Star, 
  Filter, 
  ChevronDown, 
  Wifi, 
  Car, 
  Waves, 
  Dumbbell,
  ShieldCheck,
  Check
} from "lucide-react";
import { properties, Property } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

function SearchResults() {
  const searchParams = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [activeFilters, setActiveFilters] = useState({
    categories: [] as string[],
    amenities: [] as string[],
    priceRange: [0, 5000000],
  });

  // Get filter values from URL on load
  useEffect(() => {
    const category = searchParams.get("category");
    const location = searchParams.get("location");
    
    let filtered = properties;
    
    if (category && category !== "all") {
      filtered = filtered.filter(p => p.category === category);
      setActiveFilters(prev => ({ ...prev, categories: [category] }));
    }
    
    if (location) {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(location.toLowerCase()));
    }
    
    setFilteredProperties(filtered);
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveFilters(prev => {
      const newCats = prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId];
      
      return { ...prev, categories: newCats };
    });
  };

  useEffect(() => {
    let filtered = properties;
    
    if (activeFilters.categories.length > 0) {
      filtered = filtered.filter(p => activeFilters.categories.includes(p.category));
    }
    
    if (activeFilters.amenities.length > 0) {
      filtered = filtered.filter(p => 
        activeFilters.amenities.every(amenity => p.amenities.includes(amenity))
      );
    }
    
    filtered = filtered.filter(p => p.price >= activeFilters.priceRange[0] && p.price <= activeFilters.priceRange[1]);
    
    setFilteredProperties(filtered);
  }, [activeFilters]);

  const getCount = (type: 'category' | 'amenity', value: string) => {
    if (type === 'category') {
      return properties.filter(p => p.category === value).length;
    }
    return properties.filter(p => p.amenities.includes(value)).length;
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Search Result Header */}
      <div className="bg-white border-b sticky top-16 lg:top-20 z-30 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-xl font-bold text-slate-900">
              {filteredProperties.length} properties found in Uganda
            </h1>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
                Sort by: Featured <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap md:hidden">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Booking.com Style */}
          <aside className="hidden lg:block w-72 flex-shrink-0 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 sticky top-40">
              {/* Category Filter */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  Property Type
                </h3>
                <div className="space-y-3">
                  {[
                    { id: "apartments", label: "Apartments" },
                    { id: "hostels", label: "Hostels" },
                    { id: "rentals", label: "Rentals" },
                    { id: "short-stay", label: "Short Stay" },
                  ].map((cat) => (
                    <div key={cat.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={cat.id} 
                          checked={activeFilters.categories.includes(cat.id)}
                          onCheckedChange={() => handleCategoryChange(cat.id)}
                        />
                        <label htmlFor={cat.id} className="text-sm font-medium text-slate-600 cursor-pointer">
                          {cat.label}
                        </label>
                      </div>
                      <span className="text-xs text-slate-400">{getCount('category', cat.id)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Your Budget (UGX)</h3>
                <Slider
                  defaultValue={[0, 5000000]}
                  max={5000000}
                  step={100000}
                  value={activeFilters.priceRange}
                  onValueChange={(val) => setActiveFilters(prev => ({ ...prev, priceRange: val }))}
                  className="mb-4"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-500">
                  <span>0</span>
                  <span>5M+</span>
                </div>
              </div>

              {/* Amenities Filter */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Popular Amenities</h3>
                <div className="space-y-3">
                  {[
                    { id: "wifi", label: "Free WiFi", icon: Wifi },
                    { id: "parking", label: "Parking", icon: Car },
                    { id: "pool", label: "Swimming Pool", icon: Waves },
                    { id: "gym", label: "Gym", icon: Dumbbell },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={item.id} 
                          checked={activeFilters.amenities.includes(item.id)}
                          onCheckedChange={() => setActiveFilters(prev => {
                            const newAmens = prev.amenities.includes(item.id)
                              ? prev.amenities.filter(id => id !== item.id)
                              : [...prev.amenities, item.id];
                            return { ...prev, amenities: newAmens };
                          })}
                        />
                        <label htmlFor={item.id} className="text-sm font-medium text-slate-600 flex items-center cursor-pointer">
                          <item.icon className="w-3.5 h-3.5 mr-2 text-slate-400" />
                          {item.label}
                        </label>
                      </div>
                      <span className="text-xs text-slate-400">{getCount('amenity', item.id)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Property List - Horizontal Layout */}
          <main className="flex-1 space-y-4">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden border-slate-200 hover:border-emerald-200 transition-colors group">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Area */}
                    <div className="relative w-full md:w-72 h-48 md:h-auto overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {property.featured && (
                        <Badge className="absolute top-3 left-3 bg-emerald-500">Featured</Badge>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                              {property.name}
                            </h2>
                            <p className="text-sm text-slate-500 flex items-center mt-1">
                              <MapPin className="w-3.5 h-3.5 mr-1" /> {property.location}
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1.5">
                              <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-900">Exceptional</p>
                                <p className="text-xs text-slate-500">{property.reviews} reviews</p>
                              </div>
                              <div className="w-9 h-9 bg-emerald-600 text-white rounded-lg rounded-bl-none flex items-center justify-center font-bold">
                                {property.rating}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 space-y-2">
                          <p className="text-sm text-slate-600 line-clamp-2">
                            {property.description}
                          </p>
                          <div className="flex flex-wrap gap-3 mt-3">
                            {property.amenities.map(amenity => (
                              <span key={amenity} className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center">
                                <Check className="w-3 h-3 mr-1" /> {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div className="flex items-center text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-full w-fit">
                          <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Verified Property
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-500 mb-0.5">Price starting from</p>
                          <p className="text-2xl font-bold text-slate-900">
                            UGX {property.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-slate-500 mb-3">{property.priceLabel}</p>
                          <Link href={`/properties/${property.id}`}>
                            <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
                              Show details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">No properties found</h3>
                <p className="text-slate-500 mt-2">Try adjusting your filters to find more properties.</p>
                <Button 
                   variant="outline" 
                   className="mt-6"
                   onClick={() => setActiveFilters({ categories: [], amenities: [], priceRange: [0, 5000000] })}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading properties...</div>}>
      <SearchResults />
    </Suspense>
  );
}
