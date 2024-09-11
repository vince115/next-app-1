// app/Login/page.tsx
"use client";

import * as React from "react";
import {
  AppProvider,
  AuthProvider,
  AuthResponse,
  SignInPage,
} from "@toolpad/core";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const providers: AuthProvider[] = [
  { id: "credentials", name: "Email and password" },
];

const Login: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const signIn = async (
    provider: AuthProvider,
    formData?: FormData
  ): Promise<AuthResponse> => {
    if (provider.id === "credentials") {
      const email = formData?.get("email") as string;
      const password = formData?.get("password") as string;

      console.log("Submitting credentials:", { email, password }); // Debug log

      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        // Check if response is OK
        if (!res.ok) {
          console.error(`Failed to sign in: ${res.status} - ${res.statusText}`);
          const errorText = await res.text(); // Get error text for more detail
          console.error("Error response body:", errorText);

          return {
            type: "CredentialsSignin",
            error: "Invalid credentials",
          };
        }
        const contentType = res.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          localStorage.setItem("token", data.token); // Store JWT
          router.push("/Protected"); // Redirect using router
          return { type: "CredentialsSignin" };
        } else {
          console.error("Unexpected response format:", contentType);
          return {
            type: "CredentialsSignin",
            error: "Unexpected response format",
          };
        }
      } catch (error) {
        console.error("Error during sign in:", error);
        return {
          type: "CredentialsSignin",
          error: "An error occurred during sign in",
        };
      }
    }

    return { type: "CredentialsSignin", error: "Unknown provider" };

    //   const data = await res.json();

    //   if (res.ok) {
    //     localStorage.setItem("token", data.token); // 存儲 JWT
    //     router.push("/Protected"); // 使用 router 進行重定向
    //     return { type: "CredentialsSignin" };
    //   } else {
    //     return {
    //       type: "CredentialsSignin",
    //       error: data.message,
    //     };
    //   }
    // }

    // Fallback response for unrecognized provider (though it shouldn't happen here)
    //return { type: "CredentialsSignin", error: "Unknown provider" };
  };

  return (
    <Container>    
        <Paper className="m-2 p-2 pb-[4rem] ">
          <AppProvider theme={theme}>
            <SignInPage signIn={signIn} providers={providers} />
          </AppProvider>
        </Paper>
    </Container>
  );
};

export default Login;
