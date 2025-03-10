import { motion } from "framer-motion";
import { 
  ChartBar, Database, Code2, Brain, BarChart, PieChart, Award, 
  Shield, Lock, Codepen, Table, BookText, Briefcase, Laptop, 
  GraduationCap, MapPin, Phone, Mail, Linkedin, Github
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const skills = [
    { name: "Python", level: 75, icon: <Code2 className="w-6 h-6" /> },
    { name: "SQL", level: 85, icon: <Database className="w-6 h-6" /> },
    { name: "Tableau", level: 90, icon: <BarChart className="w-6 h-6" /> },
    { name: "Power BI", level: 85, icon: <PieChart className="w-6 h-6" /> },
    { name: "Excel", level: 80, icon: <Table className="w-6 h-6" /> },
    { name: "Grafana", level: 75, icon: <ChartBar className="w-6 h-6" /> },
    { name: "Pandas", level: 80, icon: <BookText className="w-6 h-6" /> },
    { name: "NumPy", level: 75, icon: <Code2 className="w-6 h-6" /> },
    { name: "Matplotlib", level: 70, icon: <ChartBar className="w-6 h-6" /> },
    { name: "scikit-learn", level: 70, icon: <Brain className="w-6 h-6" /> },
    { name: "Llama 3", level: 75, icon: <Brain className="w-6 h-6" /> },
    { name: "Lang Chain", level: 70, icon: <Brain className="w-6 h-6" /> },
    { name: "Streamlit", level: 80, icon: <Codepen className="w-6 h-6" /> },
    { name: "Groq", level: 70, icon: <Brain className="w-6 h-6" /> },
    { name: "Active Directory", level: 75, icon: <Shield className="w-6 h-6" /> },
    { name: "LDAP", level: 70, icon: <Lock className="w-6 h-6" /> },
    { name: "ServiceNow", level: 75, icon: <Shield className="w-6 h-6" /> },
    { name: "IAM", level: 80, icon: <Lock className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: "Linkedin Post Generator using Llama 3",
      description: "Developed a LinkedIn Post Generator using Llama 3, Lang Chain, Stream lit, and Groq, enhancing content creation for influencers.",
      tags: ["Llama 3", "Lang Chain", "Streamlit", "Groq"],
    },
    {
      title: "E-commerce Sales Analysis Dashboard",
      description: "Designed and developed a dynamic Excel dashboard to comprehensively analyze e-commerce sales data, utilizing advanced Excel functionalities.",
      tags: ["Excel", "Data Analysis", "Dashboard"],
    },
    {
      title: "Human Resource Dashboard for an IT firm",
      description: "Designed and developed a company HR dashboard utilizing Tableau to visualize key human resources metrics and KPIs.",
      tags: ["Tableau", "HR Analytics", "Dashboard"],
    },
  ];

  const certifications = [
    {
      title: "Power BI - Business Intelligence for Beginners to Advanced",
      issuer: "Udemy",
      date: "2023",
      credential: "Credential ID: UDEMY-PBI-2023-5678",
    }
  ];

  const experiences = [
    {
      company: "Tata Consultancy Services",
      location: "Bangalore",
      position: "Cybersecurity IAM Support Executive",
      duration: "Apr 2024 – June 2025",
      responsibilities: [
        "Managed Identity Management (IDM) and Security Provisioning (SP) for global banks, ensuring secure and efficient access control. Resolved access-related incidents through ServiceNow while monitoring LDAP servers to maintain system integrity.",
        "Handled provisioning and deprovisioning of user access for critical banking applications (CitiDirect, HSBCnet). Ensured compliance with security policies and minimized risks associated with unauthorized access. Collaborated with cross-functional teams to improve identity governance processes and optimize operational security."
      ]
    }
  ];

  const personalProjects = [
    {
      title: "Linkedin Post Generator using Llama 3",
      type: "Individual",
      duration: "Jan 2025 – Feb 2025",
      description: [
        "Developed a LinkedIn Post Generator using Llama 3, Lang Chain, Stream lit, and Groq, enhancing content creation for influencers. Implemented data collection and preprocessing techniques to extract and enrich metadata from influencer posts.",
        "Designed a user-friendly interface with Stream lit, allowing users to generate tailored LinkedIn posts based on selected topics, lengths, and languages. Integrated LLM capabilities for content generation, utilizing prompt engineering and few-shot learning to match influencer writing styles."
      ],
      tags: ["Llama 3", "Lang Chain", "Streamlit", "Groq"]
    },
    {
      title: "E-commerce Sales Analysis Dashboard",
      type: "Individual",
      duration: "Jun 2022 - Sep 2022",
      description: [
        "Designed and developed a dynamic Excel dashboard to comprehensively analyze e-commerce sales data, utilizing advanced Excel functionalities and visualizations to enhance data-driven decision-making.",
        "Implemented interactive features and user-friendly navigation within the dashboard, allowing users to explore key metrics such as sales performance, product trends, customer segmentation, and revenue projections with ease."
      ],
      tags: ["Excel", "Data Analysis", "Dashboard"]
    },
    {
      title: "Human Resource Dashboard for an IT firm",
      type: "Individual",
      duration: "Jun 2021 – Jul 2021",
      description: [
        "Designed and developed a company HR dashboard utilizing Tableau to visualize key human resources metrics and KPIs. Implemented interactive features and drill-down functionality to provide deeper insights into employee performance, retention, and engagement.",
        "Leveraged data blending techniques to integrate multiple data sources for comprehensive analysis. Presented findings to stakeholders to inform strategic HR decision-making and drive organizational effectiveness."
      ],
      tags: ["Tableau", "HR Analytics", "Dashboard"]
    }
  ];

  const education = [
    {
      institution: "SRM University Andhra Pradesh",
      degree: "Bachelor of Technology, Mechanical Engineering",
      duration: "May 2019 - June 2023",
      gpa: "8.49/10.0"
    }
  ];

  const personalInfo = {
    location: "Bangalore, India",
    phone: "+91 9298602702",
    email: "rohitkumarthangi@gmail.com",
    linkedin: "https://www.linkedin.com/in/rohit-kumar-5191381b1/",
    github: "https://github.com/ThangiRohitKumar"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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
          Rohit Kumar Thangi
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-lg text-gray-400">
          Transforming data into actionable insights with experience in data analysis, visualization, and cybersecurity.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
            <Mail size={18} />
            <span>{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
            <Phone size={18} />
            <span>{personalInfo.phone}</span>
          </a>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={18} />
            <span>{personalInfo.location}</span>
          </div>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </motion.section>

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

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-16 mx-auto"
      >
        <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg shadow-lg bg-muted flex items-start gap-4 mb-8"
            >
              <div className="text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{edu.institution}</h3>
                <p className="text-gray-400 mb-1">{edu.degree}</p>
                <p className="text-gray-400 mb-2">{edu.duration}</p>
                <p className="text-sm text-primary">GPA: {edu.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-16 mx-auto"
      >
        <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg shadow-lg bg-muted"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between flex-wrap">
                    <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                    <span className="text-sm text-primary">{exp.duration}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.company}, {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <span className="mr-2 mt-1 text-primary">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-16 mx-auto"
      >
        <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Certifications</h2>
        <div className="grid gap-8 md:grid-cols-1 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg shadow-lg bg-muted flex items-start gap-4"
            >
              <div className="text-primary">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-1">Issuer: {cert.issuer}</p>
                <p className="text-gray-400 mb-2">Issued: {cert.date}</p>
                {cert.credential && <p className="text-sm text-primary">{cert.credential}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-16 mx-auto"
      >
        <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Technical Skills</h2>
        
        <h3 className="mb-6 text-2xl font-semibold text-center text-foreground">Programming Languages</h3>
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {skills.slice(0, 2).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <h3 className="mb-6 text-2xl font-semibold text-center text-foreground">Data Visualization Tools</h3>
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {skills.slice(2, 6).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <h3 className="mb-6 text-2xl font-semibold text-center text-foreground">Data Analysis Libraries</h3>
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {skills.slice(6, 10).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <h3 className="mb-6 text-2xl font-semibold text-center text-foreground">Generative AI Tools</h3>
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {skills.slice(10, 14).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <h3 className="mb-6 text-2xl font-semibold text-center text-foreground">Cybersecurity Tools</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.slice(14, 18).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-16 mx-auto"
      >
        <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setIsHovered(project.title)}
              onMouseLeave={() => setIsHovered(null)}
              className="relative p-6 transition-all rounded-lg shadow-lg bg-muted hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                {project.duration && <span className="text-sm text-primary px-2 py-1 bg-primary/10 rounded-full">{project.duration}</span>}
              </div>
              <p className="text-gray-400 mb-1">Type: {project.type}</p>
              <ul className="mb-4 space-y-2">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="text-gray-400 flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
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
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-16 mx-auto"
      >
        <div className="max-w-xl p-8 mx-auto rounded-lg shadow-lg bg-muted">
          <h2 className="mb-6 text-3xl font-bold text-center text-foreground">Get in Touch</h2>
          <div className="space-y-4 text-center">
            <p className="text-gray-400">
              Looking for opportunities to leverage data for impactful business decisions.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block px-6 py-3 text-white transition-colors rounded-lg bg-primary hover:bg-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
