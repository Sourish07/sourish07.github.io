const ImageRow = (props) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {props.images.map((image) => (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <img
                key={image.name}
                src={image.src}
                alt={image.alt}
                style={image.style}
            />
            {props.caption ? <p style={{width: "100px", textAlign: "center"}}>{image.name}</p> : null}
        </div>
        ))}
    </div>
    );
};

export default ImageRow;