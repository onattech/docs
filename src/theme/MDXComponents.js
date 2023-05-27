// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents"
import TerminalWindow from "../components/TerminalWindow"
import Endpoint from "../components/Endpoint"

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "sampleEmail" tag to our <SampleEmail /> component!
    // `SampleEmail` will receive all props that were passed to `sampleEmail` in MDX
    endpoint: Endpoint,
    terminalWindow: TerminalWindow,
}