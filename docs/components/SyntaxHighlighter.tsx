import { Prism } from 'react-syntax-highlighter';


type SyntaxHighlighterProps = {
    language?: string,
    children: string | string[]
}

export function SyntaxHighlighter(props: SyntaxHighlighterProps) {
    return (
        <Prism
            language={props.language}
            codeTagProps={{ style: {} }}
            showLineNumbers
            useInlineStyles={false}
        >
            {props.children}
        </Prism>
    )
}
