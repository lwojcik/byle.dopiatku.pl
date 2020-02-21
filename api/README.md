
This is an API for supporting byle.dopiatku.pl

## Methods

### /IsItFriday

Returns one element JSON with true or false value, depending whered it is friday or not.
```json
{ 
   "isItFriday":true
}
```
```json
{ 
   "isItFriday":false
}
```
### /AllFridays

Returns JSON with one element with array value.
Array contains ALL fridays in givan year.
```json
{ 
   "friday":[ 
      "03/01/2020",
      "10/01/2020",
      "17/01/2020",
      "24/01/2020",
      "31/01/2020",
      "07/02/2020",
      "14/02/2020",
      "21/02/2020",
      "28/02/2020",
      "06/03/2020",
      "13/03/2020",
      "20/03/2020",
      "27/03/2020",
      "03/04/2020",
      "10/04/2020",
      "17/04/2020",
      "24/04/2020",
      "01/05/2020",
      "08/05/2020",
      "15/05/2020",
      "22/05/2020",
      "29/05/2020",
      "05/06/2020",
      "12/06/2020",
      "19/06/2020",
      "26/06/2020",
      "03/07/2020",
      "10/07/2020",
      "17/07/2020",
      "24/07/2020",
      "31/07/2020",
      "07/08/2020",
      "14/08/2020",
      "21/08/2020",
      "28/08/2020",
      "04/09/2020",
      "11/09/2020",
      "18/09/2020",
      "25/09/2020",
      "02/10/2020",
      "09/10/2020",
      "16/10/2020",
      "23/10/2020",
      "30/10/2020",
      "06/11/2020",
      "13/11/2020",
      "20/11/2020",
      "27/11/2020",
      "04/12/2020",
      "11/12/2020",
      "18/12/2020",
      "25/12/2020"
   ]
}
```
### /CalendarProps

Returns JSON with 4 elements, given year, month, currend day and first friday of a month eg.
```json
{ 
   "year":2020,
   "month":2,
   "day":18,
   "firstFriday":7
}
```
## Build
```
mvn package
```
java 1.8
maven 3.5.4

## Run
To run application, providad you have javaRE on system. Just run 
```java -jar api.jar```
application will start on default port ```http://localhost:8080/```
