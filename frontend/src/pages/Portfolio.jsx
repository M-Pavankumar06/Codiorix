import ProjectCard from '../components/ProjectCards.jsx';

export default function Portfolio() {
  return (
    <div data-theme="halloween" className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[40vh] md:min-h-[50vh] bg-gradient-to-br from-primary to-secondary rounded-box text-primary-content px-4">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold">Our Portfolio</h1>
            <p className="py-4 md:py-6 text-sm md:text-base">
              Explore our diverse range of projects showcasing innovation, creativity, and technical excellence across various industries.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">Featured Projects</h2>
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          <ProjectCard/>
        </div>
      </div>
    </div>
  );
}
