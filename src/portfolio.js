/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kabilan KB",
  title: "Hi all, I'm Kabilan KB",
  subTitle: emoji(
    "Motivated and dedicated professional seeking opportunities to gain new skills and knowledge while contributing to the growth and development of others in robotics."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1d8X0d3NqL4Gt3OI3y3LWkupmsmtqrdZo/view?usp=drivesdk ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kabilan2003",
  linkedin: "https://linkedin.com/in/kabilan-kb",
  gmail: "kabilankb2003@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@kabilankb2003",

  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ROBOT DEVELOPER WHO WANTS TO EXPLORE",
  skills: [
    emoji("⚡ Nvidia Ambassadorship Workshop"),
    emoji("⚡ Ros Developer"),
    emoji("⚡ Mentorship")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "aws"
      // fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "rashberry pi"
      // fontAwesomeClassname: "fa-brands fa-rashberry-pi"
    },
    {
      skillName: "python"
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker"
      // fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Ros"
      // fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Isaac Ros"
      // fontAwesomeClassname: "fa-brands fa-rashberry-pi"
    },
    {
      skillName: "MoveIT"
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "3D Printing"
      // fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jetson Nano"
      // fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Arduino"
      // fontAwesomeClassname: "fa-brands fa-rashberry-pi"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karunya University",
      logo: require("./assets/images/Karunya.jpeg"),
      subHeader: "Batchlor of Robotics Engineering",
      duration: "July 2021 - May 2024",
      desc: "Harward Funded project",
      descBullets: ["Autonomous wheel chair system", "Hospital Delivery bot"]
    },
    {
      schoolName: "Rane Polytechnic",
      logo: require("./assets/images/rane.png"),
      subHeader: "Diploma in Mechanical Engineering",
      duration: "Jun 2018 - Jun 2021",
      desc: "Solid WorkS design in robots"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Design/Simulation", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Ros/Isaac ros",
      progressPercentage: "70%"
    },
    {
      Stack: "Rashbery pi/Jeton nano",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Instructor For ROS Workshop",
      company: "CTC karunya university",
      companylogo: require("./assets/images/Karunya.jpeg"),
      date: "Feb 2023 – Feb 2023",
      desc: "It was a wonderful experience to teach and share my Knowledge with enthusiastic individuals in robotics for three days ros workshop."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Project Internship",
      company: "karunya innovation and design studio",
      companylogo: require("./assets/images/Karunya.jpeg"),
      date: "May 2023 – Jun 2023",
      desc: "Does a Humanoid robot using 3D printing technology and Depth perception robot"
    },
    // {
    //   role: "Internship",
    //   company: "Kalchi Controls",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jun 2022 - Jul 2022",
    //   desc: "In this internship gain knowledge of robotics and automation basic in the field of PLC."
    // },
    {
      role: "Project Intern",
      company: "ITC Food division",
      companylogo: require("./assets/images/itc.jpeg"),
      date: "May 2022 - Jun 2022",
      desc: "During this period of internship undertaken the project of 'universal robot problem solving’ in Biscuit category to reduce delay time in pick and place of CFC in pallet transport."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/nvidia.png"),
      projectName: "NVIDIA JETSON NANO DEPTH CAMERA PROJECT",
      projectDesc:
        "Led a successful project involving NVIDIA Jetson Nano and Depth Camera integration to develop an advanced robotic system with enhanced perception capabilities."
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/nvidia.png"),
      projectName: "NVIDIA JETBOT OMNIVERSE ISAAC ROS SIMULATION",
      projectDesc:
        "Led a groundbreaking project that integrated NVIDIA JetBot with Omniverse ISAAC, ROS teleoperation, and YOLO object detection. Proficient in developing and implementing complex robotic systems for various applications. Committed to leveraging cutting-edge technologies to advance the field of robotics and autonomous systems."
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/nvidia.png"),
      projectName: "Autonomous wheelchair",
      projectDesc:
        "project I've been deeply involved in — an autonomous wheelchair designed to empower individuals with mobility impairments, providing them with independence in their daily lives. This initiative was made possible through a project grant sanctioned by Harvard Medical School and Boston Children's Hospital. Using cutting-edge technology and the Robot Operating System (ROS), I developed this wheelchair to operate autonomously, allowing individuals to navigate and control their movements without the need for constant assistance from family members or caregivers."
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/WhatsApp Image 2024-01-12 at 2.52.38 PM.jpeg"),
      projectName: "Hospital Medician Delivery Robot using ROS",
      projectDesc:
        "Motivated and innovative robotics engineer with a passion for creating cutting-edge solutions in healthcare. Led a funded project at Harvard University to develop a Hospital Medician Delivery Robot using the Robot Operating System (ROS). Proﬁcient in robotics and project management. Skilled in ROS, computer vision, and autonomous navigation. Committed to leveraging technology to improve patient care and streamline healthcare processes.",
      footerLink: [
        {
          name: "Tutorial",
          url: "https://www.youtube.com/watch?v=uBmeGMhxcg0&feature=youtu.be"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Meet the maker",
      subtitle: "Appreciated by nvidia meet the maker blog about me",
      image: require("./assets/images/nvidia.png"),
      imageAlt: "Nvidia Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        {
          name: "Blog",
          url: "https://blogs.nvidia.com/blog/2023/10/03/kabilan-kb-autonomous-wheelchair/"
        }
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    {
      title: "IITM Research Park Student Design Challenge",
      subtitle: "Assitive technology conference runner up",
      image: require("./assets/images/Empower-Logo-Yellow-2023-300x45.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1P6xpThU-M2zK-gSWwhcK8hY3IGCE8Hi5/view?usp=drivesdk"
        },
        {
          name: "Link",
          url: "https://empower23.respark.iitm.ac.in/student-design-finalists/"
        }
      ]
    },

    {
      title: "Build2gether",
      subtitle: "Inclusive Innovation Challenge runner up",
      image: require("./assets/images/Untitled.png"),
      imageAlt: "hackster Logo",
      footerLink: [
        {
          name: "Link",
          url: "https://www.hackster.io/kabilankb2003/self-driving-wheelchair-for-people-with-mobility-impairment-7a87af"
        }
        // {
        //   name: "Project Blog",
        //   url: "https://empower23.respark.iitm.ac.in/student-design-finalists/"
        // }
      ]
    },

    {
      title: "INAE youth conclave 2023",
      subtitle: "Indian National academy of engineering Runner up",
      image: require("./assets/images/Untitled.jpg"),
      imageAlt: "INAE Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ODftAD5QES7cKIb_3r0n2GnttR63gh20/view"
        }
        // {
        //   name: "Project Blog",
        //   url: "https://medium.com/@kabilankb2003/building-an-intelligent-robot-with-nvidia-jetson-nano-intel-depth-camera-d435i-and-arduino-9f8ba9ea40c8"
        // }
      ]
    },

    {
      title: "Nvidia Instructor",
      subtitle: "Certified Instructor for Nvidia Jetson Nano",
      image: require("./assets/images/nvidia.png"),
      imageAlt: "Nvidia Logo",
      footerLink: [
        // {
        //   name: "Blog",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1P5InFWBrVbsYHpRnMEX46Xn2Uxsu5EmE/view"
        }
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Nvidia Ambassadorship",
      subtitle: "Certified Ambassadorship ",
      image: require("./assets/images/nvidia.png"),
      imageAlt: "Nvidia Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OzAF5tZJ56uYdHYINfEa3O3BXQMA8bbK/view"
        }
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8678927418",
  email_address: "kabilankb2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
