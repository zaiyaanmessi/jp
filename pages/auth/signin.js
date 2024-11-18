import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div>
      <h1>Sign In</h1>
      {providers ? (
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))
      ) : (
        <p>Loading providers...</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log("Providers:", providers);  // Add this line to log the providers
  return {
    props: { providers: providers || null },
  };
}
