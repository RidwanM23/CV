import React from 'react';

const Contact = () => {
    
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-200 to-gray-400">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-3 rounded border" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-3 rounded border" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-3 rounded border"></textarea>
          </div>
          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
