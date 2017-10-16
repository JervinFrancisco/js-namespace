var FRAN0436 = {

    init: function () {
        var box = document.createElement('div'),
        boxes = document.getElementById('boxes');
        box.textContent = 'FRAN0436';
        box.classList.add('box');
        boxes.appendChild(box);
        // EventListners Part
        box.addEventListener('click', MKlick);
        box.addEventListener('mouseover', MOver);
        box.addEventListener('mouseout', MOut);

        function MKlick(ev) {
            ev.currentTarget.style.borderColor = "#FFFF00";
            ev.currentTarget.style.backgroundColor = "aqua";
            ev.currentTarget.style.fontWeight = "bolder";
        }

        function MOver(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

        function MOut(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }
    }
};
