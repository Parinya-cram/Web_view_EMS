export default function EmergencyDispatcherSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Emergency Medical Dispatcher
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Dashboard Image */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 p-4">
              <div className="w-full h-full bg-white rounded-lg relative overflow-hidden">
                {/* Map with markers */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-green-50">
                  {/* Simulated map markers */}
                  <div className="absolute top-1/4 left-1/3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="absolute top-2/3 left-2/3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Status badges */}
                <div className="absolute top-4 left-4 right-4 flex gap-2">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    4 Cases
                  </div>
                  <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    3 En Route
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    2 Available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ระบบการรับแจ้งเหตุ
              </h3>
              <p className="text-gray-600 leading-relaxed">
                เรียนต้นทุกเลสุดเดิมด้วยการเป็นที่กอข้อมูลที่ล่าคีบุที่สุด 
                ดังแล้คามาก็เด็ทเหตุ เบอร์โดะผู่แจ้ง เพศ อาย โรคประจำตัว 
                และอาการสำคัญ พร้อมให้ระบนล้งกัดใดยอ่าขุดต้อง 
                และระด้อมข่ายง้านในที่
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ระบบส่งการ
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ระบบส่งการที่ช่วยให้เราห้นถึงมาครบตบเลือกที่เป็ปฏิบัติการ 
                และรถพยาบาล พร้อมแจังเดือนผ่าน LINE Notification 
                โดยชีดแนนด้ได้อย่างรัวตเพ้ว พร้อมระบเงวลล็จด Activate Time แบบชีดัไขบด้ พร้อคิตความพร้อม 
                และความเร็ว ในการตอบสนองจองเดล้ะหน่วยงาน
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ระบบช่วยประเมินอาการคนไข้
              </h3>
              <p className="text-gray-600 leading-relaxed">
                พื่นความแน่นล่ำในการประเมินอาการด้วยการส่ง SMS 
                ให้ผู่แจ้งเหตุ ส่งพีทึงลิบมาที่ศุนย์มอบคุม พร้อมะนผ่าในแหน่ง 
                ที่เกิดเหตุใช้ฉันต่อ พร้อมระบบ Video Call สำหรับระเมิน 
                อาการผู้ปวยแบบคิ้นหน้า (Face-to-Face) ช่วยให้เจางหน้าที่ 
                ในการติ้ตสินใจถึงการช่วยเหล้อ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
