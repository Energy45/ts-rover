export class MarsMap {
    public xmin: number;
    public xmax: number;
    public ymin: number;
    public ymax: number;

    constructor(width: number, height: number) {
        this.xmin = width * -1;
        this.xmax = width;
        this.ymin = height * -1;
        this.ymax = height;
    }
}