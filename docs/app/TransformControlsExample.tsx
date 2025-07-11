'use client'

import ExampleContainer from '@/app/ExampleContainer';
import { useFreeTransform } from '@ky28059/react-free-transform';


export default function TransformControlsExample() {
    const { register, transform, zoom, reset } = useFreeTransform();

    return (
        <ExampleContainer code={code}>
            <div
                className="w-full h-full flex items-center justify-center overflow-hidden touch-none bg-pink-100 bg-[linear-gradient(135deg,#fb64b680_10%,#0000_0,#0000_50%,#fb64b680_0,#fb64b680_60%,#0000_0,#0000)] bg-[length:7.07px_7.07px]"
                ref={register}
            >
                <img
                    src="/2.jpg"
                    className="rounded-md h-80 aspect-[4/3] object-cover object-center shadow-2xl"
                    style={{ transform }}
                    draggable={false}
                />
            </div>

            <div className="flex gap-2 absolute left-4 bottom-3">
                <button
                    className="cursor-pointer bg-black/50 text-white rounded px-2 py-1 text-xs"
                    onClick={() => zoom(0.1)}
                >
                    +
                </button>

                <button
                    className="cursor-pointer bg-black/50 text-white rounded px-2 py-1 text-xs"
                    onClick={() => zoom(-0.1)}
                >
                    -
                </button>
            </div>

            <button
                className="cursor-pointer absolute right-4 bottom-3 bg-black/50 text-white rounded px-2 py-1 text-xs"
                onClick={reset}
            >
                Reset transformation
            </button>
        </ExampleContainer>
    )
}

const code = `import { useFreeTransform } from '@ky28059/react-free-transform';

export default function Example() {
    const { register, transform, zoom, reset } = useFreeTransform();

    return (
        <div className="relative mt-5 mb-8">
            <div
                className="flex items-center justify-center overflow-hidden touch-none rounded border border-black/10 bg-pink-100 bg-[linear-gradient(135deg,#fb64b680_10%,#0000_0,#0000_50%,#fb64b680_0,#fb64b680_60%,#0000_0,#0000)] bg-[length:7.07px_7.07px] h-96"
                ref={register}
            >
                <img
                    src="/2.jpg"
                    className="rounded-md h-80 aspect-[4/3] object-cover object-center shadow-2xl"
                    style={{ transform }}
                    draggable={false}
                />
            </div>

            <div className="flex gap-2 absolute left-4 bottom-3">
                <button
                    className="cursor-pointer bg-black/50 text-white rounded px-2 py-1 text-xs"
                    onClick={() => zoom(0.1)}
                >
                    +
                </button>

                <button
                    className="cursor-pointer bg-black/50 text-white rounded px-2 py-1 text-xs"
                    onClick={() => zoom(-0.1)}
                >
                    -
                </button>
            </div>

            <button
                className="cursor-pointer absolute right-4 bottom-3 bg-black/50 text-white rounded px-2 py-1 text-xs"
                onClick={reset}
            >
                Reset transformation
            </button>
        </div>
    )
}`
