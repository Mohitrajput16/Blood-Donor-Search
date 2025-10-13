import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Intro Card */}
          <div className="rounded-2xl p-8 bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a{" "}
              <span className="font-semibold text-cyan-400">
                passionate developer
              </span>{" "}
              with expertise in building scalable web applications and crafting
              innovative solutions. My focus is on blending{" "}
              <span className="text-blue-400">modern technologies</span> with
              practical problem-solving to deliver impactful digital products.
            </p>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Education */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-cyan-400" />
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <strong>
                    Bachelor of Technology in Computer Science & IT
                  </strong>{" "}
                  — Acropolis Institute, RGPV University (2022–2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaCertificate className="text-blue-400" />
                Certifications & Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Google Cloud Data Analytics
                  </h4>
                  <h4 className="font-semibold">
                    Oracle Cloud Infrastructure
                  </h4>
                  <h4 className="font-semibold">Salesforce AI Associate</h4>
                </div>

                <div>
                  <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                  <p>
                    Assisted in building front-end components and integrating
                    REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
