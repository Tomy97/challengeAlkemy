import { defineConfig } from "@rsbuild/core";
import { DefinePlugin } from '@rspack/core'
import { pluginReact } from "@rsbuild/plugin-react";
import dotenv from "dotenv";

dotenv.config({ path: './src/.env' });

export default defineConfig({
  plugins: [
    pluginReact()
  ],
  html: {
    template: "./public/index.html",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  server: {
    port: Number(process.env.RS_PORT) || 5000,
  },
  tools: {
    rspack: (conf) => {
      conf.plugins?.push(
        new DefinePlugin({
          "process.env.RS_HERO_API_URL": JSON.stringify(process.env.RS_HERO_API_URL),
          "process.env.RS_AUTH_API_URL": JSON.stringify(process.env.RS_AUTH_API_URL),
          "process.env.RS_HERO_API_KEY": JSON.stringify(process.env.RS_HERO_API_KEY),
          "process.env.RS_PORT": JSON.stringify(process.env.RS_PORT),
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
        })
      )
    }
  }
});
