export default function LiveFeedSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ส่องทีม หนึ่งเดียว
          </h2>
          <p className="text-2xl font-bold text-gray-900">
            ติดตามสด เหมือนอยู่ในเหตุการณ์
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Ambulance Live Feed */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-blue-600 text-white px-6 py-3 font-semibold flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                Ambulance live feed
              </div>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                <div className="grid grid-cols-2 gap-2 h-full">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden group">
                      <svg className="w-16 h-16 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        LIVE
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ถ่ายทอดสด
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ระบบถ่ายทอดสดจากทีม<br />
                รถพยาบาลสึงจากพตรอต้ง<br />
                คนย์ส่งการ ให้คนนตตาม<br />
                สถานการณ์ การรักษาผ่าง<br />
                ให้ล้ดที่ทุกขั้นตอน ส้อสาถรับ<br />
                วานตุนการตนผุ้ปวยได้อตั่งแต่<br />
                พนอจฉจเท้นการเจึจบพร้อม<br />
                พร้อมให้ผบาด้งผุ้ปเด้อย่างที่มนกั่น
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-blue-600 mb-8">
            ทำงานร่วมกับ
          </h3>
          <div className="text-center text-xl font-bold text-gray-900 mb-8">
            อุปกรณ์ที่อยู่บนรถพยาบาล
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bodycam */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-32 bg-gray-800 rounded-lg mx-auto mb-6"></div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Bodycam</h4>
              <p className="text-gray-600 text-sm text-center">
                กล้องจึดติดอว่าน Paramedic<br />
                ถ่ายทอดภาพเหตุการณ์แบบ<br />
                เรียลไทม์ำนคุมทององจง<br />
                ผู้ปฏิด้งานอว่ง เสมือนได้<br />
                ออกแฟนผู้ในรรอนบน
              </p>
            </div>

            {/* Camera */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Camera</h4>
              <p className="text-gray-600 text-sm text-center">
                กล้องจองจงรี้ดติติ้งภายในรถ<br />
                พยาบาล ครอบคตุมทุกมุบอง<br />
                ในรถแบบเรียลไทม์ คนย์ส่งการ<br />
                สามารถติดตามเหตุการณ์ันละ<br />
                ปฏิติ้งานเด็ดเลอดเวลา
              </p>
            </div>

            {/* NVR */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-32 h-20 bg-gray-800 rounded-lg mx-auto mb-6"></div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">NVR</h4>
              <p className="text-gray-600 text-sm text-center">
                ผี่จกล้องจนี้จนุญาบาดส่อจงละ<br />
                เชื่อมภาพสด้งการสพยาบาล<br />
                และ Bodycam ทุกจั้นที่น่อง<br />
                การช่วยชีจีดุดสด่อระไม่ช่อ<br />
                คนย์ส่งการแบบเรียลไทม์
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
