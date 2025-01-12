import { ArrowRight, Github, Cpu, Volume2, Code, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Kokoro TTS</div>
          <div className="space-x-4">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#usage" className="hover:text-blue-400 transition-colors">Usage</a>
            <a href="https://discord.gg/QuGxSWBfQy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Discord</a>
            <a href="https://huggingface.co/hexgrad/Kokoro-82M" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Hugging Face</a>
            <a href="https://reddit.com/r/localllama" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LocalLlama</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">Kokoro TTS</h1>
          <p className="text-xl mb-8">State-of-the-art AI Text-to-Speech Model</p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <a href="https://ui.kokorotts.com" target="_blank" rel="noopener noreferrer">
                Try UI <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild>
              <a href="https://api.kokorotts.com" target="_blank" rel="noopener noreferrer">
                API Docs <Code className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section id="features" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cpu className="h-10 w-10" />}
              title="82M Parameters"
              description="Efficient model with only 82 million parameters, outperforming larger models."
            />
            <FeatureCard
              icon={<Volume2 className="h-10 w-10" />}
              title="Multiple Voicepacks"
              description="10 unique voicepacks available, with more to come."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10" />}
              title="#1 Ranked Model"
              description="Topped the TTS Spaces Arena, outperforming models with more parameters and data."
            />
          </div>
        </section>

        <section id="usage" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">OpenAI-Compatible Speech Endpoint</h3>
            <h4 className="text-lg font-medium mb-2">Using OpenAI's Python library</h4>
            <pre className="text-sm mb-6">
              <code>{`from openai import OpenAI
client = OpenAI(base_url="https://api.kokorotts.com/v1", api_key="not-needed")
response = client.audio.speech.create(
    model="kokoro",  # Not used but required for compatibility, also accepts library defaults
    voice="af_bella+af_sky",
    input="Hello world!",
    response_format="mp3"
)

response.stream_to_file("output.mp3")`}</code>
            </pre>
            <h4 className="text-lg font-medium mb-2">Using Requests</h4>
            <pre className="text-sm">
              <code>{`import requests

response = requests.post(
    "https://api.kokorotts.com/v1/audio/speech",
    json={
        "model": "kokoro",  # Not used but required for compatibility
        "input": "Hello world!",
        "voice": "af_bella",
        "response_format": "mp3",  # Supported: mp3, wav, opus, flac
        "speed": 1.0
    }
)

# Save audio
with open("output.mp3", "wb") as f:
    f.write(response.content)`}</code>
            </pre>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© I have copyrights of nothing. Just providing a free service with no strings attached.</p>
          <div className="mt-4">
            <a href="https://github.com/remsky/Kokoro-FastAPI" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

