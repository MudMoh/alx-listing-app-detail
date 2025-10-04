interface PillProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
