const PhotoResource = ({ src, alt, setOpen, setDisplayPhoto }: {
    src: string;
    alt: string;
    setOpen: (open: boolean) => void;
    setDisplayPhoto: (displayPhoto: string) => void;
}) => {
    const clickPhoto = () => {
        setOpen(true)
        setDisplayPhoto(src)
    }

    return (
        <>
            <div onClick={clickPhoto} className="hover:border-3 hover:rounded-lg hover:border-sky-500 cursor-pointer">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
        </>
    );
  };
  
  
  export default PhotoResource;