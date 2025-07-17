import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GSTINFormData {
  companyName: string;
  gstNumber: string;
  gstinFile: File | null;
}

const GSTINForm = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState<GSTINFormData>({
    companyName: '',
    gstNumber: '',
    gstinFile: null
  });

  const [fileName, setFileName] = useState<string>('No file chosen');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(true);
  const [isFormSaved, setIsFormSaved] = useState<boolean>(false);
  const [fileUrl, setFileUrl] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      // Check file type
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload JPG, PNG or PDF format only');
        return;
      }

      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit');
        return;
      }

      // Create a URL for the file for download functionality
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl); // Clean up previous URL
      }
      const newFileUrl = URL.createObjectURL(file);
      setFileUrl(newFileUrl);

      setFormData(prev => ({
        ...prev,
        gstinFile: file
      }));
      setFileName(file.name);
      setError('');
    } else {
      setFileName('No file chosen');
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
        setFileUrl('');
      }
      setFormData(prev => ({
        ...prev,
        gstinFile: null
      }));
    }
  };

  // Clean up object URL when component unmounts
  useEffect(() => {
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]);

  const validateGSTIN = (gstin: string): boolean => {
    // Basic GSTIN validation - 15 characters with proper format
    const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    return gstinRegex.test(gstin);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | FormEvent) => {
    // Prevent default for both MouseEvent and FormEvent
    if (e) {
      e.preventDefault();
    }

    setError('');

    // Validate form
    if (!formData.companyName.trim()) {
      setError('Company name is required');
      return;
    }

    if (!formData.gstNumber.trim()) {
      setError('GST number is required');
      return;
    }

    if (!validateGSTIN(formData.gstNumber)) {
      setError('Please enter a valid 15-digit GSTIN');
      return;
    }

    if (!formData.gstinFile) {
      setError('Please upload GSTIN copy');
      return;
    }

    // Submit form
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setIsEditable(false); // Make form uneditable after saving
      setIsFormSaved(true); // Mark form as saved

      // Show success message for 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1500);
  };

  // Function to handle edit button click
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent any default behavior
    e.preventDefault();
    e.stopPropagation();

    // Only change the editable state
    setIsEditable(true);
    // Don't change isFormSaved status when editing
    // This ensures we don't lose the saved state while editing
  };

  // Function to handle download of GSTIN copy
  const handleDownload = () => {
    if (fileUrl && formData.gstinFile) {
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = formData.gstinFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className={`max-w-6xl mx-auto p-4 sm:p-6 md:p-8 ${isDarkMode ? 'dark' : ''}`}>
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-100 shadow-md'} rounded-xl border overflow-hidden`}>
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h1 className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-xl sm:text-2xl font-semibold`}>Set GSTIN</h1>
        </div>

        <div className="p-4 sm:p-6">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 text-sm sm:text-base`}>
            Each taxpayer is assigned a state-wise PAN based 15-digit Goods and Service Taxpayer Identification Number (GSTIN). 
            If buyer has Goods and Services Tax Identification Number(GSTIN) then for every purchase company can avail tax benifites while entering GSTIN details below.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 text-sm">
              GSTIN details saved successfully!
            </div>
          )}

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
              <label htmlFor="companyName" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium sm:text-right`}>
                Company Name :
              </label>
              <div className="sm:col-span-3">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                  className={`w-full px-3 py-2 border ${!isEditable ? (isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-50 text-gray-700') : (isDarkMode ? 'bg-gray-700 text-white' : 'bg-white')} border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
              <label htmlFor="gstNumber" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium sm:text-right`}>
                GST No :
              </label>
              <div className="sm:col-span-3">
                <input
                  type="text"
                  id="gstNumber"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                  className={`w-full px-3 py-2 border ${!isEditable ? (isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-50 text-gray-700') : (isDarkMode ? 'bg-gray-700 text-white' : 'bg-white')} border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase`}
                  placeholder="Enter GST number"
                  maxLength={15}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
              <label htmlFor="gstinFile" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium sm:text-right`}>
                Upload GSTIN Copy :
              </label>
              <div className="sm:col-span-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  {isEditable ? (
                    <label 
                      htmlFor="gstinFile" 
                      className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700'} inline-flex items-center px-4 py-2 border rounded-md cursor-pointer transition-colors`}
                    >
                      <span className="text-sm font-medium">{isDarkMode ? 'Choose File' : 'Choose File'}</span>
                      <input 
                        type="file" 
                        id="gstinFile" 
                        ref={fileInputRef}
                        className="hidden" 
                        onChange={handleFileChange}
                        accept=".jpg,.jpeg,.png,.pdf"
                        disabled={!isEditable}
                      />
                    </label>
                  ) : null}
                  <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm py-2`}>{fileName}</div>
                  {isFormSaved && formData.gstinFile && (
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-300 text-blue-700 rounded-md hover:bg-blue-100 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span className="text-sm font-medium">Download</span>
                    </button>
                  )}
                </div>
                <p className="mt-1 text-xs text-blue-600">
                  Upload JPG, PNG or PDF format are accepted. File size limited upto 5MB.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-center sm:justify-end space-x-3">
              {isFormSaved && !isEditable ? (
                <button
                  type="button" /* Important: type="button" prevents form submission */
                  onClick={(e) => handleEdit(e)}
                  className="px-6 py-2.5 rounded-md text-indigo-600 bg-indigo-50 border border-indigo-200 font-medium hover:bg-indigo-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </div>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !isEditable}
                  className={`px-6 py-2.5 rounded-md text-white font-medium ${isSubmitting || !isEditable ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2`}
                >
                  {isSubmitting ? 'Saving...' : 'Save'}
                </button>
              )}
            </div>
          </form>
        </div>

        <div className={`${isDarkMode ? 'bg-gray-700 border-gray-700 text-gray-400' : 'bg-gray-50 border-t border-gray-200 text-gray-500'} p-4 sm:p-6 text-xs sm:text-sm`}>
          <p>
            You can generally opt-out of recieving personalised ads from third party advertisers and ad networks who are members of the{' '}
            <a href="https://nai.org/" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Network Advertising Initiatve(NAI)
            </a>, or who follow the{' '}
            <a href="https://digitaladvertisingalliance.org/" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance's Self-Regulatory Principles for Online Behavioral Advertising
            </a>{' '}
            by visiting the opt-out pages on the NAI website and DAA website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GSTINForm;