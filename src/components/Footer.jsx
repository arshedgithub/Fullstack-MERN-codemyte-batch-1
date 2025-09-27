export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6 mt-10 border-t">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
                <div className="mt-3 flex justify-center space-x-6 text-sm">
                    <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
                    <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
                    <a href="/contact" className="hover:text-blue-600">Contact</a>
                </div>
            </div>
        </footer>
    );
}
