const rangevalue = document.querySelector(".price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");

let priceGap = 100;

const priceInputvalue = document.querySelectorAll(".price-field input");



for (let i = 0; i < priceInputvalue.length; i++) {

    priceInputvalue[i].addEventListener("input", (e) => {

        let minPri = parseInt(priceInputvalue[0].value);
        let maxPri = parseInt(priceInputvalue[1].value);
        let diff = maxPri - minPri

        if (minPri < 0) {
            alert("minimum price cannot be less than 0")
            priceInputvalue[0].value = 0;
        }

        if (maxPri > 10000) {
            alert("maximum price cannot be greater than 10000")
            priceInputvalue[1].value = 10000;
        }

        if (minPri > maxPri) {
            priceInputvalue[0].value = maxPri - priceGap;
            minPri = maxPri - priceGap

            if (minPri < 0) {
                priceInputvalue[0].value = 0;
                minPri = 0;
            }
        }

        // input value range slider ============
        if (diff >= priceGap && maxPri <= rangeInputvalue[1].value) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minPri;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minPri / value1) * 100}%`
            } else {
                rangeInputvalue[1].value = maxPri;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right = `${100 - (maxPri / value2) * 100}%`;
            }
        }

    });

    // input range functionlity
    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal = parseInt(rangeInputvalue[0].value);
            let maxVal = parseInt(rangeInputvalue[1].value);
            let diffVal = maxVal - minVal

            if (diffVal < priceGap) {
                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                } else {
                    rangeInputvalue[1].value = minVal - priceGap;
                }
            } else {
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`
                rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`
            }

        })
    }
}

