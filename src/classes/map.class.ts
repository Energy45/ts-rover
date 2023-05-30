class MarsMap {
    protected width: number;
    protected height: number;
    protected xmin: number;
    protected xmax: number;
    protected ymin: number;
    protected ymax: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.xmin = -50;
        this.xmax = 50;
        this.ymin = -50;
        this.ymax = 50;
    }

    marsMap() {
        return "widht: " + this.width + " height: " + this.height;
    }
}