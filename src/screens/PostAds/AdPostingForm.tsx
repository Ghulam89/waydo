import React, { useState } from 'react';

const AdPostingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    vehicleType: '',
    board: false,
    module: false,
    ldsGt: false,
    remoteExternal: false,
    time: false,
    vol: false,
    xrd1s: false,
    winning: false,
    tpsh3: false,
    price: '1000.00',
    usbV: false,
    contactInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Ad posted successfully!');
  };

  // Step 1: Category Selection
  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Choose the right category for your ad:</h2>
      
      <div className="border rounded-lg overflow-hidden">
        <div 
          className={`p-4 cursor-pointer flex justify-between items-center ${formData.category === 'modes' ? 'bg-blue-100 border-l-4 border-blue-500' : 'hover:bg-gray-50'}`}
          onClick={() => setFormData({...formData, category: 'modes'})}
        >
          <span>Modes</span>
          <span className="text-gray-400">&gt;</span>
        </div>
        
        {[1, 2, 3, 4, 5].map((item) => (
          <div 
            key={item}
            className={`p-4 cursor-pointer flex justify-between items-center ${formData.vehicleType === `cars-${item}` ? 'bg-blue-100 border-l-4 border-blue-500' : 'hover:bg-gray-50'}`}
            onClick={() => setFormData({...formData, vehicleType: `cars-${item}`})}
          >
            <span>Cars</span>
            <span className="text-gray-400">&gt;</span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-6">
        <button 
          type="button"
          onClick={nextStep}
          disabled={!formData.category || !formData.vehicleType}
          className={`px-4 py-2 rounded-md ${!formData.category || !formData.vehicleType ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          Next
        </button>
      </div>
    </div>
  );

  // Step 2: Vehicle Details
  const renderStep2 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Tell us about your vehicle</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { id: 'board', label: 'Board' },
          { id: 'module', label: 'Module' },
          { id: 'ldsGt', label: 'LDS GT' },
          { id: 'remoteExternal', label: 'Remote External' },
          { id: 'time', label: 'Time' },
          { id: 'vol', label: 'VOL' },
          { id: 'xrd1s', label: 'XRD1S' },
          { id: 'winning', label: 'Winning' },
          { id: 'tpsh3', label: 'TPSH3' },
          { id: 'usbV', label: 'USB V' },
        ].map((item) => (
          <div key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={item.id}
              name={item.id}
              checked={formData[item.id as keyof typeof formData] as boolean}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label htmlFor={item.id} className="ml-2 text-gray-700">
              {item.label}
            </label>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleInputChange}
            className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.00"
          />
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        <button 
          type="button"
          onClick={nextStep}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Step 3: Contact Information & Review
  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Review Your Ad</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-2">Category</h3>
        <p className="capitalize">{formData.category} / {formData.vehicleType}</p>
        
        <h3 className="font-medium text-lg mt-4 mb-2">Vehicle Features</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(formData).map(([key, value]) => {
            if (typeof value === 'boolean' && value) {
              return (
                <div key={key} className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                </div>
              );
            }
            return null;
          })}
        </div>
        
        <h3 className="font-medium text-lg mt-4 mb-2">Price</h3>
        <p>${formData.price}</p>
      </div>
      
      <div>
        <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">
          Contact Information
        </label>
        <input
          type="text"
          name="contactInfo"
          id="contactInfo"
          value={formData.contactInfo}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Email or phone number"
          required
        />
        <p className="mt-2 text-sm text-gray-500">Be our team experience Call Merke</p>
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        <button 
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Post Ad
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md">
      
        <form onSubmit={handleSubmit} className="px-6 py-6">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </form>
        
        <div className="px-6 py-4 bg-gray-50 text-center text-sm text-gray-500">
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default AdPostingForm;