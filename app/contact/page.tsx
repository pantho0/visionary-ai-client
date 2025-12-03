"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto container flex flex-col items-center px-5 sm:px-10">
          <p className="text-base sm:text-lg font-semibold mb-4 text-primary text-center">
            Get In Touch
          </p>
          <h1 className="text-gradient mb-6 text-center">Contact Us</h1>
          <p className="max-w-2xl text-center text-lg sm:text-xl text-light-100 leading-relaxed">
            Have questions or feedback? We&apos;d love to hear from you. Send us
            a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto container px-5 sm:px-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email Card */}
              <div className="glass p-6 rounded-2xl space-y-3 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Email Us</h3>
                <p className="text-light-100 text-sm">
                  Our team is here to help with any inquiries
                </p>
                <a
                  href="mailto:support@visionaryai.com"
                  className="text-primary hover:text-primary/80 transition-colors font-medium inline-block"
                >
                  support@visionaryai.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="glass p-6 rounded-2xl space-y-3 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Call Us</h3>
                <p className="text-light-100 text-sm">
                  Mon-Fri from 9am to 6pm EST
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:text-primary/80 transition-colors font-medium inline-block"
                >
                  +1 (234) 567-890
                </a>
              </div>

              {/* Office Card */}
              <div className="glass p-6 rounded-2xl space-y-3 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Visit Us</h3>
                <p className="text-light-100 text-sm">
                  Come say hello at our office
                </p>
                <address className="text-light-200 text-sm not-italic leading-relaxed">
                  123 Innovation Drive
                  <br />
                  Tech District, San Francisco
                  <br />
                  CA 94103, United States
                </address>
              </div>

              {/* Business Hours */}
              <div className="glass p-6 rounded-2xl space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-light-100">
                    <span>Monday - Friday</span>
                    <span className="text-light-200">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-light-100">
                    <span>Saturday</span>
                    <span className="text-light-200">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-light-100">
                    <span>Sunday</span>
                    <span className="text-light-200">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass p-8 sm:p-10 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gradient">
                    Send us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-light-100"
                    >
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-200 border border-border-dark rounded-lg px-4 py-3 text-white placeholder:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-light-100"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-200 border border-border-dark rounded-lg px-4 py-3 text-white placeholder:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-light-100"
                    >
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-200 border border-border-dark rounded-lg px-4 py-3 text-white placeholder:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-light-100"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-dark-200 border border-border-dark rounded-lg px-4 py-3 text-white placeholder:text-light-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-black font-semibold px-6 py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <span>✓</span>
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {formStatus === "success" && (
                    <div className="bg-primary/10 border border-primary/50 rounded-lg p-4 text-center">
                      <p className="text-primary font-medium">
                        Thank you for reaching out! We&apos;ll get back to you
                        soon.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto container px-5 sm:px-10">
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden glass">
            <div className="absolute inset-0 flex items-center justify-center bg-dark-100">
              <div className="text-center px-6">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-primary" />
                <p className="text-light-200 text-sm">
                  Add Google Maps embed or location map image here
                </p>
                <p className="text-light-200 text-xs mt-2">
                  Recommended: Interactive map showing your office location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-12 sm:py-16 bg-linear-to-b from-transparent via-dark-100/30 to-transparent">
        <div className="mx-auto container px-5 sm:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-light-100">
              Looking for quick answers? Check out our FAQ section for common
              questions about our platform, pricing, and features.
            </p>
            <button className="bg-dark-200 hover:bg-dark-200/80 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium border border-border-dark hover:border-primary/50">
              Visit FAQ
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
