import languageServer from './teo-language-server'
import { TeoVSCodePlugin } from './types'

const plugins: TeoVSCodePlugin[] = [languageServer]

export default plugins