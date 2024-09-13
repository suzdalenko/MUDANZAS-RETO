<template> 
    <HeaderIndex /> 
    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-xl-12">
                    <div class="text-container">
                        <h1 class="h1-large">POLÍTICA DE COOKIES</h1>
                    </div> 
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <p> En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico le informamos de que este sitio web, al igual que la mayoría de los sitios en Internet, usa Cookies para mejorar y optimizar la experiencia del usuario. 
                        A continuación encontrará información detallada sobre qué son las “Cookies”, qué tipología utiliza este sitio web, cómo cambiar la configuración de sus cookies, y qué ocurre si deshabilita las Cookies. </p>
                    <b>¿Qué son las Cookies? </b>
                    <p>Una cookie es un pequeño archivo que se descarga en el equipo del usuario con la finalidad de almacenar datos, los cuales podrán ser actualizados y recuperados por la entidad responsable de su instalación. </p>
                    <b>¿Qué tipo de Cookies utiliza esta página web? </b>
                    <p>Cookies técnicas: Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.
Cookies de personalización: Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.
Cookies de análisis: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
Cookies publicitarias: Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.
Cookies de publicidad comportamental: Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.
Cookies de terceros: La Web de tesolmon puede utilizar servicios de terceros que recopilen información con fines estadísticos de uso del Site por parte del usuario y para la prestación de otros servicios relacionados con la actividad del Website y otros servicios de Internet.</p>
                    <p>En particular, esta web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043. Para la prestación de estos servicios, estos utilizan cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la Web Google.com. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.</p>
                    <b>¿Cómo puede configurar sus Cookies? </b>
                    <p>Al navegar y continuar en nuestro sitio web estará consintiendo el uso de las Cookies en las condiciones contenidas en la presente Política de Cookies. Usted como usuario tiene la posibilidad de ejercer su derecho a bloquear, eliminar y rechazar el uso de Cookies, en todo momento, modificando las opciones de su navegador</p>
                    <p>Por ejemplo: 
                        <br> 1. Internet Explorer: Herramientas > Opciones de Internet > Privacidad > Configuración. 
                        <br> Para más información, puede consultar el soporte de Microsoft o la Ayuda del navegador. 
                        <br> 2. Mozilla Firefox: Herramientas > Opciones > Privacidad > Historial > Configuración Personalizada. 
                        <br> Para más información, puede consultar el soporte de Mozilla o la Ayuda del navegador. 
                        <br> 3. Google Chrome: Configuración > Mostrar opciones avanzadas > Privacidad -> Configuración de contenido. 
                        <br> Para más información, puede consultar el soporte de Google o la Ayuda del navegador. 
                        <br> 4. Safari: Preferencias > Seguridad. 
                        <br> Para más información, puede consultar el soporte de Apple o la Ayuda del navegador. 
                        <br> 5. Opera: Configuración > Opciones > Avanzado > Cookies 
                        <br> Para más información, puede consultar el soporte de Opera o la Ayuda del navegador. 
                        <br> Si usa otro navegador distinto a los anteriores, consulte su política de instalación, uso y bloqueo de cookies.</p>
                    <b>¿Qué ocurre si se deshabilitan las Cookies?</b>
                    <p>Algunas funcionalidades de los Servicios o áreas de este sitio web podrían no funcionar correctamente.</p>
                    <b>¿Actualizamos nuestra política de Cookies?</b>
                    <p>Es posible que actualicemos la política de Cookies de nuestra página web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para que usamos las Cookies</p>


                
                </div>
            </div>
        </div>
    </header> 
    <FooterIndex />
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import FooterIndex from '@/components/IndexPage/FooterIndex';
export default{
    components: { HeaderIndex, FooterIndex },
    data() {
        return {
            currentUrl: '',
            titlePage: 'AVISO LEGAL Y POLÍTICA PRIVACIDAD'
        };
    },
    created (){
        this.currentUrl = this.getCurrentUrl();
    },
    methods:{
        getCurrentUrl(){
            return  this.$route.path;
        }
    },
    watch: {
        '$route.path': function(newPath) {
            this.currentUrl = newPath;
        }
    }
}
</script>
