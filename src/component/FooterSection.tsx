export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">EMR-LIFE</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">SCOPE-LIFE</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">PCM-LIFE</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-3 text-blue-100">
              <div>
                <p className="font-semibold text-white mb-1">Tel</p>
                <p>098 169 2641, 061 961 5949</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">E-mail</p>
                <p>sales@esm-solution.com</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-6">Address</h3>
            <div className="text-blue-100">
              <p className="font-semibold text-white mb-2">E.S.M.Solution Co., Ltd.</p>
              <p>942/88 Charn Issara Tower 1, 3FL ,</p>
              <p>Rama IV Road, Suriyawongse, Bangrak,</p>
              <p>Bangkok 10500</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-700">
          <div className="text-center text-blue-200">
            <p>© 2025 — E.S.M.Solution Co.,Ltd.. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
