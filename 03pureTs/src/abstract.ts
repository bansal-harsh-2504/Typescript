//Abstract classes can not be instantiated

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number { //this method can be overridden
    return 9;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }

}

const harsh = new Instagram("test", "test", 6);

harsh.getReelTime();

export {};
