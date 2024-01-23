export default class Snowflake {
    private distanceOfSky: number;

    constructor() {
        this.distanceOfSky = 0;
        let div = document.createElement("div");
        div.classList.add("snowflake");
        div.style.left = `${Math.random() * 10 * 140}px`;
        document.body.appendChild(div);

        const timeoutID = setInterval(() => {
            this.distanceOfSky++;
            div.style.top = this.distanceOfSky + "px";
            if ((this.distanceOfSky >= 600)) {
                div.remove();
                clearInterval(timeoutID);
            }
        });
    }
}
