import { Menu } from "lucide-react";

const OpenSidebarButton = ({ onClick }) => {
  return (
    <button
      className="fixed top-4 left-4 w-12 h-12 bg-white border-2 border-gray-300 rounded-md shadow-md"
      type="button"
      aria-label="Abrir menu de guias"
      onClick={onClick}
    >
      <Menu className="w-6 h-6 text-gray-500 m-auto" />
    </button>
  );
};

export default OpenSidebarButton;
