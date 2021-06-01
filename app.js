let value = parseInt(prompt("Nhập tháng bạn muốn đổi sang ngày: "));

switch(value){
    case 2:
        alert("Tháng " + value + " có 28 ngày hoặc 29 ngày");
        break;
    case 1:
        
    case 3:
       
    case 5:
       
    case 7:
       
    case 8:
      
    case 10: 
       
    case 12:
        alert("Tháng " + value + " có 31 ngày");
        break;
    case 4:
       
    case 6:
       
    case 9:
        
    case 11:
        alert("Tháng " + value + " có 30 ngày");
        break;
}