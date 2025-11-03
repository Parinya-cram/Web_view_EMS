export default function VideoShowcaseSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            เริ่มปฏิบัติงาน
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            ด้วยระบบ SMART EMS
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center relative overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="EMS Operation Video" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                เมื่อได้รับแจ้งเหตุ ไม่ว่าจะผ่า
              </h4>
              <p className="text-gray-600">
                ศูนย์โอระว่าน ศูนย์ย้นเรกกร<br />
                หรือรับแจ้งโดยตรง
              </p>
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center relative overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="SMS Notification" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-900 bg-opacity-20 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                ส่งการหมื้นนน
              </h4>
              <p className="text-gray-600">
                SMS ถึงหมายา<br />
                ประเมินสถานน
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {[0, 1, 2, 3, 4, 5].map((dot, index) => (
            <button
              key={dot}
              className={`transition-all duration-300 rounded-full ${
                index === 0
                  ? 'w-8 h-3 bg-blue-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Play Button */}
        <div className="flex justify-center mt-8">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
            <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
