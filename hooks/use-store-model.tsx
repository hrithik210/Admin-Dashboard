import { create } from "zustand";

interface useStoreModelType{
    isOpen: boolean;
    onOpen: () => void; 
    onClose: () => void;
}

export const useStoreModel = create<useStoreModelType>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
})); 