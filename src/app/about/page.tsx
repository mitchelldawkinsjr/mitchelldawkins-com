import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Mitchell Dawkins',
  description: 'Learn more about Mitchell Dawkins, AI engineer and developer of the Video Processing Platform.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
            <Image 
              src="/images/profile.jpg" 
              alt="Mitchell Dawkins" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mitchell Dawkins
            </h1>
            <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-6">
              Software Engineer
            </h2>
            <a
              href="/documents/Mitchell-Dawkins-II-Resume-2025.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <p>
              I&apos;m a Software Engineer and passionate about building software, problem solving and making an impact. My current development focus is building a multi-tenant video processing platform that allows organizations to extract value from their video content through automated
              transcription and custom model training.
            </p>
            <p>
              With over 10 years of experience in backend & frontend development, I bring a unique perspective to
              building sofware systems. I believe we&apos;re at a fascinating inflection point where AI can be
              used in tandem with experince and a good grasp of fundamentals to build better software, creating 
              improvements that will dramatically change how we develop software.
            </p>
            <p>
              When I&apos;m not coding or experimenting with AI tools, you&apos;ll find me coaching football, playing video games,
              or hanging out with family.
            </p>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "JavaScript", "Python", "PHP"].map((skill) => (
                      <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Vue", "Flask", "Redux", "Laravel"].map((skill) => (
                      <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">DevOps & Cloud</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Docker", "CI/CD", "Git"].map((skill) => (
                      <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Experience */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                AI Experience
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["LLM Fine-tuning", "ML Pipelines", "NLP"].map((skill) => (
                      <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Claude", "ChatGPT", "Grok", "Cursor", "Whisper API"].map((tool) => (
                      <span key={tool} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI-Assisted Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Prompt Engineering", "AI Pair Programming", "LLM Integration"].map((skill) => (
                      <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
        </h2>

        <div className="space-y-8">
            {/* DFF */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Vice President</h3>
                <div className="text-gray-600 dark:text-gray-300">May 2023 - Present</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Dawkins Family Foundation Inc.</div>
            </div>

            {/* Dropbox */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Engineer</h3>
                <div className="text-gray-600 dark:text-gray-300">May 2021 - April 2025</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Dropbox Inc.</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Revamped tier-one support with an AI-powered chatbot, boosting CSAT by 20% and enabling cookie-less tracking for seamless Chrome compatibility.</li>
                <li>Developed revenue-generating full-stack apps and integrated third-party APIs into the Dropbox ecosystem.</li>
                <li>Led SEV incident response and monitored production systems using Sentry, Logstash, Kibana, and PagerDuty to protect critical monetization pipelines.</li>
            </ul>
            </div>

            {/* ThriveDX */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lead Software Development Instructor</h3>
                <div className="text-gray-600 dark:text-gray-300">Dec 2020 - Dec 2023</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">ThriveDX</div>
            <p className="text-gray-700 dark:text-gray-300">
                Taught programming fundamentals remotely, mentoring students to become industry-ready software engineers through practical, real-world curriculum.
            </p>
            </div>

            {/* Service Express */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Software Engineer</h3>
                <div className="text-gray-600 dark:text-gray-300">Jul 2020 - Apr 2021</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Service Express</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Developed features for legacy PHP/MSSQL systems and partnered cross-functionally to deliver business-aligned solutions.</li>
                <li>Built a Salesforce-integrated API in Golang to support sales and marketing teams.</li>
            </ul>
            </div>

            {/* Varsity News Network */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineer</h3>
                <div className="text-gray-600 dark:text-gray-300">Aug 2017 - Mar 2020</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Varsity News Network</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Built JS single-page apps and REST APIs using ReactJS, Silex, Doctrine, Symfony, and Node.js.</li>
                <li>Maintained test coverage through TDD/BDD and continuous integration practices.</li>
            </ul>
            </div>

            {/* Remote-Learner */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Developer</h3>
                <div className="text-gray-600 dark:text-gray-300">Jul 2018 - Mar 2020</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Remote-Learner</div>
            <p className="text-gray-700 dark:text-gray-300">
                Delivered customized Moodle and Totara LMS solutions and created AJAX/jQuery-based UIs for educational clients.
            </p>
            </div>

            {/* US Signal */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Application Developer</h3>
                <div className="text-gray-600 dark:text-gray-300">Oct 2015 - Aug 2017</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">US Signal</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Maintained critical business software built with Zend Framework and Doctrine ORM on PostgreSQL.</li>
                <li>Led improvements in performance through SQL optimization and built dynamic reporting systems with PHP and JS.</li>
            </ul>
            </div>

        </div>
        </section>

        
        {/* Education Section */}
        <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
        </h2>

        <div className="space-y-8">

            {/* Bachelor's Degree */}
            <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Bachelor of Science in Information Systems Technology
                </h3>
                <div className="text-gray-600 dark:text-gray-300">Graduated January 2018</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400">
                Seminole State College of Florida
            </div>
            <p className="text-gray-700 dark:text-gray-300">
                Magna Cum Laude
            </p>
            </div>

            {/* Associate Degree */}
            <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Associate in Science, Computer Programming and Analysis
                </h3>
                <div className="text-gray-600 dark:text-gray-300">Graduated January 2015</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400">
                Seminole State College of Florida
            </div>
            <p className="text-gray-700 dark:text-gray-300">
                Magna Cum Laude
            </p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Certifications
            </h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Computer Web Development – Dec 2015</li>
                <li>Information Technology Analysis – Dec 2015</li>
                <li>IT Client Specialist – Dec 2015</li>
                <li>Computer Programming – Dec 2015</li>
                <li>Computer Programming Specialist – Dec 2015</li>
            </ul>
            </div>

        </div>
        </section>

        
        {/* Current Project Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Current Project: Video Processing Platform
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Code & Impact
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I&apos;m currently building a multi-tenant video processing platform with AI assistance.
              This meta-project explores how AI tools can be used to build AI systems, documenting
              the entire process through my blog series.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {["AI-Assisted Development", "Multi-Tenant Architecture", "Video Processing", "Machine Learning"].map((tag) => (
                <span key={tag} className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link 
              href="/blog/introducing-video-processing-platform" 
              className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read About the Project
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
