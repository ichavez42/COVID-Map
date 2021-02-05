# COVID-Map
One of the concepts that we have covered where functions. Function composition is an act or mechanism to combine simple functions to build more complicated ones. In my opinion, out of everything that we have covered functions were probably the most easiest alongside if statements. The most challenging parts were probably collisions, navigators, arrays, and etc. 

In other words, what i think functions mean it is, is that it can help set up different blocks of code.  For example, we have function draw, function setup, and we can also create our own functions. Functions are also really helpful because they can help organize the code and are also reusable so once a function is written it can be called multiple times within the program. 

An example of a function can be pre load. So we actually used preload in our project which was the corona virus map. The way we used function preload was we put our csv and an image to load in our picture.  So here is and example:
function preload() {
 img = loadImage('usaPicture.jpg');
  data = loadTable('corona.csv', 'csv', 'header')
}
So this function allows us to load our image and csv into the canvas. 

function impact() {
 for (var i = 0; i < data.getRowCount(); i++) {
   var x = Number(data.getString(i, 'x_Coordinate'));
   var y = Number(data.getString(i, 'y_Coordinate'));
 
   var confirmed = Number(data.getString(i, 'confirmed'));
   var size = map(confirmed, 0, 500000, 10, 80);
 
   var death = Number(data.getString(i, 'deaths'));
   var sizeDeaths = map(death, 0, 50000, 3, 45);
 
   push()
   noStroke()
   fill(255, 0, 0, 50)
   ellipse(x, y, size)
   pop()
   fill(60, 60, 60, 120)
   ellipse(x, y, sizeDeaths)
 }
}
 
As you can see on top this is what we used in our code this is sort of the important part of the code this is what actually brought our code alive.  Without this our code wouldn't really look how it is now it wouldn't have shown the cases or deaths that are on the canvas, so without this code there would have been no type of data on the canvas at all.
 
I also wanna give a special shout out to all the people/TA’s that helped us during our project.  I would like to thank Juan, Zachary, Makayla, jasmine. Thank you guys so much for helping me and our partner finsh our first big project. 
