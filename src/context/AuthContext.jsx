import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('aponhat_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('aponhat_token') || null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login'); // 'login' or 'register'

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('aponhat_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('aponhat_user');
    }
  }, [currentUser]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('aponhat_token', token);
    } else {
      localStorage.removeItem('aponhat_token');
    }
  }, [token]);

  const login = async (identifier, password) => {
    const res = await fetch('/api/auth.php?action=login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password })
    });

    const data = await res.json();
    if (res.ok && data.status === 'success') {
      setCurrentUser(data.user);
      setToken(data.token);
      setIsAuthModalOpen(false);
      return { success: true, user: data.user };
    } else {
      return { success: false, message: data.message || 'লগইন ব্যর্থ হয়েছে' };
    }
  };

  const register = async (name, phone, email, password) => {
    const res = await fetch('/api/auth.php?action=register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, password })
    });

    const data = await res.json();
    if (res.ok && data.status === 'success') {
      setCurrentUser(data.user);
      setToken(data.token);
      setIsAuthModalOpen(false);
      return { success: true, user: data.user };
    } else {
      return { success: false, message: data.message || 'রেজিস্ট্রেশন ব্যর্থ হয়েছে' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  const openLogin = () => {
    setAuthModalMode('login');
    setIsAuthModalOpen(true);
  };

  const openRegister = () => {
    setAuthModalMode('register');
    setIsAuthModalOpen(true);
  };

  const isAdmin = currentUser?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        token,
        isAdmin,
        login,
        register,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        openLogin,
        openRegister
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
