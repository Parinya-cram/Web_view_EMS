export default function PreArrivalSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pre-Arrival
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Dashboard */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-blue-600 text-white px-6 py-3 font-semibold">
              Pre-arrival Instruction
            </div>
            <div className="bg-white p-6 space-y-4">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pre-Arrival ที่ตรงเจเนต้จากคำถาม
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ด้วยยดุดคำถามตาม CBD Code ระบบช่อยช่วยเท่านที่ถามตรง<br />
                อาการสำคัญของผู้ปวย สดความผผลพลาด<br />
                พื่นความเร้ว ในการต้ดสอนต้อ ส่งช่อยผู้ลดตอนต่อแต่ดิ้นมาถ
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                พร้อมคำแนะนำเป็นนาตรฐาน
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ระบบแนะนำการบนุมพยาบาลชีดัแบนด้ ผล้งเลือกอาการตาม<br />
                CBD Code ระบบจะแล้คคำแนะนำการบนุมพยาบาลตีกที<br />
                เพราะตู่เตือนตต่อผุ้ใช้แบบด้จัต่อ แต้เป็นต้งต์อนบุยต่ชีวิต
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
