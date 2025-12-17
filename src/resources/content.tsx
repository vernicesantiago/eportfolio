import { About, Blog, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vernice Marie",
  lastName: "Santiago",
  name: `Vernice Marie Santiago`,
  role: "Copernicus Master in Digital Earth",
  avatar: "/images/avatar.png",
  email: "vernice.santiago@stud.plus.ac.at",
  location: "Europe/Vienna", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Salzburg, Austria",
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vernicesantiago/",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vernicesantiago/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/photosbyvernice",
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.png",
  label: "Home",
  title: `${person.name}'s Portfolios`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hello there! I'm Vernice.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
        Check out the <strong className="ml-4">Copernicus Master in Digital Earth</strong> program
        </Text>
      </Row>
    ),
    href: "https://master-cde.eu/",
  },
  subline: (
    <>
    I am a first-year graduate student in the <Text as="span" size="xl" weight="strong">
    Erasmus Mundus Copernicus Master in Digital Earth</Text>.
    My international studies begin at the <Text as="span" size="xl" weight="strong"> 
    University of Salzburg (PLUS)</Text>, focusing on Geoinformatics and Earth Observation, 
    before moving to <Text as="span" size="xl" weight="strong">Palacký University Olomouc (UPOL) </Text>
    for specialized coursework in Advanced Geovisualization and Cartography.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  downloadCV: {
    display: true,
    link: "/pdf/cv.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Vernice is a Geospatial Specialist with a strong foundation in GIS, remote sensing, and data analysis. She graduated with a 
        degree in Geodetic Engineering from the University of the Philippines Diliman, with research experience in 3D city modeling
        and interdisciplinary geospatial projects. She is skilled in leveraging advanced geospatial tools, programming languages,
        and open-source software to address real-world challenges using aerial and satellite imagery, airborne LiDAR, and
        field observation data. She has a passion for innovation and utilizing free and open data to develop sustainable
        geospatial solutions.
      </>
    ),
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "GIS Softwares",
        description: (
          <></>
        ),
        tags: [
          {
            name: "QGIS",
            icon: "qgis",
          },
          {
            name: "ArcGIS Pro",
            icon: "arcgis",
          },
          {
            name: "Civil3D",
            icon: "civil3d",
          },
          {
            name: "Google Earth Pro",
            icon: "googleearth",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Remote Sensing Softwares",
        description: (
          <></>
        ),
        tags: [
          {
            name: "Agisoft Metashape Professional",
          },
          {
            name: "PIX4D",
          },
          {
            name: "SNAP (Sentinel Applications Program)",
          },
          {
            name: "ENVI (Environment for Visualizing Images)",
          },
          {
            name: "Cloud Compare",
          },
          {
            name: "LASTools",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Programming Languages",
        description: (
          <></>
        ),
        tags: [
          {

            name: "Python",
            icon: "python",
          },
          {

            name: "C",
            icon: "Clanguage",
          },
          {

            name: "Java",
            icon: "java",
          },
          {

            name: "JavaScript",
            icon: "javascript",
          },
          {

            name: "HTML",
            icon: "html",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Surveying",
        description: (
          <></>
        ),
        tags: [
          {
            name: "Total Station",
          },
          {
            name: "Autolevel",
          },
          {
            name: "GPS",
          },
          {
            name: "UAV sensors and platforms",
          },
          {
            name: "LiDAR",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Palacký University Olomouc | September 2025 - present",
        description: <>M.Sc., double degree, (EMJM) Copernicus Master in Digital Earth - Geovisualisation & Geocommunication</>,
        images: [
          {
            src: "/images/projects/project-01/CDE_vertical.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/projects/project-01/UPOL.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/projects/project-01/OEAD_german.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/projects/project-01/Co-funded by EU.jpg",
            alt: "Project image",
            width: 2,
            height: 2,
          },
        ],
      },
      {
        name: "Paris Lodron Universität Salzburg | September 2025 - present",
        description: <>M.Sc., double degree, (EMJM) Copernicus Master in Digital Earth - Geoinformatics & Earth Oberservation</>,
        images: [
          {
            src: "/images/projects/project-01/CDE_vertical.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/projects/project-01/PLUS.jpg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/projects/project-01/OEAD_german.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
          {
            src: "/images/projects/project-01/Co-funded by EU.jpg",
            alt: "Project image",
            width: 2,
            height: 2,
          },
        ],
      },
      {
        name: "University of the Philippines Diliman | July 2021",
        description: <>Bachelor of Science in Geodetic Engineering</>,
        images: [
          {
            src: "/images/projects/project-01/UP.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ]
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Propeller Aero",
        timeframe: "January 2024 - September 2025",
        role: "Geospatial Specialist",
        achievements: [
          <>
            Processed photogrammetric and LiDAR data into accurate 3D topographic maps by interpreting 
            drone and GPS survey data, using GIS software and web-based platforms, and ensuring quality
            through automated and manual checks.
          </>,
          <>
            Provided technical assistance to clients with data capture and/or output issues and 
            collaborating across the global team in delivering high-quality support
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Propeller.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        company: "First Balfour",
        timeframe: "February 2022 - August 2023",
        role: "Geodetic Engineer | Management Trainee",
        achievements: [
          <>
            Conducted various surveys, including construction layout and topographic control, 
            across five project sites, preparing detailed survey data, maps, and documentation.
          </>,
          <>
            Participated in the Junior Management Training Program with a focus on corporate business
            operations, and managed procurement, sourcing, and contract negotiation for technical services
            and materials.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/FirstBalfour.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        company: "UP Training Center for Applied Geodesy and Photogrammetry",
        timeframe: "September 2020 - January 2021",
        role: "Remote Sensing & Geomatics Assistant",
        achievements: [
          <>
            Automated satellite data parameter extraction using Python from Sentinel-2 images and 
            conducted quality assurance tests for rice classification results.
          </>,
          <>
            Wrote a comprehensive review of global rice mapping studies and designed training materials
            for the implementing government agency, the Department of Agriculture (DA)- Philippine Rice
            Research Institute (PhilRice).
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/TCAGP.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        company: "UP Training Center for Applied Geodesy and Photogrammetry",
        timeframe: "June - July 2019",
        role: "University Research Assistant",
        achievements: [
          <>
            Researched satellite data for forest assessment and irrigation applications, focusing on 
            the National Greening Program.
          </>,
          <>
            Designed training materials for government agencies and created promotional materials for
            a national science and technology event.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/TCAGP.png",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "In this page, I will be sharing what I have learned so far from my CDE journey. Stay tuned!",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Portfolio",
  title: `Publication – Undergraduate Thesis`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Photography",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
