import React, { useState } from 'react';
import { Star, X, ChefHat, Flame, Mountain, Leaf, Sun, Ban, Plus, Minus } from 'lucide-react';

const spices = [
  {
    name: 'Turmeric Powder',
    image: 'https://sumitjha.sirv.com/assets/4.jpeg',
    benefits: [
      'Natural anti-inflammatory properties',
      'Boosts immunity system',
      'Rich in antioxidants',
      'Aids digestion'
    ],
    color: 'amber',
    price: 89.00,
    rating: 5,
    reviews: 24,
    description: 'Our premium turmeric powder is carefully sourced from the finest turmeric roots, ground to perfection to preserve its natural oils and beneficial compounds. Known as the golden spice, turmeric has been used for centuries in traditional medicine and cooking.',
    usage: 'Perfect for curries, rice dishes, smoothies, and golden milk. Add 1/4 to 1/2 teaspoon to your dishes.',
    storage: 'Store in a cool, dry place away from direct sunlight. Our airtight packaging ensures maximum freshness.',
    origin: 'Sustainably sourced from selected farms in India'
  },
  {
    name: 'Red Chili Powder',
    image: 'https://sumitjha.sirv.com/assets/5.jpeg',
    benefits: [
      'Enhances metabolism',
      'Rich in Vitamin C',
      'Natural pain reliever',
      'Improves circulation'
    ],
    color: 'red',
    price: 92.00,
    rating: 5,
    reviews: 31,
    description: 'Our red chili powder is crafted from premium quality chilies, carefully selected for their perfect balance of heat and flavor. Each batch is ground to optimal coarseness to release maximum flavor.',
    usage: 'Ideal for adding heat to curries, marinades, and sauces. Start with a small amount and adjust to taste.',
    storage: 'Keep in an airtight container in a cool, dark place to maintain color and potency.',
    origin: 'Sourced from specialized chili farms in regional India'
  },
  {
    name: 'Coriander Powder',
    image: 'https://sumitjha.sirv.com/assets/6.jpeg',
    benefits: [
      'Aids digestion',
      'Anti-diabetic properties',
      'Rich in essential oils',
      'Natural detoxifier'
    ],
    color: 'green',
    price: 82.00,
    rating: 5,
    reviews: 28,
    description: 'Our coriander powder is made from carefully selected coriander seeds, ground to release their full aromatic potential. Each batch is tested for optimal flavor and aroma.',
    usage: 'Essential in curries, soups, and marinades. Can be used as a dry rub for meats and vegetables.',
    storage: 'Store in an airtight container away from heat and moisture to preserve its aromatic properties.',
    origin: 'Harvested from organic farms specializing in aromatic spices'
  }
];

const Rating = ({ rating, reviews }) => (
  <div className="flex items-center justify-center gap-0.5">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${index < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
      />
    ))}
    {reviews && <span className="text-xs sm:text-sm text-gray-600 ml-1">({reviews})</span>}
  </div>
);

const SpiceIcons = () => (
  <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-3 place-items-center">
    <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
    <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
    <Mountain className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
    <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
    <Ban className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
  </div>
);
const QuantityControl = ({ quantity, onIncrease, onDecrease, onCancel }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
      <button
        onClick={onDecrease}
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
        disabled={quantity <= 1}
      >
        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>
      <span className="text-base sm:text-lg font-semibold w-6 sm:w-8 text-center">{quantity}</span>
      <button
        onClick={onIncrease}
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
      >
        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>
    </div>
    <button
      onClick={onCancel}
      className="w-full text-xs text-gray-600 hover:text-amber-600"
    >
      Cancel
    </button>
  </div>
);

const SpiceModal = ({ spice, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={spice.image}
            alt={spice.name}
            className="w-full h-94 sm:h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{spice.name}</h3>
            <p className="text-sm text-gray-600 mb-2">(200g pack)</p>
            <Rating rating={spice.rating} reviews={spice.reviews} />
            <p className="text-lg sm:text-xl font-bold text-gray-900 mt-2">Rs. {spice.price.toFixed(2)}</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 text-sm sm:text-base">{spice.description}</p>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Benefits</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {spice.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base text-gray-700">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Usage</h4>
              <p className="text-sm sm:text-base text-gray-700">{spice.usage}</p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Storage</h4>
              <p className="text-sm sm:text-base text-gray-700">{spice.storage}</p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Origin</h4>
              <p className="text-sm sm:text-base text-gray-700">{spice.origin}</p>
            </div>

            <SpiceIcons />
          </div>
        </div>
      </div>
    </div>
  );
};
const Spices = () => {
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

const SpiceCard = ({ spice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);

  const colorClasses = {
    amber: 'bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200',
    red: 'bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200',
    green: 'bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200'
  };

  return (
    <>
      <div className={`
  ${colorClasses[spice.color]}
  rounded-xl
  overflow-hidden
  shadow-md
  hover:shadow-xl
  transition-all
  duration-300
  transform
  hover:-translate-y-1
  w-full
  max-w-sm  // Added max-width
`}>
        <div
          className="cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative">
            <img
              src={spice.image}
              alt={spice.name}
              className="w-full h-40 sm:h-48 lg:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm sm:text-base font-semibold bg-black bg-opacity-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                View Details
              </span>
            </div>
          </div>
          <div className="p-3 sm:p-4 text-center">
            <h3 className="text-base sm:text-xl font-bold mb-2">{spice.name}</h3>

            <Rating rating={spice.rating} reviews={spice.reviews} />
            <p className="text-sm sm:text-base font-bold text-gray-900 mt-2">Rs. {spice.price.toFixed(2)}</p>
            <p className="text-xs text-gray-600 mb-2">(200g pack)</p>
            <SpiceIcons />
          </div>
        </div>
        <div className="px-3 sm:px-4 pb-3 sm:pb-4">
          {showQuantity ? (
            <QuantityControl
              quantity={quantity}
              onIncrease={() => setQuantity(q => q + 1)}
              onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
              onCancel={() => {
                setShowQuantity(false);
                setQuantity(1);
              }}
            />
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowQuantity(true);
              }}
              className="w-full py-1.5 sm:py-2 bg-amber-600 text-white text-sm sm:text-base rounded-full font-medium hover:bg-amber-700 transition-colors"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>

      <SpiceModal
        spice={spice}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};


return (
    <div id="spices" className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Premium Spices</h2>
          <p className="text-xl text-gray-600">Discover the perfect blend of tradition and quality</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-6
            lg:gap-8
            place-items-center
            lg:flex
            lg:justify-center
            lg:space-x-6
          "
        >
          {spices.map((spice, index) => (
            <div
              key={index}
              className="
                w-full
                max-w-sm
                lg:w-auto
                lg:flex-shrink-0
                lg:first:col-start-2  // Centers the first card in the middle column on large screens
              "
            >
              <SpiceCard spice={spice} />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-2xl font-serif text-gray-800 mb-4">Available exclusively at our store!</p>
          <button
             onClick={() => scrollToSection('visit')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg transition-colors duration-300"
          >
            Visit Our Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spices;
