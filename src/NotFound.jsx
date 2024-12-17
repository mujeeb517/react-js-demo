import { Link } from "react-router-dom";

function NotFound() {
    return (<div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-gray-700">404, Not Found</h1>
        <span className="text-sm block text-gray-500 mb-8">The page you are looking for doesn't exist</span>
        <Link to="/" className="p-3 bg-orange-500 text-white rounded">Go to home page</Link>
    </div>);
}

export default NotFound;