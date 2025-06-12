import { ReactNode, useEffect, useRef } from 'react';
import useFreeTransform from './useFreeTransform';


type FreeTransformState = {
    transform: string;
}

type FreeTransformContainerProps = {
    className?: string,
    children: (s: FreeTransformState) => ReactNode
}

export default function FreeTransformContainer(props: FreeTransformContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { transform, callbacks } = useFreeTransform();

    useEffect(() => {
        // Unideal, but forced by https://github.com/facebook/react/issues/14856
        containerRef.current?.addEventListener('wheel', (e) => e.preventDefault());
    }, [containerRef.current]);

    return (
        <div
            ref={containerRef}
            className={'flex items-center justify-center overflow-hidden touch-none' + (props.className ? ` ${props.className}` : '')}
            {...callbacks}
        >
            {props.children({ transform })}
        </div>
    )
}
