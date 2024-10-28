// src/components/AdminApp.tsx
"use client"; // Use this for client components
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import for useRouter

const dataProvider = jsonServerProvider("https://my-json-server.typicode.com/arifulislamctg11/jsonplaceholder");

const AdminApp = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin"); // Redirect to login page if not authenticated
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // You can add a loading spinner here if preferred
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={ListGuesser}
        edit={EditGuesser}
        recordRepresentation="name"
      />
      <Resource
        name="tasks"
        list={ListGuesser}
        edit={EditGuesser}
        recordRepresentation="title"
      />
    </Admin>
  );
};

export default AdminApp;
