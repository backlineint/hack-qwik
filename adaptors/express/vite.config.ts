import { expressAdaptor } from "@builder.io/qwik-city/adaptors/express/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.polka.tsx", "@qwik-city-plan"],
      },
    },
    plugins: [
      expressAdaptor({
        staticGenerate: true,
      }),
    ],
  };
});
