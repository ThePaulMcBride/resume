import Head from "next/head";

const data = {
  name: "Paul McBride",
  job_title: "Senior Software Engineer",
  summary:
    "Hi, I'm Paul. I'm a senior developer that likes working with JavaScript and solving problems with code. I consider myself pragmatic, empathetic and always keen to learn new things. I advocate for accessibility and I'm passionate about making sure everyone can enjoy the web.",
  employment_history: [
    {
      company: "Niice",
      url: "https://niice.co",
      role: "Lead Developer",
      dates: "2018 - Present",
      highlights: [
        "Managed a team of developers and fostered a culture of continius integration",
        "Reduced initial bundle size by 80% and initial page load times by several seconds",
        "Migrated a legacy app from Backbone to React and Next.js",
        "Maintained and extended a complex app split across multiple services",
      ],
    },
    {
      company: "Locate A Locum",
      url: "https://locatealocum.com",
      role: "Senior Developer",
      dates: "2017 - 2018",
      highlights: [
        "Developed a platform that automated the booking of locum pharmacist shifts",
        "Created and supported a multi-platform React Native app",
        "Designed and built an in-house app to allow customer support to troubleshoot with users",
      ],
    },
    {
      company: "PiggyPot",
      url: "https://piggypot.com",
      role: "JavaScript Engineer",
      dates: "2016 - 2017",
      highlights: [
        "Maintained and extended a React Native app designed to help young people save money",
        "Built out automated testing for both the React Native app and the API server",
      ],
    },
    {
      company: "minus40",
      url: "https://minus40.co",
      role: "Web Developer",
      dates: "2015 - 2016",
      highlights: [
        "Delivered dozens of client projects on time and on budget to a high standard",
        "Upgraded frontend tool chain to improve developer productivity across the whole team",
      ],
    },
    {
      company: "Eyekiller",
      url: "https://eyekiller.com",
      role: "Junior Developer",
      dates: "2015",
      highlights: [
        "Created HTML templates for client websites and emails",
        "Upgraded exisiting client websites to use response CSS",
      ],
    },
  ],
  relevant_experience: [
    {
      company: "WeCode NI",
      url: "https://wecodeni.com",
      role: "Founder",
      dates: "2018 - Present",
      description:
        "WeCode NI is a side project that has become a successful business. It is a job board where companies in Northern Ireland can advertise their vacancies. I began designing and building the platform in early 2018 and have been working on it ever since.",
    },
    {
      company: "egghead",
      url: "https://egghead.io",
      role: "Instructor",
      dates: "2018 - Present",
      description:
        "Egghead is an online platform that helps developers learn new tools and technologies. I was invited to become an instructor in 2018 and now regularly make instructional video courses that are viewed by thousands of developers each month.",
    },
  ],
  technologies: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Ruby",
    "Rails",
    "PostgreSQL",
    "Git",
  ],
};

export default function Home() {
  return (
    <div className="bg-gray-100 md:py-12 print:py-0">
      <Head>
        <title>{data.name} Resumé</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container mx-auto bg-white relative max-w-6xl">
        <div>
          <div>
            <div className="px-4 mx-6 py-6 md:px-24 md:mx-20 md:py-20">
              <header>
                <h1 className="text-3xl uppercase font-bold mb-4 text-gray-700">
                  {data.name}
                </h1>
                <div className="text-gray-700 mb-2">{data.job_title}</div>
                <div className="text-gray-500 mb-2">
                  Belfast, Northern Ireland
                  <span> | </span>
                  <a
                    href="https://paulmcbride.net"
                    target="_blank"
                    rel="noopener noreferrer nofollow ugc"
                  >
                    paulmcbride.net
                  </a>
                  <span> | </span>
                  <a
                    href="mailto:hello@paulmcbride.net"
                    target="_blank"
                    rel="noopener noreferrer nofollow ugc"
                  >
                    hello@paulmcbride.net
                  </a>
                </div>
                <div className="text-gray-500 mb-2">{data.summary}</div>

                <div>
                  <div className="hidden leading-tight bg-green-400 text-green-700 md:inline-flex flex-col justify-center items-center rounded-full w-16 h-16 p-2 absolute left-20 top-20 text-lg font-bold">
                    <div>P</div>
                    <div>M</div>
                  </div>
                </div>
              </header>

              <div>
                <div>
                  <section className="mt-12">
                    <h2 className="text-gray-400 uppercase tracking-wider text-xs mb-6">
                      Employment History
                    </h2>
                    {data.employment_history.map((job) => (
                      <div key={job.url}>
                        <h2 className="uppercase font-bold text-lg text-gray-700 tracking-wider">
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow ugc"
                          >
                            {job.company}
                          </a>
                        </h2>
                        <div className="text-gray-500 mb-1">
                          {job.role}
                          <span> | </span>
                          <span>{job.dates}</span>
                        </div>
                        <div className="mb-8">
                          <ul className="list-disc ml-8">
                            {job.highlights.map((highlight, index) => (
                              <li key={index}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </section>

                  <section className="mt-12">
                    <h2 className="text-gray-400 uppercase tracking-wider text-xs mb-6">
                      Relevant Experience
                    </h2>
                    {data.relevant_experience.map((job) => (
                      <div key={job.url}>
                        <h2 className="uppercase font-bold text-lg text-gray-700 tracking-wider">
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow ugc"
                          >
                            {job.company}
                          </a>
                        </h2>
                        <div className="text-gray-500 mb-1">
                          {job.role}
                          <span> | </span>
                          <span>{job.dates}</span>
                        </div>
                        <div className="mb-8">
                          <p>{job.description}</p>
                        </div>
                      </div>
                    ))}
                  </section>

                  <section className="mt-12">
                    <h2 className="text-gray-400 uppercase tracking-wider text-xs mb-6">
                      Technologies
                    </h2>
                    <ul className="flex flex-wrap">
                      {data.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="bg-gray-100 text-gray-600 mx-1 mb-2 px-2 py-1"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
