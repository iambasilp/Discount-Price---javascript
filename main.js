
let actual = document.querySelector("#name");   
let offerForm= document.querySelector(".offer-form");




    function discount(total, coupon) {

        switch (coupon) {
            case "10":
                return total - (total * 0.1);
            case "20":
                return total - (total * 0.2);
            case "30":
                return total - (total * 0.3);
            case "40":
                return total - (total * 0.4);
            case "50":
                return total - (total * 0.5);
            default:
             return total;
    
        }
            
    }
    function TotalPrise(total, coupon,delivery) {
        let discountedResult = discount(total, coupon);
        return discountedResult + delivery;
    }
    console.log(TotalPrise(200, 30, 80))

