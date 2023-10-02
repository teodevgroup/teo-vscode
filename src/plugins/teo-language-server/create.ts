import { LanguageClient, LanguageClientOptions, ServerOptions } from "vscode-languageclient/node";

export function createLanguageServer(
    serverOptions: ServerOptions,
    clientOptions: LanguageClientOptions,
  ): LanguageClient {
    return new LanguageClient('teo', 'Teo Language Server', serverOptions, clientOptions)
  }