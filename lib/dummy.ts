enum Status {
  private = "private",
  public = "public",
  archived = "archived",
}

export const resumeData = {
  title: "Untitled document",
  status: Status.private,
  themeColor: "#7c3aed",
  currentPosition: 1,
  personalInfo: {
    firstName: "Sarah",
    lastName: "Johnson",
    jobTitle: "Software Engineer",
    address: "1234 Elm Street, CA 90210",
    phone: "(987)-654-3210",
    email: "sarah.johnson@example.com",
  },
  summary:
    "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Proficient in both front-end and back-end development, with a focus on building scalable web applications and improving user experience.",
  experiences: [
    {
      title: "Software Engineer",
      companyName: "Microsoft",
      city: "San Francisco",
      state: "CA",
      startDate: "Feb 2022",
      endDate: "",
      currentlyWorking: true,
      workSummary: `
      <ul>
      <li>Developed scalable web applications using React, TypeScript, and Node.js.</li>
        <li> Collaborated with cross-functional teams to design, implement, and maintain new features</li>
        <li> Optimized performance of applications, reducing load times by 30% </li>
        <li> Integrated third-party services and APIs to enhance application functionality </li>
      </ul>
      `,
    },
    {
      id: 2,
      title: "Frontend Developer",
      companyName: "Facebook",
      city: "Menlo Park",
      state: "CA",
      startDate: "Aug 2019",
      endDate: "Jan 2022",
      currentlyWorking: false,
      workSummary:
        "• Designed and developed high-performance user interfaces using React and Redux.\n" +
        "• Worked closely with UX/UI designers to ensure seamless and intuitive user experiences.\n" +
        "• Implemented responsive design techniques for optimal viewing on all devices.\n" +
        "• Mentored junior developers and conducted code reviews to maintain high-quality standards.",
    },
  ],
  educations: [
    {
      universityName: "Stanford University",
      startDate: "Sep 2017",
      endDate: "Jun 2019",
      degree: "Master's",
      major: "Computer Science",
      description:
        "Graduated with a focus on software engineering and systems architecture, specializing in scalable web applications and distributed systems.",
    },
    {
      universityName: "University of California, Berkeley",
      startDate: "Sep 2013",
      endDate: "Jun 2017",
      degree: "Bachelor's",
      major: "Computer Science",
      description:
        "Completed coursework in algorithms, data structures, and software engineering, with an emphasis on hands-on coding projects and internships.",
    },
  ],
  skills: [
    {
      name: "React",
      rating: 5,
    },
    {
      name: "Node.js",
      rating: 3,
    },
    {
      id: 3,
      name: "TypeScript",
      rating: 4,
    },
    {
      id: 4,
      name: "Python",
      rating: 5,
    },
    {
      id: 5,
      name: "GraphQL",
      rating: 2,
    },
  ],
};
