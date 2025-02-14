import React from 'react';
import { ChevronDown, Github, Linkedin, Calendar, Clock, Users, BookOpen, Mail, Phone } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-green-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.25),rgba(76,29,149,0))]" />
        </div>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Project-Based Machine Learning & AI Cohort
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Build Project Portfolios in LLM Engineering, Computer Vision, NLP & Generative AI
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-400">
            Cohort Starts February 22 - Limited Slots Available!
          </p>
          <a href="https://paystack.com/buy/machine-learning-and-ai-project-based-cohort-eeblvd" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
              Apply Now
            </button>
          </a>
          <div className="mt-6 space-y-2 text-gray-300">
            <p>For inquiries:</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:seanafam09@gmail.com" className="text-blue-400 hover:text-blue-300 flex items-center">
                <Mail className="mr-2" size={20} />
                seanafam09@gmail.com
              </a>
              <a href="https://wa.me/2347081690499" className="text-blue-400 hover:text-blue-300 flex items-center">
                <Phone className="mr-2" size={20} />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Learn AI by Building Real-World Projects</h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            Designed specifically for Data Scientists and Machine Learning Engineers who need hands-on project experience
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400">Core Technologies</h3>
              <ul className="space-y-4">
                {['LLM Engineering', 'Computer Vision', 'Natural Language Processing', 'Generative AI'].map((tech) => (
                  <li key={tech} className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-green-400 rounded-full" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Program Highlights</h3>
              <div className="space-y-4">
                {[
                  { icon: Calendar, text: '2-month intensive program' },
                  { icon: Clock, text: 'Twice weekly live classes' },
                  { icon: Users, text: 'Expert mentorship' },
                  { icon: BookOpen, text: 'Hands-on projects' }
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center space-x-3">
                    <Icon className="text-blue-400" size={20} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your AI Portfolio?</h2>
          <p className="text-xl text-gray-300 mb-4">Cohort Starts February 22</p>
          <p className="text-lg text-blue-400 mb-8">Limited Slots Available!</p>
          <a href="https://paystack.com/buy/machine-learning-and-ai-project-based-cohort-eeblvd" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all transform hover:scale-105">
              Apply Now
            </button>
          </a>
          <div className="mt-6 text-gray-300">
            <p className="mb-2">Questions? Contact us:</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:seanafam09@gmail.com" className="text-blue-400 hover:text-blue-300">Email</a>
              <span className="text-gray-500">|</span>
              <a href="https://wa.me/2347081690499" className="text-blue-400 hover:text-blue-300">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 TechRoyale Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

