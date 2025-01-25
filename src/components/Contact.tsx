
// 2. Create a new file called Contact.tsx with this code:

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await emailjs.send(
        'service_d84zt24', // e.g., 'service_abc123'
        'template_2ay3oxy', // e.g., 'template_xyz789'
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'swadikspices@gmail.com'
        },
        'PzWd4ZFmfbgbuywmm' // e.g., 'user_abc123xyz'
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">We'd love to hear from you</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {status === 'success' && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              Failed to send message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:bg-amber-400"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;