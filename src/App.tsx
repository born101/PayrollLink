import { useState } from 'react'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Integration from './components/Integration';
import './index.css'; 
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Functions for handling modal state
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

      {/* Modal for Waiting List */}
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Join the Waiting List</h2>
            <form action="https://forms.gle/qVBsGKigcsbHk5yt9" method="POST" target="_blank">
              <label className="block mb-2">
                Name:
                <input type="text" name="entry.905690855" required className="w-full border rounded p-2" />
              </label>
              <label className="block mb-2">
                Email:
                <input type="email" name="entry.1764187529" required className="w-full border rounded p-2" />
              </label>
              <label className="block mb-2">
                Company:
                <input type="text" name="entry.1201369684" className="w-full border rounded p-2" />
              </label>
              <div className="flex justify-end space-x-2 mt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Join</button>
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-500 text-white rounded">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
