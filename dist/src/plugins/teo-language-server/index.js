"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageclient/node");
const create_1 = require("./create");
let client;
let serverModule = require.resolve('@teocloud/teo-language-server/dist/src/bin');
const isDebugMode = () => process.env.VSCODE_DEBUG_MODE === 'true';
const activateClient = (context, serverOptions, clientOptions) => {
    // Create the language client
    client = (0, create_1.createLanguageServer)(serverOptions, clientOptions);
    client.start();
};
const plugin = {
    name: 'teo-language-server',
    enabled: () => true,
    activate: (context) => __awaiter(void 0, void 0, void 0, function* () {
        // The debug options for the server
        // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
        const debugOptions = {
            execArgv: ['--nolazy', '--inspect=6009'],
            env: { DEBUG: true },
        };
        // If the extension is launched in debug mode then the debug server options are used
        // Otherwise the run options are used
        const serverOptions = {
            run: { module: serverModule, transport: node_1.TransportKind.ipc },
            debug: {
                module: serverModule,
                transport: node_1.TransportKind.ipc,
                options: debugOptions,
            },
        };
        const clientOptions = {
            // Register the server for teo documents
            documentSelector: [{ scheme: 'file', language: 'teo' }],
        };
        activateClient(context, serverOptions, clientOptions);
    }),
    deactivate: () => __awaiter(void 0, void 0, void 0, function* () {
        if (!client) {
            return undefined;
        }
        return client.stop();
    }),
};
exports.default = plugin;
//# sourceMappingURL=index.js.map