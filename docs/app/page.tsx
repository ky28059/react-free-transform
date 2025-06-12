import TransformExample from '@/app/TransformExample';
import TransformResetExample from '@/app/TransformResetExample';


export default function Home() {
    return (
        <main className="container mx-auto px-16 pt-24">
            <h1 className="text-4xl font-bold mb-3">
                @ky28059/react-free-transform
            </h1>
            <p className="mb-4">
                A flexible, `matrix()`-based library for free-transform of arbitrary HTML elements in React.
            </p>

            <h2 className="font-bold text-xl mt-12">
                Examples:
            </h2>

            <TransformExample />
            <TransformResetExample />
        </main>
    )
}
