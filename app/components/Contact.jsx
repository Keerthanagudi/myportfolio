'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc331e80-42d4-4142-a985-ca3c6728240d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full px-[12%] py-20 text-center scroll-mt-20 font-Ovo"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h4
        className="text-sm mb-2 text-gray-600"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Connect with me
      </motion.h4>

      <motion.h2
        className="text-4xl mb-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-500 text-sm mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Have a job opportunity or just want to connect? I’m always open to new roles,
        collaborations, or meaningful conversations.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto space-y-4 transition-all duration-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="w-full border-2 border-gray-300 px-4 py-3 rounded-md outline-none hover:shadow-md focus:border-black transition-all font-Ovo"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="w-full border-2 border-gray-300 px-4 py-3 rounded-md outline-none hover:shadow-md focus:border-black transition-all font-Ovo"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          name="message"
          required
          className="w-full border-2 border-gray-300 px-4 py-3 rounded-md outline-none resize-none hover:shadow-md focus:border-black transition-all font-Ovo"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 px-6 py-3 bg-black text-white rounded-full transition-transform duration-300 shadow hover:shadow-lg font-Ovo"
        >
          Submit now →
        </motion.button>

        {result && (
          <p className={`mt-4 text-sm font-medium ${result.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
            {result}
          </p>
        )}
      </motion.form>
    </motion.section>
  )
}

export default Contact
