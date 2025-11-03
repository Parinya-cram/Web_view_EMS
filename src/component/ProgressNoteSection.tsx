export default function ProgressNoteSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ไม่ใช้แค่ระบบ แต่คือ<span className="text-blue-600">พาร์ตเนอร์</span>ของทีมฉุกเฉิน
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-2xl font-bold text-gray-900">Progress Note</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Dashboard Preview */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      P
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">EMS-2507-0041</div>
                      <div className="text-xs text-gray-500">Active Case</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">Fr 18/7/2025 16:27:47</div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-3">
                  {[
                    { time: '16:27', event: 'ออกจากฐาน', status: 'complete' },
                    { time: '16:35', event: 'ถึงจุดเกิดเหตุ', status: 'complete' },
                    { time: '16:42', event: 'ออกจากที่เกิดเหตุ', status: 'complete' },
                    { time: '16:55', event: 'ถึงโรงพยาบาล', status: 'active' },
                    { time: '--:--', event: 'กลับฐาน', status: 'pending' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-16 px-2 py-1 rounded text-xs font-semibold text-center ${
                        item.status === 'complete' ? 'bg-green-100 text-green-700' :
                        item.status === 'active' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <div className={`h-2 rounded-full ${
                          item.status === 'complete' ? 'bg-green-400' :
                          item.status === 'active' ? 'bg-blue-400' :
                          'bg-gray-200'
                        }`}></div>
                      </div>
                      <div className={`text-sm ${
                        item.status === 'pending' ? 'text-gray-400' : 'text-gray-700'
                      }`}>
                        {item.event}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                    Priority: High
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    En Route
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    EMS Active
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Description */}
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Management — จัดการหลักฉุกเฉินครบ จบในหน้าจองเดียว
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  หน้าสำคัญที่ช่วยให้ที่แพทย์ทั้และคนย์ข้อมูลการแพทย์ได้อย่างมีประสิทธิภาพ โดยประกอบด้วย 4 ส่วนหลัก
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    number: '1',
                    color: 'blue',
                    title: 'Progress Note',
                    description: 'จดบันทึกเหตุการณ์ และสิ่งที่เกิดขึ้นแบบ Real-time'
                  },
                  {
                    number: '2',
                    color: 'green',
                    title: 'Summary',
                    description: 'สรุปข้อมูลผู้ป่วย ประวัติการรักษา และอาการสำคัญ'
                  },
                  {
                    number: '3',
                    color: 'purple',
                    title: 'Flowsheet',
                    description: 'บันทึกค่าสัญญาณชีพ ยา และการรักษาแบบต่อเนื่อง'
                  },
                  {
                    number: '4',
                    color: 'orange',
                    title: 'CPR record',
                    description: 'บันทึกการทำ CPR แบบละเอียด ครบถ้วน ตามมาตรฐาน'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className={`w-8 h-8 bg-${item.color}-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {item.number}
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {[0, 1, 2, 3, 4, 5].map((dot, index) => (
            <button
              key={dot}
              className={`transition-all duration-300 rounded-full ${
                index === 3
                  ? 'w-8 h-3 bg-blue-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
