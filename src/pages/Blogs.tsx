import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blogs() {
  const blogs = [
    {
      title: '5 Ways to Optimize Your Warehouse Operations',
      excerpt: 'Discover proven strategies to improve efficiency and reduce costs in your warehouse operations.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Operations',
    },
    {
      title: 'The Future of 3PL: Technology Trends to Watch',
      excerpt: 'Explore the latest technological innovations transforming third-party logistics services.',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology',
    },
    {
      title: 'Shared Warehousing: A Cost-Effective Solution',
      excerpt: 'Learn how shared warehousing can help your business save money while maintaining quality.',
      author: 'Emily Rodriguez',
      date: 'March 5, 2024',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Business',
    },
    {
      title: 'Best Practices for Inventory Management',
      excerpt: 'Essential tips for maintaining accurate inventory and preventing stockouts.',
      author: 'David Park',
      date: 'February 28, 2024',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Operations',
    },
    {
      title: 'Supply Chain Resilience in Uncertain Times',
      excerpt: 'Build a robust supply chain strategy to weather market disruptions and challenges.',
      author: 'Lisa Thompson',
      date: 'February 22, 2024',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Strategy',
    },
    {
      title: 'How to Choose the Right 3PL Partner',
      excerpt: 'Key factors to consider when selecting a third-party logistics provider for your business.',
      author: 'James Wilson',
      date: 'February 15, 2024',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Business',
    },
  ];

  const categories = ['All', 'Operations', 'Technology', 'Business', 'Strategy'];

  return (
    <div className="bg-white pt-20">
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Insights, tips, and industry news from logistics experts
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-teal-600 text-teal-600 font-semibold hover:bg-teal-600 hover:text-white transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-teal-500 hover:shadow-xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <button className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights and updates delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
