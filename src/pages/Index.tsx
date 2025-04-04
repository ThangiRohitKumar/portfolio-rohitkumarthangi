import { motion } from "framer-motion";
import { 
  ChartBar, Database, Code2, Brain, BarChart, PieChart, Award, 
  Shield, Lock, Codepen, Table, BookText, Briefcase, Laptop, 
  GraduationCap, MapPin, Phone, Mail, Linkedin, Github
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState("programming");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const skills = [
    { name: "Python", level: 75, icon: <Code2 className="w-6 h-6" />, category: "programming" },
    { name: "SQL", level: 85, icon: <Database className="w-6 h-6" />, category: "programming" },
    { name: "Tableau", level: 90, icon: <BarChart className="w-6 h-6" />, category: "visualization" },
    { name: "Power BI", level: 85, icon: <PieChart className="w-6 h-6" />, category: "visualization" },
    { name: "Excel", level: 80, icon: <Table className="w-6 h-6" />, category: "visualization" },
    { name: "Grafana", level: 75, icon: <ChartBar className="w-6 h-6" />, category: "visualization" },
    { name: "Pandas", level: 80, icon: <BookText className="w-6 h-6" />, category: "analysis" },
    { name: "NumPy", level: 75, icon: <Code2 className="w-6 h-6" />, category: "analysis" },
    { name: "Matplotlib", level: 70, icon: <ChartBar className="w-6 h-6" />, category: "analysis" },
    { name: "scikit-learn", level: 70, icon: <Brain className="w-6 h-6" />, category: "ai" },
    { name: "Llama 3", level: 75, icon: <Brain className="w-6 h-6" />, category: "ai" },
    { name: "Lang Chain", level: 70, icon: <Brain className="w-6 h-6" />, category: "ai" },
    { name: "Streamlit", level: 80, icon: <Codepen className="w-6 h-6" />, category: "ai" },
    { name: "Groq", level: 70, icon: <Brain className="w-6 h-6" />, category: "ai" },
    { name: "Active Directory", level: 75, icon: <Shield className="w-6 h-6" />, category: "security" },
    { name: "LDAP", level: 70, icon: <Lock className="w-6 h-6" />, category: "security" },
    { name: "ServiceNow", level: 75, icon: <Shield className="w-6 h-6" />, category: "security" },
    { name: "IAM", level: 80, icon: <Lock className="w-6 h-6" />, category: "security" },
  ];

  const categories = [
    { id: "programming", name: "Programming Languages" },
    { id: "visualization", name: "Data Visualization Tools" },
    { id: "analysis", name: "Data Analysis Libraries" },
    { id: "ai", name: "Generative AI Tools" },
    { id: "security", name: "Cybersecurity Tools" },
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
      duration: "Apr 2024 – Present",
      responsibilities: [
        "Extracted and analysed service metrics from ServiceNow to monitor SLA compliance, generating comprehensive performance reports that reduced incident resolution times by 15%",
        "Designed and implemented interactive Excel dashboards with pivot tables and advanced visualizations to track ticket trends, identify recurring issues, and support data-driven decision-making.",
        "Created and delivered weekly and monthly stakeholder reports highlighting key performance indicators, resolution metrics, and emerging patterns in support cases.",
        "Developed SQL queries to extract and validate user access data, ensuring accuracy of compliance reporting and identifying potential security risks",
        "Collaborated with cross-functional teams to translate complex security metrics into actionable insights, enabling process optimizations that enhanced operational efficiency"
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-muted z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0tNC0yaC0ydjJoMnYtMnptLTIgNGgtMnYyaDJ2LTJ6bS0yLThoLTJ2Mmgydi0yek0yNiAyNGgtMnYyaDJ2LTJ6bS0yIDRoLTJ2Mmgydi0yek0yMiAyNGgtMnYyaDJ2LTJ6bS0yIDRoLTJ2Mmgydi0yek0xOCAyNGgtMnYyaDJ2LTJ6bS0yIDRoLTJ2Mmgydi0yek0xNCAyNGgtMnYyaDJ2LTJ6bTQgOGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bS0yMCA4aC0ydjJoMnYtMnptLTQgMGgtMnYyaDJ2LTJ6bTI0LTI0aC0ydjJoMnYtMnptLTQgMGgtMnYyaDJ2LTJ6bTQgNGgtMnYyaDJ2LTJ6bS00IDBoLTJ2Mmgydi0yek0zNCAyNGgtMnYyaDJ2LTJ6bS00IDBoLTJ2Mmgydi0yek0zMCAxNmgtMnYyaDJ2LTJ6bS00IDBoLTJ2Mmgydi0yek0yNiA4aC0ydjJoMnYtMnptLTQgMGgtMnYyaDJ2LTJ6bS00IDhoLTJ2Mmgydi0yek0xOCA4aC0ydjJoMnYtMnptLTQgOGgtMnYyaDJ2LTJ6TTE0IDhoLTJ2Mmgydi0yek00MCA4aC0ydjJoMnYtMnptNCA0aC0ydjJoMnYtMnptLTQtOGgtMnYyaDJ2LTJ6bTggMTJoLTJ2Mmgydi0yek00NCA4aC0ydjJoMnYtMnptNCA0aC0ydjJoMnYtMnptLTQtOGgtMnYyaDJ2LTJ6bTggMTJoLTJ2Mmgydi0yek01MiAxNmgtMnYyaDJ2LTJ6bS0yLTRoLTJ2Mmgydi0yek01MiA4aC0ydjJoMnYtMnptLTItNGgtMnYyaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary mb-4">
              Data Analyst
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Rohit Kumar <span className="text-primary">Thangi</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-8">
              Transforming data into actionable insights with experience in data analysis, visualization, and cybersecurity.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-all"
              >
                <Mail size={18} className="text-primary" />
                <span>{personalInfo.email}</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-all"
              >
                <Phone size={18} className="text-primary" />
                <span>{personalInfo.phone}</span>
              </motion.a>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
              >
                <MapPin size={18} className="text-primary" />
                <span>{personalInfo.location}</span>
              </motion.div>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-all"
              >
                <Linkedin size={18} className="text-primary" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-all"
              >
                <Github size={18} className="text-primary" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container px-4 py-12 mx-auto"
      >
        <motion.div 
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="max-w-3xl mx-auto p-8 rounded-lg bg-gradient-to-br from-muted to-muted/80 shadow-lg border border-muted/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-foreground text-center">Career Objective</h2>
          <p className="text-gray-400 leading-relaxed text-center">
            Dedicated data analyst with a strong foundation in business intelligence tools and statistical analysis. 
            Seeking to leverage my expertise in data visualization and analytics to drive data-informed decision-making 
            in a dynamic organization. Committed to continuous learning and staying current with emerging technologies 
            in the field of data science and analytics.
          </p>
        </motion.div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-16 mx-auto"
      >
        <h2 className="mb-8 text-3xl font-bold text-center text-foreground">Technical Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSkillCategory === category.id 
                  ? "bg-primary text-white" 
                  : "bg-muted text-gray-400 hover:bg-muted/80"
              }`}
              onClick={() => setActiveSkillCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {skills
            .filter(skill => skill.category === activeSkillCategory)
            .map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-muted to-muted/60 border border-muted/20 backdrop-blur-sm"
              >
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground text-center">{skill.name}</h3>
                  <div className="w-full h-3 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </motion.div>
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative h-[380px] p-1 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-70 rounded-xl z-0"></div>
              <div className="absolute inset-1 bg-muted rounded-lg z-10"></div>
              
              <div className="relative h-full p-6 flex flex-col rounded-lg z-20">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  {project.duration && (
                    <span className="text-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                      {project.duration}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 mb-3">Type: {project.type}</p>
                
                <div className="flex-grow overflow-hidden">
                  {hoveredProject === project.title ? (
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      {project.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-400 flex items-start text-sm">
                          <span className="mr-2 mt-1 text-primary">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </motion.ul>
                  ) : (
                    <p className="text-gray-400 line-clamp-3">
                      {project.description[0]}
                    </p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-background text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.div 
                  className="absolute bottom-4 right-4 text-primary text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.title ? 0 : 1 }}
                >
                  Hover for details
                </motion.div>
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
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary to-muted"></div>
              )}
              
              <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-muted border-2 border-primary flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              
              <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-muted to-muted/60 border border-muted/20">
                <div className="flex justify-between flex-wrap">
                  <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">{exp.duration}</span>
                </div>
                <p className="text-gray-400 mb-4">{exp.company}, {exp.location}</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="text-gray-400 flex items-start"
                    >
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
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
        <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-muted to-muted/60 border border-muted/20 mb-8"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{edu.institution}</h3>
                  <p className="text-gray-400 mb-1">{edu.degree}</p>
                  <p className="text-gray-400 mb-2">{edu.duration}</p>
                  <div className="flex items-center">
                    <div className="px-3 py-1 bg-primary/10 rounded-full">
                      <p className="text-sm text-primary">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
              className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-muted to-muted/60 border border-muted/20"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-gray-400 mb-1">Issuer: {cert.issuer}</p>
                  <p className="text-gray-400 mb-2">Issued: {cert.date}</p>
                  {cert.credential && (
                    <div className="px-3 py-1 bg-primary/10 rounded-full inline-block">
                      <p className="text-sm text-primary">{cert.credential}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-16 mx-auto mb-10"
      >
        <div className="max-w-xl p-8 mx-auto rounded-lg shadow-lg bg-gradient-to-br from-muted to-muted/60 border border-muted/20">
          <h2 className="mb-6 text-3xl font-bold text-center text-foreground">Get in Touch</h2>
          <div className="space-y-4 text-center">
            <p className="text-gray-400">
              Looking for opportunities to leverage data for impactful business decisions.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.email}`}
              className="inline-block px-6 py-3 text-white transition-all rounded-lg bg-primary hover:bg-secondary"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </motion.section>

      <motion.div
        className="fixed bottom-10 right-10 p-3 rounded-full bg-primary/20 text-primary cursor-pointer z-50"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default Index;
