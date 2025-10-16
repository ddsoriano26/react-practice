/*
Image Gallery
Components:
- Image display grid
- Lazy loading
- Filter by category (e.g. "Nature", "Architecture", "People")
    - Dropdown?
- Image preview modal
    - Click to show full-sized image
    - Close button
    - Navigation to next image
    - Background dims when modal is open
- Error handling
*/
import { lazy, Suspense } from "react"
import type { PhotoResource } from "./utils/types"
import { useEffect, useState } from "react"
import LoadingSpinner from "./utils/LoadingSpinner.tsx"

function ImageGallery() {
    const [photos, setPhotos] = useState<Array<PhotoResource> | null>(null)
    const apiCall = "https://api.pexels.com/v1/search"
    const query = "nature"
    const per_page = 20
    const page = Math.max(Math.floor(Math.random() * 10), 1)
    const accessKey = import.meta.env.VITE_PEXELS_ACCESS_KEY

    const [open, setOpen] = useState(false)
    const [displayPhoto, setDisplayPhoto] = useState('')

    const LazyPhotoResource = lazy(() => import('./image_gallery/PhotoResource.tsx'))

    useEffect(() => {
        async function getPhotos() {
            try {
                const response = await fetch(
                    `${apiCall}?query=${query}&per_page=${per_page}&page=${page}`, {
                        headers: {
                            'Authorization': `${accessKey}`
                        }
                    }
                )

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`)
                }

                const data = await response.json()
                setPhotos(data.photos)
            } catch (err) {
                console.error(err)
                alert("An error occurred fetching the images from Pexels. Please try refreshing the page.")
            }
        }
        getPhotos()
    }, [])

    return (
        <>
            <div className="grid w-full grid-cols-4 auto-rows-auto gap-3">
                {photos && (
                    photos.map((photo: PhotoResource) => {
                        return (<Suspense fallback={<LoadingSpinner />}>
                            <LazyPhotoResource
                                src={photo.src.large}
                                alt={photo.alt}
                                setOpen={setOpen}
                                setDisplayPhoto={setDisplayPhoto}
                            />
                        </Suspense>)
                    })
                )}
            </div>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative rounded-md shadow-lg max-w-3xl w-full p-4">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                        <img src={displayPhoto} alt="Preview" className="w-full h-auto rounded-md" />
                    </div>
                </div>
                )}

        </>
    )
}

export default ImageGallery
