import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser'



export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })


    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const hadnleSubmit = (e) => {
        e.preventDefault();
        // console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message sent successfully");
            setFormData({name: "", email: "", message: ""})
        }).catch((error) => {
            
            console.log(error);
            alert("Oops! Something went wrong, please try again.");
        })
    }


    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-3/4 md:w-[400px] mx-auto"> {/* last class : 'px-4 w-150' is the width of the form */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                        text-transparent text-center">
                        {" "}Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={hadnleSubmit}>
                        <div className="relative">
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="relative">
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="relative">
                            <textarea 
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white
                        py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}