import { useState } from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  UserGroupIcon,
  NewspaperIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

const Platforms = () => {
  const socials = [
    {
      icon: <GlobeAltIcon className="w-12 h-12 text-sky-400" />,
      title: "Twitter",
      text: "For any Web3 project with a large crypto audience, Twitter is a key venue. This social network sets the trends for cryptocurrencies.",
    },
    {
      icon: <ChatBubbleLeftEllipsisIcon className="w-12 h-12 text-blue-500" />,
      title: "Telegram",
      text: "Telegram is the hub for instant crypto discussions. Communities thrive with updates, bots, and private groups.",
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-indigo-500" />,
      title: "Discord",
      text: "Discord connects Web3 projects with NFT and GameFi audiences. Channels and voice chats foster strong communities.",
    },
    {
      icon: <NewspaperIcon className="w-12 h-12 text-orange-500" />,
      title: "Reddit",
      text: "Reddit is where crypto narratives grow. Subreddits bring together investors, traders, and enthusiasts worldwide.",
    },
    {
      icon: <VideoCameraIcon className="w-12 h-12 text-red-500" />,
      title: "YouTube",
      text: "YouTube helps Web3 projects spread awareness with tutorials, AMAs, and deep-dive content to reach global audiences.",
    },
  ];

  const benefits = [
    {
      title: "Advanced Content Marketing",
      text: "You get advanced content marketing strategies and tactics to promote your crypto project.",
      img: "/image/padlock.png", // replace with your image
    },
    {
      title: "Turn-key Social Media Management",
      text: "You no longer have to worry about content production. We are an autonomous team that provides turn-key social media management services.",
      img: "/image/arrow.png", // replace with your image
    },
    {
      title: "Access to 100+ Web3 Communities",
      text: "With us, you get access to 100+ web3 communities and projects for partnerships and cross-marketing to attract organically new audiences.",
      img: "/image/speaker.png", // replace with your image
    },
  ];

  const [likes, setLikes] = useState(Array(socials.length).fill(false));

  const toggleLike = (index: number) => {
    const updated = [...likes];
    updated[index] = !updated[index];
    setLikes(updated);
  };
  return (
    <div>
      <div className="grid sm:grid-cols-2 items-center px-10 gap-5">
        <div>
          <h3 className="text-2xl lg:text-[30px] font-Manrope text-amber-300 leading-6">
            Which SMM platforms do we work with?
          </h3>
        </div>
        <div>
          <h5 className="text-[18px] font-Manrope text-gray-700 text-center w-1/1">
            Social media networks' crypto marketing has specific
            characteristics, unlike the classic SMM. We assess your social media
            accounts and analyze your projects and target audience to ensure the
            effectiveness of our advertising.
          </h5>
        </div>
      </div>
      <section className="w-full bg-black py-12 px-6">
        <h2 className="text-white text-2xl lg:text-[28px] font-Manrope font-semibold mb-8 text-center">
          Social Media Platforms for Web3 Growth
        </h2>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {socials.slice(0, 3).map((social, i) => (
            <div
              key={i}
              className="bg-[#222] text-white rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition"
            >
              {/* Logo */}
              <div className="mb-4">{social.icon}</div>
              <h3 className="text-lg font-semibold">{social.title}</h3>

              {/* Like button */}
              <button
                onClick={() => toggleLike(i)}
                className={`px-4 py-1 text-sm rounded-full font-medium transition mt-3 ${
                  likes[i]
                    ? "bg-amber-400 text-black"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {likes[i] ? "Liked ♥" : "Like"}
              </button>

              {/* Text */}
              <p className="text-gray-300 text-sm mt-4 text-center leading-relaxed">
                {social.text}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {socials.slice(3).map((social, i) => (
            <div
              key={i + 3}
              className="bg-[#222] text-white rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition"
            >
              {/* Logo */}
              <div className="mb-4">{social.icon}</div>
              <h3 className="text-lg font-semibold">{social.title}</h3>

              {/* Like button */}
              <button
                onClick={() => toggleLike(i + 3)}
                className={`px-4 py-1 text-sm rounded-full font-medium transition mt-3 ${
                  likes[i + 3]
                    ? "bg-amber-400 text-black"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {likes[i + 3] ? "Liked ♥" : "Like"}
              </button>

              {/* Text */}
              <p className="text-gray-300 text-sm mt-4 text-center leading-relaxed">
                {social.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-black py-16 px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-white text-2xl lg:text-3xl font-Manrope font-semibold text-center mb-12">
          Benefits of working with{" "}
          <span className="text-amber-400">Coinband</span> on SMM
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-16 h-16 mb-4 object-contain"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {benefit.title}
              </h3>

              {/* Text */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Platforms;
