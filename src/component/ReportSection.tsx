export default function ReportSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            สรุปข้อมูลคนไข้ พร้อมส่งต่ออย่างมืออาชีพ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Report Preview */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-3 font-semibold">
              Report
            </div>
            <div className="p-8">
              <div className="aspect-[8.5/11] bg-gray-50 rounded-lg overflow-hidden shadow-inner">
                {/* Report Document Simulation */}
                <div className="h-full overflow-y-auto p-6 space-y-4 text-xs">
                  {/* Header */}
                  <div className="text-center border-b pb-3">
                    <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  </div>

                  {/* Patient Info */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="space-y-1">
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>

                  {/* Vital Signs Table */}
                  <div className="border rounded p-2 space-y-1">
                    <div className="h-2 bg-gray-300 rounded w-1/3 mb-2"></div>
                    {[1, 2, 3].map((row) => (
                      <div key={row} className="grid grid-cols-4 gap-1">
                        {[1, 2, 3, 4].map((col) => (
                          <div key={col} className="h-2 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Treatment Details */}
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((section) => (
                      <div key={section} className="space-y-1">
                        <div className="h-2 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    ))}
                  </div>

                  {/* Signature */}
                  <div className="border-t pt-3 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-8 border-b border-gray-300"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-8 border-b border-gray-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Report Label */}
              <div className="text-center mt-4">
                <p className="text-gray-600 font-semibold">Report ในรูปแบบพร้อมใบนย้าว</p>
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Report
              </h3>
              <p className="text-gray-600 leading-relaxed">
                หลังการทำดอธรณ์อึ สามารถลงมุบข้อมูลฉุกเล้อชอนะเป็น รายงานใหน้ลึตผู้ปเจเทจ<br />
                ส่งทางนเงชื แกตการ และอย่ากีถึงต่งว่างเดา ส่งอขกเคใไมด้อก PDF ได้นที<br />
                จะลิงหนที่พื่จตแนนอกดเลค หรือชื่อมิด้ให้โรงพยาบาลฃสามารถากน้าได้งาน ในได้กิตล<br />
                ของนข้จิ้น
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-8 mt-12">
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
