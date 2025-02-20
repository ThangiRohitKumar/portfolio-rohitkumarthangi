
import { motion } from "framer-motion";
import { ChartBar, Database, Code2, Brain } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const skills = [
    { name: "SQL", level: 85, icon: <Database className="w-6 h-6" /> },
    { name: "Data Visualization", level: 80, icon: <ChartBar className="w-6 h-6" /> },
    { name: "Python", level: 75, icon: <Code2 className="w-6 h-6" /> },
    { name: "Machine Learning", level: 70, icon: <Brain className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Developed an interactive dashboard tracking KPIs and sales metrics",
      tags: ["Python", "Tableau", "SQL"],
    },
    {
      title: "Customer Segmentation",
      description: "Implemented clustering algorithms to identify customer segments",
      tags: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      title: "Inventory Optimization",
      description: "Reduced stockout rates by 15% through predictive analytics",
      tags: ["SQL", "Python", "Excel"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-20 mx-auto text-center"
      >
        <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
          Data Analyst
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          John Doe
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-lg text-gray-600">
          Transforming data into actionable insights with 1 year of hands-on experience in data analysis and visualization.
        </p>
      </motion.section>

      {/* Skills Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setIsHovered(project.title)}
              onMouseLeave={() => setIsHovered(null)}
              className="relative p-6 transition-all bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-muted rounded-full text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-xl p-8 mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-center">Get in Touch</h2>
          <div className="space-y-4 text-center">
            <p className="text-gray-600">
              Looking for opportunities to leverage data for impactful business decisions.
            </p>
            <a
              href="mailto:john.doe@example.com"
              className="inline-block px-6 py-3 text-white transition-colors rounded-lg bg-primary hover:bg-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
