'use client';

import { useState } from 'react';

export default function ContactForm() {
  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdoyTYwKyyV6KtpWbQAPhgtaE6l_oQdN6XlUiYCwFUNhQet2Q/formResponse';
  const NAME_ENTRY_ID = 'entry.1189695522';
  const EMAIL_ENTRY_ID = 'entry.1032889871'; 
  const SUBJECT_ENTRY_ID = 'entry.521612573';
  const MESSAGE_ENTRY_ID = 'entry.366264524';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create a hidden iframe to handle the form submission
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a form element to submit to Google Forms
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_FORM_ACTION_URL;
      form.target = 'hidden-iframe';
      
      // Create and append hidden input fields
      const nameField = document.createElement('input');
      nameField.type = 'hidden';
      nameField.name = NAME_ENTRY_ID;
      nameField.value = formData.name;
      form.appendChild(nameField);
      
      const emailField = document.createElement('input');
      emailField.type = 'hidden';
      emailField.name = EMAIL_ENTRY_ID;
      emailField.value = formData.email;
      form.appendChild(emailField);
      
      const subjectField = document.createElement('input');
      subjectField.type = 'hidden';
      subjectField.name = SUBJECT_ENTRY_ID;
      subjectField.value = formData.subject;
      form.appendChild(subjectField);
      
      const messageField = document.createElement('input');
      messageField.type = 'hidden';
      messageField.name = MESSAGE_ENTRY_ID;
      messageField.value = formData.message;
      form.appendChild(messageField);
      
      // Append the form to the document, submit it, and remove it
      document.body.appendChild(form);
      form.submit();
      
      // Set a timeout to allow the form to submit before cleaning up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        
        // Reset form and set success status
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitStatus === 'success' && (
        <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg">
          Thank you for your message! I'll get back to you as soon as possible.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg">
          There was an error sending your message. Please try again later.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}