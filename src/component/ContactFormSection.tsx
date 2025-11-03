export default function ContactFormSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            สนใจติดต่อ
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ชื่อผู้ติดต่อ<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ตำแหน่ง<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Paramedic"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  หน่วยงาน
                </label>
                <input
                  type="text"
                  placeholder="E.S.M.Solution Co.,Ltd."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Province */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  จังหวัด<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Bangkok"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  เบอร์โทร<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="TH+66  061 961 5949"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  อีเมล<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="sales(at)esm-solution.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ข้อความ
              </label>
              <textarea
                rows={5}
                placeholder="กรุณาระบุข้อความของคุณ..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
