'use client'

import ExampleContainer from '@/app/ExampleContainer';
import { FreeTransformContainer } from '@ky28059/react-free-transform';


export default function TransformBasicExample() {
    return (
        <ExampleContainer code={code}>
            <FreeTransformContainer className="w-full h-full bg-sky-50 bg-[linear-gradient(135deg,#0ea5e980_10%,#0000_0,#0000_50%,#0ea5e980_0,#0ea5e980_60%,#0000_0,#0000)] bg-[length:7.07px_7.07px]">
                {({ transform }) => (
                    <img
                        src="https://ky-photos-preview.s3.us-east-1.amazonaws.com/2025-04-10@14+Pwnme,+Paris/IMG_E5008-preview.webp"
                        className="rounded-md h-80 aspect-[3/4] object-cover object-center shadow-2xl"
                        style={{ transform }}
                        draggable={false}
                    />
                )}
            </FreeTransformContainer>
        </ExampleContainer>
    )
}

const code = `import { FreeTransformContainer } from '@ky28059/react-free-transform';

export default function Example() {
    return (
        <FreeTransformContainer className="rounded border border-black/10 bg-sky-50 bg-[linear-gradient(135deg,#0ea5e980_10%,#0000_0,#0000_50%,#0ea5e980_0,#0ea5e980_60%,#0000_0,#0000)] bg-[length:7.07px_7.07px] h-96 mt-5 mb-8">
            {({ transform }) => (
                <img
                    src="https://ky-photos-preview.s3.us-east-1.amazonaws.com/2025-04-10@14+Pwnme,+Paris/IMG_E5008-preview.webp"
                    className="rounded-md h-80 aspect-[3/4] object-cover object-center shadow-2xl"
                    style={{ transform }}
                    draggable={false}
                />
            )}
        </FreeTransformContainer>
    )
}`
