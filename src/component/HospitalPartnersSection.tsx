export default function HospitalPartnersSection() {
  const hospitals = [
    { name: 'โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย', logo: 'red-cross' },
    { name: 'สมิติเวช', logo: 'samitivej' },
    { name: 'พญาไท', logo: 'phyathai' },
    { name: 'โรงพยาบาลตับบุรี', logo: 'thonburi' }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            ได้รับความไว้วางใจจากโรงพยาบาล
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {hospitals.map((hospital, index) => (
            <div key={index} className="bg-white rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs text-center">{hospital.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
