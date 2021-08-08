let Paris_Air_Show // 
let Shape_6_copy_18
let Paris_France //name
let Path_521 // point in maps
let EBACE_NBAA_Medica_Orgatec__IDS // kolumna 1 
let EBACE_NBAA_Medica_Orgatec__IDS_coc // kolumna 2
let Mosbuild_BAU_Paris_Air_Show_Ce // kolumna 3
let Paris_Air_Namebox // Box miasta Paris

const main = () => {
    prepareDOMElemenst();
    prepareDOMEvents();
};

//pobranie elementów
const prepareDOMElemenst = () => {
    Path_521 = document.querySelector('#Path_521');
    Paris_Air_Show = document.querySelector('#Paris_Air_Show');

    Shape_6_copy_18 = document.querySelector('.Shape_6_copy_18');
    Paris_France = document.querySelector('#Paris_France');

    EBACE_NBAA_Medica_Orgatec__IDS = document.querySelector('#EBACE_NBAA_Medica_Orgatec__IDS');
    EBACE_NBAA_Medica_Orgatec__IDS_coc = document.querySelector('#EBACE_NBAA_Medica_Orgatec__IDS_coc');
    Mosbuild_BAU_Paris_Air_Show_Ce = document.querySelector('#Mosbuild_BAU_Paris_Air_Show_Ce');
    Paris_Air_Namebox = document.querySelector('.Paris_Air_Namebox');
};


// nasłuchiwanie
const prepareDOMEvents = () => {
    Path_521.addEventListener('mouseover', MoveParis);
};





const MoveParis = () => {
    console.log(Path_521);
    console.log(World_ahead);
    console.log(Paris_Air_Show);
    console.log(Rectangle_12_copy_3);
    console.log(Paris_Air_Namebox);
    console.log(EBACE_NBAA_Medica_Orgatec__IDS);
    World_ahead.style.display = 'none';
    Paris_Air_Show.style.display = 'flex';
    Shape_6_copy_18.style.display = 'flex';
    Paris_France.style.display = 'flex';

    Path_521.style.fill = "255,255,255";

    EBACE_NBAA_Medica_Orgatec__IDS.style.color = '0,0,0,1';
    EBACE_NBAA_Medica_Orgatec__IDS.style.opacity = '0.4';

    EBACE_NBAA_Medica_Orgatec__IDS_coc.style.color = '0,0,0,1';
    EBACE_NBAA_Medica_Orgatec__IDS_coc.style.opacity = '0.4';

    Mosbuild_BAU_Paris_Air_Show_Ce.style.color = '0,0,0,1';
    Mosbuild_BAU_Paris_Air_Show_Ce.style.opacity = '0.4';

    Paris_Air_Namebox.style.color = '255,255,255,1';
    Paris_Air_Namebox.style.opacity = '1';
};



document.addEventListener('DOMContentLoaded', main);