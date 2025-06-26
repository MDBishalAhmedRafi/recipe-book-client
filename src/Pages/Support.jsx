import React from 'react';
import { HelpCircle, Mail, BookOpenCheck } from 'lucide-react';
const Support = () => {
                return (
                                <div className="bg-gradient-to-r from-yellow-200 via-orange to-red-100 lg:w-11/12 lg:mx-auto mx-2 rounded-2xl py-14 px-6 lg:mb-10 md:mb-7 mb-5">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">Help & Support</h2>
        <p className="text-gray-600 mt-4 mb-10">
          Need help using RecipeBook? Our team is here to guide you every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <HelpCircle className="text-blue-600 w-10 h-10 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-blue-700">FAQ</h4>
            <p className="text-gray-600 mt-2">Find answers to the most common questions.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <BookOpenCheck className="text-green-600 w-10 h-10 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-green-700">Getting Started</h4>
            <p className="text-gray-600 mt-2">Learn how to use all the app features easily.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <Mail className="text-yellow-600 w-10 h-10 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-yellow-700">Contact Support</h4>
            <p className="text-gray-600 mt-2">Still stuck? Reach out directly to our support team.</p>
          </div>
        </div>
      </div>
    </div>
                );
};

export default Support;