export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo Icon */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span className="text-white text-sm font-bold">SMART</span>
                  </div>
                </div>
                {/* WiFi Icon */}
                <div className="absolute -top-2 -right-2">
                  <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 8.5c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5s-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5zm2 3c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5s-.22.5-.5.5h-11c-.28 0-.5-.22-.5-.5zm2 3c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-lg text-gray-600 mb-2">Application for Pre-hospital</h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
                SMART EMS
              </h1>
              <p className="text-gray-600 text-lg">
                " อภระดับการแพทยฉุกเฉินไทย ให้เป็นต้นดังต่อพอช่างในโรงพยาบา "
              </p>
            </div>

            {/* AI Power Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
                AI Power
              </button>
            </div>
          </div>

          {/* Right Content - Devices */}
          <div className="relative">
            <div className="relative z-10">
              {/* Desktop Monitor */}
              <div className="relative bg-gray-900 rounded-t-xl border-8 border-gray-800 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-white flex items-center justify-center p-4">
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-green-50 rounded-lg flex items-center justify-center relative">
                      {/* Map Placeholder */}
                      <div className="absolute inset-0 opacity-30">
                        <svg className="w-full h-full" viewBox="0 0 400 300">
                          <circle cx="200" cy="150" r="60" fill="#e0e0e0"/>
                          <circle cx="200" cy="150" r="40" fill="#b0b0b0"/>
                          <circle cx="200" cy="150" r="20" fill="#808080"/>
                        </svg>
                      </div>
                      {/* Location Pin */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-8 bg-gray-800 rounded-b-xl"></div>
              </div>

              {/* Tablet */}
              <div className="absolute -bottom-16 -right-8 w-48 bg-gray-900 rounded-xl border-4 border-gray-800 shadow-2xl transform rotate-3">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden p-2">
                  <div className="w-full h-full bg-white rounded flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-green-50 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Phone */}
              <div className="absolute -bottom-20 left-8 w-32 bg-gray-900 rounded-2xl border-4 border-gray-800 shadow-2xl transform -rotate-6">
                <div className="aspect-[9/19] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden p-1">
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-green-50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#1e3a8a" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}
