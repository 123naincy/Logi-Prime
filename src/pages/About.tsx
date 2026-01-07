import { Target, Award, Users, TrendingUp, Globe, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on every time.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to the highest standards in warehousing and logistics.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and collaboration.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Leveraging technology to deliver cutting-edge solutions.',
    },
  ];

  const milestones = [
    { year: '2010', event: 'Founded with a single warehouse facility' },
    { year: '2015', event: 'Expanded to 25 locations nationwide' },
    { year: '2018', event: 'Launched advanced WMS platform' },
    { year: '2020', event: 'Achieved 500K sq. ft. storage capacity' },
    { year: '2023', event: 'Serving 200+ satisfied clients' },
  ];

  return (
    <div className="bg-white pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About Logi Prime</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Leading the industry in warehousing, fulfillment, and logistics solutions with a commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Logi Prime emerged from a simple vision: to revolutionize warehouse and logistics services by combining cutting-edge technology with personalized customer care.
                </p>
                <p>
                  What started as a single shared warehousing facility has grown into a comprehensive logistics network spanning over 50 locations nationwide. Our journey has been driven by our commitment to helping businesses of all sizes optimize their supply chains and reduce operational costs.
                </p>
                <p>
                  Today, we serve over 200 clients across various industries, managing millions of square feet of warehouse space and processing thousands of orders daily. Our expertise in shared warehousing, brokerage services, and 3PL solutions has made us a trusted partner for businesses looking to scale efficiently.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Warehouse Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mission"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-10 h-10 text-teal-600" />
                  <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower businesses with world-class warehousing and logistics solutions that drive growth, improve efficiency, and deliver measurable results.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-10 h-10 text-teal-600" />
                  <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the most trusted and innovative logistics partner, setting new standards for excellence in the warehousing industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:border-teal-500 hover:shadow-xl transition-all group"
              >
                <div className="text-teal-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="bg-teal-600 text-white font-bold text-xl px-6 py-3 rounded-lg flex-shrink-0">
                    {milestone.year}
                  </div>
                  <p className="text-gray-700 text-lg pt-2">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-teal-400 mb-2">500K+</div>
                <div className="text-gray-300 text-lg">Square Feet</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-teal-400 mb-2">200+</div>
                <div className="text-gray-300 text-lg">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-teal-400 mb-2">50+</div>
                <div className="text-gray-300 text-lg">Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
