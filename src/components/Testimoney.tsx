"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Vitaliy Martynenko",
    handle: "@VitaliyMartynenko",
    text: "I like Space Listing's holistic approach, which enables them to meet the challenges effectively.",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Phoebe L.",
    handle: "@PhoebeL",
    text: "Space Lisitng is an agency that can produce tangible results in a short time.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Charlie Bussat",
    handle: "@CharlieBussat",
    text: "Implemented a great marketing strategy with the  Space Listing team. Their proactive and expert approach is inspiring.",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "James O Connor",
    handle: "@JamesOConnor",
    text: "Worked with the Space Listing team on promotion through PR. Loved their understanding of the project's business goals.",
    img: "https://i.pravatar.cc/150?img=68",
  },
  {
    name: "علي الكمالي",
    handle: "@AliAlKamali",
    text: "أعجبتني استراتيجية Space Listing المتكاملة، فقد ساعدتنا على مواجهة التحديات بفعالية.",
    img: "/image/arab1.jpg",
  },
  {
    name: "مريم الأحمد",
    handle: "@MaryamAhmed",
    text: "فريق Space Listing محترف ويقدم نتائج ملموسة بسرعة. أنصح بالتعاون معهم لأي مشروع كريبتو.",
    img: "/image/arab2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-black py-16 overflow-hidden">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">
        What people are saying about us?
      </h2>

      {/* Auto-scrolling container */}
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[320px] bg-[#222] text-white p-6 rounded-xl shadow-md flex-shrink-0"
          >
            {/* Profile image */}
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-600"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-amber-300 text-sm">{item.handle}</p>
              </div>
            </div>

            {/* Text */}
            <p
              className={`text-gray-300 text-sm leading-relaxed ${
                /[\u0600-\u06FF]/.test(item.text) ? "text-right" : "text-left"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
