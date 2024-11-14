import { A, Location, useLocation } from "@solidjs/router";
import { For, Show, useContext } from "solid-js";
import { signInWithGoogle, signout } from "../firebaseClient";
import { AuthUserContext } from "../context";

export default function Nav() {

  const location = useLocation();
  const { user } = useContext(AuthUserContext);

  const login = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const logout = async () => {
    try {
      await signout();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }


  const items: { title: string, href: string, active: (location: Location) => boolean }[] = [
    {
      title: "Solidify", href: "/",
      active: (location) => location.pathname === "/"

    },
    {
      title: "Challenges", href: "/challenges",
      active: (location) => location.pathname.startsWith("/challenges")
    }, {
      title: "Leaderboard", href: "/leaderboard",
      active: (location) => location.pathname.startsWith("/leaderboard")
    }
  ]
  return (
    <nav class="fixed top-0 right-0 p-4 w-full text-center flex gap-8">

      <For each={items}>
        {(item) => (
          <A class="px-0" classList={{ "underline": item.active(location) }} href={item.href}>{item.title}</A>
        )}
      </For>
      <div class="flex-1"></div>
      <Show fallback={<A href="#" on:click={login}>Login</A>} when={user()}>
        <A href="#" on:click={logout}>@{user()?.displayName}</A>
      </Show>
    </nav>
  );
}
