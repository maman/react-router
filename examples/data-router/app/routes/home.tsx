import type * as Route from "./+types.home";
import sleep from "../sleep";

export async function clientLoader() {
  await sleep();
  return {
    date: new Date().toISOString(),
  };
}

export default function Home({ loaderData: data }: Route.ComponentProps) {
  return (
    <>
      <h2>Home</h2>
      <p>Date from loader: {data.date}</p>
    </>
  );
}