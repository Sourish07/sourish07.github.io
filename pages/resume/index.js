import SkHead from "@/components/main/head";

const Resume = () => {
    return (
        <>
            <SkHead title="Sourish's Resume" />
            <main>
                <iframe src="https://drive.google.com/file/d/1tao0SKPIIKQk9cOG0E331dm42QZLkRu2/preview" allow="autoplay"></iframe>
                <style>{`
                    * {
                        background-color: #fff;
                    }
                    
                    iframe {
                        width: 100vw;
                        height: 100vh;
                        border: none;
                    }

                    ::-webkit-scrollbar {
                        width: 0px;
                    }
                `}</style>
            </main>
        </>
    );
};

export default Resume;