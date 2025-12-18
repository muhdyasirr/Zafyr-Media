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
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact-us"
      className="w-full bg-white text-black px-6 md:px-20 py-28"
    >
      {/* HEADER */}
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
        Let’s build creator collaborations that feel real.
      </motion.p>

      {/* FORM */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="
          relative max-w-3xl mx-auto grid grid-cols-1 gap-8
          bg-white p-10 rounded-3xl
          border border-black/10
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
          before:absolute before:inset-0 before:rounded-3xl
          before:border before:border-[#6C7CFF]/20
          before:pointer-events-none
        "
      >
        {/* NAME */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-800">Name </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="form-input"
          />
        </div>

        {/* COMPANY */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-800">
            Company / Brand 
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Brand or company name"
            className="form-input"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-800">Email </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="form-input"
          />
        </div>

        {/* CAMPAIGN OBJECTIVE */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-800">
            Campaign Objective 
          </label>
          <input
            type="text"
            name="objective"
            required
            placeholder="Brand awareness, sales, launch, etc."
            className="form-input"
          />
        </div>

        {/* TIMELINE */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-800">
            Timeline (optional)
          </label>
          <input
            type="text"
            name="timeline"
            placeholder="e.g. 2 weeks, 1 month"
            className="form-input"
          />
        </div>

        {/* BUDGET */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-800">
            Budget Range (optional)
          </label>
          <input
            type="text"
            name="budget"
            placeholder="e.g. ₹50k – ₹2L"
            className="form-input"
          />
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-800">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us more about your campaign or goals"
            className="form-textarea"
          />
        </div>

        {/* SUBMIT */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="
            w-full py-4 rounded-full
            bg-[#6C7CFF] text-white font-semibold text-lg
            border border-[#6C7CFF]/40
            transition hover:bg-[#5968D8]
            shadow-[0_0_20px_rgba(108,124,255,0.35)]
          "
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
