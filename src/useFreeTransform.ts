import { useCallback, useState, PointerEvent, WheelEvent } from 'react';
import { dilate, identity, Matrix, matrixToCss, multiply, rotate, translate } from './matrix';


type Pointer = {
    id: number,
    initX: number, initY: number,
    lastX: number, lastY: number,
    transformation?: Matrix,
    other?: Pointer | null
}

export default function useFreeTransform() {
    const [pointer, setPointer] = useState<Pointer | null>(null);
    const [transformation, setTransformation] = useState(identity());

    const pointerEnd = useCallback((e: PointerEvent<HTMLElement>) => {
        if (pointer?.id === e.pointerId) {
            if (pointer.other) {
                // Make the other pointer the primary pointer now
                setPointer({
                    ...pointer.other,
                    initX: pointer.other.lastX,
                    initY: pointer.other.lastY,
                    transformation,
                    other: null
                })
            } else {
                setPointer(null);
            }
        } else if (pointer?.other?.id === e.pointerId) {
            pointer.initX = pointer.lastX
            pointer.initY = pointer.lastY
            pointer.other = null
            pointer.transformation = transformation
        }
    }, [pointer])

    const onPointerDown = useCallback((e: PointerEvent<HTMLElement>) => {
        if (pointer && pointer.other) return;

        if (pointer) {
            setPointer({
                ...pointer,
                initX: pointer.lastX,
                initY: pointer.lastY,
                transformation,
                other: {
                    id: e.pointerId,
                    initX: e.clientX,
                    initY: e.clientY,
                    lastX: e.clientX,
                    lastY: e.clientY
                }
            })
        } else {
            setPointer({
                id: e.pointerId,
                initX: e.clientX,
                initY: e.clientY,
                lastX: e.clientX,
                lastY: e.clientY,
                transformation,
                other: null
            })
        }

        e.currentTarget.setPointerCapture(e.pointerId);
    }, [pointer])

    const onPointerMove = useCallback((e: PointerEvent<HTMLElement>) => {
        if (pointer?.id === e.pointerId || pointer?.other?.id === e.pointerId) {
            if (pointer.id === e.pointerId) {
                pointer.lastX = e.clientX;
                pointer.lastY = e.clientY;
            } else if (pointer.other) {
                pointer.other.lastX = e.clientX;
                pointer.other.lastY = e.clientY;
            }
            if (pointer.other) {
                const rect = e.currentTarget.getBoundingClientRect();
                const initXDiff = pointer.initX - pointer.other.initX;
                const initYDiff = pointer.initY - pointer.other.initY;
                const currentXDiff = pointer.lastX - pointer.other.lastX;
                const currentYDiff = pointer.lastY - pointer.other.lastY;

                // Difference between the angles of the initial and current line between the pointers.
                const angleDiff =
                    Math.atan2(currentYDiff, currentXDiff) -
                    Math.atan2(initYDiff, initXDiff);

                // Distance between the pointers relative to their initial distance.
                const scale =
                    Math.hypot(currentXDiff, currentYDiff) /
                    Math.hypot(initXDiff, initYDiff);

                // Midpoint between the two pointers.
                const midX = (pointer.lastX + pointer.other.lastX) / 2;
                const midY = (pointer.lastY + pointer.other.lastY) / 2;

                // Offset of current midpoint from initial midpoint.
                const deltaX = midX - (pointer.initX + pointer.other.initX) / 2;
                const deltaY = midY - (pointer.initY + pointer.other.initY) / 2;

                // Centre of rotation/dilation
                const centerX = midX - (rect.left + rect.width / 2);
                const centerY = midY - (rect.top + rect.height / 2);

                // Rotate and scale around midpoint
                setTransformation(multiply(
                    translate(centerX, centerY),
                    rotate(angleDiff),
                    dilate(scale),
                    translate(-centerX, -centerY),
                    translate(deltaX, deltaY),
                    pointer.transformation!
                ));
            } else {
                setTransformation(multiply(
                    translate(e.clientX - pointer.initX, e.clientY - pointer.initY),
                    pointer.transformation!
                ))
            }
        }
    }, [pointer]);

    const onWheel = useCallback((e: WheelEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = e.clientX - (rect.left + rect.width / 2);
        const centerY = e.clientY - (rect.top + rect.height / 2);

        setTransformation((transformation) => multiply(
            translate(centerX, centerY),
            dilate(1.001 ** -e.deltaY),
            translate(-centerX, -centerY),
            transformation
        ))
    }, []);

    return {
        transform: matrixToCss(transformation),
        transformation,
        callbacks: {
            onPointerDown,
            onPointerMove,
            onWheel,
            onPointerUp: pointerEnd,
            onPointerCancel: pointerEnd,
        }
    }
}
