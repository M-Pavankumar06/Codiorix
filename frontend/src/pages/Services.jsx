export default function Services() {
  return (
    <div data-theme="halloween" className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[30vh] md:min-h-[40vh] bg-gradient-to-br from-primary to-secondary rounded-box px-4">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary-content">Our Services</h1>
            <p className="text-lg md:text-xl text-primary-content">
              Comprehensive digital solutions tailored to elevate your business and engage your audience
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Web Development */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:scale-105 border border-primary">
            <figure className="px-10 pt-10">
              <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Custom Web Development</h2>
              <p>
                We create responsive, scalable, and secure web applications using modern technologies like React, Next.js, and Node.js.
              </p>
              <ul className="list-disc list-inside text-sm opacity-80 mt-2">
                <li>E-commerce platforms</li>
                <li>SaaS applications</li>
                <li>Content management systems</li>
                <li>Progressive web apps (PWA)</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <a href="/portfolio" className="btn btn-primary btn-outline">
                  View Projects
                </a>
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:scale-105 border border-secondary">
            <figure className="px-10 pt-10">
              <svg className="w-24 h-24 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mobile App Development</h2>
              <p>
                Build powerful native and cross-platform mobile applications for iOS and Android with seamless performance.
              </p>
              <ul className="list-disc list-inside text-sm opacity-80 mt-2">
                <li>Native apps</li>
                <li>Native iOS & Android</li>
                <li>Hybrid mobile solutions</li>
                <li>App deployment</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <a href="/portfolio" className="btn btn-secondary btn-outline">
                  View Projects
                </a>
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:scale-105 border border-accent">
            <figure className="px-10 pt-10">
              <svg className="w-24 h-24 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </figure>
            <div className="card-body">
              <h2 className="card-title">UI/UX Design</h2>
              <p>
                Create intuitive and visually stunning interfaces that enhance user experience and drive engagement.
              </p>
              <ul className="list-disc list-inside text-sm opacity-80 mt-2">
                <li>User research & personas</li>
                <li>Wireframing & prototyping</li>
                <li>Visual design systems</li>
                <li>Usability testing</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <a href="/portfolio" className="btn btn-accent btn-outline">
                  View Designs
                </a>
              </div>
            </div>
          </div>

          {/* API & Cloud Integration */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:scale-105 border border-info">
            <figure className="px-10 pt-10">
              <svg className="w-24 h-24 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </figure>
            <div className="card-body">
              <h2 className="card-title">API & Cloud Integration</h2>
              <p>
                Seamlessly integrate third-party services and deploy scalable cloud infrastructure for optimal performance.
              </p>
              <ul className="list-disc list-inside text-sm opacity-80 mt-2">
                <li>RESTful & GraphQL APIs</li>
                <li>AWS, Azure, Google Cloud</li>
                <li>Database optimization</li>
                <li>Microservices architecture</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <a href="/contact" className="btn btn-info btn-outline">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* E-commerce Solutions */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:scale-105 border border-success">
            <figure className="px-10 pt-10">
              <svg className="w-24 h-24 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </figure>
            <div className="card-body">
              <h2 className="card-title">E-commerce Solutions</h2>
              <p>
                Build powerful online stores with secure payment gateways, inventory management, and analytics.
              </p>
              <ul className="list-disc list-inside text-sm opacity-80 mt-2">
                <li>Custom shopping carts</li>
                <li>Payment integration</li>
                <li>Inventory management</li>
                <li>Order tracking systems</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <a href="/contact" className="btn btn-success btn-outline">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Consulting & Support */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 hover:scale-105 border border-warning">
            <figure className="px-10 pt-10">
              <svg className="w-24 h-24 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Technical Consulting</h2>
              <p>
                Expert guidance on technology stack selection, architecture design, and best practices for your project.
              </p>
              <ul className="list-disc list-inside text-sm opacity-80 mt-2">
                <li>Technology assessment</li>
                <li>Code reviews & audits</li>
                <li>Performance optimization</li>
                <li>24/7 support & maintenance</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <a href="/contact" className="btn btn-warning btn-outline">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="divider my-12 md:my-16"></div>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-base md:text-lg opacity-80">A proven methodology to deliver exceptional results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-content">1</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Discovery</h3>
            <p className="opacity-70">Understanding your requirements and goals</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary-content">2</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Design</h3>
            <p className="opacity-70">Creating wireframes and visual designs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent-content">3</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Development</h3>
            <p className="opacity-70">Building robust and scalable solutions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-info rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-info-content">4</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Launch</h3>
            <p className="opacity-70">Deployment and ongoing support</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="hero bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-2xl px-4">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Transform Your Ideas?</h2>
              <p className="mb-6 md:mb-8 text-sm md:text-base">
                Let's discuss how we can help bring your vision to life with innovative technology solutions.
              </p>
              <button className="btn btn-white text-purple-600 hover:bg-white hover:text-purple-700 text-sm md:text-base">Get Started Today</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}