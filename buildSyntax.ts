import { readFileSync, writeFileSync } from 'fs'
import { parse } from 'yaml'

declare interface MapLike<T> {
    [s: string]: T;
}

declare interface TmGrammarRuleName {
    name: string;
}

declare interface TmGrammarRule {
    name?: string;
    match: string;
    captures: MapLike<TmGrammarRuleName>;
    contentName?: string;
    begin: string;
    end: string;
    beginCaptures?: MapLike<TmGrammarRuleName>;
    endCaptures?: MapLike<TmGrammarRuleName>;
    patterns: TmGrammarRule[];
    include: string;
}

declare interface TmGrammarRepositoryPatterns {
    patterns: TmGrammarRule[];
}

declare interface TmGrammar {
    name: string;
    scopeName: string;
    fileTypes: string[];
    uuid: string;
    variables?: MapLike<string>;
    patterns?: TmGrammarRule[];
    repository: MapLike<TmGrammarRule>;
}

declare interface TmThemeSetting {
    scope: string;
    settings: { vsclassificationtype: string; };
}
declare interface TmTheme {
    name: string;
    uuid: string;
    settings: TmThemeSetting[];
}

type VariableReplacer = [RegExp, string]
const variableReplacers: VariableReplacer[] = []
function updateVariableReplacers(variables: MapLike<string>) {
    for (const variableName in variables) {
        // Replace the pattern with earlier variables
        const pattern = replacePatternVariables(variables[variableName], variableReplacers);
        variableReplacers.push([new RegExp(`{{${variableName}}}`, "gim"), pattern]);
    }
}
function replacePatternVariables(pattern: string, variableReplacers: VariableReplacer[]) {
    let result = pattern;
    for (const [variableName, value] of variableReplacers) {
        result = result.replace(variableName, value);
    }
    return result;
}
function updateGrammarVariables(grammar: TmGrammar, variables: MapLike<string>) {
    const variableReplacers: VariableReplacer[] = [];
    for (const variableName in variables) {
        // Replace the pattern with earlier variables
        const pattern = replacePatternVariables(variables[variableName], variableReplacers);
        variableReplacers.push([new RegExp(`{{${variableName}}}`, "gim"), pattern]);
    }
    transformGrammarRepository(
        grammar,
        ["begin", "end", "match"],
        pattern => replacePatternVariables(pattern, variableReplacers)
    );
    return grammar;
}
function transformGrammarRepository(grammar: TmGrammar, propertyNames: string[], transformProperty: (ruleProperty: string) => string) {
    const repository = grammar.repository;
    for (let key in repository) {
        transformGrammarRule(repository[key], propertyNames, transformProperty);
    }
}
function transformGrammarRule(rule: any, propertyNames: string[], transformProperty: (ruleProperty: string) => string) {
    for (const propertyName of propertyNames) {
        const value = rule[propertyName];
        if (typeof value === 'string') {
            rule[propertyName] = transformProperty(value);
        }
    }

    for (var propertyName in rule) {
        const value = rule[propertyName];
        if (typeof value === 'object') {
            transformGrammarRule(value, propertyNames, transformProperty);
        }
    }
}

const yamlContent = readFileSync("syntaxes/teo.tmLanguage.yaml").toString()
const yamlObject: TmGrammar = parse(yamlContent)
const variables = yamlObject.variables
delete yamlObject['variables']
updateVariableReplacers(variables!)
updateGrammarVariables(yamlObject, variables!)
const jsonContent = JSON.stringify(yamlObject, null, 2)
writeFileSync("syntaxes/teo.tmLanguage.json", jsonContent)