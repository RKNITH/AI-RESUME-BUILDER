import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";

type Env = {
  Variables: {
    user: KindeUser<Record<string, any>>;
  };
};

export const getAuthUser = createMiddleware<Env>(async (c, next) => {
  try {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
      throw new HTTPException(401, {
        res: c.json({ error: "unauthorized" }),
      });
    }
    const user = await getUser();
    c.set("user", user);
    await next();
  } catch (error) {
    console.log(error);
    throw new HTTPException(401, {
      res: c.json({ error: "unauthorized" }),
    });
  }
});
