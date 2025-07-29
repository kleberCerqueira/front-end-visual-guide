import { X } from "lucide-react";

const CloseSidebarButton = ({ onClick }) => {
  return (
    <button type="button" aria-label="Fechar menu de guias" onClick={onClick}>
      <X className="w-8 h-8 text-gray-500" />
    </button>
  );
};

export default CloseSidebarButton;
