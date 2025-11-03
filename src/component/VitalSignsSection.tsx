export default function VitalSignsSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Stream Vital sign & ECG
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Monitor Display */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 p-6">
              {/* Vital Signs Display */}
              <div className="bg-gray-900 rounded-xl p-4 h-full">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Heart Rate */}
                  <div className="bg-red-900/30 rounded-lg p-3 text-center">
                    <div className="text-red-400 text-xs mb-1">HR</div>
                    <div className="text-red-400 text-2xl font-bold">85</div>
                    <div className="text-red-400/60 text-xs">bpm</div>
                  </div>
                  {/* SpO2 */}
                  <div className="bg-blue-900/30 rounded-lg p-3 text-center">
                    <div className="text-blue-400 text-xs mb-1">SpO2</div>
                    <div className="text-blue-400 text-2xl font-bold">98</div>
                    <div className="text-blue-400/60 text-xs">%</div>
                  </div>
                  {/* BP */}
                  <div className="bg-green-900/30 rounded-lg p-3 text-center">
                    <div className="text-green-400 text-xs mb-1">BP</div>
                    <div className="text-green-400 text-xl font-bold">120/80</div>
                    <div className="text-green-400/60 text-xs">mmHg</div>
                  </div>
                </div>

                {/* ECG Waveform */}
                <div className="bg-black/50 rounded-lg p-4 h-40 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 100">
                    <polyline
                      points="0,50 40,50 45,30 50,70 55,50 80,50 85,30 90,70 95,50 120,50 125,30 130,70 135,50 160,50 165,30 170,70 175,50 200,50 205,30 210,70 215,50 240,50 245,30 250,70 255,50 280,50 285,30 290,70 295,50 320,50 325,30 330,70 335,50 360,50 365,30 370,70 375,50 400,50"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute bottom-2 right-2 text-green-400 text-xs">ECG</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ส่งต่อสัญญาณชีพ
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ส่งสัญญาณคีบทั้และเคลียเต็ตี้วใจ<br />
                แบบเรียลไทม์ จากน้านชาม<br />
                สคุนย์ส่งการ
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                ช่วยให้พนหอผู้มเรียงาน<br />
                สามารถประเมินอาการและวัพ<br />
                คำปรึกาได้แนษที่ผี่ข่องั้น<br />
                ล้อนี้นอนมการลีกัตบต่อ<br />
                พื่นโอกาส์การชีทากผู้ปวย<br />
                วิกฤตได้อย่างทันที่นอพที่<br />
                ประสิทธิภาพ
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Cards */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-blue-600 mb-8">
            ทำงานร่วมกับ
          </h3>
          <div className="text-center text-xl font-bold text-gray-900 mb-8">
            อุปกรณ์ที่จำเป็น
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SMART EMS */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <div className="font-bold">SMART</div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">SMART EMS</h4>
              <p className="text-gray-600 text-sm">
                ระบบตั้วกลางข้องจงละ<br />
                ที่เชื่อมตื้อกระบบ EMS<br />
                เท่าด้วยทีกข้องล่องอต่อ<br />
                พื่นนระสิทธิพทากน้าม<br />
                ล้ดความเข่าม่อน
              </p>
            </div>

            {/* Monitor */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-32 h-24 bg-gray-800 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Monitor</h4>
              <p className="text-gray-600 text-sm">
                พร้อมรจงจดึและเคลียวได้<br />
                คนุบลจดเกจบการแพทย์<br />
                ที่ึจงงนผู้ไปรพยาบาลได้<br />
                คลากาลทฤษิดี และผี่จง่อง<br />
                ประสิทธิภาพ
              </p>
            </div>

            {/* AI Capture - Coming Soon */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center relative">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                COMING SOON
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">?</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">AI Capture</h4>
              <p className="text-gray-600 text-sm">
                ทำงานร่วมกับ Bodycam<br />
                พร้อช่องหนองจดุกรณ<br />
                การแพทย์ได้อตร้ง และดึง<br />
                ข้อมูลผู้ปวยแบบอัตโนมัติ<br />
                <strong>Coming soon</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
