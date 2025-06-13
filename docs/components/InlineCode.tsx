import type { ReactNode } from 'react';


export function InlineCode(props: { children: ReactNode }) {
    return (
        <code className="text-primary bg-black/10 text-sm rounded px-2 py-1">
            {props.children}
        </code>
    )
}
