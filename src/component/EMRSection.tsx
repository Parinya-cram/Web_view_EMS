export default function EMRSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            EMR
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - EMR Form Preview */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="bg-white rounded-xl shadow-lg aspect-[3/4] overflow-hidden">
              <div className="h-full overflow-y-auto p-6 space-y-4">
                {/* Form sections simulation */}
                {[1, 2, 3, 4, 5, 6].map((section) => (
                  <div key={section} className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-8 bg-gray-100 rounded"></div>
                      <div className="h-8 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart EMS Protocol
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ระบบบ Template รจงจดโรคลกเดิมล่าคีม เช่น STEMI,<br />
                Stroke, Trauma, CPR และ Sepsis เป็นแบบพร้อม<br />
                บาตรฐานสากล พร้อมใช้งานได้ทันที
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                โปรโตคอลปรับได้ตามองค์กร
              </h3>
              <p className="text-gray-600 leading-relaxed">
                นอกจากนี้ Protocol Template มาตรฐานแล้ว ระบบยัง<br />
                รจงจบการปรับแก้ที่ผี่ดรจง ตามแนวทางข้องแต่ละโรงพยาบาล<br />
                ได้อย่างคิดตคุม
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ติดตาม KPI ทบวงเคลได้ทุกเวลา
              </h3>
              <p className="text-gray-600 leading-relaxed">
                นับทุกทุกขั้นตอนการรักษาอย่างเป็นระบบ ช่วยให้หน่วยงาน<br />
                สามารถติดตาม KPI วิเคราะห์การปฏิบัติงาน และนวนเคลได้อทุกเลิน<br />
                ข้อมูลล้อใช้ทุกเนื้อ พร้อมทระต้บคุมความงานอช่อนต่อเนื้อง
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
