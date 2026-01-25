// If using localStorage instead of cookies

"use client";

import { getToken, removeToken } from "@/lib/token";
import { useCallback, useEffect, useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check token on mount
  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(!!getToken());
    checkAuth();
    window.addEventListener("auth-change", checkAuth);
    return () => window.removeEventListener("auth-change", checkAuth);
  }, []);

  const logout = useCallback(() => {
    removeToken();
    setIsAuthenticated(false);
    window.dispatchEvent(new Event("auth-change"));
  }, []);

  return {
    isAuthenticated,
    logout,
  };
}