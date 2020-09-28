class Timer {
    constructor(btnstop, btnstart, inputvalue, progres) {
        this.stop = btnstop;
        this.start = btnstart;
        this.ivalue = inputvalue;
        this.progres = progres;
        this.start.addEventListener('click', this.fnstart);
        // this.stop.addEventListener('click', this.fstop);
        this.start.textContent = "Start";
        // this.start.classList = 'btn btn-dark';


    };

    fnstart = () => {
        if (this.start.textContent == "Start") {
            this.max = this.ivalue.value;
            this.start.textContent = "Stop";
            this.ti1 = setInterval(this.tick, 1000);
            this.start.classList = 'btn btn-info';
        } else {
            this.start.textContent = "Start";
            this.fstop();
            this.start.classList = 'btn btn-dark';
        }
    }

    tick = () => {
        if (this.ivalue.value > 1) {

            this.progres.style.width = (this.ivalue.value / this.max) * 100 + '%'
            this.ivalue.value = this.ivalue.value - 1;
            if (this.ivalue.value < 4) {
                document.body.style.backgroundColor = "red"
            }

        } else {
            this.fstop();
            this.ivalue.value = 0;
            this.start.textContent = "Start";
            this.progres.style.width = 0;

        }
    };
    fstop = () => {
        clearInterval(this.ti1);
        // this.start.disabled = false;
    };


}


const s1 = document.querySelector('#start');
const s2 = document.querySelector('#stop');
const i1 = document.querySelector('#time');
const pr1 = document.querySelector('#progres1')

const test = new Timer(s2, s1, i1, pr1);