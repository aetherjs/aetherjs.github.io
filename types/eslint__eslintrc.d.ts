declare module "@eslint/eslintrc" {
  export class FlatCompat {
    constructor(options: { baseDirectory: string });
    extends(...configs: string[]): import("eslint").Linter.FlatConfig[];
  }
}
