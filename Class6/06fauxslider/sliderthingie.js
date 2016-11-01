
function slider(_x, _y, _w, _h)
{
  this.bx = _x;
  this.by = _y;
  this.bw = _w;
  this.bh = _h;
  this.value = 0;
  
  this.draw = function()
  {
    rect(this.bx, this.by, this.bw, this.bh);
    var pos = (this.by+this.bh)-(this.value*this.bh)
    rect(this.bx, pos, this.bw, 1);
  }
  
  this.update = function()
  {
    if(mouseX>this.bx && mouseX<this.bx+this.bw && mouseY>this.by && mouseY<this.by+this.bh)
    {
      this.value = (this.bh-(mouseY-this.by))/this.bh;

    }
    
  }
  
}