export default function About() {
  return (
    <div data-theme="halloween" className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-gradient-to-br from-primary to-secondary rounded-box text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Codiorix</h1>
            <p className="py-6">
              We transform innovative ideas into exceptional digital products that drive business growth and deliver outstanding user experiences.
            </p>
          </div>
        </div>
      </div>

      

      <div className="container mx-auto px-4 py-16">

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20  p-8 rounded-lg">
          <div className="card bg-base-100 shadow-xl hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="card-body bg-black rounded-xl p-8">
              <h2 className="card-title">Our Mission</h2>
              <p>
                At Codiorix, we're dedicated to empowering businesses through cutting-edge technology solutions.
                We believe that great software should be intuitive, scalable, and transformative.
              </p>
              <ul className="list-disc list-inside">
                <li>Innovation-driven development</li>
                <li>Client-focused solutions</li>
                <li>Long-term partnerships</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border-l-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <div className="card-body">
                  <h3 className="card-title text-blue-700">Web Development</h3>
                  <p className="text-blue-600">Modern, responsive web applications</p>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-green-50 to-green-100 shadow-lg border-l-4 border-green-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <div className="card-body">
                  <h3 className="card-title text-green-700">Mobile Apps</h3>
                  <p className="text-green-600">Native and cross-platform solutions</p>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg border-l-4 border-purple-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <div className="card-body">
                  <h3 className="card-title text-purple-700">UI/UX Design</h3>
                  <p className="text-purple-600">User-centered design experiences</p>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg border-l-4 border-orange-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <div className="card-body">
                  <h3 className="card-title text-orange-700">Cloud Solutions</h3>
                  <p className="text-orange-600">Scalable cloud infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
      <div className="stats stats-vertical lg:stats-horizontal lg:justify-between shadow mb-20 w-full bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
        <div className="stat">
          <div className="stat-figure text-blue-600">
            <svg className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title text-blue-600">Projects Completed</div>
          <div className="stat-value text-blue-600">10+</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-green-600">
            <svg className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title text-green-600">Happy Clients</div>
          <div className="stat-value text-green-600">10+</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-purple-600">
            <svg className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
            </svg>
          </div>
          <div className="stat-title text-purple-600">Years Experience</div>
          <div className="stat-value text-purple-600">5+</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-orange-600">
            <svg className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
            </svg>
          </div>
          <div className="stat-title text-orange-600">Support</div>
          <div className="stat-value text-orange-600">24/7</div>
        </div>
      </div>

        {/* Customer Reviews */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl border-l-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body">
                <div className="rating mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <input key={i} type="radio" name="rating-1" className="mask mask-star" defaultChecked={i === 4} />
                  ))}
                </div>
                <p className="italic text-blue-600 mb-4">"Codiorix exceeded our expectations with their innovative approach and attention to detail. The web application they developed transformed our business operations completely."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white grid place-items-center mr-3 font-semibold">SJ</div>
                  <div>
                    <div className="font-semibold text-blue-700">Sarah Johnson</div>
                    <div className="text-sm opacity-70 text-blue-500">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-green-50 to-green-100 shadow-xl border-l-4 border-green-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body">
                <div className="rating mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <input key={i} type="radio" name="rating-2" className="mask mask-star" defaultChecked={i === 4} />
                  ))}
                </div>
                <p className="italic text-green-600 mb-4">"Professional, reliable, and incredibly skilled. The mobile app they created for us has received fantastic feedback from our customers. Highly recommended!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white grid place-items-center mr-3 font-semibold">MR</div>
                  <div>
                    <div className="font-semibold text-green-700">Michael Rodriguez</div>
                    <div className="text-sm opacity-70 text-green-500">Founder, GrowthLab</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl border-l-4 border-purple-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body">
                <div className="rating mb-4">
                  {[...Array(5)].map((_, i) => (
                    <input key={i} type="radio" name="rating-3" className="mask mask-star text-yellow-500" defaultChecked={i === 4} />
                  ))}
                </div>
                <p className="italic text-purple-600 mb-4">"Working with Codiorix was a game-changer for our startup. They delivered a robust platform that scales with our growing user base. Exceptional work!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 text-white grid place-items-center mr-3 font-semibold">EC</div>
                  <div>
                    <div className="font-semibold text-purple-700">Emily Chen</div>
                    <div className="text-sm opacity-70 text-purple-500">CTO, InnovateCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="hero bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-2xl">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ideas?</h2>
              <p className="mb-8">
                Let's discuss how we can help bring your vision to life with innovative technology solutions.
              </p>
              <button className="btn btn-white text-purple-600 hover:bg-white hover:text-purple-700">Get Started Today</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}