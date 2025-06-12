'use client'

import { useFreeTransform } from '@ky28059/react-free-transform';


export default function TransformResetExample() {
    const { transform, reset, callbacks } = useFreeTransform();

    return (
        <div className="relative">
            <div
                className="flex items-center justify-center overflow-hidden touch-none rounded border border-black/10 bg-pink-100 bg-[linear-gradient(135deg,#fb64b680_10%,#0000_0,#0000_50%,#fb64b680_0,#fb64b680_60%,#0000_0,#0000)] bg-[length:7.07px_7.07px] h-96 my-10"
                {...callbacks}
            >
                <img
                    src="/2.jpg"
                    className="rounded-md h-80 aspect-[4/3] object-cover object-center shadow-xl"
                    style={{ transform }}
                    draggable={false}
                />
            </div>

            <button
                className="cursor-pointer absolute right-4 bottom-3 bg-black/50 text-white rounded px-2 py-1 text-xs"
                onClick={(e) => {
                    e.preventDefault();
                    reset();
                }}
            >
                Reset transformation
            </button>
        </div>
    )
}
