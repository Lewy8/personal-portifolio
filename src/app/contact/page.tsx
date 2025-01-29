'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/navigation/navbar";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-neutral-50 to-neutral-100 justify-center">
            <div className="mx-auto justify-center items-center p-8">
                <Navbar />
            </div>
            <div className="container mx-auto grid md:grid-cols-2 gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
                {/* Contact Information Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-12 flex flex-col justify-center"
                >
                    <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <ContactInfoItem
                            icon={<FaEnvelope />}
                            text="lewisnhuguti@gmail.com"
                        />
                        <ContactInfoItem
                            icon={<FaPhoneAlt />}
                            text="+255763845788"
                        />
                        <ContactInfoItem
                            icon={<FaMapMarkerAlt />}
                            text="Uzunguni Street, Kigamboni, Dar es salaam."
                        />
                    </div>
                </motion.div>

                {/* Contact Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-12"
                >
                    <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Get In Touch</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-2 text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-full 
                                px-0 
                                py-2 
                                border-b 
                                border-gray-300 
                                focus:outline-none 
                                focus:border-blue-500 
                                transition-colors 
                                duration-300"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full 
                                px-0 
                                py-2 
                                border-b 
                                border-gray-300 
                                focus:outline-none 
                                focus:border-blue-500 
                                transition-colors 
                                duration-300"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-700">Message</label>
                            <textarea
                                className="w-full 
                                px-0 
                                py-2 
                                border-b 
                                border-gray-300 
                                focus:outline-none 
                                focus:border-blue-500 
                                transition-colors 
                                duration-300 
                                resize-none 
                                h-32"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            className="w-full 
                            bg-gradient-to-r 
                            from-gray-600 
                            to-gray-900 
                            text-white 
                            py-3 
                            rounded-lg 
                            hover:from-gray-700 
                            hover:to-blue-700 
                            transition 
                            duration-300 
                            flex 
                            items-center 
                            justify-center 
                            space-x-2"
                        >
                            <FaPaperPlane />
                            <span>Send Message</span>
                        </button>
                    </form>

                </motion.div>
            </div>
        </div>
    );
}

// Utility Component for Contact Info
function ContactInfoItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="flex items-center space-x-4">
            <div className="text-2xl">{icon}</div>
            <span>{text}</span>
        </div>
    );
}
