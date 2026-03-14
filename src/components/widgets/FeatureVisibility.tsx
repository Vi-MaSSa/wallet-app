import { useState, ReactNode } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type Props = {
  children: ReactNode;
};

export default function FeatureVisibility({ children }: Props) {
  const [isFeatureVisible, setFeatureVisible] = useState(false);

  const toggleFeature = () => {
    setFeatureVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleFeature} className="mb-2">
        {isFeatureVisible ? (
          <AiOutlineEye size={20} />
        ) : (
          <AiOutlineEyeInvisible size={20} />
        )}
      </button>

      {isFeatureVisible && children}
    </div>
  );
}
