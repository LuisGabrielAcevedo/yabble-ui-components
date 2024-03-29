import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import svg from "rollup-plugin-svg";
import commonjs from "@rollup/plugin-commonjs";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";

export default [
  {
    input: "./src/lib/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      scss(),
      svg(),
      commonjs(),
      url({
        limit: 10 * 1024,
        include: ["**/*.svg"],
        emitFiles: true,
      }),
      svgr(),
    ],
  },
];
