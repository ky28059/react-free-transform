'use client'

import type { ReactNode } from 'react';
import useFreeTransform from './useFreeTransform';


type FreeTransformState = {
    transform: string,
    zoom: (p: number) => void,
    reset: () => void,
}

type FreeTransformContainerProps = {
    className?: string,
    children: (s: FreeTransformState) => ReactNode
}

export default function FreeTransformContainer(props: FreeTransformContainerProps) {
    const { register, transform, zoom, reset } = useFreeTransform();

    return (
        <div
            ref={register}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                touchAction: 'none',
            }}
            className={props.className}
        >
            {props.children({ transform, zoom, reset })}
        </div>
    )
}
