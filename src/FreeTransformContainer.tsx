'use client'

import { ReactNode, useEffect, useRef } from 'react';
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
    const containerRef = useRef<HTMLDivElement>(null);

    const { transform, zoom, reset, callbacks } = useFreeTransform();

    useEffect(() => {
        // Unideal, but forced by https://github.com/facebook/react/issues/14856
        containerRef.current?.addEventListener('wheel', (e) => e.preventDefault());
    }, [containerRef.current]);

    return (
        <div
            ref={containerRef}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                touchAction: 'none',
            }}
            className={props.className}
            {...callbacks}
        >
            {props.children({ transform, zoom, reset })}
        </div>
    )
}
