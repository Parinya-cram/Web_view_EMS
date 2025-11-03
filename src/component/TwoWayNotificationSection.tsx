export default function TwoWayNotificationSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            Two-Way Parallel Notification
          </h2>
          <p className="text-2xl font-bold text-gray-900">
            ทำงานคู่ขนาน ไม่มีรอยต่อ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto divide-x divide-gray-300">
          {/* Left Side - EMS Team: Phone + Text */}
          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Phone */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl">
                <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                  <div className="aspect-[9/19] bg-gradient-to-br from-blue-100 to-blue-50 p-6">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <div className="text-sm font-semibold text-gray-600 mb-4">EMS-2507-0085</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                          <span className="text-sm">รายละเอียด</span>
                        </div>
                        <div className="flex gap-3">
                          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold">
                            CASE
                          </button>
                          <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-semibold">
                            CALL
                          </button>
                          <button className="flex-1 bg-purple-500 text-white py-2 rounded-lg text-sm font-semibold">
                            MAP
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">EMS Team</h3>
                <p className="text-gray-600 mb-4">
                  ระบบแจ้งเตือน LINE สำหรับ<br />
                  ทีมปฏิบัติการ ส่งข้อมูล<br />
                  เหตุการ์ณที่ล่าคีบุที่ที่จุดเกิดเหตุ<br />
                  ถึงอาการบุนบอ้ ประเนันธิดต่ง<br />
                  พร้อมผู้ปปลิดตจง 3 ฟังชั้น
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">CASE</span>
                    </div>
                    <span className="text-gray-700">
                      กดดูเคส<br />
                      ข้อมูลเคสที่ทำหน้อ
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">CALL</span>
                    </div>
                    <span className="text-gray-700">
                      กดโทร<br />
                      โจรผบูจัแจ้งเหตุ
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">MAP</span>
                    </div>
                    <span className="text-gray-700">
                      กดนำทาง<br />
                      เปิดแล้ฟทาง GPS
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4 italic">
                  " กดง่าย ได้แเลิคเดียว<br />
                  ไม่ต้องเลื่อนตอพิพากร์ต้นคน "
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Bystander: Text + Phone */}
          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bystander</h3>
                <p className="text-gray-600 mb-4">
                  คนที่ที่ศูนย์รับแจ้งเหตุตล้าง<br />
                  เคส ระบบช่งส่ง SMS ไปยอ<br />
                  เบอร์ช่องจังเหตุตุ ไม่ต้อง<br />
                  ผล้านเราเซีวเดอร์ ไม่ต้อง<br />
                  ถาง่นิเคเดอฮท้อย พร้อมผู้ปปลิดต<br />
                  ช่วยเหล้อ 3 ฟังชั้น
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">CASE</span>
                    </div>
                    <span className="text-gray-700">
                      ส่งต้าแหน่ง<br />
                      บิทคุมอนแแนท์
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">CALL</span>
                    </div>
                    <span className="text-gray-700">
                      ถ่ารูม<br />
                      ส่งรุปซ่องประเบิน
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">MAP</span>
                    </div>
                    <span className="text-gray-700">
                      วิดีโอคอล<br />
                      เท็มฟาเซ็อสไกม
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4 italic">
                  " เปิดเลิคเดียว<br />
                  เชื่อนตัอพื่นนครุนกับในแพทย์ "
                </p>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl">
                <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                  <div className="aspect-[9/19] bg-gradient-to-br from-green-100 to-green-50 p-6">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                        <div className="text-sm font-semibold">Emergency</div>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="bg-blue-50 p-2 rounded">EMS Tracking Service กรุณาคลิก...</div>
                        <div className="bg-blue-50 p-2 rounded">EMS Tracking Service กรุณาคลิก...</div>
                        <div className="bg-blue-50 p-2 rounded">EMS Tracking Service กรุณาคลิก...</div>
                      </div>
                    </div>
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
