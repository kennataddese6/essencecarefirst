import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unsafe-function-type": "off", // Disable Function type warning
      "react/no-unescaped-entities": "off", // Disable unescaped characters warning
      "react-hooks/exhaustive-deps": "off", // Disable missing dependencies warning
      "react/no-children-prop": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
]

export default eslintConfig
