import { authClient } from "./auth-client";

export const handleSignInGoole=async()=>{

  const data = await authClient.signIn.social({
    provider: "google",
  });

}

export const handleSignInGithub = async()=>{
  const data = await authClient.signIn.social({
        provider: "github"
    })
}