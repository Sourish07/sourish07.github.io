const ImageRow = (props) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {props.images.map((image) => (
        <img
            key={image.name}
            src={image.src}
            alt={image.alt}
            style={image.style}
        />
        ))}
    </div>
    );
};

export default ImageRow;