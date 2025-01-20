/* eslint-disable react/no-unescaped-entities */
"use client"
import { ArrowRight, Github, Cpu, Volume2, Code, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ApiStatus } from '@/components/ApiStatus'
import { useState } from 'react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="relative">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Kokoro TTS</div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-700 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#usage" className="hover:text-blue-400 transition-colors">Usage</a>
              <a href="https://discord.gg/QuGxSWBfQy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Discord</a>
              <a href="https://huggingface.co/hexgrad/Kokoro-82M" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Hugging Face</a>
              <a href="https://reddit.com/r/localllama" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LocalLlama</a>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-gray-800 p-4 rounded-lg mt-2 shadow-lg z-50`}>
            <div className="flex flex-col space-y-3">
              <a href="#features" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#usage" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Usage</a>
              <a href="https://discord.gg/QuGxSWBfQy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Discord</a>
              <a href="https://huggingface.co/hexgrad/Kokoro-82M" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Hugging Face</a>
              <a href="https://reddit.com/r/localllama" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LocalLlama</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kokoro TTS</h1>
          <p className="text-lg md:text-xl mb-8">State-of-the-art AI Text-to-Speech Model</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-full md:w-auto">
              <a href="https://ui.kokorotts.com" target="_blank" rel="noopener noreferrer">
                Try UI <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild className="w-full md:w-auto">
              <a href="https://api.kokorotts.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <ApiStatus /> <Code className="mx-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Exploring Kokoro TTS: A Powerful Local Text-to-Speech Solution</h2>
            <p className="mb-6 text-base md:text-lg">
              As the demand for voice applications continues to grow, many developers are seeking robust local text-to-speech (TTS) systems that eliminate the need to rely on external APIs like OpenAI, Google, or ElevenLabs. One standout option is Kokoro TTS, a lightweight and high-performing TTS model that has gained significant attention for its capabilities and accessibility.
            </p>

            <h3 className="text-2xl font-bold mb-4">What is Kokoro TTS?</h3>
            <p className="mb-6">
              Kokoro TTS is a compact yet powerful text-to-speech model, currently available on Hugging Face and GitHub. Despite its modest size—trained on less than 100 hours of audio—it delivers impressive results, consistently topping the TTS leaderboard on Hugging Face. Unlike larger systems, Kokoro TTS offers the advantage of running locally, even on devices without GPUs, making it accessible for a wide range of users.
            </p>

            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <div className="space-y-6 mb-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">1. Multi-Language and Voice Support</h4>
                <p>
                  Kokoro TTS includes a variety of voices across different languages, including American and British English, French, Japanese, Korean, and Chinese. Users can explore these voices and even create new ones by blending or customizing existing voice embeddings.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">2. Custom Voice Creation</h4>
                <p>
                  Each voice in Kokoro TTS is associated with a unique embedding. By blending these embeddings, users can create new, personalized voices. Techniques such as weighted averaging or spherical interpolation allow for precise control over the resulting voice characteristics.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">3. Open Source and Community-Driven</h4>
                <p>
                  Kokoro TTS has inspired the creation of numerous related projects, such as:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                  <li>Kokoro Onnx: A package optimized for fast, local inference using Onnx models.</li>
                  <li>Kokoro FastAPI TTS: A tool that emulates OpenAI-compatible speech endpoints, making it easy to integrate Kokoro TTS into existing applications.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">4. Ease of Use</h4>
                <p>
                  The system is straightforward to set up, with detailed examples and support for popular tools like Colab and virtual environments. This accessibility lowers the barrier for developers looking to integrate TTS capabilities into their projects.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Real-World Applications</h3>
            <p className="mb-6">
              Kokoro TTS is ideal for developers and enthusiasts aiming to build local voice-enabled applications without incurring API costs. It pairs seamlessly with automatic speech recognition (ASR) systems to create local conversational agents, making it suitable for privacy-focused or offline applications.
            </p>

            <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
            <p className="mb-6">
              Setting up Kokoro TTS involves downloading the model and embeddings, running the system locally with tools like Kokoro Onnx, and customizing voices as needed. Whether you're generating audio for a project or experimenting with voice synthesis, Kokoro TTS offers a flexible and cost-effective solution.
            </p>

            <h3 className="text-2xl font-bold mb-4">Why Choose Kokoro TTS?</h3>
            <p className="mb-6">
              Kokoro TTS stands out not just for its quality but also for its simplicity and flexibility. It's an excellent choice for those seeking a lightweight, local TTS solution without compromising on performance or scalability.
            </p>

            <p className="text-xl font-semibold text-center">
              Explore Kokoro TTS today to unlock new possibilities in text-to-speech technology!
            </p>
          </div>
        </section>

        <section id="features" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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

        <section id="usage" className="py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Quick Start</h2>
          <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
            <h3 className="text-lg md:text-xl font-semibold mb-4">OpenAI-Compatible Speech Endpoint</h3>
            <h4 className="text-base md:text-lg font-medium mb-2">Using OpenAI's Python library</h4>
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
            <h4 className="text-base md:text-lg font-medium mb-2">Using Requests</h4>
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

