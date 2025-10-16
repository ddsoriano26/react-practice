const PhotoResource = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <>
            <div className="hover:border-3 hover:rounded-lg hover:border-sky-500 cursor-pointer">
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