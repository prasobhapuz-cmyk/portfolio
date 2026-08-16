/**
 * =========================================================================
 * PRASOBH KUMAR - PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * 
 * Apple-Inspired Monochrome & Classic Engineering Portfolio Data
 * Centralized data for Profile, Education, Skills, Projects, Ideas & Contact.
 */

const portfolioData = {
  // -----------------------------------------------------------------------
  // 1. PERSONAL & HERO SECTION INFO
  // -----------------------------------------------------------------------
  personalInfo: {
    name: "Prasobh Kumar",
    title: "Mechanical Engineering Student | Automobile & Aerospace Enthusiast",
    institution: "Government Engineering College Thrissur (GEC Thrissur)",
    degree: "B.Tech in Mechanical Engineering",
    currentYear: "1st Year Undergraduate",
    hometown: "Trivandrum, Kerala, India",
    collegeLocation: "Thrissur, Kerala, India",
    avatar: "assets/images/prasobh-portrait.jpg",
    bio: "Mechanical Engineering undergraduate at Government Engineering College Thrissur with deep passion for Automobile Engineering, Aerospace Propulsion, and Aeronautical Systems. Focused on precision CAD modeling, aerodynamic optimization, and vehicle powertrain dynamics.",
    statusBadge: "Available for Projects & Engineering Research",
    rolesToType: [
      "Mechanical Engineering",
      "Automobile Engineering",
      "Aerospace Propulsion",
      "Aeronautical Design & UAVs",
      "Precision 3D CAD Modeler"
    ],
    stats: [
      { label: "Institution", value: "GEC Thrissur", icon: "ri-government-line" },
      { label: "Specialization", value: "Mechanical & Aero", icon: "ri-compass-3-line" },
      { label: "Location", value: "Trivandrum / Thrissur", icon: "ri-map-pin-line" },
      { label: "Key Focus", value: "Automobile & Flight", icon: "ri-speed-up-line" }
    ]
  },

  // -----------------------------------------------------------------------
  // 2. CONTACT DETAILS & SOCIAL LINKS
  // -----------------------------------------------------------------------
  contact: {
    email: "prasobhapuz@gmail.com",
    whatsapp: "+916282576450",
    whatsappDisplay: "+91 6282576450",
    whatsappLink: "https://wa.me/916282576450?text=Hi%20Prasobh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    instagram: "iprasobh",
    instagramLink: "https://instagram.com/iprasobh",
    location: "Trivandrum, Kerala, India",
    collegeCampus: "GEC Thrissur, Kerala, India",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },

  // -----------------------------------------------------------------------
  // 3. EDUCATION TIMELINE
  // -----------------------------------------------------------------------
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech) - Mechanical Engineering",
      institution: "Government Engineering College Thrissur (GECT)",
      affiliation: "APJ Abdul Kalam Technological University (KTU)",
      location: "Thrissur, Kerala",
      period: "2025 – Present",
      status: "Currently Pursuing (1st Year)",
      badge: "Undergraduate",
      description: "Rigorous study in classical mechanics, engineering graphics, thermodynamics, fluid dynamics, manufacturing science, and material engineering.",
      highlights: [
        "Core Focus: Engineering Mechanics, 3D CAD Drafting, Calculus, Basic Electrical/Electronics",
        "Active member of Technical Societies & Mechanical Workshops",
        "Exploring Automobile Powertrain Mechanics & Aeronautical Flow Principles"
      ]
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Education (Class XII)",
      institution: "Christ Nagar School, Kuchapuram",
      location: "Trivandrum, Kerala",
      period: "Completed",
      status: "Graduated with Distinction",
      badge: "Science Stream (PCMB/M)",
      description: "Strong academic grounding in Physics, Chemistry, and Advanced Mathematics fostering passion for mechanical dynamics, aerodynamics, and automotive systems.",
      highlights: [
        "Specialized in Physics (Classical Mechanics, Thermodynamics, Electromagnetism) & Calculus",
        "Science & Mathematics Olympiad participation",
        "Deep analytical curiosity in aerodynamics and mechanical engines"
      ]
    },
    {
      id: "edu-3",
      degree: "Secondary High School Education (Class X)",
      institution: "Loyola School, Mukundara",
      location: "Kerala",
      period: "Completed",
      status: "Graduated with Honors",
      badge: "High School (ICSE/CBSE)",
      description: "Formative school education with emphasis on holistic excellence, physical sciences, logical mathematics, and innovation.",
      highlights: [
        "Academic excellence in Mathematics and Physical Sciences",
        "Active participation in science exhibitions, technical clubs, and leadership"
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 4. SKILLS & COMPETENCIES
  // -----------------------------------------------------------------------
  skills: {
    categories: [
      {
        id: "mechanical-cad",
        name: "Mechanical & CAD Design",
        icon: "ri-pencil-ruler-2-line",
        items: [
          { name: "Engineering Graphics & Orthographic Projection", level: 92, icon: "📐" },
          { name: "3D CAD Modeling (SolidWorks / Fusion 360)", level: 86, icon: "⚙️" },
          { name: "AutoCAD & 2D Drafting", level: 88, icon: "📏" },
          { name: "Geometric Dimensioning & Tolerancing (GD&T)", level: 80, icon: "🎯" },
          { name: "3D Printing & Additive Manufacturing", level: 82, icon: "🖨️" }
        ]
      },
      {
        id: "auto-aero",
        name: "Automobile & Aerospace Sciences",
        icon: "ri-flight-takeoff-line",
        items: [
          { name: "Aerodynamics & Boundary Layer Flow", level: 84, icon: "✈️" },
          { name: "Automotive Chassis & Powertrain Dynamics", level: 82, icon: "🏎️" },
          { name: "Turbomachinery & Jet Engine Cycles", level: 78, icon: "🌀" },
          { name: "Engineering Mechanics & Statics/Dynamics", level: 88, icon: "⚖️" },
          { name: "Applied Thermodynamics & Heat Transfer", level: 82, icon: "🔥" }
        ]
      },
      {
        id: "computational",
        name: "Computational & Engineering Tools",
        icon: "ri-terminal-box-line",
        items: [
          { name: "Python for Numerical Simulation & Solvers", level: 82, icon: "🐍" },
          { name: "C Programming & Embedded Logic", level: 76, icon: "💻" },
          { name: "MATLAB & Engineering Data Plotting", level: 72, icon: "📊" },
          { name: "Arduino Microcontroller & Sensor Integration", level: 80, icon: "⚡" },
          { name: "MS Excel / Engineering Analysis Sheets", level: 90, icon: "📈" }
        ]
      },
      {
        id: "workshop",
        name: "Hands-on Workshop & Prototyping",
        icon: "ri-hammer-line",
        items: [
          { name: "Lathe Operations & Machine Shop", level: 84, icon: "🛠️" },
          { name: "Fitting, Carpentry & Sheet Metal", level: 86, icon: "🔧" },
          { name: "Mechanism Assembly & Fastening", level: 85, icon: "🧩" },
          { name: "Rapid Prototyping & Physical Testing", level: 80, icon: "🧪" }
        ]
      },
      {
        id: "leadership",
        name: "Professional & Engineering Mindset",
        icon: "ri-lightbulb-line",
        items: [
          { name: "Analytical Problem Solving", level: 92, icon: "💡" },
          { name: "Project Management & Execution", level: 86, icon: "📋" },
          { name: "Technical Documentation & Blueprint Reading", level: 88, icon: "📝" },
          { name: "Team Collaboration & Communication", level: 90, icon: "🤝" }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 5. PROJECTS & SHOWCASE
  // -----------------------------------------------------------------------
  projects: [
    {
      id: "proj-1",
      title: "Yet to be added",
      category: "mechanical",
      categoryLabel: "Mechanical & CAD Models",
      badge: "Yet to be added",
      summary: "Yet to be added",
      image: "assets/images/project-aerospace-wing.svg",
      featured: true,
      tags: ["CAD Model", "Mechanical", "In Progress"],
      description: "Yet to be added",
      keyFeatures: [
        "Yet to be added"
      ],
      toolsUsed: ["CAD Software", "Engineering Graphics"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "proj-2",
      title: "Yet to be added",
      category: "automobile",
      categoryLabel: "Automobile Engineering",
      badge: "Yet to be added",
      summary: "Yet to be added",
      image: "assets/images/project-gearbox.svg",
      featured: true,
      tags: ["Automobile", "Transmission", "In Progress"],
      description: "Yet to be added",
      keyFeatures: [
        "Yet to be added"
      ],
      toolsUsed: ["CAD Software", "Kinematics"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "proj-3",
      title: "Yet to be added",
      category: "aerospace",
      categoryLabel: "Aerospace & Aeronautical",
      badge: "Yet to be added",
      summary: "Yet to be added",
      image: "assets/images/project-turbine.svg",
      featured: true,
      tags: ["Aerospace", "Propulsion", "In Progress"],
      description: "Yet to be added",
      keyFeatures: [
        "Yet to be added"
      ],
      toolsUsed: ["CAD Software", "Aerodynamics"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  // -----------------------------------------------------------------------
  // 6. FUTURE IDEAS & INNOVATION ROADMAP
  // -----------------------------------------------------------------------
  futureIdeas: [
    {
      id: "idea-1",
      title: "Micro-Gas Turbine Hybrid Drone Propulsion System",
      category: "Aerospace Propulsion",
      icon: "ri-rocket-2-line",
      status: "Research & Design Phase",
      statusColor: "silver",
      timeline: "Target: 2026 - 2027",
      overview: "Exploring ultra-compact micro-gas turbine engines coupled with high-density electric generators for extended-range hybrid heavy-lift UAVs.",
      impact: "Could deliver 4x greater flight endurance compared to pure lithium-battery powered drones in disaster relief and cargo logistics.",
      keyConcepts: [
        "Centrifugal compressor aerodynamic optimization",
        "Annular combustion chamber thermal efficiency and ceramic coatings",
        "High-RPM dynamic balancing and hybrid electrical power extraction",
        "Computational Fluid Dynamics (CFD) airflow simulation"
      ]
    },
    {
      id: "idea-2",
      title: "Aerodynamic Active Aero Wing for High-Performance EV",
      category: "Automobile Engineering",
      icon: "ri-speed-up-line",
      status: "Concept & Modeling",
      statusColor: "silver",
      timeline: "Target: 2026",
      overview: "Dynamic electro-mechanical active rear wing and underbody diffuser flaps that automatically adjust pitch angle based on vehicle speed and cornering telemetry.",
      impact: "Maximizes downforce during high-speed cornering while drastically reducing straight-line drag for increased electric range.",
      keyConcepts: [
        "Multi-element carbon composite airfoil profile",
        "High-speed servo actuator linkage mechanism",
        "CAN-bus vehicle telemetry integration (speed, steering angle, braking)",
        "Wind tunnel scale model testing"
      ]
    },
    {
      id: "idea-3",
      title: "Biomimetic Flapping-Wing Micro Air Vehicle (Ornithopter)",
      category: "Aeronautical Engineering",
      icon: "ri-flight-land-line",
      status: "Exploratory Studies",
      statusColor: "silver",
      timeline: "Target: 2027",
      overview: "Investigating unsteady low-Reynolds-number aerodynamics through bio-inspired avian flapping wing kinematics for silent micro reconnaissance.",
      impact: "Enables ultra-quiet, agile flight dynamics in GPS-denied indoor and urban disaster zones.",
      keyConcepts: [
        "Dual-crank spatial four-bar linkage mechanism for wing flapping & twisting",
        "Flexible carbon-fiber and mylar composite membrane wing design",
        "Aerodynamic vortex shedding and lift generation at low speeds",
        "Miniaturized lightweight servo pitch control"
      ]
    },
    {
      id: "idea-4",
      title: "Flywheel Kinetic Energy Recovery System (KERS)",
      category: "Automotive & Energy",
      icon: "ri-battery-charge-line",
      status: "Theoretical Modeling",
      statusColor: "silver",
      timeline: "Target: 2027",
      overview: "A high-speed carbon-composite mechanical flywheel kinetic energy recovery system paired with EV powertrains for instant peak power surge.",
      impact: "Reduces thermal degradation on chemical battery packs during intense acceleration and braking cycles.",
      keyConcepts: [
        "High-vacuum magnetic bearing containment housing",
        "Continuously Variable Transmission (CVT) mechanical coupling",
        "Finite Element Analysis (FEA) of composite rotor hoop stress",
        "Regenerative kinetic energy capture efficiency optimization"
      ]
    }
  ]
};

// Export to window for global access
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
