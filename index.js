var readlinesync=require('readline-sync');
var dateboundary;

function input(){
var month=readlinesync.question("what is your birthday month?");


if(month>0&&month<13){
  if(month==2){
    var year=readlinesync.question("write the year?");
    var leap=year%4;
    if(leap==0){
      dateboundary=29;
    }
    else{
      dateboundary=28;
    }
  }

  
    console.log("ok");
    while(true)
    { 
       switch(month){

        case '1':dateboundary=31;
                       break  ;
        case '3':dateboundary=31;
                       break  ;
        case '5':dateboundary=31;
                       break  ;
        case '7':dateboundary=31;
                       break  ;
        case '8':dateboundary=31;
                       break  ;
        case '10':dateboundary=31;
                       break  ;
        case '12':dateboundary=31;
                       break  ;
                               
        case '4':dateboundary=30;
                break;    
        case '6':dateboundary=30;
                break; 
        case '9':dateboundary=30;
                break; 
        case '11':dateboundary=30;
                break;                                          

      }
      //console.log(dateboundary);
      var date=readlinesync.question("what is your birthday date?");
      if(date>0&&date<dateboundary+1)
      {    

        if (date == 1) 
        {
             console.log("1 is neither prime nor composite.");
             break;
        }
          var prime=date%2;
          if(prime==0){
          console.log("not prime");
          }
          else{
            console.log("it is prime");
          }
          break;
      }
      else
      {
      continue;
      }

    }
  
}
else{
  console.log("try a valid month" );
  input();
}
}

input();