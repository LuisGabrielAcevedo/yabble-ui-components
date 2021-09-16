import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import svg from "rollup-plugin-svg";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import images from "rollup-plugin-image-files";

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
      image(),
      images(),
    ],
  },
];
