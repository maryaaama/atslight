import React, { useState } from "react";
import { countries, cityStates, cities } from "../../options";

interface ICountry {
  value: string;
  label: string;
}

interface ICityState {
  value: string;
  label: string;
}

const AddressComponent: React.FC = () => {
  const defaultCountry =
    countries.find((country) => country.label === "ایران") || countries[0];

  const [selectedCountry] = useState<ICountry>(defaultCountry);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [stateInput, setStateInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [showStateSuggestions, setShowStateSuggestions] = useState(false);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);

  const handleStateSelect = (state: ICityState) => {
    setSelectedState(state.label);
    setStateInput(state.label);
    setCityInput("");
    setSelectedCity("");
    setShowStateSuggestions(false);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setCityInput(city);
    setShowCitySuggestions(false);
  };

  return (
    <div>
      <h2 className="font-medium my-2 text-lg">محل سکونت</h2>
      <div className="my-2">
        <label htmlFor="country" className="font-medium">
          کشور
        </label>
        <select
          disabled
          value={selectedCountry.value}
          className="w-full my-1 border rounded-sm shadow-sm p-0.5"
        >
          <option key={selectedCountry.value} value={selectedCountry.value}>
            {selectedCountry.label}
          </option>
        </select>
      </div>
      <div className="my-2">
        <label htmlFor="state" className="font-medium">
          استان
        </label>
        <input
          type="text"
          value={stateInput}
          onChange={(e) => {
            setStateInput(e.target.value);
            setShowStateSuggestions(true);
          }}
          onFocus={() => setShowStateSuggestions(true)}
          onBlur={() => setTimeout(() => setShowStateSuggestions(false), 200)}
          placeholder="استان خود را انتخاب کنید"
          className="w-full border shadow-sm my-1 rounded-sm p-0.5 text-slate-700"
        />
        {showStateSuggestions &&
          cityStates
            .filter((state) =>
              state.label.toLowerCase().includes(stateInput.toLowerCase())
            )
            .map((state) => (
              <div
                key={state.value}
                onMouseDown={() => handleStateSelect(state)}
              >
                {state.label}
              </div>
            ))}
      </div>
      <div className="my-2">
        <label htmlFor="city" className="font-medium">
          شهر
        </label>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
            setShowCitySuggestions(true);
          }}
          onFocus={() => setShowCitySuggestions(true)}
          onBlur={() => setTimeout(() => setShowCitySuggestions(false), 200)}
          placeholder="شهر خود را انتخاب کنید"
          className="w-full border shadow-sm my-1 rounded-sm p-0.5 text-slate-700"
        />
        {showCitySuggestions &&
          selectedState &&
          (
            cities[
              cityStates.find((state) => state.label === selectedState)
                ?.value as keyof typeof cities
            ] || []
          )
            .filter((city) =>
              city.toLowerCase().includes(cityInput.toLowerCase())
            )
            .map((city, index) => (
              <div key={index} onMouseDown={() => handleCitySelect(city)}>
                {city}
              </div>
            ))}
      </div>
      <div>
        <label htmlFor="address">آدرس</label>
        <input
          type="text"
          id="address"
          className="w-full border shadow-sm my-1 rounded-sm p-0.5 text-slate-700"
          placeholder="آدرس خود را وارد کنید"
        />
      </div>
    </div>
  );
};

export default AddressComponent;
