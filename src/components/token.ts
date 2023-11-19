"use client";
function setToken(token: string): void {
  localStorage.setItem("token", token);
}

function getToken(): string | null {
  if (typeof localStorage === "undefined") {
    return null;
  }

  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  try {
    const data = JSON.parse(atob(token.split(".")[1]));
    if (data.exp < new Date().getTime() / 1000) {
      return null;
    }
  } catch {
    return null;
  }

  return token;
}

export { setToken, getToken };
