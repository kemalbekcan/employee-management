import { useSelector } from "react-redux";

export const useModal = () => {
    return useSelector(state => state.modal.modal)
}