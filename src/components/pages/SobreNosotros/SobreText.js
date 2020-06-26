import sobreCabeza from "./SobreTextInput/sobreCabeza.js";
import sobreCreemos from "./SobreTextInput/sobreCreemos.js";
import sobreHebraico from "./SobreTextInput/sobreHebraico.js";
import sobreIdentidad from "./SobreTextInput/sobreIdentidad.js";
import sobreMersianicos from "./SobreTextInput/sobreMersianicos.js";
import sobreMision from "./SobreTextInput/sobreMision.js";
import sobreQuienes from "./SobreTextInput/sobreQuienes.js";
import sobreRevelacion from "./SobreTextInput/sobreRevelacion.js";
import sobreShabbat from "./SobreTextInput/sobreShabbat.js";
import sobreTorah from "./SobreTextInput/sobreTorah.js";
import sobreVocab from "./SobreTextInput/sobreVocab.js";


const SobreText = {

    sobre1: {
        sobreheader: "¿Quiénes Somos?",
        sobretext: sobreQuienes,
        // sobretext: {sobre.map(sobre => <div>{sobre.name}</div>)},
    }, 

    sobre2: {
        sobreheader: "Nuestra misión",
        sobretext: sobreMision
    }, 

    sobre3: {
        sobreheader: "¿Qué creemos?",
        sobretext: sobreCreemos
    }, 

    sobre4: {
        sobreheader: "¿Qué significa recuperar la identidad y cultura israelita?",
        sobretext: sobreIdentidad
    }, 

    sobre5: {
        sobreheader: "¿Por qué adoramos en un contexto hebraico?",
        sobretext: sobreHebraico
    },
    sobre6: {
        sobreheader: "¿Por qué adoramos en Shabbat y las Fiestas Bíblicas?",
        sobretext: sobreShabbat
    },
    sobre7: {
        sobreheader: "¿Por qué nos identificamos como mesiánicos?",
        sobretext: sobreMersianicos
    },
    sobre8: {
        sobreheader: "Nuestra perspectiva respecto a la Toráh",
        sobretext: sobreTorah
    },
    sobre9: {
        sobreheader: "¿Por qué nos cubrimos la cabeza?",
        sobretext: sobreCabeza
    },
    sobre10: {
        sobreheader: "Revelación Profética de las Fiestas",
        sobretext: sobreRevelacion
    },
    sobre13: {
        sobreheader: "¿Qué significa el vocabulario hebreo que usamos con frecuencia?",
        sobretext: sobreVocab
    },

}

export default SobreText;