{
  BACKUP_SNIPPET_TS_JS: `
  // INICIO  //======================================

  {
    // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
    // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
    // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
    // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
    // Placeholders with the same ids are connected.
    // Example:
    // "Print to console": {
    // 	"scope": "javascript,typescript",
    // 	"prefix": "log",
    // 	"body": [
    // 		"console.log('$1');",
    // 		"$2"
    // 	],
    // 	"description": "Log output to console"
    // }
    "divid": {
      "scope": "javascript,typescript",
      "prefix": "divid",
      "body": [
        "",
        "/* ---------------------- // ---------------------- */",
        "/* $0 */",
        "//"
      ],
      "description": "divid"
    },
    "tipagem js": {
      "scope": "javascript,typescript",
      "prefix": "type",
      "body": [
        "/**",
        " * descricao :: $0",
        " * @param {$1} $2 ",
        " * @param {string} nomeParam // exemplo",
        " */",
        "",
        ""
      ],
      "description": "tipagem js"
    },
    "metodo__interface--ts": {
      "scope": "javascript,typescript",
      "prefix": "metodo__interface--ts",
      "body": ["async ${1:metodo}: () => Promise<${2: tipo}[]>"],
      "description": "method__interface--ts"
    },
    "metodo__classe--ts": {
      "scope": "javascript,typescript",
      "prefix": "metodo__classe--ts",
      "body": ["async ${1:metodo}(): Promise<${2: tipo}[]> {}"],
      "description": "method__interface--ts"
    },
    //
    "vitest": {
      "scope": "javascript,typescript",
      "prefix": "test vitest describe",
      "body": [
        "import { describe, it, expect } from 'vitest'",
        "",
        "",
        "describe('Categoria', () => {",
        "    it(`[] deve  `, () => {",
        "",
        "        expect(true)",
        "    })",
        "})"
      ],
      "description": "vitest"
    },
    //
    "export-modulo-classe__JS": {
      "scope": "javascript",
      "prefix": "export-modulo-classe__JS",
      "body": [
        "class ${1:modulo} {",
        "    constructor() {}",
        "}",
        "",
        "module.exports = ${1:modulo}"
      ],
      "description": "export-modulo-classe__JS"
    },
    "comment": {
      "prefix": "comment",
      "body": ["/*", "* $0", "*/"],
      "description": "comment"
    },
    "class": {
      "prefix": "export class - typescript",
      "scope": "javascript,typescript",
      "body": [
        "export class ${TM_DIRECTORY/^.+\\\\/(.*)$/$1/}$1 {",
        "    constructor() {}",
        "}"
      ],
      "description": "class"
    },
    "interface": {
      "prefix": "export interface - typescript",
      "scope": "javascript,typescript",
      "body": ["export interface ${TM_DIRECTORY/^.+\\\\/(.*)$/$1/}$1 {$2}"],
      "description": "interface"
    },
    "export tudo": {
      "prefix": "export tudo",
      "scope": "javascript,typescript",
      "body": ["export * from '.$1'"],
      "description": "export tudo"
    },
    "eslint nao usar var": {
      "prefix": "eslint nao usar var",
      "scope": "javascript,typescript",
      "body": ["/* eslint-disable no-unused-vars */"],
      "description": "eslint nao usar var"
    },
    "objeto": {
      "prefix": "objeto",
      "scope": "javascript,typescript",
      "body": [
        "const ${1:objeto} = {",
        "    contexto: '',",
        "    entrada: ``,",
        "    processamento: ``,",
        "    saida: ``,",
        "    detalhes: ``",
        "}"
      ],
      "description": "objeto"
    },
    "requisito": {
      "prefix": "requisito",
      "body": [
        "## API : $1",
        "",
        "## REQUISITOS",
        "- [] Deve ser possivel ",
        "",
        "",
        "## REGRAS DE NEGOCIO",
        "- [] Não Deve ser possivel "
      ],
      "description": "requisito"
    },
    "no-problem-export": {
      "prefix": "no-problem-export",
      "scope": "javascript,typescript",
      "body": [
        "/* ---------------------- // ---------------------- */",
        "//",
        "//",
        "export default 1",
        "//",
        "//",
        "/* ---------------------- // ---------------------- */"
      ],
      "description": "no-problem-export"
    },
    "var__obj_repete": {
      "prefix": "var__obj_repete",
      "scope": "javascript,typescript",
      "body": ["${1:var}: `$2`,", "$3"],
      "description": "var"
    },
    "obj-estudo": {
      "prefix": "obj-estudo",
      "body": [
        "/* eslint-disable no-unused-vars */",
        "",
        "const ${1:obj} = {",
        "    sub_chaves: {",
        "        contexto: `",
        "            ...",
        "            `,",
        "",
        "        cenarios_quePrecisaTer: `",
        "            ['',]`,",
        "        entrada: `",
        "            ...",
        "            `,",
        "",
        "        processa: `",
        "            ...",
        "            `,",
        "",
        "        saida: `",
        "            ...",
        "        `",
        "",
        "    }",
        "}"
      ],
      "description": "obj-estudo"
    }
  }
  
  // FIM  //======================================

  `,
}