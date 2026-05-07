'use client';
import Image from 'next/image';
import { useState } from 'react';

// → REEMPLAZA ESTOS ENLACES ANTES DE PUBLICAR
const HOTMART_URL = 'PEGAR_ENLACE_HOTMART';
const LEAD_MAGNET_URL = 'PEGAR_ENLACE_GUIA_GRATIS';

const emociones = [
  { emoji: '👻', nombre: 'Miedo', color: 'bg-blue-100 border-blue-300' },
  { emoji: '🔥', nombre: 'Enojo', color: 'bg-red-100 border-red-300' },
  { emoji: '😢', nombre: 'Tristeza', color: 'bg-indigo-100 border-indigo-300' },
  { emoji: '😣', nombre: 'Frustración', color: 'bg-orange-100 border-orange-300' },
  { emoji: '💚', nombre: 'Celos', color: 'bg-green-100 border-green-300' },
  { emoji: '⭐', nombre: 'Autoestima', color: 'bg-yellow-100 border-yellow-300' },
  { emoji: '🌊', nombre: 'Calma', color: 'bg-cyan-100 border-cyan-300' },
  { emoji: '🤗', nombre: 'Vínculos', color: 'bg-pink-100 border-pink-300' },
  { emoji: '🎉', nombre: 'Alegría', color: 'bg-purple-100 border-purple-300' },
  { emoji: '🌱', nombre: 'Resiliencia', color: 'bg-emerald-100 border-emerald-300' },
];

const cuentos = [
  { titulo: 'Volita', emocion: 'Miedo', emoji: '👻' },
  { titulo: 'El Ritmo Dorado de Momo', emocion: 'Alegría', emoji: '🎉' },
  { titulo: 'Tita y el Vapor Mágico', emocion: 'Enojo', emoji: '🔥' },
  { titulo: 'Lumi y los Lazos de Luz', emocion: 'Vínculos', emoji: '🤗' },
  { titulo: 'Babi y la Gotita Mágica', emocion: 'Tristeza', emoji: '😢' },
  { titulo: 'Nubi', emocion: 'Calma', emoji: '🌊' },
  { titulo: 'Yumi y el Mar de Caramelo', emocion: 'Frustración', emoji: '👢' },
  { titulo: 'Fito: El Tren Mágico', emocion: 'Resiliencia', emoji: '🌱' },
  { titulo: 'Din y el Jardín de las Estrellas', emocion: 'Autoestima', emoji: '⭐' },
  { titulo: 'Roco', emocion: 'Celos', emoji: '💚' },
];

const faqs = [
  { q: '¿Para qué edad es?', a: 'Sentia Vol. 1 está diseñado para niños de 3 a 8 años. Puede leerse en voz alta con los más pequeños, o acompañado para los mayores del rango.' },
  { q: '¿Es físico o digital?', a: 'Es un eBook en formato PDF digital. No se envía ningún libro físico.' },
  { q: '¿Cómo recibo el libro?', a: 'Después de completar la compra, recibirás un enlace de descarga inmediata en tu correo electrónico.' },
  { q: '¿Sirve para docentes?', a: 'Sí. Muchos docentes de educación inicial y primaria usan Sentia como recurso de lectura emocional en el aula.' },
  { q: '¿Es terapia?', a: 'No. Sentia es un recurso educativo de lectura familiar. No reemplaza acompañamiento psicológico ni promete resolver problemas emocionales.' },
  { q: '¿Puedo leerlo desde el celular?', a: 'Sí. El PDF puede abrirse desde cualquier dispositivo: celular, tablet, computadora o lector de ebooks.' },
  { q: '¿Puedo imprimirlo?', a: 'Sí. El archivo PDF puede imprimirse para uso personal y familiar.' },
  { q: '¿Qué pasa después de comprar?', a: 'Recibirás un correo con el enlace de descarga. Si no llega en los primeros minutos, revisa tu carpeta de spam.' },
];

function BookCoverPlaceholder() {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div className="bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 rounded-3xl shadow-2xl p-8 aspect-[3/4] flex flex-col items-center justify-center border-4 border-purple-200">
        <div className="text-6xl mb-4">🌟</div>
        <div className="text-center">
          <p className="text-purple-800 font-black text-xl leading-tight">Sentia</p>
          <p className="text-purple-600 font-bold text-sm">Vol. 1</p>
          <p className="text-purple-700 font-semibold text-xs mt-2 leading-snug">Historias para sentir en grande</p>
        </div>
        <div className="mt-4 flex gap-1">
          {['👻','🔥','💚','⭐','🌊'].map((e,i) => <span key={i} className="text-lg">{e}</span>)}
        </div>
        <div className="mt-4 text-xs text-purple-500 font-semibold">168 págs · 10 cuentos</div>
      </div>
      <div className="absolute -bottom-2 left-2 right-2 h-4 bg-purple-200 rounded-b-3xl blur-sm opacity-50"></div>
    </div>
  );
}

function LeadMagnetPlaceholder() {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-yellow-300 flex flex-col items-center gap-3 shadow-md">
      <div className="text-4xl">📖✨</div>
      <p className="font-bold text-center text-orange-800 text-sm">Guía Gratuita</p>
      <p className="text-xs text-center text-orange-700 font-medium">10 preguntas para conectar con tu hijo antes de apagar la luz</p>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FFF8F0] font-sans">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-purple-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-black text-xl text-purple-700">🌟 Sentia</span>
          <a
            href={HOTMART_URL}
            id="cta-nav-compra"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-full text-sm transition-colors"
          >
            Descargar — $7.99
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1 rounded-full mb-4">
              eBook PDF · Descarga inmediata
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-purple-900 leading-tight mb-4">
              Leer juntos es la forma más bonita de abrir el corazón
            </h1>
            <p className="text-lg text-purple-700 font-semibold mb-2">
              Sentia Vol. 1 – Historias para sentir en grande
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              10 cuentos ilustrados de educación emocional para leer en familia con niños de 3 a 8 años. Cada historia acompaña emociones reales y abre espacios de diálogo genuinos.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-black text-purple-800">$7.99</span>
              <span className="text-gray-500 text-sm">USD · PDF digital</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={HOTMART_URL}
                id="cta-hero-compra"
                className="bg-purple-600 hover:bg-purple-700 text-white font-black px-6 py-4 rounded-2xl text-center transition-all shadow-lg hover:shadow-xl text-lg"
              >
                📚 Descargar Sentia Vol. 1
              </a>
              <a
                href={LEAD_MAGNET_URL}
                id="cta-hero-guia"
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black px-6 py-4 rounded-2xl text-center transition-all shadow-md text-lg"
              >
                🎁 Recibir guía gratuita
              </a>
            </div>
            <p className="text-sm text-gray-500">PDF digital · Descarga inmediata · Para niños de 3 a 8 años</p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <BookCoverPlaceholder />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-purple-900 text-center mb-4">
            ¿Te suena alguna de estas situaciones?
          </h2>
          <p className="text-center text-gray-500 mb-10">Estas son las escenas que viven muchas familias cada día.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '😢', text: '"Mi hijo llora y no sé qué decir"' },
              { icon: '🌙', text: '"Tiene miedo de noche y no puedo calmarlo"' },
              { icon: '💥', text: '"Se frustra rápido y no sabe manejarlo"' },
              { icon: '🔥', text: '"Se enoja y no sabe explicarlo"' },
              { icon: '💬', text: '"Quiero hablar de emociones sin sermonear"' },
              { icon: '🙈', text: '"No sé cómo empezar esa conversación"' },
            ].map((item, i) => (
              <div key={i} className="bg-[#FFF8F0] rounded-2xl p-5 border border-orange-100 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-700 font-semibold text-sm italic">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCION */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">🌟</div>
          <h2 className="text-3xl md:text-4xl font-black text-purple-900 mb-6">
            Sentia es una invitación a leer, escuchar y conversar
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto leading-relaxed mb-8">
            No es un manual. No es una lámina de emociones. Es una historia.
            Una historia que abre espacio para que tu hijo diga lo que siente
            y tú puedas estar ahí, sin apuro, sin sermones.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'Leen juntos', desc: 'Un rato compartido antes de dormir o en cualquier momento del día.' },
              { icon: '💛', title: 'Reconocen emociones', desc: 'Cada cuento muestra qué sintió el personaje y qué pasó en su cuerpo.' },
              { icon: '🤝', title: 'Conversan y practican', desc: 'Ejercicios cortos de respiración, regulación o diálogo para hacer juntos.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-sentia text-center card-hover">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-black text-purple-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUE INCLUYE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-purple-900 text-center mb-10">
            ¿Qué incluye Sentia Vol. 1?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: '📚', title: '10 cuentos ilustrados', desc: 'Personajes originales con historias llenas de emoción y ternura.' },
              { icon: '📄', title: '168 páginas', desc: 'Un recorrido completo por 10 emociones fundamentales en la infancia.' },
              { icon: '💜', title: 'Personajes únicos', desc: 'Volita, Momo, Tita, Lumi, Babi, Nubi, Yumi, Fito, Din y Roco.' },
              { icon: '🧠', title: 'Herramienta Emocional Sentia', desc: 'Al final de cada cuento: qué sintió el personaje, qué pasó en su cuerpo y qué le ayudó.' },
              { icon: '🌬️', title: 'Ejercicios "Probemos juntos"', desc: 'Breves actividades de respiración, regulación o conversación para hacer con el niño.' },
              { icon: '📲', title: 'PDF descargable', desc: 'Léelo en celular, tablet, computadora o imprímelo para uso familiar.' },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl p-6 bg-[#EDE4F7] card-hover border border-purple-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-black text-purple-900 mb-1">{item.title}</h3>
                <p className="text-sm text-purple-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMOCIONES */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-purple-900 text-center mb-4">
            Emociones que acompaña Sentia
          </h2>
          <p className="text-center text-gray-500 mb-10">Cada cuento trabaja una emoción diferente, de forma natural y sin lecturas forzadas.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {emociones.map((emo, i) => (
              <div key={i} className={`flex items-center gap-2 px-4 py-3 rounded-full border-2 ${emo.color} font-bold text-sm card-hover`}>
                <span className="text-xl">{emo.emoji}</span>
                <span>{emo.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTA DE CUENTOS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-purple-900 text-center mb-4">
            Los 10 cuentos de Sentia
          </h2>
          <p className="text-center text-gray-500 mb-10">Cada título esconde una historia única con un personaje que siente, aprende y comparte.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {cuentos.map((cuento, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#EDE4F7] rounded-2xl p-4 border border-purple-100 card-hover">
                <div className="text-3xl w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">{cuento.emoji}</div>
                <div>
                  <p className="font-black text-purple-900 text-sm">{cuento.titulo}</p>
                  <p className="text-xs text-purple-600 font-semibold">{cuento.emocion}</p>
                </div>
                <div className="ml-auto text-purple-300 font-black text-lg">#{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-purple-900 text-center mb-4">
            ¿Cómo funciona cada cuento?
          </h2>
          <p className="text-center text-gray-500 mb-10">Un flujo sencillo y cálido para leer en familia.</p>
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {[
              { num: '1', icon: '📚', title: 'Leen juntos', desc: 'Tú y tu hijo abren el cuento y se sumergen en la historia.' },
              { num: '2', icon: '💛', title: 'Reconocen la emoción', desc: 'Descubren qué sintió el personaje y cómo se manifestó en su cuerpo.' },
              { num: '3', icon: '💬', title: 'Conversan', desc: 'La Herramienta Emocional Sentia facilita la conversación.' },
              { num: '4', icon: '🌬️', title: 'Practican juntos', desc: 'Un ejercicio breve de respiración, movimiento o diálogo.' },
              { num: '5', icon: '🌙', title: 'Cierran con calma', desc: 'Una pregunta o momento de conexión para terminar el día.' },
            ].map((step, i) => (
              <div key={i} className="flex-1 bg-white rounded-3xl p-5 shadow-sentia text-center card-hover">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-black text-sm mx-auto mb-3">{step.num}</div>
                <div className="text-3xl mb-2">{step.icon}</div>
                <h3 className="font-black text-purple-800 text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NO ES TERAPIA */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 border-2 border-purple-200 shadow-sentia">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">❤️</div>
              <div>
                <h3 className="font-black text-purple-900 text-lg mb-3">Una nota importante</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sentia no reemplaza acompañamiento psicológico ni promete resolver problemas emocionales.
                  Es un recurso educativo de lectura familiar para abrir conversaciones,
                  acompañar emociones y crear momentos de conexión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="py-16 gradient-lead" id="guia-gratis">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-yellow-200 text-yellow-800 font-bold text-xs px-3 py-1 rounded-full mb-4">
                🎁 Completamente gratis
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-orange-900 mb-4">
                Empieza hoy, sin costo
              </h2>
              <p className="text-orange-800 font-bold text-xl mb-3">
                "10 preguntas para conectar con tu hijo antes de apagar la luz"
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Una guía sencilla para crear momentos de conversación genuina con tu hijo cada noche.
                Fácil de usar, sin preparación previa.
              </p>
              <a
                href={LEAD_MAGNET_URL}
                id="cta-lead-magnet"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-lg"
              >
                📚 Quiero la guía gratis
              </a>
            </div>
            <div className="flex justify-center">
              <LeadMagnetPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-purple-900 text-center mb-10">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-purple-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-purple-50 transition-colors"
                >
                  <span className="font-bold text-purple-900 pr-4">{faq.q}</span>
                  <span className="text-purple-400 text-xl flex-shrink-0">{openFaq === i ? '▲' : '▼'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 bg-purple-50">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 gradient-cta">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">📚</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Leer no es corregir.
          </h2>
          <p className="text-xl text-purple-100 font-semibold mb-2">
            Es abrir un espacio para escuchar.
          </p>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto">
            Sentia Vol. 1 es ese espacio. Una historia a la vez, una emoción a la vez, un momento de conexión a la vez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={HOTMART_URL}
              id="cta-final-compra"
              className="bg-white text-purple-700 font-black px-8 py-4 rounded-2xl text-lg transition-all shadow-lg hover:shadow-xl hover:bg-purple-50"
            >
              📚 Descargar Sentia Vol. 1 — $7.99
            </a>
            <a
              href={LEAD_MAGNET_URL}
              className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black px-8 py-4 rounded-2xl text-lg transition-all"
            >
              🎁 Guía gratuita
            </a>
          </div>
          <p className="text-purple-200 text-sm mt-6">PDF digital · Descarga inmediata · $7.99 USD</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#2D2A4A] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-purple-300 font-black text-lg mb-2">🌟 Sentia</p>
          <p className="text-gray-400 text-sm mb-4">Lectura emocional para familias</p>
          <p className="text-gray-500 text-xs">
            Sentia es un recurso educativo de lectura familiar. No reemplaza acompañamiento psicológico.
          </p>
        </div>
      </footer>

    </main>
  );
}
