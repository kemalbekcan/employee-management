import { open, _remove } from "@/store/modal";
import { store } from "@/store";

const modalActions = {
    open() {
        store.dispatch(open())
    },
    remove() {
        store.dispatch(_remove())
    }
}

export default modalActions;