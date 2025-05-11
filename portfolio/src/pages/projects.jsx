export default function Projects() {
    const projects = [
      { title: "Project One", desc: "Description of the first project." },
      { title: "Project Two", desc: "Description of the second project." },
      { title: "Project Three", desc: "Description of the third project." },
    ];
  
    return (
      <div className="p-6 font-fira">
        <h2 className="text-3xl font-blosta mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="border p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }