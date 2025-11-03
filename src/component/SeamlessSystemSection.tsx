export default function SeamlessSystemSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seamless System
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold">เชื่อมหลังของความช่วยเหลือที่รวดเร็ว</span> ไม่ต้นเสร่งพยาบาลที่แสนง่า แต่คือระบบข้อฉายะ<br />
            ที่เชื่อมโยงทุกช่วงานเข้าด้วยกัน จากศูนย์รับเฉังเหตุ 1669 ถึงที่นภูมีที และโรงพยาบาลปลายทาง<br />
            Smart EMS ทำให้ทุกข้อมูลสุดถึงต่อกันที่ เพราะว่านที่เดียว...อาจเป็นว่านที่แฝงความหวัง
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Device */}
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <div className="aspect-[3/4] bg-white p-4">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Center Device - Main Display */}
          <div className="transform scale-110 hover:scale-115 transition-transform duration-300 z-10">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <div className="aspect-video bg-white p-4">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-green-50 rounded-lg relative overflow-hidden">
                  {/* Map Background */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <circle cx="200" cy="150" r="80" fill="#e0e0e0"/>
                      <circle cx="200" cy="150" r="60" fill="#b0b0b0"/>
                      <circle cx="200" cy="150" r="40" fill="#808080"/>
                    </svg>
                  </div>
                  
                  {/* Location Markers */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  
                  {/* Ambulance Icon */}
                  <div className="absolute top-1/4 left-1/4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="h-8 bg-gray-800"></div>
            </div>
          </div>

          {/* Right Device */}
          <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <div className="aspect-[3/4] bg-white p-4">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {['Request', 'Commander', 'Pre-Arrival', 'Management', 'EMR', 'Discharge'].map((tab, index) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            สร้างผลสุขเจเนเนตไม่ผิดสิ้น
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            ระบบช่างยอนและลิฐงการแบบเรียลไทม์ พร้อมแจังเดือนที่มาครบนคุมผ่าน LINE Notification 
            โดยชีดัแบนด์ แล ดอฟผิดดุจเด็ทเดทเ ค้อให้ผบาด้วยผุ้ปเด้อย่างตูวดเว่ แบอข้น
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            เสริบด้วยระบบส่ง SMS ไม่ช่องนเฉ่องเหตุ พร้อมส่ง Location กลับมาที่ศุนย์มอบคุณ และระบบ Video Call 
            สำหรับการประเมินอาการแบบ Face-to-Face เปลื่อมอาการประเมินแบบตาเดา สู่การวิเดอซีที่แม่นย่างาเดิน
          </p>
        </div>
      </div>
    </div>
  );
}
