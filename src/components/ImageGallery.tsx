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
For future implementation:
- Actual filtering (using tags)
*/
import { lazy, Suspense } from "react"
import type { PhotoResource } from "./utils/types"
import { useEffect, useState } from "react"
import LoadingSpinner from "./utils/LoadingSpinner.tsx"
import Dropdown from "./utils/Dropdown.tsx"
import { useImages } from "../store/imageGallery.ts"

function ImageGallery() {
    const images = useImages((state) => state.images)
    const addImages = useImages((state) => state.addImages)
    const apiCall = "https://api.pexels.com/v1/search"
    const options = ["Nature", "Architecture", "People"]
    const per_page = 5
    const page = Math.max(Math.floor(Math.random() * 10), 1)
    const accessKey = import.meta.env.VITE_PEXELS_ACCESS_KEY
    
    const [filterKey, setFilterKey] = useState('')

    const [open, setOpen] = useState(false)
    const [displayPhoto, setDisplayPhoto] = useState('')

    const LazyPhotoResource = lazy(() => import('./image_gallery/PhotoResource.tsx'))

    useEffect(() => {
        const options = ["Nature", "Architecture", "People"]

        async function getPhotos(query: string) {
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
                addImages(data.photos)
                
            } catch (err) {
                console.error(err)
                alert("An error occurred fetching the images from Pexels. Please try refreshing the page.")
            }
        }

        options.forEach(async (option: string) => {
            getPhotos(option)
        })
    }, [])

    useEffect(() => {
        async function getPhotos(query: string) {
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
                addImages(data.photos)
                
            } catch (err) {
                console.error(err)
                alert("An error occurred fetching the images from Pexels. Please try refreshing the page.")
            }
        }

        if (filterKey.length > 0 && options.includes(filterKey)) {
            getPhotos(filterKey)
        }
    }, [filterKey])

    return (
        <>
            <h1>Image Gallery</h1>
            <div className="flex justify-center gap-2 mt-10 mb-10">
                <Dropdown options={options} onChooseOption={setFilterKey} />
                <button>Clear filter</button>
            </div>
            <div className="grid w-full grid-cols-4 auto-rows-auto gap-3">
                {images && (
                    images.map((photo: PhotoResource) => {
                        return (<Suspense fallback={<LoadingSpinner key={photo.src.original} />}>
                            <LazyPhotoResource
                                src={photo.src.large}
                                alt={photo.alt}
                                setOpen={setOpen}
                                setDisplayPhoto={setDisplayPhoto}
                                key={photo.src.original}
                            />
                        </Suspense>)
                    })
                )}
            </div>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative rounded-md shadow-lg max-w-3xl w-full max-h-9/10 p-4">
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
