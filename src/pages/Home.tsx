import { ArrowRight, Warehouse, Package, TrendingUp, Shield, Clock, Users, CheckCircle } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: 'Shared Warehousing',
      description: 'Flexible storage solutions with shared space options to optimize costs while maintaining quality.',
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Brokerage Services',
      description: 'Expert freight brokerage connecting you with reliable carriers for seamless transportation.',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: '3PL Solutions',
      description: 'Comprehensive third-party logistics services to streamline your supply chain operations.',
    },
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: 'Secure Storage' },
    { icon: <Clock className="w-6 h-6" />, text: '24/7 Operations' },
    { icon: <Users className="w-6 h-6" />, text: 'Expert Team' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Quality Assured' },
  ];

  const stats = [
    { value: '500K+', label: 'Sq. Ft. Storage' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Warehouse Locations' },
    { value: '99.8%', label: 'Accuracy Rate' },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Trusted
                <span className="text-teal-600"> Logistics Partner</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                End-to-end warehousing, fulfillment, and distribution solutions designed to scale your business efficiently.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Started
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-teal-600"
                >
                  Our Services
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="text-teal-600 mb-2">{feature.icon}</div>
                    <span className="text-xs text-gray-600 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Warehouse"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive warehousing and logistics solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-teal-500 hover:shadow-xl transition-all group"
              >
                <div className="text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Logi Prime?</h2>
              <ul className="space-y-4">
                {[
                  'State-of-the-art warehouse facilities',
                  'Advanced inventory management systems',
                  'Nationwide distribution network',
                  'Flexible storage solutions',
                  'Real-time tracking and reporting',
                  'Dedicated account management',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-teal-200 flex-shrink-0" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Warehouse Operations"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Logistics?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help streamline your supply chain and reduce costs
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-teal-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Contact Us Today <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
