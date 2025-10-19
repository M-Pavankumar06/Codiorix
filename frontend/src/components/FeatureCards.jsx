const features = [
  {title: "Fast Delivery", desc: "Get your app/web live quickly.", icon:"🚀"},
  {title: "Modern Stack", desc: "React, Node, Tailwind & more.", icon:"🛠️"},
  {title: "Scalable", desc: "Built to scale as you grow.", icon:"📈"}
];
export default function FeatureCards() {
  return (
    <div className="flex flex-wrap gap-4 justify-center my-8 px-4">
      {features.map(f => (
        <div key={f.title} className="card bg-base-200 shadow-xl w-full sm:w-80 md:w-72">
          <div className="card-body text-center">
            <h2 className="card-title text-sm md:text-base justify-center">{f.icon} {f.title}</h2>
            <p className="text-sm md:text-base">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
