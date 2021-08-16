import React, { useEffect } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

type Component<T> = React.ComponentType<T>;

function withAuth<T>(WrappedComponent: Component<T>) {
  return (props: T) => {
    const router = useRouter();
    const [session] = useSession();

    useEffect(() => {
      if (!session) {
        router.push("/login");
      }
    }, [session]);

    if (!session) return <></>;
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
