'use client'

import { ReactNode, useState } from 'react';
import { SyntaxHighlighter } from '@/components/SyntaxHighlighter';


type ExampleContainerProps = {
    code: string,
    children: ReactNode
}

export default function ExampleContainer(props: ExampleContainerProps) {
    const [showSource, setShowSource] = useState(false);

    return (
        <div className="relative h-96 mt-5 mb-8 rounded border border-black/10">
            <div className="absolute top-3 right-4 bg-black/50 text-white text-xs px-1 py-1 rounded-md backdrop-blur-sm font-medium">
                <button
                    onClick={() => setShowSource(false)}
                    className={'rounded px-1.5 py-1 transition duration-150' + (!showSource ? ' bg-white/20' : '')}
                >
                    Preview
                </button>
                <button
                    onClick={() => setShowSource(true)}
                    className={'rounded px-1.5 py-1 transition duration-150' + (showSource ? ' bg-white/20' : '')}
                >
                    Code
                </button>
            </div>

            {showSource ? (
                <div className="px-6 py-4 text-sm h-full overflow-auto">
                    <SyntaxHighlighter language="tsx">
                        {props.code}
                    </SyntaxHighlighter>
                </div>
            ) : props.children}
        </div>
    )
}
