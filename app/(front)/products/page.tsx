// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { ShoppingCart, Heart, ChevronDown } from 'lucide-react';
// import { Navigation } from '../components/navigation';

// const allProducts = [
//   {
//     id: 1,
//     name: 'Acne Control Serum',
//     category: 'Skincare',
//     gender: 'Both',
//     price: 45000,
//     rating: 4.5,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Medicated serum targeting acne and pimples with advanced actives',
//   },
//   {
//     id: 2,
//     name: 'Dark Spot Eraser',
//     category: 'Skincare',
//     gender: 'Women',
//     price: 52000,
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Specialized treatment for hyperpigmentation and dark spots',
//   },
//   {
//     id: 3,
//     name: 'Skin Repair Cream',
//     category: 'Treatment',
//     gender: 'Both',
//     price: 58000,
//     rating: 4.8,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Rich cream for damaged skin repair and texture improvement',
//   },
//   {
//     id: 4,
//     name: 'Beauty Glow Capsules',
//     category: 'Supplements',
//     gender: 'Women',
//     price: 75000,
//     rating: 4.9,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Premium supplement for skin luminosity and hair health',
//   },
//   {
//     id: 5,
//     name: 'Collagen Complex',
//     category: 'Supplements',
//     gender: 'Both',
//     price: 89000,
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Advanced collagen formula for skin elasticity and repair',
//   },
//   {
//     id: 6,
//     name: 'Immunity Boost Pack',
//     category: 'Supplements',
//     gender: 'Both',
//     price: 65000,
//     rating: 4.7,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Comprehensive wellness supplement for immune health',
//   },
//   {
//     id: 7,
//     name: 'Hydration Moisturizer',
//     category: 'Skincare',
//     gender: 'Women',
//     price: 48000,
//     rating: 4.6,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Deep hydration for dry and sensitive skin types',
//   },
//   {
//     id: 8,
//     name: 'Anti-Inflammatory Mask',
//     category: 'Treatment',
//     gender: 'Both',
//     price: 42000,
//     rating: 4.4,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Soothing mask to reduce inflammation and irritation',
//   },
//   {
//     id: 9,
//     name: 'Men\'s Beard Oil',
//     category: 'Grooming',
//     gender: 'Men',
//     price: 35000,
//     rating: 4.8,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Premium beard conditioning and growth oil',
//   },
//   {
//     id: 10,
//     name: 'Shaving Cream Luxe',
//     category: 'Grooming',
//     gender: 'Men',
//     price: 28000,
//     rating: 4.5,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Smooth shaving experience with natural ingredients',
//   },
//   {
//     id: 11,
//     name: 'Face Mask Treatment',
//     category: 'Treatment',
//     gender: 'Women',
//     price: 36000,
//     rating: 4.9,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Weekly treatment mask for deep cleansing',
//   },
//   {
//     id: 12,
//     name: 'Hair Growth Serum',
//     category: 'Haircare',
//     gender: 'Both',
//     price: 55000,
//     rating: 4.7,
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     description: 'Advanced formula to stimulate hair growth',
//   },
// ];

// export default function ProductsPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [filteredProducts, setFilteredProducts] = useState(allProducts);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedGender, setSelectedGender] = useState('All');
//   const [sortBy, setSortBy] = useState('featured');
//   const [wishlist, setWishlist] = useState<number[]>([]);
//   const [visibleProducts, setVisibleProducts] = useState<number[]>([]);

//   const categories = ['All', 'Skincare', 'Treatment', 'Supplements', 'Grooming', 'Haircare'];
//   const genders = ['All', 'Women', 'Men', 'Both'];

//   useEffect(() => {
//     let filtered = allProducts.filter((product) => {
//       const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
//       const genderMatch = selectedGender === 'All' || product.gender === selectedGender || product.gender === 'Both';
//       return categoryMatch && genderMatch;
//     });

//     if (sortBy === 'price-low') {
//       filtered.sort((a, b) => a.price - b.price);
//     } else if (sortBy === 'price-high') {
//       filtered.sort((a, b) => b.price - a.price);
//     } else if (sortBy === 'rating') {
//       filtered.sort((a, b) => b.rating - a.rating);
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, selectedGender, sortBy]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const id = parseInt(entry.target.getAttribute('data-id') || '0');
//             setVisibleProducts((prev) => [...new Set([...prev, id])]);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const items = containerRef.current?.querySelectorAll('[data-product-item]');
//     items?.forEach((item) => observer.observe(item));

//     return () => {
//       items?.forEach((item) => observer.unobserve(item));
//     };
//   }, [filteredProducts]);

//   const toggleWishlist = (id: number) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   return (
//     <main className="min-h-screen bg-background">
//       <Navigation />
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-background via-muted to-background py-12 sm:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center animate-slideUp">
//             <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 text-balance">
//               Our Complete Collection
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Discover our full range of medicated cosmetics and wellness products for both men and women
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 sm:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-4 gap-8">
//             {/* Sidebar Filters */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-24 space-y-6 animate-slideUp">
//                 {/* Category Filter */}
//                 <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
//                   <h3 className="font-semibold text-secondary mb-4">Categories</h3>
//                   <div className="space-y-3">
//                     {categories.map((cat) => (
//                       <button
//                         key={cat}
//                         onClick={() => setSelectedCategory(cat)}
//                         className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
//                           selectedCategory === cat
//                             ? 'bg-primary text-primary-foreground font-semibold'
//                             : 'text-foreground hover:bg-muted'
//                         }`}
//                       >
//                         {cat}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Gender Filter */}
//                 <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
//                   <h3 className="font-semibold text-secondary mb-4">For</h3>
//                   <div className="space-y-3">
//                     {genders.map((gen) => (
//                       <button
//                         key={gen}
//                         onClick={() => setSelectedGender(gen)}
//                         className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
//                           selectedGender === gen
//                             ? 'bg-primary text-primary-foreground font-semibold'
//                             : 'text-foreground hover:bg-muted'
//                         }`}
//                       >
//                         {gen}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Sort Dropdown */}
//                 <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
//                   <h3 className="font-semibold text-secondary mb-4">Sort By</h3>
//                   <div className="relative">
//                     <select
//                       value={sortBy}
//                       onChange={(e) => setSortBy(e.target.value)}
//                       className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
//                     >
//                       <option value="featured">Featured</option>
//                       <option value="price-low">Price: Low to High</option>
//                       <option value="price-high">Price: High to Low</option>
//                       <option value="rating">Highest Rated</option>
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" size={20} />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Products Grid */}
//             <div className="lg:col-span-3">
//               <div className="mb-6 flex items-center justify-between">
//                 <p className="text-sm text-muted-foreground">
//                   Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
//                 </p>
//               </div>

//               <div
//                 ref={containerRef}
//                 className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 {filteredProducts.map((product, index) => {
//                   const isVisible = visibleProducts.includes(product.id);

//                   return (
//                     <div
//                       key={product.id}
//                       data-product-item
//                       data-id={product.id}
//                       className={`group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform ${
//                         isVisible ? 'animate-slideUp opacity-100' : 'opacity-0'
//                       }`}
//                       style={{ animationDelay: `${(index % 3) * 100}ms` }}
//                     >
//                       {/* Image Container */}
//                       <div className="relative h-64 overflow-hidden bg-muted">
//                         <img
//                           src={product.image || "/placeholder.svg"}
//                           alt={product.name}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                         />

//                         {/* Wishlist Button */}
//                         <button
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 z-10"
//                         >
//                           <Heart
//                             size={20}
//                             className={`transition-colors duration-300 ${
//                               wishlist.includes(product.id)
//                                 ? 'fill-accent text-accent'
//                                 : 'text-muted-foreground'
//                             }`}
//                           />
//                         </button>

//                         {/* Gender Badge */}
//                         <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
//                           {product.gender}
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="p-5 space-y-3">
//                         <div>
//                           <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">
//                             {product.category}
//                           </p>
//                           <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
//                             {product.name}
//                           </h3>
//                         </div>

//                         {/* Rating */}
//                         <div className="flex items-center gap-2">
//                           <div className="flex gap-1">
//                             {[...Array(5)].map((_, i) => (
//                               <span
//                                 key={i}
//                                 className={`text-sm ${
//                                   i < Math.floor(product.rating)
//                                     ? 'text-accent'
//                                     : 'text-muted-foreground'
//                                 }`}
//                               >
//                                 ★
//                               </span>
//                             ))}
//                           </div>
//                           <span className="text-xs text-muted-foreground">({product.rating})</span>
//                         </div>

//                         {/* Price and Button */}
//                         <div className="flex items-center justify-between pt-3 border-t border-border">
//                           <span className="font-bold text-primary">
//                             {product.price.toLocaleString()} UGX
//                           </span>
//                           <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-110">
//                             <ShoppingCart size={18} />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* No Results */}
//               {filteredProducts.length === 0 && (
//                 <div className="text-center py-16">
//                   <p className="text-lg text-muted-foreground mb-2">No products found</p>
//                   <p className="text-sm text-muted-foreground">
//                     Try adjusting your filters
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slideUp {
//           animation: slideUp 0.6s ease-out forwards;
//         }
//       `}</style>
//     </main>
//   );
// }


'use client';

import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Heart, ChevronDown, Filter, X, Star } from 'lucide-react';
import { Navigation } from '../components/navigation';

// ... (Keep your product data exactly as is)
const allProducts = [
  {
    id: 1,
    name: 'Acne Control Serum',
    category: 'Skincare',
    gender: 'Both',
    price: 45000,
    rating: 4.5,
    image: '/best/WhatsApp Image 2026-01-24 at 12.14.49.jpeg',
    description: 'Medicated serum targeting acne and pimples with advanced actives',
  },
  {
    id: 2,
    name: 'Ketoconazole Cream',
    category: 'Skincare',
    gender: 'Women',
    price: 52000,
    rating: 5,
    image: '/1425019_US_Group_01_600x600.avif',
    description: 'Specialized treatment for hyperpigmentation and dark spots',
  },
  {
    id: 3,
    name: 'Skin Repair Cream',
    category: 'Treatment',
    gender: 'Both',
    price: 58000,
    rating: 4.8,
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.03.jpeg',
    description: 'Rich cream for damaged skin repair and texture improvement',
  },
  {
    id: 4,
    name: 'Beauty Glow Capsules',
    category: 'Supplements',
    gender: 'Women',
    price: 75000,
    rating: 4.9,
    image: '/best/WhatsApp Image 2026-01-24 at 12.15.13.jpeg',
    description: 'Premium supplement for skin luminosity and hair health',
  },
];

export default function ProductsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ['All', 'Skincare', 'Treatment', 'Supplements', 'Grooming', 'Haircare'];
  const genders = ['All', 'Women', 'Men', 'Both'];

  useEffect(() => {
    let filtered = allProducts.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const genderMatch = selectedGender === 'All' || product.gender === selectedGender || product.gender === 'Both';
      return categoryMatch && genderMatch;
    });

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedGender, sortBy]);

  // Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleProducts((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = containerRef.current?.querySelectorAll('[data-product-item]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, [filteredProducts]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop')"
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#003B4F]/80 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInDown">
          <span className="inline-block py-1 px-3 rounded-full bg-[#2AB09C]/20 border border-[#2AB09C] text-[#2AB09C] text-sm font-bold tracking-wider mb-6 backdrop-blur-sm">
            SHOP ONLINE
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Curated For Your Confidence
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our range of dermatologically tested skincare, grooming essentials, and wellness supplements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-[#003B4F] font-semibold"
            >
              <Filter size={20} />
              {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar Filters */}
            <div className={`lg:col-span-1 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="sticky top-24 space-y-8 animate-slideInLeft">
                
                {/* Category Filter */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#003B4F] mb-6 flex items-center gap-2">
                    <Filter size={18} className="text-[#2AB09C]" /> Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium flex justify-between items-center group ${
                          selectedCategory === cat
                            ? 'bg-[#003B4F] text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat}
                        {selectedCategory === cat && <div className="w-2 h-2 rounded-full bg-[#2AB09C]" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gender Filter */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#003B4F] mb-6">For Who?</h3>
                  <div className="flex flex-wrap gap-2">
                    {genders.map((gen) => (
                      <button
                        key={gen}
                        onClick={() => setSelectedGender(gen)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                          selectedGender === gen
                            ? 'bg-[#2AB09C] border-[#2AB09C] text-white shadow-sm'
                            : 'bg-transparent border-gray-200 text-gray-600 hover:border-[#2AB09C] hover:text-[#2AB09C]'
                        }`}
                      >
                        {gen}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Dropdown */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#003B4F] mb-4">Sort By</h3>
                  <div className="relative group">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#2AB09C] appearance-none cursor-pointer transition-shadow"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-[#2AB09C] transition-colors" size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-500">
                  Showing <span className="font-bold text-[#003B4F]">{filteredProducts.length}</span> results
                </p>
                {/* Clean Filters Button if needed logic here */}
              </div>

              <div
                ref={containerRef}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product, index) => {
                  const isVisible = visibleProducts.includes(product.id);

                  return (
                    <div
                      key={product.id}
                      data-product-item
                      data-id={product.id}
                      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2AB09C]/30 transition-all duration-500 ${
                        isVisible ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {/* Image Container */}
                      <div className="relative h-72 overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay Gradient on Hover */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Wishlist Button */}
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 z-10"
                        >
                          <Heart
                            size={18}
                            className={`transition-colors duration-300 ${
                              wishlist.includes(product.id)
                                ? 'fill-red-500 text-red-500'
                                : 'text-gray-400 hover:text-red-500'
                            }`}
                          />
                        </button>

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <span className="px-3 py-1 bg-[#003B4F]/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-sm">
                            {product.gender}
                          </span>
                          {product.rating >= 4.8 && (
                            <span className="px-3 py-1 bg-[#2AB09C]/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-sm flex items-center gap-1">
                              <Star size={10} fill="white" /> Top Rated
                            </span>
                          )}
                        </div>

                        {/* Quick Add Button (appears on hover) */}
                        <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                          <button className="w-full py-3 bg-white text-[#003B4F] font-bold rounded-xl shadow-lg hover:bg-[#003B4F] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                            <ShoppingCart size={18} /> Add to Cart
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-3">
                          <p className="text-xs text-[#2AB09C] font-bold uppercase tracking-wider mb-1">
                            {product.category}
                          </p>
                          <h3 className="font-bold text-lg text-[#003B4F] group-hover:text-[#2AB09C] transition-colors duration-300 line-clamp-1">
                            {product.name}
                          </h3>
                        </div>

                        {/* Rating Row */}
                        <div className="flex items-center gap-1 mb-4">
                          <Star size={14} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                          <span className="text-xs text-gray-400">(25 reviews)</span>
                        </div>

                        {/* Price Row */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-400">Price</span>
                            <span className="font-bold text-xl text-[#003B4F]">
                              {product.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">UGX</span>
                            </span>
                          </div>
                          <button className="lg:hidden p-2 bg-[#003B4F] text-white rounded-lg">
                            <ShoppingCart size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* No Results State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm animate-fadeIn">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003B4F] mb-2">No products found</h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search criteria.
                  </p>
                  <button 
                    onClick={() => {
                        setSelectedCategory('All');
                        setSelectedGender('All');
                    }}
                    className="mt-6 px-6 py-2 bg-[#2AB09C] text-white rounded-lg hover:bg-[#239685] transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>
    </main>
  );
}