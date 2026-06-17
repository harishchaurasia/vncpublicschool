const MissionCard = ({ icon, heading, text }) => (
  <div className="bg-white rounded-2xl p-5 md:p-6 text-center border border-gray-200 border-t-4 border-t-[#64B6AC] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-16 h-16 bg-[#64B6AC]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#64B6AC]">
      {icon}
    </div>
    <h3 className="text-base md:text-lg font-display font-bold text-gray-800 mb-2">{heading}</h3>
    <p className="text-sm text-gray-500 font-inter leading-relaxed">{text}</p>
  </div>
);

export default MissionCard;
