import { useState } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',message:''});
  const handleChange = e=>setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = async e=>{
    e.preventDefault();
    try {
      await api.post('/api/contacts', form);
      toast.success('Message sent!');
      setForm({name:'',email:'',message:''});
    } catch(error) {
      toast.error('Error! Please try again.');
      console.log(error);
    }
  };
  return (
    <div data-theme="halloween" className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-gradient-to-br from-primary to-secondary rounded-box text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Get In Touch</h1>
            <p className="py-6">
              Ready to bring your ideas to life? Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-white">Contact Us</h2>
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl border-l-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300 max-w-lg w-full mx-4">
          <div className="card-body p-4 md:p-6">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-700 font-semibold text-sm md:text-base">Name</span>
                </label>
                <input className="input input-bordered w-full bg-white border-blue-300 focus:border-blue-500 text-sm md:text-base" name="name" placeholder="Your Name" onChange={handleChange} value={form.name} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-700 font-semibold text-sm md:text-base">Email</span>
                </label>
                <input className="input input-bordered w-full bg-white border-blue-300 focus:border-blue-500 text-sm md:text-base" name="email" type="email" placeholder="your.email@example.com" onChange={handleChange} value={form.email} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-700 font-semibold text-sm md:text-base">Message</span>
                </label>
                <textarea className="textarea textarea-bordered w-full bg-white border-blue-300 focus:border-blue-500 h-24 md:h-32 text-sm md:text-base" name="message" placeholder="Tell us about your project..." onChange={handleChange} value={form.message} required></textarea>
              </div>
              <div className="form-control mt-4 md:mt-6">
                <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-sm md:text-base" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
