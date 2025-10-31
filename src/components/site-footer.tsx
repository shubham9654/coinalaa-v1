export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src="/logo.svg"
                alt="Coinlaa"
                className="w-32 h-12 object-contain"
              />
            </div>
            <p className="text-gray-400">
              The ultimate Bitcoin ecosystem platform for enthusiasts,
              professionals, and businesses.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Coinlaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
