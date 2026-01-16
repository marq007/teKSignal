import teksignalLogo from './assets/tek_signal_logo_REVERSE_PNG.png'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          <img src={teksignalLogo} />
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Our website is currently under maintenance.
        </p>

        <p className="text-gray-400 mb-8">
          We’re working on delivering professional audio & video solutions —
          including podcast studios, hall AV setups, and troubleshooting
          services.
        </p>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500">
            📧 Contact us:{" "}
            <a
              href="mailto:info@teksignal.ca"
              className="text-cyan-400 hover:underline"
            >
              info@teksignal.ca
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
