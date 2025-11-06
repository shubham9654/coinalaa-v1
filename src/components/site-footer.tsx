export function SiteFooter() {
  return (
    <footer className="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <img
                src="/logo.svg"
                alt="Coinlaa"
                className="w-24 h-9 sm:w-32 sm:h-12 object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              The ultimate Bitcoin ecosystem platform for enthusiasts,
              professionals, and businesses.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-600">
          <p className="text-xs sm:text-sm">&copy; 2024 Coinlaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
