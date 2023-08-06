import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

// Not require login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
];

// Require login routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
