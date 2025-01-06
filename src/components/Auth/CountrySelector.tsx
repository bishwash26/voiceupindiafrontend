import React, { useState } from 'react';

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('+91');
  const [showCountries, setShowCountries] = useState(false);
  const countries = [
    { code: '+91', name: 'India' }

    // Add more countries here
  ];

  const handleCountryChange = (code:string) => {
    setSelectedCountry(code);
    setShowCountries(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <span className="mr-2">{selectedCountry}</span>
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="number"
          placeholder="Phone Number"
        />
      </div>
      <button
        className="absolute right-0 top-0 p-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        onClick={() => setShowCountries(!showCountries)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {showCountries && (
        <ul className="absolute right-0 top-full bg-white border border-gray-200 rounded-lg p-2 w-48">
          {countries.map((country) => (
            <li key={country.code} className="py-2">
              <button
                className="w-full text-left"
                onClick={() => handleCountryChange(country.code)}
              >
                {country.name} ({country.code})
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySelector;