import React from 'react';
import { Phone, Smartphone } from 'react-feather';

const LinksPage = () => {
  return (
    <div className=" flex items-center justify-center p-5">
      <div className="bg-green-100 shadow-lg rounded-lg p-8 max-w-md mx-auto border-2 border-gray-200">
        <div className="flex flex-col items-center">
          <div className="mb-2 text-center">
            <h2 className="text-xl font-semibold mb-10">Admissions Open</h2>
            <a href="https://forms.gle/3EzaN8VdapB2rdSc6" className="px-6 py-3 text-lg text-white bg-red-500 rounded-lg hover:bg-green-700 transition duration-300">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
