import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export const routes: RouteConfig = [
  layout("./routes/layout.tsx", [
    index("./routes/home.tsx"),
    route("todos", "./routes/todos.tsx", [
      route(":id", "./routes/todo.tsx"),
    ]),
    route("deferred", "./routes/defer.tsx"),
  ]),
];