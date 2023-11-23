import { jwtDecode } from "jwt-decode";
import {
  Output,
  boolean,
  email,
  minLength,
  number,
  object,
  parse,
  string,
} from "valibot";

type UserResponse = {
  success: boolean;
  message: string;
};

const UserSchema = object({
  id: string("Your id must be a string.", [
    minLength(5, "id must be minimum 5 characters"),
  ]),
  name: string("Your title must be a string.", [
    minLength(5, "title must be minimum 5 characters"),
  ]),
  email: string("Your content must be a string.", [
    minLength(5, "content must be minimum 5 characters"),
    email("Email is wrong format"),
  ]),
  role: string("Your role must be a string.", [
    minLength(2, "role must be minimum 2 characters"),
  ]),
  verified: boolean(),
  createdAt: string("Your content must be a string.", [
    minLength(5, "content must be minimum 5 characters"),
  ]),
  updatedAt: string("Your content must be a string.", [
    minLength(5, "content must be minimum 5 characters"),
  ]),
  iat: number(),
  exp: number(),
});

export type UserProps = Output<typeof UserSchema>;

export function useAuth() {
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const res = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (res.ok) {
      const data = (await res.json()) as UserResponse;
      if (data.success) {
        const token = atob(data.message);
        const user = jwtDecode(token) as UserProps;
        const parsedData = parse(UserSchema, user);
        return {
          user: parsedData,
          token: data.message,
        };
      }
    }
  };
  const googleCallback = async (code: string) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/user/google/callback?code=${code}`,
        {
          credentials: "include",
        },
      );
      if (res.ok) {
        const data = (await res.json()) as UserResponse;
        if (data.success) {
          const token = atob(data.message);
          const user = jwtDecode(token) as UserProps;
          const parsedData = parse(UserSchema, user);
          return {
            user: parsedData,
            token: data.message,
          };
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { login, googleCallback };
}
