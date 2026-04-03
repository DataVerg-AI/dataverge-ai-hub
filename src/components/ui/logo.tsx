import logo from "/images/logo.webp";

export default function Logo() {
    return (
        <img src={logo} alt="Logo" className="w-auto h-20 object-contain py-2" />
    );
}