var FRAN0436 = {

    init: function () {
        var clevland = document.createElement('div'),
        boxes = document.getElementById('boxes');
        clevland.textContent = 'FRAN0436';
        clevland.classList.add('box');
        boxes.appendChild(box);
        // EventListners
        clevland.addEventListener('click', MKlick);
        clevland.addEventListener('mouseover', MOver);
        clevland.addEventListener('mouseout', MOut);

        function MKlick(ev) {
            ev.currentTarget.style.borderColor = "#FFFF00";
            ev.currentTarget.style.backgroundColor = "#800000";
            ev.currentTarget.style.fontWeight = "bold";
        }

        function MOver(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

        function MOut(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }
    }
};
