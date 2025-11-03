export default function ProductPackageSection() {
  const packages = [
    {
      name: 'STL',
      code: 'EMS-10STL',
      color: 'from-cyan-400 to-blue-500',
      features: [
        'การติดตามรถพยาบาล',
        'การเข้าถึงตามพลิดจาก บมรถพยาบาล',
        'การเปับก็ดวัดโดยอดการ บมรถพยาบาล',
        'การล้อสาร 2 ทาง ระหว่างคนุส้งการกับ รถพยาบาล'
      ]
    },
    {
      name: 'BLS',
      code: 'EMS-11BLS',
      color: 'from-blue-500 to-blue-600',
      features: [
        'รวมทุกอย่างในแพ็คเกจ EMS-10STL',
        'การส่ง SMS ผู้แจ้งเหตุ พร้อมนู้พทึดที่เกิดเหตุ และการวิดีโอคอลประเมิน ตามสามารถนี้และอาการ คนไข้',
        'แจังเวลาและเลขไมล์',
        'ต้าไปนที่ผ่าม PTT',
        'การ Pre-arrival ตาม CBD Code',
        'การลงข้อมูลการรักษาแบบ ระดับเบื้ดิน เช่น Primary survey, Secondary survey',
        'การส่งจองการายงานเคส แบบยี้จังเดิน'
      ]
    },
    {
      name: 'ALS',
      code: 'EMS-12ALS',
      color: 'from-blue-600 to-cyan-400',
      features: [
        'รวมทุกอย่างในแพ็คเกจ EMS-11BLS',
        'การลงข้อมูลการรักษาแบบ ยื่นสูตุล เช่น Primary survey, Secondary survey, Medication, Treatment รวมถึงการ บันทึก Custom EMR',
        'สามารถลงข้อมูลทะบออค ปฏิบัติการเฉดได้ โดยไม่ต้องพิงคนย์ส่งการ',
        'การเชื่อนต่อการ Monitor สามารถถ่ายทอดสดล้อ สัญญาณณ V/S & ECG แบบเรียลไทม์',
        'สามารถ Video Consult Medical director',
        'การส่งจองการายงานเคส แบบสูตุล'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Product Package
          </h2>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Header */}
              <div className={`bg-gradient-to-r ${pkg.color} p-8 text-center`}>
                <h3 className="text-5xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-white font-semibold">{pkg.code}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-4">ฟีเจอร์</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Product Sheet .pdf
          </button>
        </div>
      </div>
    </div>
  );
}
