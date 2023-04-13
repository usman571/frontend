import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./routes/UserRouter";
import AdminRouter from "./routes/AdminRouter";
import { useCurrentUser, useCurrentAdmin } from "./hooks/useCurrentUser";
function App() {
  const currentUser = useCurrentUser();
  const currentAdmin = useCurrentAdmin();

  console.log(currentUser?.role);

  const isUser = currentUser && currentUser.role === "voter";
  const isAdmin = currentAdmin && currentAdmin.role === "admin";

  return (
    <BrowserRouter forceRefresh={true}>
      <div className="flex gap-1 w-full">
        {isUser ? <UserRouter /> : isAdmin ? <AdminRouter /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
