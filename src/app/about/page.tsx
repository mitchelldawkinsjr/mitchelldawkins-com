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
              href="/documents/Mitchell-Dawkins-II-Resume-2026.pdf"
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
              Full-stack engineer with 10+ years of experience building scalable web applications across enterprise and growth-stage environments. I specialize in full-stack engineering with a track record delivering revenue-driving features at Dropbox and leading full-stack architecture for federal and enterprise clients. Adept at AI-assisted development workflows, cross-functional collaboration, and technical mentorship.
            </p>
            <p>
              I believe we&apos;re at a fascinating inflection point where AI can be used in tandem with experience and a good grasp of fundamentals to build better software — creating improvements that will dramatically change how we develop it.
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
                    {["TypeScript", "JavaScript", "Python", "PHP", "Go", "SQL"].map((skill) => (
                      <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Vue", "SvelteKit", "Flask", "FastAPI", "Redux", "Laravel", "Symfony", "Node.js"].map((skill) => (
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
                    {["LLM Fine-tuning", "RAG", "ML Pipelines", "NLP", "Predictive Modeling", "Text-to-Speech"].map((skill) => (
                      <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Claude", "ChatGPT", "Grok", "Cursor", "Ollama", "Hugging Face", "OpenAI API", "Whisper API", "n8n"].map((tool) => (
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
            {/* AdHoc Research Associates */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Computer Programmer</h3>
                <div className="text-gray-600 dark:text-gray-300">Oct 2025 – Present · Contract · Remote</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">AdHoc Research Associates — Havre de Grace, MD</div>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Architect and deliver custom enterprise web applications using PHP 8+ and VueJS, leading full stack development initiatives aligned with stakeholder and federal engineering requirements.</li>
                <li>Integrate automation and AI-assisted development workflows to accelerate delivery, improve testing coverage, and enhance code quality standards.</li>
                <li>Design scalable backend services and RESTful APIs in PHP while building reactive, component-driven frontends using VueJS and modern JavaScript tooling.</li>
                <li>Apply advanced problem solving and systems analysis techniques to reduce technical debt and guide long-term application architecture strategy.</li>
              </ul>
            </div>

            {/* Dropbox */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Engineer</h3>
                <div className="text-gray-600 dark:text-gray-300">May 2021 – April 2025 · Remote</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Dropbox — San Francisco, CA</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Led AI chatbot rollout to revamp tier-one support, boosting CSAT by 20% and ensuring seamless cookieless tracking for Chrome compatibility.</li>
                <li>Built full-stack applications supporting multi-million dollar revenue pipelines, integrating third-party APIs for scalable, user-centric solutions.</li>
                <li>Owned real-time production monitoring and SEV incident response using Sentry, Kibana, and PagerDuty, safeguarding monetization pipelines and A/B testing systems.</li>
                <li>Drove measurable performance gains across internal services by identifying and resolving latency bottlenecks through systematic profiling and optimization.</li>
                <li>Architected API integrations to streamline workflow automation between Dropbox tools and third-party platforms, reducing manual engineering overhead.</li>
                <li>Led cross-functional initiatives to improve internal tooling, infrastructure reliability, and deployment processes across multiple engineering teams.</li>
                <li>Built data-driven dashboards to surface platform efficiency metrics, enabling proactive bottleneck resolution and reducing incident response time.</li>
            </ul>
            </div>

            {/* ThriveDX */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lead Software Development Instructor</h3>
                <div className="text-gray-600 dark:text-gray-300">Dec 2020 – Dec 2023 · Part-time · Remote</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">ThriveDX — Miami, FL</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Instructed students in programming fundamentals and equipped them with the skills necessary to become successful Software Engineers.</li>
            </ul>
            </div>

            {/* Service Express */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Software Engineer</h3>
                <div className="text-gray-600 dark:text-gray-300">Jul 2020 – Apr 2021 · Remote</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Service Express — Grand Rapids, MI</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Designed, implemented, and deployed features for legacy back-office software systems focused on PHP and MSSQL.</li>
                <li>Partnered with stakeholders and business users to deliver successful technical solutions.</li>
                <li>Developed a Salesforce API-integrated system to support the sales and marketing team, written in Golang.</li>
            </ul>
            </div>

            {/* Varsity News Network */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineer</h3>
                <div className="text-gray-600 dark:text-gray-300">Aug 2017 – Mar 2020 · Remote</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Varsity News Network — Grand Rapids, MI</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Object-oriented PHP development and Git-based version control.</li>
                <li>Automated testing: TDD, BDD, full-stack integration, and continuous integration.</li>
                <li>Development & support for JS single-page applications and REST APIs using Silex, Doctrine, ReactJS, Symfony, Angular.js, and Node.js.</li>
            </ul>
            </div>

            {/* Remote-Learner */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Developer</h3>
                <div className="text-gray-600 dark:text-gray-300">Jul 2018 – Mar 2020 · Remote</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">Remote-Learner — Denver, CO</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Delivered advanced Moodle and Totara LMS custom solutions, improving user experience and performance for enterprise clients.</li>
            </ul>
            </div>

            {/* US Signal */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Application Developer</h3>
                <div className="text-gray-600 dark:text-gray-300">2015 – 2017</div>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">US Signal — Grand Rapids, MI</div>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Promoted twice from PHP Analyst to Senior Application Developer within two years.</li>
                <li>Architected and maintained enterprise CRM and billing systems using PHP, Zend, PostgreSQL, and Git-based deployment workflows.</li>
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
