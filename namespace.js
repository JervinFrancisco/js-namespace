var FRAN0436 = {

    init: function () {
        var box = document.createElement('div'),
        boxes = document.getElementById('boxes');
        box.textContent = "FRAN0436";
        box.classList.add('box');
        boxes.appendChild(box);
        // EventListners Part
        box.addEventListener('click', MKlick);
        box.addEventListener('mouseover', MOver);
        box.addEventListener('mouseout', MOut);

        function MKlick(ev) {
            ev.currentTarget.style.borderColor = "#0026FF";
            ev.currentTarget.style.backgroundColor = "#FFF000";
            ev.currentTarget.style.fontWeight = "bolder";
            ev.currentTarget.style.borderBottomStyle = "thick solid #223F00";
        }

        function MOver(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

        function MOut(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }
    }
};
