import type { ReactNode } from 'react';

// Components
import TransformBasicExample from '@/app/TransformBasicExample';
import TransformControlsExample from '@/app/TransformControlsExample';
import { InlineCode } from '@/components/InlineCode';
import { SyntaxHighlighter } from '@/components/SyntaxHighlighter';


export default function Home() {
    return (
        <main className="container mx-auto px-16 py-24">
            <h1 className="-ml-2 text-4xl font-bold mb-3">
                @ky28059/react-free-transform
            </h1>
            <p className="mb-6">
                A flexible, CSS <InlineCode>matrix()</InlineCode>-based library for free-transform of arbitrary HTML
                elements in React.
            </p>

            <div className="rounded-lg overflow-hidden !text-sm">
                <SyntaxHighlighter language="bash">
                    npm i @ky28059/react-free-transform
                </SyntaxHighlighter>
            </div>

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

            <h2 className="font-bold text-2xl mt-12 mb-3">
                Usage
            </h2>
            <p className="mb-4">
                For basic use cases, <InlineCode>react-free-transform</InlineCode> exports a simple{' '}
                <InlineCode>{'<FreeTransformContainer />'}</InlineCode> component. The{' '}
                <InlineCode>FreeTransformContainer</InlineCode> renders a wrapper <InlineCode>div</InlineCode> that
                registers the transform controls on itself. The current transformation, as well as some callback
                functions, are exposed to the component's children via render callback.
            </p>
            <div className="rounded-lg overflow-hidden !text-sm">
                <SyntaxHighlighter language="tsx">
                    {ex1}
                </SyntaxHighlighter>
            </div>
            <p className="mt-6 mb-4 font-bold">
                Component API:
            </p>
            <PropsTable>
                <tr>
                    <TableCell><span className="font-mono">className</span></TableCell>
                    <TableCell><span className="font-mono">string?</span></TableCell>
                    <TableCell>
                        An optional <InlineCode>className</InlineCode> to apply to the wrapper{' '}
                        <InlineCode>div</InlineCode>.
                    </TableCell>
                </tr>
                <tr>
                    <TableCell><span className="font-mono">children</span></TableCell>
                    <TableCell><span className="font-mono">{'(s: FreeTransformState) => ReactNode'}</span></TableCell>
                    <TableCell>
                        A render function that returns the container's children.
                    </TableCell>
                </tr>
            </PropsTable>
            <p className="my-6">
                where the render callback is passed an object with properties
            </p>
            <PropsTable>
                <tr>
                    <TableCell><span className="font-mono">transform</span></TableCell>
                    <TableCell><span className="font-mono">string</span></TableCell>
                    <TableCell>
                        The CSS property value of the current transform.
                    </TableCell>
                </tr>
                <tr>
                    <TableCell><span className="font-mono">zoom</span></TableCell>
                    <TableCell><span className="font-mono">{'(p: number) => void'}</span></TableCell>
                    <TableCell>
                        A callback that zooms the container by the given scale (e.g. <InlineCode>zoom(0.3)</InlineCode>{' '}
                        roughly dilates the transform by 130%). To zoom out, pass a negative value (e.g.{' '}
                        <InlineCode>zoom(-0.1)</InlineCode>).
                    </TableCell>
                </tr>
                <tr>
                    <TableCell><span className="font-mono">reset</span></TableCell>
                    <TableCell><span className="font-mono">{'() => void'}</span></TableCell>
                    <TableCell>
                        A callback that resets the current transformation.
                    </TableCell>
                </tr>
            </PropsTable>

            <p className="mt-12 mb-4">
                For more advanced use cases, use the <InlineCode>useFreeTransform()</InlineCode> hook directly.
            </p>
            <div className="rounded-lg overflow-hidden !text-sm">
                <SyntaxHighlighter language="tsx">
                    {ex2}
                </SyntaxHighlighter>
            </div>
            <p className="mt-6 mb-4">
                The hook returns an object of
            </p>
            <PropsTable>
                <tr>
                    <TableCell><span className="font-mono">register</span></TableCell>
                    <TableCell><span className="font-mono">{'(c: HTMLElement | null) => void'}</span></TableCell>
                    <TableCell>
                        A callback that registers the given <InlineCode>HTMLElement</InlineCode> as a transform
                        wrapper. When registering a JSX element, you can pass this callback as a <InlineCode>ref</InlineCode>.
                    </TableCell>
                </tr>
                <tr>
                    <TableCell><span className="font-mono">transform</span></TableCell>
                    <TableCell><span className="font-mono">string</span></TableCell>
                    <TableCell>
                        The CSS property value of the current transform.
                    </TableCell>
                </tr>
                <tr>
                    <TableCell><span className="font-mono">zoom</span></TableCell>
                    <TableCell><span className="font-mono">{'(p: number) => void'}</span></TableCell>
                    <TableCell>
                        A callback that zooms the container by the given scale.
                    </TableCell>
                </tr>
                <tr>
                    <TableCell><span className="font-mono">reset</span></TableCell>
                    <TableCell><span className="font-mono">{'() => void'}</span></TableCell>
                    <TableCell>
                        A callback that resets the current transformation.
                    </TableCell>
                </tr>
            </PropsTable>
        </main>
    )
}

function PropsTable(props: { children: ReactNode }) {
    return (
        <table className="w-full border border-black/20 table-fixed">
            <tbody>
                <tr className="bg-gray-100">
                    <TableHeaderCell className="w-32">Prop</TableHeaderCell>
                    <TableHeaderCell className="w-80">Type</TableHeaderCell>
                    <TableHeaderCell className="w-full">Value</TableHeaderCell>
                </tr>
                {props.children}
            </tbody>
        </table>
    )
}

function TableHeaderCell(props: { children: ReactNode, className: string }) {
    return (
        <th className={'px-3 py-2 border border-black/15 text-sm font-bold ' + props.className}>
            {props.children}
        </th>
    )
}

function TableCell(props: { children: ReactNode }) {
    return (
        <td className="px-3 py-2 border border-black/15 text-sm text-pretty">
            {props.children}
        </td>
    )
}

const ex1 = `import { FreeTransformContainer } from '@ky28059/react-free-transform';

export default function Example() {
    return (
        <FreeTransformContainer className="...">
            {({ transform }) => (
                // Render your wrapper children here
                <img
                    src="..."
                    className="..."
                    style={{ transform }}
                    draggable={false}
                />
            )}
        </FreeTransformContainer>
    )
}`

const ex2 = `import { useFreeTransform } from '@ky28059/react-free-transform';

export default function TransformControlsExample() {
    const { register, transform, zoom, reset } = useFreeTransform();

    return (
        <div>
            <div
                // For the controls to work, it's recommended that your container has the following styles:
                className="flex items-center justify-center overflow-hidden touch-none ..."
                ref={register}
            >
                <img
                    src="..."
                    className="..."
                    style={{ transform }}
                    draggable={false}
                />
            </div>

            <button className="..." onClick={() => zoom(0.1)}>
                +
            </button>

            <button className="..." onClick={() => zoom(-0.1)}>
                -
            </button>

            <button className="..." onClick={reset}>
                Reset transformation
            </button>
        </div>
    )
}`
