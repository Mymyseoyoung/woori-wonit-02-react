// StatusBadge에서 사용하는 status를 prop-drilling 없이 Context로 전달
// AccountCard의 Panel에 user.name의 계좌라는 글자를 삽입 
// 45분까지 

// src/contexts/UserContext.jsx
import { createContext, useContext } from "react";

const UserContext = createContext(null);

export function UserProvider({ user, children }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}

// App.jsx — 감싸기
<UserProvider user={{ name: "김연지", grade: "우수" }}>
  <Header />
  ...
</UserProvider>

// 어디서든 꺼내기 — props 없이
function Header() {
  const user = useUser();
  return <h1>{user.name}님, 안녕하세요</h1>;
}

