export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-bgDark/90 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Punya Shree</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}
