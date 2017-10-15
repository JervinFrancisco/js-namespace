var FRAN0436 = {
    box : null,
    init: function () {
        this.box = document.createElement('div'),
        box.classList.add('box');
        this.box.textContent = 'Fran0436';
        boxes = document.getElementById('boxes').appendChild('box');
        
        // EventListners
        this.box.addEventListener('click', MKlick);
        this.box.addEventListener('mousedown', MDown);
        this.box.addEventListener('mouseout', MOut);
        
        function MKlick(ev) {
            ev.currentTarget.style.borderColor = "#FFFF00";
            ev.currentTarget.style.backgroundColor = "#800000";
        }

        function MDown(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

        function MOut(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }
    }
};

