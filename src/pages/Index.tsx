
import { motion } from "framer-motion";
import { ChartBar, Database, Code2, Brain, BarChart, PieChart } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const skills = [
    { name: "SQL", level: 85, icon: <Database className="w-6 h-6" /> },
    { name: "Tableau", level: 90, icon: <BarChart className="w-6 h-6" /> },
    { name: "Power BI", level: 85, icon: <PieChart className="w-6 h-6" /> },
    { name: "Data Visualization", level: 80, icon: <ChartBar className="w-6 h-6" /> },
    { name: "Python", level: 75, icon: <Code2 className="w-6 h-6" /> },
    { name: "Machine Learning", level: 70, icon: <Brain className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Developed an interactive dashboard tracking KPIs and sales metrics using Tableau, resulting in 25% faster decision-making",
      tags: ["Tableau", "SQL", "Excel"],
    },
    {
      title: "Customer Segmentation",
      description: "Implemented clustering algorithms to identify customer segments, leading to 20% increase in marketing ROI",
      tags: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      title: "Inventory Optimization",
      description: "Reduced stockout rates by 15% through predictive analytics and automated reporting",
      tags: ["SQL", "Python", "Excel"],
    },
    {
      title: "Executive KPI Dashboard",
      description: "Created Power BI dashboard for C-level executives, consolidating data from multiple sources for strategic planning",
      tags: ["Power BI", "DAX", "SQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-20 mx-auto text-center"
      >
        <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary">
          Data Analyst
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
          John Doe
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-lg text-gray-400">
          Transforming data into actionable insights with 1 year of hands-on experience in data analysis and visualization.
        </p>
      </motion.section>

      {/* Career Objective Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container px-4 py-12 mx-auto"
      >
        <div className="max-w-3xl mx-auto p-8 rounded-lg bg-muted">
          <h2 className="text-2xl font-bold mb-4 text-foreground text-center">Career Objective</h2>
          <p className="text-gray-400 leading-relaxed text-center">
            Dedicated data analyst with a strong foundation in business intelligence tools and statistical analysis. 
            Seeking to leverage my expertise in data visualization and analytics to drive data-informed decision-making 
            in a dynamic organization. Committed to continuous learning and staying current with emerging technologies 
            in the field of data science and analytics.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg shadow-lg bg-muted"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
              </div>
              <div className="w-full h-2 bg-background rounded-full">
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
        <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setIsHovered(project.title)}
              onMouseLeave={() => setIsHovered(null)}
              className="relative p-6 transition-all rounded-lg shadow-lg bg-muted hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-background text-primary"
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
        <div className="max-w-xl p-8 mx-auto rounded-lg shadow-lg bg-muted">
          <h2 className="mb-6 text-3xl font-bold text-center text-foreground">Get in Touch</h2>
          <div className="space-y-4 text-center">
            <p className="text-gray-400">
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
