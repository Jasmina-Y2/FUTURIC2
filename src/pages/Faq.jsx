import Header from "../components/Header.jsx";
import '../css/Page/Faq.css'
import Footer from "../components/Footer.jsx";
import { IoMdArrowDropright } from 'react-icons/io';
import React, { useState } from 'react';
function Start(){

    const [rotate1,setrotate1] = useState("normal")
    const [rotate2,setrotate2] = useState("normal")
    const [rotate3,setrotate3] = useState("normal")
    const [rotate4,setrotate4] = useState("normal")
    const [rotate5,setrotate5] = useState("normal")
    const [rotate6,setrotate6] = useState("normal")

    const [Ans1,setAns1] = useState("off-div")
    const [Ans2,setAns2] = useState("off-div")
    const [Ans3,setAns3] = useState("off-div")
    const [Ans4,setAns4] = useState("off-div")
    const [Ans5,setAns5] = useState("off-div")
    const [Ans6,setAns6] = useState("off-div")

    const textpretty =  "text animate__animated animate__fadeInDown"

    var [conteo1,setconteo1] = useState(0)
    var [conteo2,setconteo2] = useState(0)
    var [conteo3,setconteo3] = useState(0)
    var [conteo4,setconteo4] = useState(0)
    var [conteo5,setconteo5] = useState(0)
    var [conteo6,setconteo6] = useState(0)

    const Answer1 = () => {
        if(conteo1 == 0 ){
            
        setAns1(textpretty)
        setrotate1("rotate")

        setAns2("off-div")
        setrotate2("normal")

        setAns3("off-div")
        setrotate3("normal")

        setAns4("off-div")
        setrotate4("normal")

        setAns5("off-div")
        setrotate5("normal")

        setAns6("off-div")
        setrotate6("normal")

        setconteo1(1)

        }else{
            setconteo1(0)
            setAns1("off-div")
            setrotate1("normal")
        }
    }

    const Answer2 = () => {
        
        if(conteo2 == 0 ){
            
            setAns2(textpretty)
            setrotate2("rotate")
            
            setAns1("off-div")
            setrotate1("normal")

            setAns3("off-div")
            setrotate3("normal")

            
            setAns4("off-div")
            setrotate4("normal")
            
            setAns5("off-div")
            setrotate5("normal")
            
            setAns6("off-div")
            setrotate6("normal")

            setconteo2(1)
    
        }else{
            setconteo2(0)
            setAns2("off-div")
            setrotate2("normal")
        }
    }
    const Answer3 = () => {

        if(conteo3 == 0 ){
            
            setAns3(textpretty)
            setrotate3("rotate")
        
            setAns1("off-div")
            setrotate1("normal")

            setAns2("off-div")
            setrotate2("normal")

            setAns4("off-div")
            setrotate4("normal")

            setAns5("off-div")
            setrotate5("normal")

            setAns6("off-div")
            setrotate6("normal")

            setconteo3(1)
    
        }else{
            setconteo3(0)
            setAns3("off-div")
            setrotate3("normal")
        }

    }

    const Answer4 = () => {

        if(conteo4 == 0 ){
            
            setAns4(textpretty)
            setrotate4("rotate")
    
            setAns1("off-div")
            setrotate1("normal")

            setAns3("off-div")
            setrotate3("normal")

            setAns2("off-div")
            setrotate2("normal")

            setAns5("off-div")
            setrotate5("normal")

            setAns6("off-div")
            setrotate6("normal")

            setconteo4(1)
    
        }else{
            setconteo4(0)
            setAns4("off-div")
            setrotate4("normal")
        }
    }

    const Answer5 = () => {

        if(conteo5 == 0 ){
            
            setAns5(textpretty)
            setrotate5("rotate")
    
            setAns1("off-div")
            setrotate1("normal")

            setAns4("off-div")
            setrotate4("normal")

            setAns3("off-div")
            setrotate3("normal")

            setAns2("off-div")
            setrotate2("normal")

            setAns6("off-div")
            setrotate6("normal")

            setconteo5(1)
    
        }else{
            setconteo5(0)
            setAns5("off-div")
            setrotate5("normal")
        }
    }

    const Answer6 = () => {

        if(conteo6 == 0 ){
            
            setAns6(textpretty)
            setrotate6("rotate")
    
            setAns1("off-div")
            setrotate1("normal")

            setAns5("off-div")
            setrotate5("normal")

            setAns4("off-div")
            setrotate4("normal")

            setAns3("off-div")
            setrotate3("normal")

            setAns2("off-div")
            setrotate2("normal")

            setconteo6(1)
    
        }else{
            setconteo6(0)
            setAns6("off-div")
            setrotate6("normal")
        }
    }


    return(
        <>
        <Header props={"Faq"}></Header>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="Faq-Section1">
            <br/>
            <h1>FUTURIC</h1>
            <br/>
            <p  onClick={Answer1}>
                <IoMdArrowDropright className={rotate1}></IoMdArrowDropright> 
                Condiciones
            </p>
            <div className={Ans1}>
                
Este Acuerdo del usuario y tu comportamiento hacen que eso sea posible.
<br/>
<br/>
Recuerda que Dnofox ha sido creado para divertirse y está destinado a ser un lugar de entretenimiento, pero aun así, necesitamos algunas reglas básicas.&nbsp;
<p-fox>Al acceder a nuestros Servicios o utilizarlos, aceptar estar sujeto a los presentes Términos.</p-fox>
    &nbsp;En caso de no aceptarlos,
<br/>
<br/>
<b-fox>1. Tu acceso a los Servicios</b-fox>
<br/>
<br/>
Los menores de 13 años no pueden usar los Servicios ni acceder a ellos.&nbsp;Algunos de nuestros Servicios adicionales pueden requerir que seas mayor de 13 años para usarlos, así que lee detenidamente todos los avisos y los Términos Adicionales cuando accedas a los Servicios.
<br/>
<br/>
Al utilizar los Servicios, declaras que:
<br/>
<br/>
    <p-fox>• Tienes al menos 13 años y superas la edad mínima requerida por las leyes de tu país de residencia para acceder a los Servicios y utilizarlos;</p-fox>
    <br/>
    <br/>
    <p-fox>• Puedes establecer un contrato vinculante con Dnofox o, si eres mayor de 13 años pero menor de la mayoría de edad en tu jurisdicción, tu tutor legal ha revisado y está de acuerdo con estos Términos;</p-fox>
    <br/>
    <br/>
    <p-fox>• No recae sobre ti prohibición alguna de usar los Servicios según las leyes aplicables;</p-fox>
    <br/>
    <br/>
    <p-fox>• No ha sido suspendido o eliminado permanentemente de los Servicios.</p-fox>
    <br/>
    <br/>
Si acepta estos Términos en el nombre de otra entidad legal, incluida una entidad comercial o gubernamental, declaras que tienes plena autoridad legal para vincular a dicha entidad a estos Términos.
<br/>
<br/>
<b-fox> 2. Privacidad</b-fox>
<br/>
<br/>
La <u-fox id="politicas-fox1">política de privacidad</u-fox> de Dnofox explica cómo y por qué recopilamos, usamos y compartimos información sobre ti cuando accedes a nuestros Servicios o los usas.&nbsp;
<br/>
<br/>
Al usar los Servicios, aceptas que recopilemos y usemos esta información tal y como se establece en la <u-fox id="politicas-fox2">política de privacidad </u-fox>.
<br/>
<br/>
<b-fox>3. Tu uso de los Servicios</b-fox>
<br/>
<br/>
Sujeto a tu cumplimiento absoluto y continuo de estos Términos, Dnofox te otorga una licencia personal, intransferible, no exclusiva, revocable y limitada para acceder a los Servicios y utilizarlos.
<br/>
<br/>
Nos reservamos todos los derechos que estos Términos no te otorgan expresamente.
<br/>
<br/>
Excepto y únicamente en la medida en que dicha restricción sea inadmisible según la ley aplicable, no puedes, sin nuestro acuerdo por escrito:
<br/>
<br/>
    <p-fox> • Otorgar licencias, vender, transferir, ceder, distribuir, alojar o explotar comercialmente los Servicios o el Contenido;</p-fox>
    <br/>
    <br/>
    <p-fox> • Modificar, elaborar trabajos derivados, desensamblar, descompilar o realizar ingeniería inversa de cualquier parte de los Servicios o Contenido;&nbsp;</p-fox> 
    <br/>
    <br/> 

    <p-fox> • Acceder a los Servicios o Contenido para crear un sitio web, producto o servicio similar o competitivo.</p-fox> 
    <br/>
    <br/>
Siempre estamos mejorando nuestros Servicios.&nbsp;Lo cual significa que podemos añadir o eliminar características, productos o funcionalidades;&nbsp;intentaremos avisarte de antemano, aunque no siempre será posible.
<br/>
<br/>
&nbsp;Nos reservamos el derecho de modificar, suspender o interrumpir los Servicios (en su totalidad o en parte) en cualquier momento, con o sin previo aviso.
<br/>
<br/>
&nbsp;Cualquier versión futura, actualización u otra adición a la función de los Servicios estará sujeta a estos Términos, que pueden actualizarse ocasionalmente.&nbsp;Aceptas que no seremos responsables ante ti ni ante ningún tercero por ninguna modificación, suspensión o interrupción de los Servicios o de cualquier parte de los mismos.
<br/>
<br/>
<b-fox> 4. Tu cuenta de Dnofox y Seguridad de la cuenta</b-fox>
<br/>
<br/>
Para utilizar determinadas funciones de nuestros Servicios, es posible que debas crear una cuenta de Dnofox (una "&nbsp;Cuenta&nbsp;") y proporcionar un nombre de usuario, contraseña y otra información sobre ti tal y como se establece en la <u-fox id="politicas-fox3">política de privacidad</u-fox>
<br/>
<br/>
Eres el único responsable de la información asociada con tu Cuenta y de todo lo que suceda en relación con la misma.&nbsp;
<br/>
<br/>
Debes mantener la seguridad de tu Cuenta e <u-fox id="informar-fox1">Informar a Dnofox</u-fox>&nbsp;de inmediato si descubres o sospechas que alguien ha accedido a tu Cuenta sin tu permiso.&nbsp;
<br/>
<br/>
Te recomendamos que utilices una contraseña segura que utilices solo con tu Cuenta.
No otorgarás licencia, venderás ni transferás tu Cuenta sin nuestra aprobación previa por escrito.
<br/>
<br/>
<b-fox>5. Tu contenido</b-fox> 
<br/>
<br/>
Los Servicios pueden contener información, texto, enlaces, gráficos, fotos, vídeos, audio, transmisiones u otros materiales ("&nbsp;Contenido&nbsp;"), 
<br/>
incluido el Contenido creado con los Servicios o enviado a ellos por ti o mediante tu Cuenta ("&nbsp;Tu Contenido&nbsp;" ).&nbsp;
<br/>
<br/>
No asumimos ninguna responsabilidad y no respaldamos, apoyamos ni garantizamos, expresa o implícitamente, la integridad, veracidad, precisión o fiabilidad de Tu contenido.
<br/>
<br/>
Al enviar Tu Contenido a los Servicios, declaras y garantizas que tienes todos los derechos, la facultad y la autoridad necesarios para otorgar los derechos sobre Tu Contenido incluidos en los presentes Términos.&nbsp;
<br/>
<br/>
Debido a que eres el único responsable de Tu contenido, serás responsable si publicas o compartes contenido sin todos los derechos necesarios.
<br/>
<br/>
Conservas todos los derechos de propiedad que tengas sobre Tu Contenido, pero le otorgas a Dnofox la siguiente licencia para usar dicho Contenido:
<br/>
<br/>
Cuando Tu Contenido se crea con o se envía a los Servicios, nos otorgas una licencia mundial, exenta de, regalía perpetua, irrevocable, no exclusiva, 
<br/>
transferible y sublicenciable para usar, copiar, modificar, adaptar, preparar trabajos derivados de, distribuir, almacenar , ejecutar y mostrar Tu y cualquier nombre, nombre de usuario,
<br/>
 voz o imagen proporcionados en relación con Tu Contenido en todos los formatos de medios y canales ahora conocidos o desarrollados posteriormente en cualquier parte del mundo.
 <br/>
 <br/>
 &nbsp;Esta licencia incluye el derecho para que hagamos que tu contenido esté disponible para su reproducción, transmisión, distribución o publicación por parte de otras empresas, 
 <br/>
 organizaciones o personas que se asocian con Dnofox.&nbsp;También aceptas que podemos eliminar los metadatos asociados con Tu Contenido,
<br/>
<br/>
Cualquier idea, sugerencia y comentario sobre Dnofox o nuestros Servicios que nos brindes es completamente voluntario, y aceptas que Dnofox puede tales ideas, sugerencias y comentarios sin compensación usar u obligación alguna hacia ti.
<br/>
<br/>
Aunque no tenemos la obligación de filtrar, editar o monitorear Tu Contenido, podemos, a nuestra entera discreción, eliminar o retirar Tu Contenido en cualquier momento y por cualquier motivo,
<br/> 
<br/>
incluso por infringir estos Términos, infringir nuestra&nbsp; <u-fox id="contenido-fox1">política de contenidos</u-fox> o si de alguna otra manera genera o es probable que genere responsabilidad para nosotros.
<br/>
<br/>
<b-fox> 6. Contenido de terceros, Anuncios y Promociones</b-fox> 
<br/>
<br/>
Los Servicios pueden contener enlaces a sitios web, productos o servicios de terceros, que pueden ser publicados por anunciantes, nuestras empresas asociadas, nuestros socios u otros usuarios ("&nbsp;Contenido de Terceros&nbsp;").&nbsp;
<br/>
<br/>
El Contenido de Terceros no está bajo nuestro control y no somos responsables de los sitios web, productos o servicios de terceros.
<br/>
<br/>
&nbsp;El uso que hagas del Contenido de Terceros es por tu cuenta y riesgo y debes realizar cualquier investigación que considere necesaria 
antes de proceder con cualquier transacción relacionada con dicho Contenido de Terceros.
<br/>
<br/>
Los Servicios también pueden contener Contenido de Terceros patrocinado o anuncios.
<br/>
<br/>
&nbsp;El tipo, el grado y la orientación de los anuncios están sujetos a cambios, y reconoces y acepta que podemos colocar anuncios en la relación con la visualización de cualquier 
<br/>
Contenido o información en los Servicios, incluido Tu Contenido.
<br/>
<br/>
Si decide utilizar los Servicios para realizar una promoción, incluido un concurso o sorteo ("&nbsp;Promoción"), 
<br/>
<br/>
eres el único responsable de llevar a cabo la Promoción de conformidad con todas las leyes y reglamentos aplicables, incluido un título enunciativo y no exhaustivo,
<br/>
<br/>
 la creación de reglas oficiales, los términos de la oferta, los requisitos de elegibilidad y el cumplimiento Tu Promoción debe indicar que la Promoción no tiene el 
 <br/>
 <br/>
 patrocinio ni el respaldo de Dnofox ni está asociada con Dnofox, y las reglas de tu Promoción deben requerir que cada participante o concursante exima a Dnofox de cualquier responsabilidad relacionada con la Promoción.
<br/>
<br/>
<b-fox> 7. Cosas que no puedes hacer</b-fox> 
<br/>
<br/>
Al usar o acceder a Dnofox, debes cumplir con estos Términos y con todas las leyes, normas y reglamentos aplicables.&nbsp;
<br/>
Revisa la&nbsp;<u-fox id="contenido-fox2">Política de contenido</u-fox>, que se incorpora por referencia a estos Términos y forman parte de los mismos, y contienen las reglas de Dnofox sobre contenido y conducta prohibidos.&nbsp;
<br/>
Además de lo prohibido en la&nbsp;<u-fox id="contenido-fox3">Política de contenido</u-fox>, no puedes realizar ninguna de las siguientes acciones:
 <br/>
 <br/>   
  <p-fox> • Usar los Servicios de cualquier manera que pueda interferir, deshabilitar, interrumpir, sobrecargar o deteriorar de alguna otra manera los Servicios;</p-fox> 
  <br/>
  <br/>
  <p-fox>• Obtener acceso a (o intentar obtener acceso a) la Cuenta de otro usuario o cualquier parte no pública de los Servicios, incluidos los sistemas o redes informáticos conectados o utilizados junto con los Servicios; </p-fox>
    <br/>
    <br/>
   <p-fox>• Cargar, transmitir o distribuir hacia oa través de los Servicios cualquier virus, gusano, código malicioso u otro software destinado a interferir con los Servicios, incluidas las funciones relacionadas con la seguridad; </p-fox>
    <br/>
    <br/>
   <p-fox>• Usar los Servicios para infringir la ley aplicable o infringir los derechos de propiedad intelectual de cualquier persona o entidad o cualquier otro derecho de propiedad; </p-fox>
    <br/>
    <br/>
   <p-fox>• Acceder, buscar o recopilar datos de los Servicios por cualquier medio (automatizado o de otro tipo) excepto según lo permitido en estos Términos o en un acuerdo aparte con Dnofox (otorgamos permiso condicionalmente para rastrear los Servicios de acuerdo con los parámetros establecidos en nuestro archivo robots.txt, si bien queda prohibido recopilar los Servicios sin el consentimiento previo de Dnofox);&nbsp; </p-fox>
    <br/>
    <br/>
    <p-fox>• Usar los Servicios de cualquier manera que consideremos un abuso o fraude en Dnofox o cualquier sistema de pago. </p-fox>
    <br/>
    <br/>
    Te animamos a que <v-fox id="denuncias-fox1">denuncies</v-fox>&nbsp;contenidos o conductas que creas que violan estos Términos o nuestra&nbsp;<u-fox id="contenido-fox4">Política de contenido</u-fox>.&nbsp;También apoyamos a las denuncias responsables de vulnerabilidades de seguridad.&nbsp;Para informar sobre un problema de seguridad, envía un correo electrónico a&nbsp;segurity@dnofox.com .
<br/>
<br/>
<br/>
<b-fox> 8. Derechos de autor, Marca comercial, DMCA y Eliminaciones</b-fox> 
<br/>
<br/>
Dnofox respeta la propiedad intelectual de otros y requiere que los usuarios de nuestros Servicios hagan lo mismo.&nbsp;
<br/>
<br/>
Tenemos una política que incluye la eliminación de cualquier material infractor de los Servicios y la eliminación, en circunstancias relacionadas, de los usuarios de nuestros Servicios que sean infractores reincidentes.
<br/>
<br/>
&nbsp;Si crees que algo en nuestros Servicios infringe un derecho de autor o una marca comercial de la cual eres titular o controlas, puedes informar de ello al Agente Designado de Dnofox y completar nuestro <v-fox id="autor-fox1">Formulario de Reporte de derechos de Autor</v-fox>&nbsp;, o poniéndote en contacto con:

<br/>
<br/>
<p-fox>
Agente de derechos de autor
Dnofox, Inc.
<br/>
<br/>
Jr. Bolivar 3101postal 09156
<br/>
<br/>
Huancavelica , pampas Tayacaja
<br/>
<br/> 
<u-fox id="copyright-fox1">copyright@dnofox.com</u-fox>
</p-fox>
<br/>
<br/>
Además, ten en cuenta que si, a sabiendas, declaras erróneamente que cualquier actividad o material en nuestro Servicio está infringiendo derechos de autor, puedes ser responsable ante Dnofox por ciertos costes y daños.
<br/>
<br/>
Si eliminamos Tu Contenido en respuesta a un aviso de derechos de autor o marca comercial, te lo notificaremos a través del sistema de mensajería privada de Dnofox.&nbsp;Si crees que Tu Contenido se eliminó por error debido a una equivocación o una identificación errónea en un aviso de derechos de autor, puedes enviar una contranotificación a través de nuestro <v-fox id="autor-fox2">Formulario de contranotificacion de Derechos de Autor</v-fox>&nbsp;o ponerte en contacto con nuestro Agente de derechos de autor (información de contacto proporcionada anteriormente).
<br/>
<br/>

<b-fox> 9. Servicios de Pago e Información de Pago</b-fox> 
<br/>
<br/>
Dnofox puede cambiar las tarifas o los beneficios asociados con los Servicios de Pago ocasionalmente con un aviso previo razonable de los cambios sustanciales;&nbsp;siempre que, sin embargo, no se requiere notificación previa para promociones temporales, incluidas las reducciones temporales en las tarifas asociadas con los Servicios de Pago.&nbsp;No obstante lo anterior, cualquier cambio de precio o cambio en tus planes de suscripción se aplicará no antes de los 30 días posteriores a la notificación.
<br/>
PUEDES enviar tu Tarjeta de Débito, Tarjeta de crédito u otra Información de pago ("&nbsp;Información de Pago") a través de nuestros Servicios para adquirir los Servicios de Pago. Usamos proveedores de servicios externos para procesar tu Información de Pago. Si envías tu Información de Pago, aceptas pagar todos los gastos en los que incurras y nos das permiso para cobrarte cuando venza el pago por una cantidad que incluye estos costes y los impuestos y tarifas aplicables.
<br/>
<br/>

<b-fox> 10. Propiedad intelectual</b-fox>
<br/>
<br/>
Los Servicios son propiedad de y están operados por Dnofox.&nbsp;Las interfaces visuales, los gráficos, el diseño, la compilación, la información, los datos, el código informático, los productos, los servicios, las marcas comerciales y todos los demás elementos de los Servicios ("&nbsp;Materiales&nbsp;") proporcionados por Dnofox están protegidos por las leyes de propiedad intelectual y otras leyes aplicables.&nbsp;Todos los Materiales incluidos en los Servicios son propiedad de Dnofox o sus terceros licenciatarios.&nbsp;Reconoces y aceptas que no adquirirás ningún derecho de propiedad al descargar los Materiales o al comprar Dnofox.&nbsp;Excepto lo autorizado expresamente por Dnofox, y sujeto a las Directrices de fMarca, no puedes hacer uso de los Materiales.&nbsp;Dnofox se reserva todos los derechos sobre los Materiales que no se otorgan expresamente en estos Términos.
<br/>
<br/>
<b-fox>11. Indemnidad</b-fox>
<br/>
<br/>
Excepto en la medida en que lo prohíba la ley, aceptas defender, compensar y mantener indemne a Dnofox, sus empresas asociadas y sus delegados, gestores, empleados, afiliados, agentes, contratistas, proveedores de Servicios externos y otorgantes de licencias (las "&nbsp;Entidades de Dnofox") de y contra cualquier reclamación o demanda hecha por un tercero, y cualquier responsabilidad, daño, pérdida y gasto relacionado (incluidos los costes y honorarios de abogados) debidos a, que surjan de, o guarden relación con: (a) tu uso de los Servicios, (b) tu violación de estos Términos, (c) tu violación de las leyes o reglamentos aplicables, o (d) Tu Contenido. Nos reservamos el derecho de controlar la defensa legal de cualquier asunto por el que debas indemnizarnos, y aceptas cooperar con nuestra defensa legal con respecto a estas reclamaciones.
<br/>
<br/>
<b-fox>12. Exenciones y Limitación de Responsabilidad</b-fox>
<br/>
<br/> 
Nada de lo dispuesto en estos Términos perjudicará los derechos legales que pueda tener como usuario de los Servicios.&nbsp;Algunos países, estados, provincias u otras jurisdicciones no permiten la exclusión de garantías o la limitación de responsabilidad como se indica en esta sección, por lo que es posible que no estés sujeto por completo a los Términos que se exponen a continuación.
<br/>
<br/>
&nbsp;En su lugar, en dichas jurisdicciones, las exclusiones y limitaciones expuestas a continuación se aplicarán solo en la medida permitida por las leyes de dichas jurisdicciones.
<br/>
<br/>
LOS SERVICIOS SE PROPORCIONAN "COMO TAL" Y «SEGÚN DISPONIBILIDAD» SIN DECLARACIONES, GARANTÍAS O CONDICIONES DE NINGÚN TIPO, YA SEAN EXPRESAS, IMPLÍCITAS, LEGALES O ESTATUTARIAS, INCLUYENDO, ENTRE OTRAS, GARANTÍAS DETALLADA COMPLÍCITIDAD, GARANTÍAS TIPO COMPLÍCITIDAD Y DE NO INFRACCIÓN.
<br/>
<br/>
&nbsp;LAS ENTIDADES DE DNOFOX NO GARANTIZAN QUE LOS SERVICIOS SEAN EXACTOS, COMPLETOS, FIABLES, ACTUALES O QUE ESTÉN LIBRES DE ERRORES.&nbsp;DNOFOX NO CONTROLA, APRUEBA NI SE HACE RESPONSABLE DE NINGÚN CONTENIDO DISPONIBLE O VINCULADO A LOS SERVICIOS O LAS ACCIONES DE CUALQUIER TERCERO O USUARIO, INCLUIDOS LOS MODERADORES.&nbsp;
<br/>
<br/>
SI BIEN DNOFOX INTENTA QUE TU ACCESO Y USO DE NUESTROS SERVICIOS SEA SEGURO, NO DECLARAMOS NI GARANTIZAMOS QUE NUESTROS SERVICIOS O SERVIDORES ESTÉN LIBRES DE VIRUS U OTROS COMPONENTES DAÑINOS.
<br/>
<br/>
EN NINGÚN CASO NINGUNA DE LAS ENTIDADES DE DNOFOX SERÁ RESPONSABLE ANTE TI POR CUALQUIER DAÑO INDIRECTO, CONSECUENTE, EJEMPLAR, FORTUITO, ESPECIAL O PUNITIVO, O POR LA PÉRDIDA DE BENEFICIOS DERIVADA DE ESTOS TÉRMINOS O CON LOS DERIVADOS DE SERVICIOS, CONTENIDO DISPONIBLE EN LOS SERVICIOS QUE SE SUPONGA DIFAMATORIO, OFENSIVO O ILEGAL.
<br/>
<br/>&nbsp;EL ACCESO Y EL USO DE LOS SERVICIOS ES A TU PROPIA DISCRECIÓN Y RIESGO, Y SERÁS EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO QUE PUEDA SUFRIR TU DISPOSITIVO O SISTEMA INFORMÁTICO, O POR LA PÉRDIDA DE DATOS.&nbsp;EN NINGÚN CASO LA RESPONSABILIDAD TOTAL DE LAS ENTIDADES DE DNOFOX EXCEDERÁ LA SUMA QUE RESULTE MAYOR DE CIEN DÓLARES ESTADOUNIDENSES (100 $) O CUALQUIER IMPORTE QUE HAYAS PAGADO A DNOFOX EN LOS SEIS MESES ANTERIORES POR LOS SERVICIOS A QUE DEN LUGAR.
<br/>
<br/>
<b-fox>13. Legislación aplicable y jurisdicción</b-fox>
<br/>
<br/>
Queremos que disfrutes de Dnofox, por lo que si tienes un problema o una disputa, aceptas plantearlo y tratar de resolverlo con nosotros de manera informal.&nbsp;Puedes ponerte en contacto con nosotros y dejar tus comentarios e inquietudes <v-fox>aquí</v-fox>
<br/>
<br/>
Hasta el grado máximo que permita la ley correspondiente, cualquier reclamación que se derive de o esté relacionada con estos Términos o los Servicios se regirá por las leyes del estado de California, sin tener en cuenta sus normas de conflicto de leyes;&nbsp;todas las disputas relacionadas con estos Términos o los Servicios se someterán exclusivamente a los tribunales federales o estatales ubicados en Pampas, Tayacaja, y tanto tú como Dnofox aceptas la jurisdicción personal en estos tribunales.
<br/>
<br/>
Si eres una entidad del Gobierno Peruana, Cualquier reclamación que se derive de o esté relacionada con estos o los Servicios se regirá por las leyes de Perú sin tener en cuenta sus normas de conflicto de leyes.&nbsp;En la medida en que lo permita la legislación, se aplicarán las leyes (salvo sus normas de conflicto de leyes) en ausencia de la legislación federal aplicable.&nbsp;Todas las disputas relacionadas con estos Términos o los Servicios se someterán exclusivamente a los tribunales o estatales ubicados en Peru.
<br/>
<br/>
 <b-fox>14. Cambios a estos Términos</b-fox> 
 <br/>
 <br/>
Es posible que realicemos cambios a estos Términos ocasionalmente.&nbsp;Si realizamos cambios, publicaremos los Términos revisados &ZeroWidthSpace;&ZeroWidthSpace;y actualizaremos la Fecha de Entrada en Vigor indicada más arriba.&nbsp;
<br/>
<br/>
Si los cambios, a nuestro exclusivo criterio, son sustanciales, también podremos notificártelo enviando un correo electrónico a la dirección asociada a tu Cuenta (si has elegido proporcionar una dirección de correo electrónico) o enviándote un aviso a través de nuestros Servicios.
<br/>
<br/>
&nbsp;Si continúas accediendo o utilizando los Servicios en o después de la Fecha de Entrada en Vigor de los Términos revisados, expresa tu conformidad con estar sujeto a los Términos revisados.&nbsp;
<br/>
<br/>
Si no estás de acuerdo con los Términos revisados, debes dejar de acceder y utilizar nuestros Servicios antes de que los cambios entren en vigor.
<br/>
<br/>

<b-fox>15. Términos Adicionales</b-fox>
<br/>
<br/>
Debido a que ofrecemos diversos Servicios, es posible que solicitemos que acepte términos, políticas, pautas o reglas adicionales antes de usar un producto o servicio específico ofrecido por Dnofox (además, "&nbsp;Términos Adicionales&nbsp;").&nbsp;
<br/>
<br/>
Todos los Términos Adicionales se incorporan por esta referencia a los presentes Términos y forman parte de ellos, y en la medida en que los Términos Adicionales entren en conflicto con los presentes Términos, los Términos Adicionales rigen tu uso de los Servicios correspondientes.
<br/>
<br/>    
<p-fox>• Si usas D´nofox Monedas Virtuales, también debes aceptar el Acuerdo de Dnofox&nbsp;.</p-fox>
<br/>
<br/>
<p-fox>• Si usas Regalos de Dnofox, debes aceptar el Acuerdo de Usuario de Regalos de Dnofox &nbsp;.</p-fox>
    <br/>
    <br/>
<b-fox>16. Resolución</b-fox>
<br/>
<br/>
Puedes resolver estos Términos en cualquier momento y por cualquier motivo eliminando tu Cuenta y dejando de usar todos los Servicios.&nbsp;Si dejas de usar los Servicios sin tu Cuenta, tu Cuenta puede desactivarse debido a una inactividad prolongada.
<br/>
En la medida en que lo permita la ley, podemos suspender o cancelar tu Cuenta, estado de moderador o capacidad de acceder o utilizar los Servicios en cualquier momento por cualquier motivo 
<br/>
o sin él, inclusive por infringir estos Términos de nuestra&nbsp;<u-fox id="contenido-fox5">Política de Contenido&nbsp;</u-fox>.
<br/>
Las siguientes secciones permanecerán en vigor después de la terminación de estos Términos o de tu Cuenta: 
<br/>
<br/>
4 (Tu Contenido), 7 (Cosas que no puedes hacer), 11 (Indemnidad), 12 (Exenciones y Limitación de Responsabilidad), 13 (Legislación aplicable y jurisdicción) y 17 (Varios).
<br/>
<br/>
<b-fox>17. Disposiciones varias</b-fox>
<br/>
<br/>
Estos Términos, junto con la <u-fox id="politicas-fox4">Política de Privacidad</u-fox>&nbsp;y cualquier otro acuerdo incorporado expresamente por referencia en estos Términos, constituyen el acuerdo completo entre tú y nosotros con respecto a tu acceso y uso de los Servicios.&nbsp;
<br/>
<br/>
El hecho de que no ejerzamos o hagamos cumplir cualquier derecho o disposición de estos Términos no implica una renuncia a dicho derecho o disposición.&nbsp;Si alguna parte de estos Términos se considera inválida o inaplicable, la parte inaplicable tendrá efecto en la mayor medida posible, y las partes permanecerán en pleno vigor y efecto.&nbsp;
<br/>
<br/>
No podrás ceder ni transferir ninguno de tus derechos u obligaciones en virtud de estos Términos sin nuestro consentimiento.&nbsp;Podremos ceder libremente cualquiera de nuestros derechos y obligaciones en virtud de Términos.
<br/>
<br/>
Estos Términos son un acuerdo legalmente vinculante entre tú y Dnofox, Inc. 
<br/>
Si tienes alguna pregunta sobre estos Términos, por favor, <v-fox id="contacto-fox1">ponte en contacto con nosotros</v-fox> .&nbsp; 
<br/>
<br/>
<p-fox>
Dnofox, Inc.
<br/>
<br/>
Jr. Bolivar 310 postal 09156
<br/>
<br/>
Huancavelica , pampas Tayacaja
Perú.
</p-fox>
<br/>
<br/>

 

            </div>            
            <p  onClick={Answer2}>
                <IoMdArrowDropright className={rotate2}></IoMdArrowDropright> 
                Contenido
            </p>
            <div className={Ans2}>
            
    
    <b-fox>Política de contenido de Dnofox</b-fox>
    <br/>
    <br/>
    Dnofox es una red de vínculos virtuales, cuyo principal objetivo es dar un soporte para producir y compartir contenidos, ejecutadas y pobladas por ustedes, los usuarios de Dnofox.<br/>
    A través de esta red social, puede publicar, comentar &amp; compartir publicaciones, apoyar y conectarse con personas que comparten sus intereses, y lo alentamos a encontrar, o incluso crear, su hogar en Dnofox.
    <br/>
    <br/>

    Si bien no todos los usuarios son amables (y es posible que encuentres algunas poco relacionadas o incluso ofensivas).&nbsp; Del mismo modo, todos en Dnofox deben tener expectativas de privacidad y seguridad, así que respete la privacidad y seguridad de los demás.
    <br/>
    <br/>

    Cada publicación en Dnofox está definida por sus usuarios.&nbsp;La cultura de cada publicación está moldeada explícitamente, por las Política de contenido.
    <br/>
    <br/>

    Dnofox y sus usuarios son solo lo que hacemos de ellos juntos, y solo pueden existir si operamos según las reglas compartidas.&nbsp;Le pedimos que cumpla no solo con la letra de estas reglas, sino también con el espíritu.
    <br/>
    <br/>

    <b-fox>Reglas de Dnofox</b-fox> 
    <br/>
    <br/>

    Recuerda Usuario.&nbsp;Dnofox es un lugar para crear, compartir información, noticias y contenidos y pertenencia, no para atacar a grupos de personas marginados o vulnerables.&nbsp;Todos tienen derecho a usar Dnofox sin <u-fox id="intimidacion-fox1">acoso, intimidación</u-fox> amenazas de <u-fox id="violencia-fox1">violencia</u-fox>.&nbsp;Se prohibirán a los usuarios que inciten a la violencia o que promuevan el odio por <u-fox id="identidad-fox1">identidad o vulnerabilidad</u-fox>.
    <br/>
    <br/>
    
     Publique contenido auténtico en las que tenga un interés personal, y no haga trampa ni participe en la manipulación de contenido (incluido el envió de <u-fox id="correo-fox1">correo no deseado</u-fox> , la evasión de prohibiciones o el fraude de seguidores) ni interfiera o interrumpa a los usuarios de Dnofox. Respete la privacidad de los demás.&nbsp;No se permite&nbsp;instigar el acoso, por ejemplo, revelando <u-fox id="confidencial-fox1">información personal o confidencial</u-fox> de&nbsp;alguien&nbsp;.&nbsp;Nunca publique ni amenace con publicar <u-fox id="sensual-fox1">medios intimos o sensualmente explícitos</u-fox>&nbsp;de alguien sin su consentimiento.
     <br/>
     <br/>

    No publique ni fomente la publicación de <u-fox id="menor-fox1">contenido sexual o sugerente que involucre a menores</u-fox>.
    <br/>
    <br/>

    No es necesario que use su nombre real para usar Dnofox, pero no se haga <u-fox id="pasar-fox1">pasar por</u-fox>&nbsp;un individuo o una entidad de manera engañosa. Asegúrese de que las personas tengan experiencias predecibles en Dnofox. Manténgalo legal y evite publicar contenido ilegal o solicitar o facilitar <u-fox id="prohibido-fox1">transacciones ilegales o prohibidas</u-fox>.
    <br/>
    <br/>

    <b-fox>Hacer cumplir las reglas de Dnofox</b-fox>
    <br/>
    <br/>

    Tenemos una variedad de formas de hacer cumplir nuestras reglas, que incluyen, entre otras,<br/><br/>
        <p-fox>• Te pedimos amablemente que lo dejes</p-fox><br/>
        <p-fox>• Te pedimos menos amablemente</p-fox><br/>
        <p-fox>• Suspensión de cuentas temporal o permanente</p-fox><br/>
        <p-fox>• Eliminación de privilegios o adición de restricciones a las cuentas</p-fox><br/>
        <p-fox>• Eliminación de contenido </p-fox><br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt ut, quas repellendus aut sint consectetur qui recusandae iure adipisci. Exercitationem labore maxime quaerat aliquid? Optio quis quaerat omnis perspiciatis?

            </div>                    
            <p  onClick={Answer3}>
                <IoMdArrowDropright className={rotate3}></IoMdArrowDropright> 
                Privacidad
            </p>
            <div className={Ans3}>
    Queremos que entiendas cómo y por qué Dnofox, Inc. 
    <br/>
    <br/>
    <p-fox>Esta Política de Privacidad se aplica a todos nuestros Servicios, </p-fox>
    <br/>
    incluido Regalos Dnofox, que dispone de unanota de rivacidad separada&nbsp;que incorpora esta Política de privacidad por referencia.
    <br/>
    Lo que recopilamos (y cómo lo usamos y compartimos)

    <br/>
    <br/>
    (en adelante, "Dnofox", "nosotros", "nuestro" o análogo) recopila, usa y comparte información sobre ti cuando utilizas nuestros sitios, aplicaciones móviles, widgets y demás productos y servicios en línea (en adelante, y colectivamente, los "Servicios"),
    <br/>
     o cuando interactúas con nosotros de otro modo o recibes comunicaciones de nuestra parte. 
     <br/>
     <br/>
    <b-fox>Información que nos proporcionas
Recopilamos información que nos proporcionas de forma directa cuando utilizas los Servicios. Esto incluye:
    </b-fox>
<br/>
<br/>

 Información de cuenta
Si creas una cuenta Dnofox, te podemos pedir que nos proporciones un nombre de usuario y contraseña. 
<br/>
Tu nombre de usuario es público, y no tiene que guardar ninguna relación con tu nombre de verdad. 
<br/>
También nos puedes suministrar otra información, como una dirección de correo electrónico, biografía o una foto de perfil. También guardamos tus preferencias y la configuración de tu cuenta de usuario.
<br/>
<br/>
                    Contenido que proporciones
 Recopilamos el contenido que proporciones a los Servicios. Esto incluye tus publicaciones y tus comentarios incluyendo los borradores guardados, tus mensajes con otros usuarios (p. ej. mensajes privados, chats, y mensajes de moderadores ), así como los reportes que hagas y las comunicaciones que intercambies con los moderadores y con nosotros. Tu contenido puede abarcar texto, enlaces, imágenes, gifs y vídeos.
 <br/>
 <br/>
                           Información sobre transacciones

                           <br/>
                           <br/>

Si nos compras productos o servicios (p. ej. D´nofox o Monedas dnofox), recopilaremos cierta información sobre ti, incluyendo tu nombre, dirección, dirección de correo electrónico, e información sobre el producto o servicio que compres.
<br/>
<br/>
 Dnofox utiliza servicios de pago comunes en el sector (por ejemplo, Stripe) para gestionar la información de pago.
<br/>
<br/>
<b-fox>Utilizamos tu información para:</b-fox> 
<br/>
<br/>

    <p-fox>• Prestar, mantener y mejorar los Servicios;</p-fox> 
    <br/>
    <br/>
    <p-fox> • Realizar investigaciones y desarrollar nuevos servicios;</p-fox> 
    <br/>
    <br/>
    <p-fox> • Ayudar a proteger la seguridad de Dnofox y de nuestros usuarios, lo que incluye bloquear a sospechosos de spam, gestionar casos de abusos, y aplicar el Acuerdo de Usuario de Dnofox y nuestras demás políticas;</p-fox> 
    <br/>
    <br/>
    <p-fox> • Enviarte avisos técnicos, actualizaciones, alertas de seguridad, facturas, y otros mensajes de soporte o administrativos;</p-fox> 
    <br/>
    <br/>
    <p-fox> • Prestarte nuestros servicios de atención al cliente;</p-fox> 
    <br/>
    <br/>
    <p-fox> • Comunicarnos contigo sobre los productos, servicios, ofertas, promociones y eventos, así como proporcionarte otras noticias e información que creemos que será de interés para ti (para saber cómo desactivar esta función, consulta la sección de&nbsp;<v-fox>Tus Opciones</v-fox>) más abajo;    </p-fox> 
    <br/>
    <br/>
    <p-fox> • Monitorizar y analizar las tendencias, los usos y las actividades relacionados con nuestros Servicios;    </p-fox> 
    <br/>
    <br/>
    <p-fox> • Medir la efectividad de los anuncios mostrados en nuestros Servicios, y    </p-fox> 
    <br/>
    <br/>
    <p-fox> • Personalizar los Servicios y mostrar y optimizar los anuncios, el contenido y las funciones que se ajusten a los perfiles e intereses de los usuarios.    </p-fox> 
    <br/>
    <br/>     
    <br/>

    Tu cuenta de Dnofox tiene una página de perfil que es pública. Tu perfil contiene información sobre tus actividades en nuestros Servicios, como tu nombre de usuario, comentarios y publicaciones anteriores, id, los premios recibidos, trofeos, estado de moderador, y cuánto tiempo llevas siendo miembro de nuestros Servicios. 
    <br/>
    <br/>
    También puedes seleccionar la opción para que tu perfil incluya el contenido al que le hayas dado reacciones positivos y negativos.
    <br/>
    <br/>
Ofrecemos funciones sociales de compartición que te permiten compartir contenido o las acciones que realices en nuestros Servicios con otros medios. 
<br/>
<br/>
Tu uso de estas funciones permite la compartición de determinada información con tus amigos o con el público en general, en función de la configuración que establezcas con el tercero que presta la función de compartición social. 
<br/>
<br/>
Para saber más sobre los propósitos y el ámbito de recopilación de datos, así como su tratamiento, en relación con las funciones sociales de compartición, por favor consulta las políticas de privacidad de los terceros proveedores que prestan estas funciones sociales de compartición (p. ej. <v-fox>Twitter, Facebook,YouTube</v-fox>,).
<br/>
<br/>
No vendemos tu información personal. Sin embargo, además de la información personal que se muestra públicamente según se ha descrito anteriormente, podemos compartir tu información personal de las siguientes formas:
<br/>
<br/>   
<p-fox> • Con tu consentimiento.&nbsp;Podemos compartir tu información con tu consentimiento o siguiendo tus indicaciones.    </p-fox> 
<br/>
<br/>    
<p-fox> • Con servicios vinculados.&nbsp;Si vinculas tu cuenta de Dnofox con el servicio de un tercero, Dnofox compartirá la información que autorices con el servicio de dicho tercero. Puedes controlar la información compartida según se describe en Tu Opciones&nbsp;más adelante.    </p-fox> 
<br/>
<br/>    
<p-fox> • Con nuestros proveedores de servicios.&nbsp;Podemos compartir información con proveedores, consultores y otros proveedores de servicios que necesiten acceso a dicha información para realizar trabajos para nosotros. El uso que hagan de tus datos personales estará sujeto a medidas de confidencialidad y seguridad adecuadas. Algunos ejemplos: (i) procesadores de pagos que procesan las transacciones en nuestro nombre; (ii) proveedores de servicios en la nube que alojan nuestros datos y servicios; (iii) empresas que se dedican a medir datos sobre los anuncios de terceros y que nos ayudan a nosotros y a los anunciantes a medir el rendimiento de los anuncios que se publican en nuestros Servicios.    </p-fox> 
<br/>
<br/>    
<p-fox> • Para cumplir las leyes. Podemos compartir información para dar respuesta a un requerimiento de información, si creemos que es necesario proceder a su divulgación para cumplir con las leyes, reglamentos o procedimientos judiciales aplicables, así como a los requerimientos realizados por el Gobierno, incluyendo, a título enunciativo y no exhaustivo, para cumplir con las obligaciones derivadas de requerimientos policiales o de seguridad nacional. En la medida en que lo permita la ley, trataremos de comunicarte con antelación que tu información personal será divulgada para dar respuesta a un requerimiento de esta naturaleza. Nuestro Informe de Transparencia&nbsp;contiene más información sobre cómo respondemos a los requerimientos gubernamentales.    </p-fox> 
<br/>
<br/>    
<p-fox> • En caso de emergencia.&nbsp;Podemos compartir información si consideramos que es necesario para evitar un daño inminente y grave a la integridad física de una persona.    </p-fox> 
<br/>
<br/>    
<p-fox> • Para aplicar nuestras políticas y ejercitar derechos.&nbsp;Podemos compartir información si consideramos que tus acciones van en contra de nuestro <v-fox>Acuerdo de Usuario</v-fox>, nuestras <v-fox>Normas</v-fox>, u otras políticas de Dnofox, o para proteger nuestros derechos, nuestra propiedad y nuestra seguridad así como los de los demás.    </p-fox> 
<br/>
<br/>    
<p-fox> • Con nuestros socios y afiliados.&nbsp;Podemos compartir tu información con las empresas matrices, vinculadas, filiales y demás empresas de Dnofox cuando se encuentren bajo la misma titularidad y control.    </p-fox> 
<br/>
<br/>    
<p-fox> • Información agregada o información no identificable. Podemos compartir información sobre ti cuando haya sido agregada o tenga un grado de anonimidad tal que no pueda razonablemente emplearse para identificarte. Por ejemplo, podemos mostrar el número total de D´nofox de una publicación sin identificar a los visitantes, o podemos decirle a un usuario el número de personas que vieron su publicacion.    </p-fox> 
<br/>
<br/>
<b-fox>Cómo protegemos tu información</b-fox>
<br/>
<br/>
Tomamos medidas para ayudar a proteger tu información frente a pérdida, robo, uso indebido y acceso, divulgación, alteración o eliminación no autorizados. 
<br/>
<br/>

Por ejemplo, utilizamos HTTPS mientras se esté transmitiendo la información. También aplicamos controles de acceso técnico y administrativos para limitar quiénes de nuestros empleados tienen acceso a la información personal no pública.
<br/>
<br/>
Puedes ayudar al mantenimiento de la seguridad de tu cuenta configurando la <v-fox>autenticación de dos pasos</v-fox>.
<br/>
<br/>
Conservamos la información recopilada durante el tiempo necesario para el (los) fin(es) para la que fue recopilada. Podemos conservar la información por razones empresariales legítimas o según lo exija la ley.

<br/>
<br/>

<b-fox>Tus Derechos</b-fox>
<br/>
<br/>
Solicitudes de Información del Interesado y del Consumidor
Siguiendo el proceso descrito <v-fox>aquí</v-fox> pueden presentarse todas las peticiones para recibir una copia de la información que Dnofox tiene sobre tu cuenta —incluyendo el acceso del interesado a su información conforme al Reglamento General de Protección de Datos de la UE ("RGPD") y las peticiones de acceso a la información conforme a Ley de Privacidad del Consumidor de California ("CCPA")—.
<br/>
<br/>
Antes de tramitar una solicitud sobre tu información personal, necesitaremos verificar la petición mediante tu acceso a tu cuenta Dnofox o a una dirección de correo electrónico verificada asociada a tu cuenta de RDnofox. También puedes nombrar a un representante autorizado para que ejercite estos derechos en tu nombre. Dnofox no discrimina a los usuarios que ejerciten sus derechos en virtud de leyes de protección de datos para realizar solicitudes relativas a su información personal.

<br/>
<br/>

<b-fox>Contáctanos</b-fox>

<br/>
<br/>
Si te surgen otras dudas sobre esta Política de Privacidad, ponte en contacto con nosotros en:
<br/>
<br/>
<p-fox> 
Dnofox, Inc.
<br/>
<br/>
310 jr. Bolivar postal 09156
<br/>
<br/>
O:
representante@dnofox.com
<br/>
<br/>
Pampas, Tayacaja Huancavelica
</p-fox>
            </div> 


            {/** DESDE AQUI YA NO SE AGREGARON MAS EFECTOS  */} 
                               
            <p  onClick={Answer4}>
                <IoMdArrowDropright className={rotate4}></IoMdArrowDropright> 
                Cookies
            </p>
            <div className={Ans4}>

    Este Aviso de cookies explica cómo usamos las cookies y tecnologías similares, así como las opciones que tiene para controlarlas.
<br/>
<br/>
    <b-fox>¿Cómo utilizan mis datos Dnofox?</b-fox>
    <br/>
    <br/>
Hay varias formas de controlar cómo se recopila la información de las cookies en Dnofox y cómo se utiliza esa información.
La configuración de su navegador
<br/>
<br/>
Su navegador incluye controles que le permiten administrar el uso de cookies por parte de los sitios que visita.&nbsp;La mayoría de los navegadores tienen funciones que le permiten ver y eliminar las cookies almacenadas en su dispositivo y bloquear las cookies de todos los sitios o de sitios seleccionados.&nbsp;Para obtener más información, aquí hay enlaces a materiales de ayuda externos de algunos de los navegadores populares:
<br/>  
<br/>  
    <p-fox>• <u-fox id="navegador-fox1">Mozilla Firefox</u-fox></p-fox>
    <br/>
    <br/>
    <p-fox>• <u-fox id="navegador-fox2">safari de manzana</u-fox></p-fox>
    <br/>
    <br/>
    <p-fox>• <u-fox id="navegador-fox3">Google Chrome</u-fox></p-fox>
    <br/>
    <br/>
    <p-fox>• <u-fox id="navegador-fox4">Borde de Microsoft</u-fox></p-fox>
    <br/>
    <br/> 
La configuración de su dispositivo móvil
<br/>
<br/>
Su dispositivo móvil también puede incluir configuraciones de navegador que le permitan administrar el uso de cookies, especialmente si el dispositivo admite la instalación de aplicaciones como dispositivos iOS y Android.&nbsp;Los dispositivos iOS y Android también incluyen configuraciones de dispositivos adicionales que controlan si los socios publicitarios pueden usar información sobre la actividad de su aplicación con fines publicitarios.&nbsp;En iOS, puede buscar una configuración llamada&nbsp;Limitar seguimiento de anuncios&nbsp;.&nbsp;En Android, puede buscar una configuración llamada&nbsp;Inhabilitar la personalización de anuncios&nbsp;.
Darse de baja
<br/>
Los principales grupos de la industria de la publicidad en línea ofrecen herramientas para limitar la forma en que los terceros participantes utilizan las cookies con fines publicitarios.&nbsp;Hay más información disponible en estos sitios de&nbsp;<v-fox>Network Advertising Initiative</v-fox>&nbsp;,<v-fox>Digital Advertising Alliance</v-fox>&nbsp;y, para los usuarios de la UE,<v-fox>European Interactive Digital Advertising Alliance</v-fox>&nbsp;.&nbsp;Además, Google proporciona a los usuarios de la web el&nbsp;<v-fox>complemento de inhabilitación para navegadores de Google Analytics</v-fox>&nbsp;para evitar la recopilación de datos a través de Google Analytics.
<br/>
Configuración de usuario de Dnofox
<br/>
<br/>
En Dnofox, puede controlar su configuración de privacidad y cómo  Dnofox usa los datos visitando <u-fox>https://www.dnofox,com/Política/Privacidad</u-fox>. 

            </div>  
                               
            <p  onClick={Answer5}>
                <IoMdArrowDropright className={rotate5}></IoMdArrowDropright> 
                Copyright
            </p>
            <div className={Ans5}>
          

<b-fox>Quejas sobre el contenido publicado en Dnofox</b-fox>
<br/>
<br/>
Respetamos los derechos de propiedad intelectual ajenos y deseamos ofrecer una plataforma que no contenga contenido que infrinja dichos derechos. 
<br/>
<br/>
<p-fox>Nuestras Condiciones de uso requieren que la información publicada por los usuarios sea precisa,</p-fox> lícita y que no infrinja los derechos de terceras partes. 
<br/>
<br/>
Para promover estos objetivos, Dnofox dispone de un procedimiento de envío de quejas sobre el contenido publicado por nuestros Miembros. Nuestra política y nuestros procedimientos se describen en las secciones que figuran a continuación.
<br/>
<br/>
Ten en cuenta que, con independencia de que permitamos o no el acceso o de que eliminemos el contenido, Dnofox puede hacer un intento de buena fe de reenviar la notificación por escrito, incluyendo los datos de contacto de quien presenta la queja, al usuario que publicó el contenido o tomar otras medidas razonables para notificar al usuario que Dnofox ha recibido un aviso de una supuesta infracción de derechos de propiedad intelectual o de otro contenido.
<br/>
<br/> Nuestra política permite, en circunstancias adecuadas y a nuestra discreción, inhabilitar o cerrar cuentas de usuarios, que infrinjan o infrinjan repetidamente los derechos de otras personas, o quienes de otro modo publiquen contenido ilícito.
<br/>
<br/>
Ten en cuenta que cualquier aviso o aviso de oposición que se envíe debe ser verdadero, y se enviará bajo pena de perjurio. Se podrán derivar responsabilidades personales de una notificación falsa o de una notificación de oposición. Por ello, te recomendamos que contactes con un asesor jurídico antes de presentar una notificación o una notificación de oposición.
<br/>
<br/>
<b-fox>Notificación por infracción de copyright:</b-fox>
<br/>
<br/>
De conformidad con la Ley de Derechos de Autor de la Era Digital, o DMCA por sus siglas en inglés (sección&nbsp;512 del título 17&nbsp;del Código de Estados Unidos), Dnofox ha establecido un procedimiento para recibir notificaciones por escrito de infracciones reclamadas. Dnofox también ha designado a un agente encargado de recibir los avisos por infracciones de copyright. Si crees de buena fe que se ha producido una infracción de copyright puedes completar y enviar un <v-fox>formulario de Aviso por infraccion de copyright</v-fox>&nbsp;o, en caso contrario, proporcionar una comunicación escrita que contenga:
<br/>
<br/>    
<p-fox>1. una firma electrónica o a mano de la persona autorizada para actuar en representación del propietario del copyright;</p-fox>
<br/>
<br/>
<p-fox>2. una descripción del trabajo protegido con copyright que se reclama que ha sido infringido;</p-fox>
<br/>
<br/>
<p-fox>3. una descripción especificando la ubicación en nuestro sitio web del material que reclamas que se está infringiendo;</p-fox>
<br/>
<br/>
<p-fox>4. tu dirección postal y dirección de email o tu número de teléfono;</p-fox>
<br/>
<br/>
<p-fox>5. una declaración donde, de buena fe, manifiestes que el uso objeto de controversia no está autorizado por el propietario del copyright, su agente o la ley; y</p-fox>
<br/>
<br/>
<p-fox>6. una declaración donde manifiestes, bajo pena de perjurio, que la información consignada en tu aviso es precisa, y que eres el propietario del copyright o que estás autorizado para actuar en nombre del propietario de ese derecho.</p-fox>
<br/>
<br/>
<b-fox>Envía tu aviso al Agente de copyright de Dnofox como se indica a continuación:</b-fox>
<br/>
<br/>
<v-fox>Completa nuestro formulario de envió online para contactar con el agente de copyright Dnofox</v-fox>
<br/>
o contáctanos por correo postal en la siguiente dirección:
<br/>
<br/>
<p-fox>
Dnofox, Inc.
<br/>
<br/>
copyright@dnofox.com 
<br/>
<br/>
Jr. Bolivar 310 postal 09156
<br/>
<br/>
Huancavelica , pampas Tayacaja 
<br/>
<br/>
Perú
</p-fox>
<br/>
<br/>
Aviso de oposición:
<br/>
<br/>
Si crees que se ha enviado contra ti indebidamente un aviso por infracción de copyright, puedes presentar un Aviso de oposición. Puedes completar el <v-fox>formulario de Aviso de oposición sobre una queja por infracción de copyright</v-fox>&nbsp;o, en caso contrario, proporcionar una comunicación escrita que contenga:
<br/>
<br/>    
<p-fox>1. tu firma a mano o electrónica;</p-fox>
<br/>
<br/>
<p-fox>2. identificación del material que se ha eliminado o cuyo acceso se ha inhabilitado;</p-fox>
<br/>
<br/>
<p-fox>3. una declaración donde manifiestes, bajo pena de perjurio, que de buena fe crees que el material fue eliminado o se inhabilitó el acceso al mismo por error o se identificó de manera errónea;</p-fox>
<br/>
<br/>
<p-fox>4. tu nombre completo, dirección postal y dirección de email, y una declaración de que aceptas la jurisdicción del tribunal (i) en el distrito judicial donde resides si tu dirección está en Perú, o (ii) en otros departamentos del Perú, si tu dirección está fuera de Perú, y de que aceptarás la notificación de la persona que haya enviado el aviso con la queja o su agente autorizado.</p-fox>
<br/>
<br/>

Envía tu Aviso de oposición al Agente de derechos de autor a través de <v-fox>nuestro formulario de envío online</v-fox>&nbsp;o por correo postal a la dirección especificada anteriormente.
<br/>
<br/>
Quejas sobre contenido que no estén relacionadas con infracciones de copyright
<br/>
<br/>
Para cuestiones que no tengan que ver con infracciones de copyright, visita nuestro <v-fox>Centro de ayuda</v-fox>,&nbsp;donde encontrarás información acerca de cómo denunciar o informar sobre otros tipos de infracciones de contenido.


            </div>  
                               
            <p  onClick={Answer6}>
                <IoMdArrowDropright className={rotate6}></IoMdArrowDropright> 
                Acerca de 
            </p>
            <div className={Ans6}>
    <p-fox>Dnofox es un hogar de miles de Usuarios,</p-fox> conversaciones interminables y una conexión humana autentica. 
    <br/>
    <br/>
    Ya sea que le gusten las noticias de ultima hora, los deportes, las teorías de los fanáticos de la televisión o 
    <br/>
    una corriente interminable de los animales mas lindos de internet, Hay una población en Dnofox para usted.
    <br/>
    <br/>
    <b-fox>¿Como funciona Dnofox?</b-fox>
    <br/>
    <br/>
    Todos los días millones de personas en todo el mundo publican, reaccionan y comentan, comparten en torno a sus intereses.
    <br/>
    Dnofox es una familia en crecimiento de millones de personas diversas que comparten las cosas más les importan.
    <br/>
    <br/>
    <p-fox>Ultima actualización enero de 2022</p-fox>

            </div>   
        </section>
        <br/>
        <br/>
        <Footer></Footer>
        </>
    )
}
export default Start;