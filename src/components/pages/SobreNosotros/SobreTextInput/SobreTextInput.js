import React, { Component } from "react";
import SobreTextInput from './SobreTextInput/SobreTextInput';
import Sobre1 from './SobreTextInput/Sobre/sobre1'

class SobreTestInput extends Component {

state = {
    sobreadd: sobre1
};

const SobreText = {

    sobre1: {
        sobreheader: "¿Quiénes Somos?",
        sobretext: <div>{Object.keys(this.state.sobreadd).map(key => <Sobre1 key={key} sobreadd={this.state.sobreadd[key]}/>)}</div>,
        // sobretext: {sobre1.map(sobre => <div>{sobre.name}</div>)},
    }, 

    sobre2: {
        sobreheader: "Nuestra misión",
        sobretext: "Pabst yr swag, woke blog dolore officia aesthetic. Brunch artisan dolore meggings selvage tbh selfies id. Ut cold-pressed pariatur art party fanny pack salvia. Proident tbh tousled fugiat sunt. Hell of waistcoat cloud bread poke taiyaki trust fund."
    }, 

    sobre3: {
        sobreheader: "¿Qué creemos?",
        sobretext: "Poke vegan mumblecore iceland, enamel pin vaporware williamsburg letterpress fugiat banjo. Seitan wolf succulents pop-up, raclette cliche VHS mumblecore. Raw denim thundercats pariatur irony aliqua ethical activated charcoal dreamcatcher health goth seitan umami shabby chic next level. Aute hashtag aliquip yr. Mustache typewriter laborum farm-to-table street art veniam man braid YOLO ethical lyft single-origin coffee. Consequat kale chips semiotics, et est quis elit."
    }, 

    sobre4: {
        sobreheader: "¿Qué significa recuperar la identidad y cultura israelita?",
        sobretext: "Proident hashtag authentic jianbing, umami qui lomo literally dolore XOXO anim tbh chillwave ullamco franzen. Jianbing air plant selvage pop-up fanny pack magna microdosing meditation. Marfa semiotics microdosing fixie, excepteur veniam church-key ut. Chillwave hell of proident fam coloring book williamsburg selvage vexillologist hashtag etsy. Velit live-edge ullamco, godard man bun plaid tattooed. Live-edge skateboard reprehenderit kombucha adaptogen intelligentsia post-ironic."
    }, 

    sobre5: {
        sobreheader: "¿Por qué adoramos en un contexto hebraico?",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },
    sobre6: {
        sobreheader: "¿Por qué adoramos en Shabbat y las Fiestas Bíblicas?",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },
    sobre7: {
        sobreheader: "¿Por qué nos identificamos como mesiánicos?",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },
    sobre8: {
        sobreheader: "Nuestra perspectiva respecto a la Toráh",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },
    sobre9: {
        sobreheader: "¿Por qué nos cubrimos la cabeza?",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },
    sobre10: {
        sobreheader: "Revelación Profética de las Fiestas",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },
    sobre11: {
        sobreheader: "Fiestas Menores / Tradicionales",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },
    sobre12: {
        sobreheader: "Recursos",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },
    sobre13: {
        sobreheader: "¿Qué significa el vocabulario hebreo que usamos con frecuencia?",
        sobretext: "Plaid flexitarian shoreditch, flannel elit mixtape trust fund single-origin coffee reprehenderit meh tbh cronut magna disrupt. Hammock seitan hexagon magna irony dolore aesthetic. Glossier distillery af microdosing, hell of tempor in reprehenderit chambray tilde kale chips portland palo santo lorem. Godard swag vape tattooed fashion axe. Taiyaki tumblr est ennui, kitsch fugiat tote bag chicharrones iPhone polaroid meditation franzen quinoa in. Normcore lyft tumeric, 8-bit wayfarers echo park knausgaard typewriter."
    },

}

}

export default SobreTextInput;