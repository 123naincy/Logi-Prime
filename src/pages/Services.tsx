import { Warehouse, Package, TrendingUp, Truck, BarChart3, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}
export default function Services({ onNavigate }: ServicesProps) {
  const mainServices = [
    {
      icon: <Warehouse className="w-16 h-16" />,
      title: 'Shared Warehousing',
      description: 'Flexible shared warehouse space solutions that scale with your business needs.',
      features: [
        'Cost-effective storage solutions',
        'Flexible space allocation',
        'Short and long-term options',
        'Secure 24/7 monitoring',
        'Climate-controlled facilities',
        'Scalable capacity',
      ],
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Truck className="w-16 h-16" />,
      title: 'Brokerage Services',
      description: 'Expert freight brokerage connecting you with reliable carriers nationwide.',
      features: [
        'Carrier network access',
        'Rate negotiation',
        'Route optimization',
        'Load tracking',
        'Documentation handling',
        'Freight insurance',
      ],
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: '3PL Solutions',
      description: 'Comprehensive third-party logistics services for end-to-end supply chain management.',
      features: [
        'Inventory management',
        'Order fulfillment',
        'Distribution services',
        'Returns processing',
        'Custom packaging',
        'Technology integration',
      ],
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const additionalServices = [
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Order Fulfillment',
      description: 'Fast, accurate order processing and shipping to delight your customers.',
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and management with advanced WMS.',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Quality Control',
      description: 'Rigorous quality checks to ensure product integrity and customer satisfaction.',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Same-Day Distribution',
      description: 'Expedited distribution services for time-sensitive deliveries.',
    },
  ];

  const processFlow = [
    { step: '01', title: 'Consultation', description: 'Understand your unique logistics requirements' },
    { step: '02', title: 'Planning', description: 'Design customized warehousing and distribution solutions' },
    { step: '03', title: 'Implementation', description: 'Seamless onboarding and system integration' },
    { step: '04', title: 'Operations', description: 'Efficient daily operations and inventory management' },
    { step: '05', title: 'Optimization', description: 'Continuous improvement and performance monitoring' },
  ];

  return (
    <div className="bg-white pt-20">
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Comprehensive warehousing and logistics solutions designed to streamline your supply chain and drive business growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-teal-600 mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all inline-flex items-center gap-2"
                  >
                    Get a Quote <ArrowRight size={20} />
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-2xl hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supporting services to complete your logistics solution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all border-2 border-gray-100 hover:border-teal-500 group"
              >
                <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process Flow</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional logistics services
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {processFlow.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-600 text-white text-3xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                {index < processFlow.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-teal-600/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Streamline Your Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our experts design a custom logistics solution tailored to your business needs
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-teal-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Schedule a Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
