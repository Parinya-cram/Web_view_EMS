export default function CommandCenterSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            Command Center
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Diagram */}
          <div className="space-y-8">
            {/* SMART EMS Cloud Icon */}
            <div className="flex justify-center lg:justify-start">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl mb-4 mx-auto">
                  <div>
                    <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span className="text-white text-xl font-bold">SMART</span>
                  </div>
                </div>
                <p className="text-gray-600 font-semibold">SMART EMS</p>
              </div>
            </div>

            {/* Connection Lines and Devices */}
            <div className="grid grid-cols-4 gap-4 items-center">
              {/* Mini PC */}
              <div className="col-span-1">
                <div className="text-center">
                  <div className="w-20 h-16 bg-gray-800 rounded-lg shadow-lg mb-2 mx-auto"></div>
                  <p className="text-xs text-gray-600 font-semibold">Mini PC</p>
                </div>
              </div>

              {/* Monitors */}
              <div className="col-span-3 grid grid-cols-2 gap-4">
                {/* Monitor 1 - Ambulance Live Feed */}
                <div className="text-center">
                  <div className="bg-gray-900 rounded-lg p-2 shadow-lg">
                    <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center">
                      <span className="text-white text-xs">Live Feed</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Ambulance live feed</p>
                </div>

                {/* Monitor 2 - Stream Monitor */}
                <div className="text-center">
                  <div className="bg-gray-900 rounded-lg p-2 shadow-lg">
                    <div className="aspect-video bg-gradient-to-br from-green-900 to-gray-800 rounded flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Stream Monitor</p>
                </div>
              </div>
            </div>

            {/* Push To Talk Device */}
            <div className="flex justify-end">
              <div className="text-center">
                <div className="w-32 h-24 bg-gray-900 rounded-lg shadow-lg mb-2 flex items-center justify-center">
                  <div className="text-white text-xs">PTT Device</div>
                </div>
                <p className="text-xs text-gray-600">Push To Talk</p>
              </div>
            </div>
          </div>

          {/* Right Side - Live Feed Display */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 p-4">
              <div className="grid grid-cols-2 gap-2 h-full">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-gradient-to-br from-blue-900 to-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
