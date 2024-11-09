import { useState } from 'react'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Integration from './components/Integration';
import './index.css'; 

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestDemo = () => {
    console.log("Request Demo button clicked");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Close button clicked");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Integration />

        {/* Request Demo Button */}
        <div className="text-center mt-8">
          <button onClick={handleRequestDemo} className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Request Demo
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Contact</a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              © 2024 PayrollLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal with Embedded Google Form */}
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Close Button as an "X" at the Top Right */}
            <button 
              onClick={handleCloseModal} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">Join the Waiting List</h2>

            {/* Embed Google Form using iframe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeu_H9vLP9HZQ61KSMeoDEzmOQ-UOh6bh1AGIQlawNpEmUSPA/viewform?embedded=true"
                    width="100%" 
                    height="700" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0"
                    style="border: none;">
                    Loading…
                  </iframe>
                `,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;