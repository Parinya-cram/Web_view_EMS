export default function ComingSoonSection() {
  const upcomingFeatures = [
    { id: 1, title: 'AI', gradient: 'from-purple-400 to-pink-500' },
    { id: 2, title: 'Feature 2', gradient: 'from-blue-400 to-cyan-500' },
    { id: 3, title: 'Feature 3', gradient: 'from-green-400 to-teal-500' },
    { id: 4, title: 'Feature 4', gradient: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            coming soon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <div key={feature.id} className="group">
              <div className="aspect-square bg-gray-700 rounded-2xl overflow-hidden relative hover:scale-105 transition-transform duration-300">
                {index === 0 ? (
                  // AI Feature - Special Display
                  <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <span className="text-6xl font-bold text-white">AI</span>
                  </div>
                ) : (
                  // Other Features - Coming Soon
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 text-4xl">?</span>
                  </div>
                )}
                
                {/* Coming Soon Badge */}
                {index !== 0 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">COMING SOON</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
