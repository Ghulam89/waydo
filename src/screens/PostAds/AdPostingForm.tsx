import React, { useState, useEffect, SetStateAction } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const AdPostingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
      brand: 'Action Martin',
    model: 'DB9 GT',
    version: 'Other',
    year: '2025',
    mileage: '23145',
    price: '100.000',
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
    usbV: false,
    contactInfo: '',
       vehicleColor: '',
    interiorColor: '',
    fuelType: '',
    transmission: '',
    driveType: '',
    seatingCapacity: '',
    numberOfCylinders: '',
    enginePower: '',
    engineFeatures: [],
    locationCity: '',
    isPinCorrect: null as boolean | null,
    
  });

  
const colors = ['White', 'Grey', 'Blue', 'Red', 'Green', 'Yellow', 'Black', 'Brown', 'Orange', 'Cameo', 'Grey'];
const fuelTypes = ['Diesel', 'Electric', 'E85/LPG', 'Hybrid'];
const vehicleConditions = ['New','Used']
const transmissions = ['Automatic', 'Manual'];
const driveTypes = ['Front-Wheel Drive (FWD)', 'Rear-Wheel Drive (RWD)', 'All-Wheel Drive (AWD)', 'Part-Time 4WD', 'Full-Time 4WD (4WD)'];
const seatingCapacity = ['2 seats', '4 seats', '5 seats', '7 seats', '8 seats'];
const engineCylinders = ['3 cylinders', '4 cylinders', '5 cylinders', '6 cylinders', '8 cylinders', '10 cylinders'];
const vehicleConditionOptions = ['New', 'Used'];



  const engineFeaturesList = [
    'Sunroof / Moonroof', 'Waterflood (Cracked block)', 'CDX Player', 'Replace Battery'
  ];


  function SectionSelector({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: string[];
  selected: string;
  onSelect: (val: string) => void;
}) {
  return (
    <div className="mb-6">
      <p className="mb-3 font-medium text-gray-700">{title}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`px-5 py-2 rounded-full font-medium border ${
              selected === option
                ? 'border-red-600 bg-red-100'
                : 'border-gray-300 hover:border-red-500'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}


const bodyTypeOptions = [
  { id: 'compact', label: 'Compact',img:'public/ads/body-type1.png'},
  { id: 'sedan', label: 'Sedan',img:'public/ads/body-type2.png'},
  { id: 'jeep', label: 'Jeep',img:'public/ads/body-type3.png'},
  { id: 'pickup', label: 'Pickup Truck',img:'public/ads/body-type4.png' },
  { id: 'coupe', label: 'Coupe',img:'public/ads/body-type5.png'},
  { id: 'convertible', label: 'Convertible',img:'public/ads/body-type6.png'},
  { id: 'minivan', label: 'Minivan',img:'public/ads/body-type7.png'},
  { id: 'van', label: 'Van',img:'public/ads/body-type8.png'},
  { id: 'other', label: 'Other',img:'public/ads/body-type7.png'},
];

  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'Example dashboard screenshot.jpg', size: '73 KB', progress: 50 },
    { id: 2, name: 'Example dashboard screenshot1.jpg', size: '132 KB', progress: 100 },
    { id: 3, name: 'Updated tablet phone ray apps Example dashboard screenshot.png', size: 'Try again', progress: 0 },
  ]);

  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);
  const [vehicleCondition, setVehicleCondition] = useState('New');

  const [title, setTitle] = useState('');
  const [tourUrl, setTourUrl] = useState('');
  const [description, setDescription] = useState('');

  // Dummy images for previews
  const images = [
    'public/cars/car1.png',
    'public/cars/car1.png',
    'public/cars/car1.png',
  ];


 function toggleFeature(feature: string) {
    setFormData((prev) => {
      const hasFeature = prev.engineFeatures.includes(feature);
      return {
        ...prev,
        engineFeatures: hasFeature
          ? prev.engineFeatures.filter((f) => f !== feature)
          : [...prev.engineFeatures, feature],
      };
    });
  }

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Automatically move to next step when category is selected
  useEffect(() => {
    if (step === 1 && formData.category && formData.vehicleType) {
      nextStep();
    }
  }, [formData.category, formData.vehicleType, step]);

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
      <h2 className="text-2xl text-center font-semibold mb-4">Choose the right category for your ad:</h2>
      <ul className='flex items-center gap-2'>
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17C14.2005 17.6224 13.1502 18 12 18C10.8498 18 9.79952 17.6224 9 17" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </li>
        <li>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </li>
        <li className='text-red-500 font-semibold'>
          Motors
        </li>
      </ul>
      <div className="rounded-lg overflow-hidden">
        <div 
          className={`px-2 py-2 cursor-pointer flex justify-between items-center ${formData.category === 'modes' ? 'bg-blue-100 border-l-4 border-blue-500' : 'hover:border-red-500 border-b hover:text-red-500 font-medium'}`}
          onClick={() => setFormData({...formData, category: 'modes'})}
        >
          <span>Modes</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {[1, 2, 3, 4, 5].map((item) => (
          <div 
            key={item}
            className={`px-2 py-2 cursor-pointer flex justify-between items-center ${formData.vehicleType === `cars-${item}` ? 'bg-blue-100 border-l-4 border-blue-500' : 'hover:border-red-500 border-b hover:text-red-500 font-medium'}`}
            onClick={() => {
              setFormData({...formData, vehicleType: `cars-${item}`, category: 'cars'});
            }}
          >
            <span>Cars</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );

  // Step 2: Vehicle Details
  const renderStep2 = () => (
    <>
    <div className="bg-white w-full  py-4 px-6">
         
            <h1 className="text-3xl text-center font-semibold text-gray-900">Tell us about your vehicle</h1>
           
         
        </div>
        
        {/* Form Content */}
        <div className="">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Brand Field */}
            <div  className=' w-full'>
                            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Brand</label>

              <Select value={selectedFilter} onValueChange={handleFilterChange}>
              <SelectTrigger  className="w-full h-12">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            </div>
            
            {/* Model Field */}
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model</label>
              <div className="relative">
                  <Select value={selectedFilter} onValueChange={handleFilterChange}>
              <SelectTrigger  className="w-full h-12">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
               
              </div>
            </div>
            
            {/* Version Field */}
            <div>
              <label htmlFor="version" className="block text-sm font-medium text-gray-700 mb-1">Version (Optional)</label>
              <div className="relative">
                  <Select value={selectedFilter} onValueChange={handleFilterChange}>
              <SelectTrigger  className="w-full h-12">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
              
              </div>
            </div>
            
            {/* Year Field */}
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <div className="relative">
                   <Select value={selectedFilter} onValueChange={handleFilterChange}>
              <SelectTrigger  className="w-full h-12">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
               
              </div>
            </div>
            
            {/* Mileage Field */}
            <div>
              <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1">Mileage</label>
              <div className="relative">
                <Input 
                  type="text" 
                  id="mileage" 
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  className="w-full py-3 h-12 px-4 border border-gray-300 rounded-md focus:outline-none "
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">mi</span>
                </div>
              </div>
            </div>
            
            {/* Price Field */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input 
                  type="text" 
                  id="price" 
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full py-3 h-12 pl-8 pr-16 border border-gray-300 rounded-md"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">USD</span>
                </div>
              </div>
            </div>
            
            {/* Next Button */}
            <div className="">
              <Button 
               onClick={nextStep}
                type="submit" 
className="h-auto px-[18px] py-2.5 bg-primary-600 w-full text-[#ffffff] text-[14px] font-medium [font-family:'Mona_Sans',Helvetica] border border-solid border-[#ff0000] shadow-shadow-xs hover:bg-primary-700"              >
                Next
              </Button>
            </div>

            {/* Help Text */}
            <div>
              <p className="text-sm text-blue-600  text-center">Do you have questions? <span className="text-blue-600 font-medium">Call Keyto</span></p>
            </div>
            
            
          </form>
        </div>
    </>
  );

  // Step 3: Contact Information & Review
  const renderStep3 = () => (
  <>
    <div className="bg-white w-full py-4 px-6">
      <h1 className="text-3xl text-center font-semibold text-gray-900">
        Tell us about your car
      </h1>
    </div>


    <div className=' bg-[#F2F4F7] my-6 p-4 rounded-md'>
     <p className=' text-sm'>Your ad will be rejected if it does not comply with our <span className=' text-blue-500'> posting guidelines. </span> 
Got questions? <span className=' text-blue-600'> email us. </span> </p>

 <p className=' pt-2 text-sm'>By proceeding, I confirm that I have reviewed the information provided above and confirm 
that such information is complete and accurate. <span className=' text-blue-500'>Terms & conditions.</span>  </p>
    </div>

    <div className="space-y-6">
      {/* Listing Summary Card */}
      <Card className="p-5 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Listing Summary</h3>
          <button type="button" className="text-sm text-red-500 font-medium hover:underline">
            Edit
          </button>
        </div>

        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Make and Model:</span>
            <span className="text-gray-500">Toyota Corolla</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Trim:</span>
            <span className="text-gray-500">Other</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Regional Specs:</span>
            <span className="text-gray-500">American Specs</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Year:</span>
            <span className="text-gray-500">2021</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Currency:</span>
            <span className="text-gray-500">USD</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Price:</span>
            <span className="text-gray-500">$15,000.00</span>
          </div>
        </div>
      </Card>

    


{/* File Upload List */}
      <div className="space-y-4 mb-6">
        {uploadedFiles.map((file) => (
          <div key={file.id} className="flex items-center justify-between p-3 border border-gray-300 rounded-md">
            <div className="flex items-center space-x-4">
              <div className="text-red-500 font-semibold"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="32" height="32" rx="16" fill="#FFCCCC"/>
<rect x="2" y="2" width="32" height="32" rx="16" stroke="#FFDADA" stroke-width="4"/>
<path d="M13.3333 24H22.6667C23.403 24 24 23.403 24 22.6667V13.3333C24 12.597 23.403 12 22.6667 12H13.3333C12.597 12 12 12.597 12 13.3333V22.6667C12 23.403 12.597 24 13.3333 24ZM13.3333 24L20.6667 16.6667L24 20M16.6667 15.6667C16.6667 16.219 16.219 16.6667 15.6667 16.6667C15.1144 16.6667 14.6667 16.219 14.6667 15.6667C14.6667 15.1144 15.1144 14.6667 15.6667 14.6667C16.219 14.6667 16.6667 15.1144 16.6667 15.6667Z" stroke="#FF0000" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              <div>
                <p className="font-semibold text-sm">{file.name}</p>
                <p className="text-xs text-gray-500">{file.size}</p>
                {file.progress > 0 && file.progress < 100 && (
                  <div  className=' w-full bg-red-100'>
                  <div className="w-40 h-2 bg-red-500 rounded-full mt-1" style={{ width: `${file.progress}%` }}></div>

                  </div>
                )}
                {file.progress === 100 && (
                  <div className="w-40 h-1 bg-red-700 rounded-full mt-1"></div>
                )}
              </div>
            </div>
            <button className="">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#FF0000"/>
<rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#FF0000"/>
<path d="M11.3327 5.5L6.74935 10.0833L4.66602 8" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>
        ))}
      </div>

      {/* Image Previews */}
      <div className="flex space-x-4 mb-6">
        {images.map((src, i) => (
          <div key={i} className="relative w-24 h-16 rounded-md overflow-hidden border border-gray-300">
            <img src={src} alt={`Car ${i + 1}`} className="object-cover w-full h-full" />
            <div className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs cursor-pointer">
              {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Add Buttons */}
      <div className="flex flex-col space-y-4 mb-6">
        <Button className="flex font-semibold items-center h-12 bg-transparent justify-center px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50">
          
          Add Photos <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9998 6H12.0088" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 14.5H15.5M12 18L12 11" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round"/>
</svg>

        </Button>
        <Button className="flex items-center px-4 py-2 h-12  bg-transparent border border-red-500 text-red-500 rounded-md hover:bg-red-50">
          Add 360 Tour <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4523 16.5361L17.9533 15.978C17.6681 15.7219 17.2356 15.7222 16.9506 15.9786L17.4523 16.5361ZM3.84514 19.7827L3.34413 20.3408L3.34413 20.3408L3.84514 19.7827ZM7.49398 7.49988L7.99568 8.05737L7.49398 7.49988ZM21.1549 4.20497L21.6559 3.64686V3.64686L21.1549 4.20497ZM20.2259 12.1129C20.0104 12.4666 20.1224 12.9281 20.4762 13.1436C20.8299 13.3591 21.2914 13.2471 21.5069 12.8934L20.8664 12.5031L20.2259 12.1129ZM16.4271 20.1346C16.29 20.5255 16.4957 20.9535 16.8866 21.0906C17.2774 21.2277 17.7054 21.022 17.8426 20.6311L17.1348 20.3829L16.4271 20.1346ZM17.4523 16.5361L16.9506 15.9786C14.6412 18.057 12.0406 19.4221 9.71966 19.9736C7.37148 20.5315 5.46519 20.2291 4.34616 19.2246L3.84514 19.7827L3.34413 20.3408C4.98985 21.8182 7.49717 22.0434 10.0664 21.4329C12.6629 20.816 15.4835 19.3169 17.954 17.0936L17.4523 16.5361ZM3.84514 19.7827L4.34616 19.2246C3.26341 18.2526 2.94351 16.61 3.55925 14.5373C4.17177 12.4754 5.6839 10.1378 7.99568 8.05737L7.49398 7.49988L6.99227 6.9424C4.52411 9.1636 2.82945 11.7265 2.12135 14.1101C1.41648 16.4829 1.66213 18.8308 3.34413 20.3408L3.84514 19.7827ZM7.49398 7.49988L7.99568 8.05737C10.3052 5.97891 12.9201 4.60106 15.256 4.03767C17.6212 3.4672 19.5378 3.76116 20.6538 4.76307L21.1549 4.20497L21.6559 3.64686C20.0072 2.16684 17.4833 1.95742 14.9043 2.57948C12.2959 3.20861 9.46266 4.71919 6.99227 6.9424L7.49398 7.49988ZM21.1549 4.20497L20.6538 4.76307C21.4275 5.45762 21.8027 6.4733 21.7441 7.74706C21.6849 9.03286 21.18 10.5471 20.2259 12.1129L20.8664 12.5031L21.5069 12.8934C22.5521 11.1779 23.1687 9.42036 23.2425 7.81602C23.3169 6.19964 22.8367 4.70686 21.6559 3.64686L21.1549 4.20497ZM17.4523 16.5361L16.9513 17.0942C16.8957 17.0443 16.9774 17.0809 16.9839 17.4478C16.9895 17.762 16.9372 18.1595 16.8529 18.5744C16.77 18.9823 16.6632 19.3742 16.576 19.6667C16.5327 19.8121 16.4948 19.9311 16.468 20.0129C16.4546 20.0538 16.444 20.0853 16.4369 20.1061C16.4334 20.1164 16.4308 20.1241 16.4291 20.1289C16.4283 20.1313 16.4277 20.133 16.4273 20.134C16.4272 20.1345 16.4271 20.1348 16.427 20.1349C16.427 20.1349 16.427 20.1349 16.427 20.1349C16.427 20.1349 16.427 20.1348 16.4271 20.1348C16.4271 20.1347 16.4271 20.1346 17.1348 20.3829C17.8426 20.6311 17.8426 20.631 17.8426 20.6309C17.8427 20.6309 17.8427 20.6307 17.8427 20.6306C17.8428 20.6304 17.8429 20.6301 17.843 20.6298C17.8433 20.6291 17.8436 20.6283 17.8439 20.6272C17.8446 20.6252 17.8456 20.6223 17.8469 20.6188C17.8493 20.6117 17.8528 20.6016 17.8571 20.5888C17.8658 20.5632 17.8782 20.5265 17.8934 20.48C17.9238 20.3873 17.9658 20.2553 18.0136 20.0951C18.1085 19.7764 18.2282 19.3387 18.3229 18.873C18.4161 18.4142 18.4921 17.8941 18.4837 17.421C18.4762 17.0005 18.4013 16.3802 17.9533 15.978L17.4523 16.5361Z" fill="#FF0000"/>
</svg>

        </Button>
      </div>

      {/* Title */}
      <div className="mb-6">
        <label htmlFor="title" className="block mb-1 font-medium text-gray-700">Title</label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Japan, OEM"
          className="w-full h-12 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* 360 Tour URL */}
      <div className="mb-6">
        <label htmlFor="tourUrl" className="block mb-1 font-medium text-gray-700">360 Tour URL (Optional)</label>
        <input
          id="tourUrl"
          type="text"
          value={tourUrl}
          onChange={e => setTourUrl(e.target.value)}
          placeholder="https://www.360tour.com"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label htmlFor="description" className="block mb-1 font-medium text-gray-700">Describe your car</label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter a description..."
          rows={4}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
        />
      </div>

      {/* Body Type */}
      <div className="mb-6">
        <p className="mb-3 font-medium text-gray-700">Body Type</p>
        <div className="grid grid-cols-3 gap-3">
          {bodyTypeOptions.map(({ id, label,img}) => (
            <button
              key={id}
              type="button"
              onClick={() => setSelectedBodyType(id)}
              className={`border rounded-md p-5 text-center text-sm font-medium 
                ${selectedBodyType === id ? 'border-blue-600 bg-blue-100' : 'border-gray-300 hover:border-blue-500'}`}
            >
              {/* Replace with icon SVG if you have */}
              <div className="mb-1   text-center rounded mx-auto">
                <img src={img} alt='' className=' mx-auto' />
              </div>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Condition */}
      <div className="mb-6">
        <p className="mb-3 font-medium text-gray-700">Vehicle Condition</p>
        <div className="flex space-x-4">
          {vehicleConditions.map((condition) => (
            <button
              key={condition}
              type="button"
              onClick={() => setVehicleCondition(condition)}
              className={`px-5 py-2 rounded-full font-medium 
                ${vehicleCondition === condition ? 'bg-blue-100 text-gray-800 border border-blue-500' : 'border border-gray-300 text-gray-700 hover:border-blue-500'}`}
            >
              {condition}
            </button>
          ))}
        </div>
      </div>

      
      


        {/* Vehicle Color */}
      <SectionSelector
        title="Vehicle Color"
        options={colors}
        selected={formData.vehicleColor}
        onSelect={(val) => handleChange('vehicleColor', val)}
      />

      {/* Interior Color */}
      <SectionSelector
        title="Interior Color"
        options={colors}
        selected={formData.interiorColor}
        onSelect={(val) => handleChange('interiorColor', val)}
      />

      {/* Fuel Type */}
      <SectionSelector
        title="Fuel Type"
        options={fuelTypes}
        selected={formData.fuelType}
        onSelect={(val) => handleChange('fuelType', val)}
      />

      {/* Transmission */}
      <SectionSelector
        title="Transmission"
        options={transmissions}
        selected={formData.transmission}
        onSelect={(val) => handleChange('transmission', val)}
      />

      {/* Drive Type */}
      <SectionSelector
        title="Drive Type"
        options={driveTypes}
        selected={formData.driveType}
        onSelect={(val) => handleChange('driveType', val)}
      />

      {/* Seating Capacity */}
      <SectionSelector
        title="Seating Capacity"
        options={seatingCapacity}
        selected={formData.seatingCapacity}
        onSelect={(val) => handleChange('seatingCapacity', val)}
      />

      {/* Number of Cylinders */}
      <SectionSelector
        title="Number of Cylinders"
        options={engineCylinders}
        selected={formData.numberOfCylinders}
        onSelect={(val) => handleChange('numberOfCylinders', val)}
      />

     
      {/* Select Location */}
      <div className="mb-6">
        <label className="block text-lg mb-4 font-medium text-black">Select Location</label>
        <Input
          type="text"
          placeholder="Province"
          value={formData.locationCity}
          onChange={(e) => handleChange('locationCity', e.target.value)}
          className="w-full border border-gray-300 h-12 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
         <Input
          type="text"
          placeholder="City"
          value={formData.locationCity}
          onChange={(e) => handleChange('locationCity', e.target.value)}
          className="w-full border mt-3 border-gray-300 h-12 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className='  mt-4 '>
        <h2 className=' text-lg  font-medium'>Is the pin in the right location?</h2>
        <p className=' pt-3 text-gray-500'>Click and drag the pin to the exact spot. Users are more likely to respond to ads that are correctly shown on the map.</p>
      </div>

      <div>
        <img src='public/map.png' alt='' />
      </div>
     

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
       
        <Button
          type="submit"
className="h-auto px-[18px] py-2.5 bg-primary-600 w-full text-[#ffffff] text-[14px] font-medium [font-family:'Mona_Sans',Helvetica] border border-solid border-[#ff0000] shadow-shadow-xs hover:bg-primary-700" >
          Submit
        </Button>
      </div>
    </div>
  </>
);


    const [selectedFilter, setSelectedFilter] = useState("");
    
    const filterOptions = [
      { value: "Aston Martin", label: "Aston Martin" },
      { value: "Aston Martin2", label: "Aston Martin2" },
      { value: "Aston Martin3", label: "Aston Martin3" },
      { value: "Aston Martin4", label: "Aston Martin4" },
      { value: "Aston Martin5", label: "Aston Martin5" },
    ];
  
    const handleFilterChange = (value: SetStateAction<string>) => {
      setSelectedFilter(value);
    };

  return (
    <div className="min-h-screen mt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="px-6 py-6">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </form>
      </div>
    </div>
  );
};

export default AdPostingForm;


