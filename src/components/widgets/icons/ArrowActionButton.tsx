import { FaCircleArrowRight } from "react-icons/fa6";

export default function ArrowActionButton() {
  return (
    <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:scale-105 transition">
      <FaCircleArrowRight size={14} />
    </button>
  );
}
