export default function LegalPage() {
    return (
      <main>
        <section id="legal" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Avisos Legales</h1>
              <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
                Información importante sobre nuestros términos de servicio y política de privacidad.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-12 bg-card p-8 md:p-12 rounded-lg">
              <div id="terminos">
                <h2 className="text-2xl font-semibold mb-4">Términos de Servicio</h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>Bienvenido a Override. Al acceder o utilizar nuestro sitio web y servicios, usted acepta estar sujeto a los siguientes términos y condiciones. Por favor, léalos detenidamente.</p>
                  <p>El contenido y los servicios proporcionados en este sitio son para su información general y uso exclusivo. Están sujetos a cambios sin previo aviso. Ni nosotros ni terceros ofrecemos ninguna garantía en cuanto a la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales que se encuentran u ofrecen en este sitio para un propósito particular.</p>
                  <p>El uso no autorizado de este sitio web puede dar lugar a una reclamación por daños y perjuicios y/o ser un delito penal.</p>
                </div>
              </div>
              <div id="privacidad">
                <h2 className="text-2xl font-semibold mb-4">Política de Privacidad</h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>Esta política de privacidad establece cómo Override utiliza y protege cualquier información que usted nos proporcione cuando utiliza este sitio web. Estamos comprometidos a garantizar que su privacidad esté protegida.</p>
                  <p>Podemos recopilar la siguiente información: nombre, información de contacto, incluido el correo electrónico, e información demográfica como el código postal. Utilizamos esta información para comprender sus necesidades y brindarle un mejor servicio, y en particular para el mantenimiento de registros internos y para mejorar nuestros productos y servicios.</p>
                  <p>Estamos comprometidos a garantizar que su información esté segura. Para evitar el acceso o la divulgación no autorizados, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y proteger la información que recopilamos en línea.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  