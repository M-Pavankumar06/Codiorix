import ProjectCard from '../components/ProjectCards.jsx';

export default function Portfolio() {
  return (
    <div data-theme="halloween" className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-gradient-to-br from-primary to-secondary rounded-box text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Our Portfolio</h1>
            <p className="py-6">
              Explore our diverse range of projects showcasing innovation, creativity, and technical excellence across various industries.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <ProjectCard/>
        </div>
      </div>
    </div>
  );
}
