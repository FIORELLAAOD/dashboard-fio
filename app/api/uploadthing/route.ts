
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

// Logs para confirmar que se alcanza esta ruta
console.log("GET and POST handlers created for /api/uploadthing");

