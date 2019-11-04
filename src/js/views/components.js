export const createDial = (id) => {
    return `
        <div class="dial-group dial-group--${id}" data-id='${id}'>
            <div class="dial-tracker__wrapper">
                <input type="text" value="2" class="dial-tracker dial-tracker--${id}" data-id='${id}' data-context=false>
            </div>
            <div class="dial-clock__wrapper">
                <div class="dial__crown"></div>
                <div class="dial__hand"></div>

                <div class="dial__context">
                    <div class="dial__context-section dial__context-section--1">
                        <div class="dial__line dial__line--1"></div>
                        <div class="dial__text dial__text--1c">Some automation</div>                                
                    </div>
                    <div class="dial__context-section dial__context-section--2">
                        <div class="dial__context--wrapper dial__context--wrapper--1">
                            <div class="dial__line dial__line--0"></div>
                            <div class="dial__text dial__text--0c">No</div>                                     
                        </div>
                        <div class="dial__context--wrapper dial__context--wrapper--2 dial__context--wrapper">
                            <div class="dial__text dial__text--2c">Using cloud services</div>                   
                            <div class="dial__line dial__line--2"></div>
                        </div>
                    </div>
                    <div class="dial__context-section dial__context-section--3">
                        <div class="dial__text dial__text--4">
                            TEST
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    `;  
}

export const createLikert = (id) => {
    return `
        <div class="likert__container likert__container--${id}">
            <svg class="likert__line--group"> 
                <line class="likert__line" x1="53" x2="184" y1="26.5" y2="26.5"></line>
                <line class="likert__line" x1="237" x2="368" y1="26.5" y2="26.5"></line>  
                <line class="likert__line" x1="421" x2="552" y1="26.5" y2="26.5"></line>
                <line class="likert__line" x1="605" x2="736" y1="26.5" y2="26.5"></line>                                
            </svg>
            <form action="#" class="likert__form likert__form--${id}" data-id='${id}'>
            </form>
        </div>
    `;  

}

