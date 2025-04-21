import { useAuth } from '../store/AuthContext';

const { logout, setIsLoggedIn } = useAuth();
await logout();
setIsLoggedIn(false);
