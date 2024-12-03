export function SkeletonLoaderBlock() {
    return (
        <div style={{ width: "95%", position: "relative", display: "flex", flexDirection: "column" }}>
            <SkeletonLoaderPiece height='30px' />
            <SkeletonLoaderPiece width={"20%"} alignSelf='flex-end' />
            <SkeletonLoaderPiece />
            <SkeletonLoaderPiece width={"20%"} alignSelf='flex-end' />
        </div>
    );
}

export function SkeletonLoaderPiece({ width = '100%', height = '30px', borderRadius = '5px', alignSelf = 'flex-start' }) {
    const style = {
        width,
        height,
        borderRadius,
        alignSelf,
        backgroundColor: '#f0f0f0',
        margin: '20px 0',
        animation: 'flash 1.5s ease-in-out infinite',
    };

    return (
        <div style={style}></div>
    )
};

export function Error({ message }) {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ fontSize: "35px", marginBottom: "10px", textAlign: "center", color: "red" }}> {message} </div>
        </div>
    );
}