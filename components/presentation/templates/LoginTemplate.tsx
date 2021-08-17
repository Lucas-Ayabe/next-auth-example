import React, { useState } from "react";
import { ClientSafeProvider, signIn } from "next-auth/client";
import Layout from "../molecules/Layout";
import For from "../atoms/For";
import Field from "../molecules/Field";
import notEqualTo from "../../../infrastructure/helpers/logic/not-equal-to";

export type LoginTemplateProps = {
  providers?: Record<string, ClientSafeProvider> | null;
  csrfToken?: string | null;
};

const excludeProvider = (name: string) => (provider: { name: string }) => {
  return notEqualTo(name)(provider.name);
};

const LoginTemplate = ({ providers, csrfToken }: LoginTemplateProps) => {
  const providersList = providers ? Object.values(providers) : [];
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <main className="flow">
        <h1>Login</h1>

        <form
          className="flow"
          method="post"
          action="/api/auth/callback/credentials"
        >
          <input
            name="csrfToken"
            type="hidden"
            defaultValue={csrfToken ?? ""}
          />

          <Field
            identifier="cpf"
            name="cpf"
            label="CPF"
            value={cpf}
            onChange={setCpf}
          />

          <Field
            identifier="password"
            name="password"
            label="Password"
            value={password}
            onChange={setPassword}
          />

          <button className="button" type="submit">
            Sign in
          </button>
        </form>

        <div className="row">
          <For each={providersList.filter(excludeProvider("Domain Login"))}>
            {(provider) => (
              <button
                type="button"
                className="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            )}
          </For>
        </div>
      </main>
    </Layout>
  );
};

export default LoginTemplate;
