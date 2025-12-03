import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vreml8h",    
        "template_tc8gmwp",    
        form.current,
        "N--eY9kIBlAjJcz9L"   
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Your inquiry has been successfully submitted.",
            icon: "success",
            confirmButtonColor: "#6C7CFF",
          });

          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Oops!",
            text: "Failed to send your message. Please try again.",
            icon: "error",
            confirmButtonColor: "#6C7CFF",
          });
          console.log(error);
        }
      );
  };

  return (
    <section className="w-full bg-white text-black px-6 md:px-20 py-28">
      
      <motion.h1
        className="text-center text-4xl md:text-6xl font-bold mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact <span className="text-[#6C7CFF]">Zafyr Media</span>
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        Have a project in mind? Want to collaborate with creators or scale your influencer campaigns?
        Fill out the form and our team will get back to you within 24 hours.
      </motion.p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto grid grid-cols-1 gap-8 bg-[#F9F9FF] p-10 rounded-3xl border border-black/10 shadow-[0_0_20px_rgba(0,0,0,0.08)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >

        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Full Name *</label>
          <input
            type="text"
            name="full_name"
            placeholder="Enter your full name"
            className="bg-white border border-black/20 rounded-lg px-5 py-3 focus:outline-none focus:border-[#6C7CFF] transition"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="bg-white border border-black/20 rounded-lg px-5 py-3 focus:outline-none focus:border-[#6C7CFF] transition"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-white border border-black/20 rounded-lg px-5 py-3 focus:outline-none focus:border-[#6C7CFF] transition"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Tell us about your brand, campaign goals, or questions"
            rows="5"
            className="bg-white border border-black/20 rounded-lg px-5 py-3 focus:outline-none focus:border-[#6C7CFF] transition resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full py-4 rounded-full bg-[#6C7CFF] text-white hover:bg-[#5968D8] font-semibold text-lg transition shadow-[0_0_15px_rgba(108,124,255,0.5)]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Submit Inquiry
        </motion.button>

      </motion.form>

      <p className="text-center text-gray-500 mt-10 text-sm">
        Our team is available Monday – Saturday, 9:00 AM – 8:00 PM IST
      </p>
    </section>
  );
};

export default Contact;
