// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://my-json-server.typicode.com/arifulislamctg11/jsonplaceholder");

const AdminApp = () => (
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

export default AdminApp;