import Header from "../templates/header";
import Error404 from "../pages/Error404";
import Home from "../pages/home";

const routes = {
    '/': Home,
    '/Contact': 'Contact',
} 

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
}

export default router;
