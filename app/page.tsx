import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Sparkles, Star, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ColorfulPortfolio() {
  const projects = [
    {
      title: "Saloon-Booking-System",
description:
  "Built a responsive salon website using Next.js and React featuring multi-step appointment booking, service catalog, stylist profiles, and customer testimonials. Developed with JavaScript and Tailwind CSS, implementing mobile-first design and smooth user interactions for enhanced booking experience.",
      image: "/saloon.jpg?height=200&width=300",
      technologies: ["Next.js", "javaScript", "Tailwind"],
      github: "https://github.com/kasunwathsala/saloon-booking-system",
      demo: "#",
      gradient: "bg-gradient-sunset",
    },
    {
      title: "Service-Marketplace",
      description: `A comprehensive full-stack web application that connects customers with
 service providers across multiple categories including one-day services,
 contract-based work, and part-time opportunities.`,
      image: "/service.jpg?height=200&width=300",
      technologies: ["React js", "Node.js", "MongoDB"],
      github: "https://github.com/kasunwathsala/Service-marketplace",
      demo: "#",
      gradient: "bg-gradient-ocean",
    },
    {
      title: "Patas.lk",
      description:
        "Developed a mobile application using Flutter and Firebase that connects service providers with customers, enabling providers to showcase their services and customers to find and hire professionals based on their needs.",
      image: "/patas.png?height=200&width=300",
      technologies: ["Flutter", "Firebase"],
      github: "https://github.com/DilithRasanjana/Pataslk-",
      demo: "#",
      gradient: "bg-gradient-forest",
    },
      {
      title: "Property Serch-Website",
      description:
        " Developed a responsive Single Page Application (SPA) using React, sirightmove.co.uk, that enables users to search and filter properties based oncriteria such as property type, price range, number of bedrooms, date added,and postcode area",
      image: "/properties.jpg?height=200&width=300",
      technologies: ["Reactjs", "Bootstrap"],
      github: "https://github.com/kasunwathsala/properties-serch-website",
      demo: "#",
      gradient: "bg-gradient-forest",
    },
      {
      title: "Easy-food-shop",
      description:
        "Designed and developed a meal pre-ordering website using React with Viteand Material UI. Users can select food type and portion size and place ordersbefore visiting the shop",
      image: "/foodshop.jpg?height=200&width=300",
      technologies: ["React js", "Material UI"],
      github: "https://github.com/kasunwathsala/Easy-food-shop",
      demo: "#",
      gradient: "bg-gradient-forest",
    },
  ]

  const skills = [
    { name: "JavaScript", color: "bg-yellow-400 text-yellow-900" },
    { name: "TypeScript", color: "bg-blue-400 text-blue-900" },
    { name: "React", color: "bg-cyan-400 text-cyan-900" },
    { name: "Next.js", color: "bg-gray-800 text-white" },
    { name: "Node.js", color: "bg-green-400 text-green-900" },
    { name: "Python", color: "bg-indigo-400 text-indigo-900" },
    { name: "Tailwind CSS", color: "bg-teal-400 text-teal-900" },
    { name: "PostgreSQL", color: "bg-blue-500 text-white" },
    { name: "MongoDB", color: "bg-green-500 text-white" },
    { name: "AWS", color: "bg-orange-400 text-orange-900" },
    { name: "Docker", color: "bg-blue-600 text-white" },
    { name: "Git", color: "bg-red-400 text-red-900" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-fire rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-ocean rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-forest rounded-full opacity-25 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-cosmic rounded-full opacity-20 animate-float"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-purple-200 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              KASUN NILAWEERA ✨
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-purple-700 hover:text-pink-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#projects" className="text-purple-700 hover:text-pink-600 transition-colors font-medium">
                Projects
              </Link>
              <Link href="#skills" className="text-purple-700 hover:text-pink-600 transition-colors font-medium">
                Skills
              </Link>
              <Link href="#contact" className="text-purple-700 hover:text-pink-600 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
<div className="container mx-auto text-center">
  <div className="mb-8">
    <div className="relative inline-block mb-8">
      <Image
        src="/kasunn.jpg?height=180&width=180"
        alt="Profile"
        width={180}
        height={180}
        className="rounded-full mx-auto border-8 border-white shadow-2xl"
      />
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2 animate-bounce">
        <Sparkles className="h-6 w-6 text-white" />
      </div>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
      Full Stack Developer
    </h1>
    <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
      I create{" "}
      <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-bold">
        magical
      </span>{" "}
      web applications with
      <span className="bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent font-bold">
        {" "}
        clean code
      </span>{" "}
      and
      <span className="bg-gradient-to-r from-green-500 to-yellow-600 bg-clip-text text-transparent font-bold">
        {" "}
        exceptional experiences
      </span>
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Button
        size="lg"
        className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        <Star className="mr-2 h-5 w-5" />
        View My Work
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
      <a href="/kasun wathsala nilaweera.pdf" download>
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </Button>
      </a>
    </div>
  </div>
</div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me 🚀
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100">
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with over 2 years of experience creating web applications that
                solve real-world problems. I love working with modern technologies and am always eager to learn new
                tools and frameworks.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts,
                or exploring the latest trends in web development.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-medium">
                <MapPin className="h-5 w-5" />
                <span>Colombo, SRI LANKA </span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold mb-4 text-purple-700 text-lg">Frontend Development</h3>
                <div className="w-full bg-purple-100 rounded-full h-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full w-[90%] shadow-lg"></div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold mb-4 text-blue-700 text-lg">Backend Development</h3>
                <div className="w-full bg-blue-100 rounded-full h-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-4 rounded-full w-[85%] shadow-lg"></div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold mb-4 text-green-700 text-lg">Database Design</h3>
                <div className="w-full bg-green-100 rounded-full h-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full w-[80%] shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 relative z-10"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects 🎨
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 ${project.gradient} opacity-20`}></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                      <Heart className="h-4 w-4 text-pink-500" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-purple-800 text-xl">{project.title}</CardTitle>
                  <CardDescription className="mb-6 text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-md"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-purple-300 text-purple-700 hover:bg-purple-50"
                    >
                      <Link href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg"
                    >
                      <Link href={project.demo}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Skills & Technologies 💻
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className={`text-lg py-3 px-6 ${skill.color} border-0 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer`}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100 relative z-10"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together 🤝
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-bold">
              {" "}
              colorful ideas
            </span>{" "}
            to life!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="wathsala.nilaweera2001@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="http://linkedin.com/in/kasun-nilaweera-62916430a">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="https://github.com/kasunwathsala">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; 2025 KASUN NILAWEERA. Made with <Heart className="inline h-5 w-5 text-pink-300" /> and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  )
}
