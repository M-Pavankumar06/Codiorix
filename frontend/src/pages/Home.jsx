// ...existing code...
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
// ...existing code...

export default function Home() {
  return (
    <div data-theme="halloween" className="min-h-screen">
      {/* ...existing code... */}
      <Hero />
      <FeatureCards />

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 w-full">
          <div className="stat">
            <div className="stat-title">Projects</div>
            <div className="stat-value text-primary">10+</div>
            <div className="stat-desc">Delivered on time</div>
          </div>
          <div className="stat">
            <div className="stat-title">Clients</div>
            <div className="stat-value text-secondary">10+</div>
            <div className="stat-desc">Across industries</div>
          </div>
          <div className="stat">
            <div className="stat-title">Uptime</div>
            <div className="stat-value text-accent">99.9%</div>
            <div className="stat-desc">Cloud deployments</div>
          </div>
          <div className="stat">
            <div className="stat-title">Support</div>
            <div className="stat-value text-info">24/7</div>
            <div className="stat-desc">Dedicated team</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">What We Do</h2>
          <p className="opacity-80">End‑to‑end solutions tailored for your business</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-black border border-base-200 hover:shadow-xl transition">
            <div className="card-body">
              <div className="w-12 h-12 rounded-lg bg-primary text-primary-content grid place-items-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 className="card-title">Web Apps</h3>
              <p className="opacity-80">Modern, scalable React/Next.js solutions</p>
              <div className="card-actions justify-end pt-2">
                <a href="/services" className="btn btn-sm btn-primary btn-outline">Learn more</a>
              </div>
            </div>
          </div>

          <div className="card bg-black border border-base-200 hover:shadow-xl transition">
            <div className="card-body">
              <div className="w-12 h-12 rounded-lg bg-secondary text-secondary-content grid place-items-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="card-title">Mobile Apps</h3>
              <p className="opacity-80">Native and cross‑platform experiences</p>
              <div className="card-actions justify-end pt-2">
                <a href="/services" className="btn btn-sm btn-secondary btn-outline">Learn more</a>
              </div>
            </div>
          </div>

          <div className="card bg-black border border-base-200 hover:shadow-xl transition">
            <div className="card-body">
              <div className="w-12 h-12 rounded-lg bg-accent text-accent-content grid place-items-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485" />
                </svg>
              </div>
              <h3 className="card-title">UI/UX Design</h3>
              <p className="opacity-80">Human‑centered, conversion‑driven design</p>
              <div className="card-actions justify-end pt-2">
                <a href="/services" className="btn btn-sm btn-accent btn-outline">Learn more</a>
              </div>
            </div>
          </div>

          <div className="card bg-black border border-base-200 hover:shadow-xl transition">
            <div className="card-body">
              <div className="w-12 h-12 rounded-lg bg-info text-info-content grid place-items-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="card-title">Cloud & DevOps</h3>
              <p className="opacity-80">CI/CD, observability, security</p>
              <div className="card-actions justify-end pt-2">
                <a href="/services" className="btn btn-sm btn-info btn-outline">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-base-200">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Loved by Clients</h2>
            <p className="opacity-80">Real feedback from successful engagements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="rating mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <input key={idx} type="radio" name="rating-1" className="mask mask-star bg-yellow-500" defaultChecked={idx === 4} disabled />
                  ))}
                </div>
                <p className="italic mb-4">"Outstanding speed and quality. Our launch went flawlessly."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white grid place-items-center mr-3 font-semibold">SJ</div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="opacity-70 text-sm">CEO, TechStart</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="rating mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <input key={idx} type="radio" name="rating-2" className="mask mask-star bg-yellow-500" defaultChecked={idx === 4} disabled />
                  ))}
                </div>
                <p className="italic mb-4">"The mobile app drove engagement up 3x within weeks."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white grid place-items-center mr-3 font-semibold">MR</div>
                  <div>
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="opacity-70 text-sm">Founder, GrowthLab</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="rating mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <input key={idx} type="radio" name="rating-3" className="mask mask-star bg-yellow-500" defaultChecked={idx === 4} disabled />
                  ))}
                </div>
                <p className="italic mb-4">"Rock-solid architecture and seamless scaling."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 text-white grid place-items-center mr-3 font-semibold">EC</div>
                  <div>
                    <div className="font-semibold">Emily Chen</div>
                    <div className="opacity-70 text-sm">CTO, InnovateCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">How quickly can you start?</div>
            <div className="collapse-content">
              <p className="opacity-80">We can typically kick off within 5–7 business days after scope alignment.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">Do you provide maintenance?</div>
            <div className="collapse-content">
              <p className="opacity-80">Yes. Flexible SLAs with 24/7 monitoring, incident response, and upgrades.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">What tech stacks do you use?</div>
            <div className="collapse-content">
              <p className="opacity-80">React, Next.js, Node.js, Flutter, Java(Spring), PostgreSQL, MongoDB.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">How do you ensure quality?</div>
            <div className="collapse-content">
              <p className="opacity-80">Automated testing, code reviews, CI/CD, and performance budgets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="hero bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-2xl">
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-2">Ready to build something great?</h3>
              <p className="opacity-90 mb-4">Get a free estimate and a tailored plan for your next project.</p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="btn btn-white text-purple-600 hover:bg-white hover:text-purple-700">Get a Free Quote</a>
                <a href="/services" className="btn btn-white text-purple-600 hover:bg-white hover:text-purple-700">Explore Services</a>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-base-100 text-base-content rounded-xl p-5 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm opacity-70">Years experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-sm opacity-70">Projects delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm opacity-70">Satisfied clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-info">A+</div>
                  <div className="text-sm opacity-70">Quality rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}