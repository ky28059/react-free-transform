import TransformBasicExample from '@/app/TransformBasicExample';
import TransformControlsExample from '@/app/TransformControlsExample';
import { InlineCode } from '@/components/InlineCode';


export default function Home() {
    return (
        <main className="container mx-auto px-16 pt-24">
            <h1 className="-ml-2 text-4xl font-bold mb-3">
                @ky28059/react-free-transform
            </h1>
            <p className="mb-4">
                A flexible, CSS <InlineCode>matrix()</InlineCode>-based library for free-transform of arbitrary HTML
                elements in React.
            </p>

            <h2 className="font-bold text-2xl mt-12 mb-3">
                Examples
            </h2>

            <p>
                A simple example using the base <InlineCode>{'<FreeTransformContainer />'}</InlineCode> component:
            </p>
            <TransformBasicExample />

            <p>
                A more complex example with custom transform controls, using the{' '}
                <InlineCode>useFreeTransform()</InlineCode> hook:
            </p>
            <TransformControlsExample />
        </main>
    )
}
