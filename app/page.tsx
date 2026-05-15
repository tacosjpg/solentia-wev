export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-24">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black px-6 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-white leading-none">
              Solentia
            </h1>
            <p className="text-orange-400 font-bold leading-none text-lg">
              Energía
            </p>
          </div>

          <div className="hidden md:flex gap-8 font-semibold text-sm text-white">
            <a href="#inicio" className="text-green-400">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a
            href="https://wa.me/525540800616"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-[680px] bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/solar.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto pt-24">
          <span className="inline-block bg-white text-green-600 px-5 py-2 rounded-full font-bold text-sm shadow">
            ENERGÍA SOLAR PARA UN FUTURO MEJOR
          </span>

          <h2 className="mt-8 text-6xl font-black max-w-3xl leading-tight text-blue-950">
            Soluciones Energéticas{" "}
            <span className="text-green-600">Inteligentes</span>
          </h2>

          <p className="mt-6 text-xl max-w-2xl text-slate-700">
            Diseñamos e instalamos sistemas solares que te permiten ahorrar,
            cuidar el planeta y hacer tu hogar o negocio más eficiente.
          </p>

          <a
            href="https://wa.me/525540800616"
            target="_blank"
            className="mt-8 inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition"
          >
            Cotiza por WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="relative -mt-20 px-6 z-20">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl grid md:grid-cols-4 overflow-hidden">
          {[
            [
              "/icon_paneles_solares.png",
              "Instalación de Paneles Solares",
              "Diseñamos e instalamos sistemas solares eficientes para hogares, negocios y empresas.",
            ],
            [
              "/icon_mantenimiento.png",
              "Mantenimiento Preventivo",
              "Maximiza el rendimiento y la vida útil de tu sistema fotovoltaico con mantenimiento profesional.",
            ],
            [
              "/icon_tramites.png",
              "Trámites CFE",
              "Te ayudamos con procesos de interconexión y gestión ante Comisión Federal de Electricidad.",
            ],
            [
              "/icon_cotizacion.png",
              "Cotización Personalizada",
              "Recibe asesoría y una propuesta adaptada a tus necesidades energéticas y presupuesto.",
            ],
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 border-b md:border-b-0 md:border-r last:border-r-0 hover:bg-slate-50 hover:-translate-y-3 hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img
                src={item[0]}
                alt={item[1]}
                className="w-20 h-20 object-contain mb-5"
              />

              <h3 className="text-2xl font-black text-blue-950 mb-4 leading-tight">
                {item[1]}
              </h3>

              <p className="text-slate-600 leading-7 text-lg">
                {item[2]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div
            className="h-[420px] rounded-3xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: "url('/paneles.png')" }}
          ></div>

          <div>
            <p className="text-green-600 font-bold mb-3">
              ¿POR QUÉ ELEGIRNOS?
            </p>

            <h2 className="text-4xl font-black text-blue-950 mb-5">
              Experiencia, calidad y compromiso
            </h2>

            <p className="text-slate-600 text-lg mb-8">
              En Solentia Energía nos enfocamos en ofrecer soluciones
              confiables, eficientes y adaptadas a tus necesidades.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-950">Equipos de calidad</h4>
                <p className="text-slate-600 text-sm">
                  Trabajamos con marcas confiables y eficientes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-950">
                  Instaladores certificados
                </h4>
                <p className="text-slate-600 text-sm">
                  Equipo técnico con experiencia en sistemas solares.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-950">Ahorro garantizado</h4>
                <p className="text-slate-600 text-sm">
                  Soluciones enfocadas en reducir tu consumo energético.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-950">Soporte y seguimiento</h4>
                <p className="text-slate-600 text-sm">
                  Acompañamiento antes, durante y después del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section id="contacto" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-green-600 to-blue-950 text-white p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black mb-4">
              ¿Listo para ahorrar con energía solar?
            </h2>

            <p className="text-xl">
              Cotiza tu sistema en minutos.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="bg-white p-4 rounded-xl text-black placeholder:text-slate-500 shadow"
              placeholder="Nombre completo"
            />

            <input
              className="bg-white p-4 rounded-xl text-black placeholder:text-slate-500 shadow"
              placeholder="Teléfono / WhatsApp"
            />

            <input
              className="bg-white p-4 rounded-xl text-black placeholder:text-slate-500 shadow"
              placeholder="Correo electrónico"
            />

            <select className="bg-white p-4 rounded-xl text-black shadow">
              <option>Tipo de servicio</option>
              <option>Paneles solares</option>
              <option>Mantenimiento</option>
              <option>Calentador solar</option>
              <option>Trámite CFE</option>
            </select>

            <a
              href="https://wa.me/525540800616"
              target="_blank"
              className="md:col-span-2 bg-black text-white text-center py-4 rounded-xl font-bold hover:bg-slate-800 transition"
            >
              Quiero mi cotización
            </a>
          </form>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="proceso" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black text-blue-950 mb-10">
              ¿Cómo funciona?
            </h2>

            <div className="space-y-8">
              {[
                ["1", "Cotiza", "Envíanos tus datos y necesidades."],
                ["2", "Diseñamos tu sistema", "Te proponemos la mejor solución."],
                ["3", "Instalamos", "Instalación rápida y profesional."],
                ["4", "Ahorra", "Disfruta de energía limpia y ahorro."],
              ].map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="bg-green-500 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {item[0]}
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-blue-950">
                      {item[1]}
                    </h3>

                    <p className="text-slate-600">
                      {item[2]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-950 rounded-3xl p-12 text-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center shadow-2xl">
            <div>
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-3xl font-black">100%</h3>
              <p className="text-slate-300">Energía limpia</p>
            </div>

            <div>
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-3xl font-black">Hasta 99%</h3>
              <p className="text-slate-300">Ahorro potencial</p>
            </div>

            <div>
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-3xl font-black">Hasta 25 años</h3>
              <p className="text-slate-300">Garantía</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black mb-4">
              Solentia Energía
            </h2>

            <p className="text-slate-300">
              Soluciones energéticas inteligentes para hogares y negocios.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Enlaces rápidos
            </h3>

            <p>Inicio</p>
            <p>Nosotros</p>
            <p>Servicios</p>
            <p>Proceso</p>
            <p>Contacto</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Servicios
            </h3>

            <p>Paneles solares</p>
            <p>Mantenimiento</p>
            <p>Trámites CFE</p>
            <p>Cotización personalizada</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Contacto
            </h3>

            <p>WhatsApp: +52 55 4080 0616</p>
            <p>contacto@solentiaenergia.com</p>
            <p>México</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/525540800616"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl font-bold z-50 hover:scale-110 transition"
      >
        WhatsApp
      </a>
    </main>
  );
}
