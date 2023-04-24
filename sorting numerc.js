const points = [40, 100, 1, 5, 25, 10];
const point=points.sort(function (a,b) {
    return a-b;
    
});
 const rev=point.reverse();
console.log(point);
document.getElementById('demo').innerHTML=point;

