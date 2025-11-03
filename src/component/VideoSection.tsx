export default function VideoSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            วิดีโอสาร์ต
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
              
              {/* Play Button */}
              <button className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
                <svg className="w-12 h-12 text-blue-600 ml-1 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </button>

              {/* Video Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">SMART EMS Demo Video</h3>
                <p className="text-white/80 text-sm">ดูการทำงานของระบบ SMART EMS</p>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden">
              <div className="w-full h-full p-4">
                <div className="grid grid-cols-3 gap-3 h-full">
                  <div className="col-span-2 bg-white rounded-lg shadow p-3">
                    <div className="h-full bg-gradient-to-br from-purple-100 via-blue-50 to-green-50 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg shadow p-2 h-1/3"></div>
                    <div className="bg-white rounded-lg shadow p-2 h-1/3"></div>
                    <div className="bg-white rounded-lg shadow p-2 h-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
