// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[blog]/this.tsx";
import * as $1 from "./routes/[name].tsx";
import * as $2 from "./routes/api/joke.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/ThemeSwitcher.tsx";

const manifest = {
  routes: {
    "./routes/[blog]/this.tsx": $0,
    "./routes/[name].tsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/ThemeSwitcher.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
