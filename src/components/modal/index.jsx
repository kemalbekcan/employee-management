import { useModal } from "@/store/modal/hooks"
import modalActions from "@/store/modal/actions"

const Modal = () => {
  const modal = useModal();

  if (!modal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <button
          onClick={() => modalActions.remove()}
          className="absolute top-4 right-4 text-black hover:text-red-500"
        >
          &#x2715;
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4"></h2>

        <div className="modal-content"></div>
      </div>
    </div>
  )
}

export default Modal