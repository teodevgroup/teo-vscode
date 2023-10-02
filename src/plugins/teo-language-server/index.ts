import {
  CancellationToken,
  CodeAction,
  CodeActionContext,
  Command,
  commands,
  ExtensionContext,
  Range,
  TextDocument,
  window,
} from 'vscode'
import {
  CodeAction as lsCodeAction,
  CodeActionParams,
  CodeActionRequest,
  LanguageClientOptions,
  ProvideCodeActionsSignature,
} from 'vscode-languageclient'
import { LanguageClient, ServerOptions, TransportKind } from 'vscode-languageclient/node'
import { TeoVSCodePlugin } from '../types'
import { createLanguageServer } from './create'

let client: LanguageClient
let serverModule: string = require.resolve('teo-language-server/dist/src/bin')

const isDebugMode = () => process.env.VSCODE_DEBUG_MODE === 'true'

const activateClient = (
  context: ExtensionContext,
  serverOptions: ServerOptions,
  clientOptions: LanguageClientOptions,
) => {
  // Create the language client
  client = createLanguageServer(serverOptions, clientOptions)
  client.start()
}

const plugin: TeoVSCodePlugin = {
  name: 'teo-language-server',
  enabled: () => true,
  activate: async (context) => {

    // The debug options for the server
    // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
    const debugOptions = {
      execArgv: ['--nolazy', '--inspect=6009'],
      env: { DEBUG: true },
    }

    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    const serverOptions: ServerOptions = {
      run: { module: serverModule, transport: TransportKind.ipc },
      debug: {
        module: serverModule,
        transport: TransportKind.ipc,
        options: debugOptions,
      },
    }

    const clientOptions: LanguageClientOptions = {
      // Register the server for teo documents
      documentSelector: [{ scheme: 'file', language: 'teo' }],
    }

    activateClient(context, serverOptions, clientOptions)
  },
  deactivate: async () => {
    if (!client) {
      return undefined
    }
    return client.stop()
  },
}

export default plugin