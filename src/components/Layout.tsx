import { createSignal, JSX, onMount, Suspense } from "solid-js"
import Nav from "./Nav"
import { Location, Params } from "@solidjs/router";
import LoadingIndicator from "./LoadingIndicator";
import { onAuthStateChanged } from "../firebaseClient";
import { AuthUser } from "../types";
import { AuthUserContext } from "../context";


const Layout = (props: { params: Params; location: Location<unknown>; data: unknown; children?: JSX.Element; }) => {


    const [authUser, setAuthUser] = createSignal<AuthUser>();


    onMount(() => {
        onAuthStateChanged(async (user) => {
            if (user) {
                setAuthUser({
                    uid: user.uid,
                    email: user.email!,
                    displayName: user.displayName!,
                    photoUrl: user.photoURL!,
                    token: await user.getIdToken()
                });
            } else {
                setAuthUser(undefined);
            }
        });
    });

    return <AuthUserContext.Provider value={{ user: authUser }}>
        <Nav />
        <Suspense fallback={<LoadingIndicator />}>{props.children}</Suspense>
    </AuthUserContext.Provider>
}

export default Layout;