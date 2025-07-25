// Static
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    };
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = b.x - b.x;
      return Math.hypot(dx, dy)
    }
  };
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  console.log(p1, p2)
  console.log(Point.distance(p1, p2))