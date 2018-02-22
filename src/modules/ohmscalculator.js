const colors = {
                SR : { sigvalue: '', multiplier: -2, tolerance: '10%', hexcolor: "#C0C0C0"},
                GD : { sigvalue: '', multiplier: -1, tolerance: '5%', hexcolor: "#CFB53B"},
                BK : { sigvalue: '0', multiplier: 0, tolerance: '', hexcolor: "#000000"},
                BN : { sigvalue: '1', multiplier: 1, tolerance: '1%', hexcolor: "#964B00"},
                RD : { sigvalue: '2', multiplier: 2, tolerance: '2%', hexcolor: "#FF0000"},
                OG : { sigvalue: '3', multiplier: 3, tolerance: '', hexcolor: "#FFA500"},
                YE : { sigvalue: '4', multiplier: 4, tolerance: '5%', hexcolor: "#FFFF00"},
                GN : { sigvalue: '5', multiplier: 5, tolerance: '.5%', hexcolor: "#9ACD32"},
                BU : { sigvalue: '6', multiplier: 6, tolerance: '.25%', hexcolor: "#6495ED"},
                VT : { sigvalue: '7', multiplier: 7, tolerance: '.1%', hexcolor: "#9400D3"},
                GY : { sigvalue: '8', multiplier: 8, tolerance: '.05%', hexcolor: "#A0A0A0"},
                WH : { sigvalue: '9', multiplier: 9, tolerance: '', hexcolor: "#FFFFFF"}
            };

export class IOhmValueCalculator{

    static get colors() {
        return colors
      };
    
    static calculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor){

        if(colors[bandAColor] && colors[bandBColor] && colors[bandCColor] && colors[bandDColor]) {
            return Math.round(Number(colors[bandAColor].sigvalue + colors[bandBColor].sigvalue) * Math.pow(10,colors[bandCColor].multiplier) * 100) / 100;
        } else {
            return null;
        }
    }
}