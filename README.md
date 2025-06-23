# react-free-transform
A simple React library for touch or key-based free transform of arbitrary HTML elements.

```bash
npm i @ky28059/react-free-transform
```

### Usage
For detailed docs, see the documentation site [here](https://react-free-transform.kevin.fish/).

```tsx
import { FreeTransformContainer } from '@ky28059/react-free-transform';

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
}
```
```tsx
import { useFreeTransform } from '@ky28059/react-free-transform';

export default function Example() {
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
}
```
