import FreeTransformContainer from './FreeTransformContainer';

export default function App() {
    return (
        <div>
            <FreeTransformContainer>
                {({ transform }) => (
                    <img
                        src="https://ky-photos-preview.s3.us-east-1.amazonaws.com/2025-04-10@14+Pwnme,+Paris/IMG_E5008-preview.webp"
                        style={{
                            maxHeight: 720,
                            aspectRatio: '3/4',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transform
                        }}
                        draggable={false}
                    />
                )}
            </FreeTransformContainer>
        </div>
    )
}
