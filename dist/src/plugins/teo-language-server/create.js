"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLanguageServer = void 0;
const node_1 = require("vscode-languageclient/node");
function createLanguageServer(serverOptions, clientOptions) {
    return new node_1.LanguageClient('teo', 'Teo Language Server', serverOptions, clientOptions);
}
exports.createLanguageServer = createLanguageServer;
//# sourceMappingURL=create.js.map