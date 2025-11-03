export default function PushToTalkSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ผู้ช่วยสำคัญของ EMT
          </h2>
          <p className="text-xl text-gray-600">
            จากเสียงผ่านวิทยุสู่ระบบที่บันทึกเวลาและเลขไมล์แบบแม่นย่า
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - PTT Device Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 relative">
                {/* PTT Device Mockup */}
                <div className="aspect-square max-w-md mx-auto bg-gray-900 rounded-xl shadow-inner flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"/>
                      </svg>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <div className="w-12 h-12 bg-blue-400 rounded-lg"></div>
                      <div className="w-12 h-12 bg-green-400 rounded-lg"></div>
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg"></div>
                      <div className="w-12 h-12 bg-cyan-400 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                
                {/* Microphone Handle */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-32 bg-gray-900 rounded-r-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Label */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl font-bold">
              Push To Talk (PTT)
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Push To Talk (PTT)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                เครื่องมือสำคัญ Push to talk บทความช่วยส่งต่อสาร<br />
                ช่วยให้น้วยระบนบซิมนี้ แลดอ GPS นำทาง และสามารถตาด<br />
                แจังลิตานมะผ่านโปรแกรม ให้การบันทึกเวลาและเลขไมล์<br />
                ในทุกช่วงอมปฏิบัติการ เป็น Real-time ในะบนโดยฉัดัไบนด้
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">GPS</h4>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Push Log</h4>
              </div>
            </div>

            <p className="text-center text-gray-600 italic">
              " ล็อคร นำทาง บันทึก พร้อมกันในเครื่องเดียว "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
