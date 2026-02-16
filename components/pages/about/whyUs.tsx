import { FaShieldAlt, FaEye, FaUserTie, FaClock } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt size={28} />,
      title: "Privacy",
      description:
        "Ensuring utmost confidentiality, we safeguard client information without any third-party disclosures.",
    },
    {
      icon: <FaEye size={28} />,
      title: "Transparency",
      description:
        "We keep you informed, ensuring clarity on effective prices and exceptional legal expertise.",
    },
    {
      icon: <FaUserTie size={28} />,
      title: "Eminent Experts",
      description:
        "Experienced, knowledgeable, and cooperative professionals delivering exceptional service.",
    },
    {
      icon: <FaClock size={28} />,
      title: "Punctuality",
      description:
        "Punctual delivery is our priority as we understand the importance of timely handling of legal matters.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Why Choose <span className="text-green-600">Us</span>
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our All-Inclusive Proactive Advising System Saves Money. At
          NGOExperts, we believe in the power of collective action and the
          potential for positive change.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 hover:-translate-y-2"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mt-6 text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
