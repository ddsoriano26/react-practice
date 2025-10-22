import { create } from "zustand"
import type { PhotoResource } from "../components/utils/types"

interface ImageState {
    images: Array<PhotoResource>,
    setImages: (images: PhotoResource[]) => void,
    addImages: (images: PhotoResource[]) => void,
}

export const useImages = create<ImageState>((set) => ({
    images: [],
    setImages: (newImages: PhotoResource[]) => set({ images: newImages }),
    addImages: (newImages: PhotoResource[]) => set((state) => ({ images: [...state.images, ...newImages] })),
}))