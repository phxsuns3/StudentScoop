function userClicked(firstName, lastName, date)
{
  const ss = SpreadsheetApp.openByUrl(url);
  const ws = ss.getSheetByName("StudentInformation");
  const data = ws.getRange(1, 1, ws.getLastRow(), 6).getValues();
  const studentsFirstNameCharacterList = data.map(function(r){ return r[2]; }).join(" ");
  const studentsLastNameCharacterList = data.map(function(r){ return r[3]; }).join(" ");
  const studentsTimesCharacterList = data.map(function(r){ return r[0]; }).join(",")
  const studentsFromCharacterList = data.map(function(r){ return r[5]; }).join(",")
  const studentsDestinationCharacterList = data.map(function(r){ return r[4]; }).join(" ");

  const studentsFirstNameList = studentsFirstNameCharacterList.split(" ");
  const studentsLastNameList = studentsLastNameCharacterList.split(" ");
  const studentTimesList = studentsTimesCharacterList.split(",");
  const studentsFromList = studentsFromCharacterList.split(",");
  const studentsDestinationList = studentsDestinationCharacterList.split(" ");

  //firstName = "Aaron"
  //lastName = "Baker"
  //date = "Sep 09 2023"
  var index = -1;
  var info = {};
  var studentOutput = [];
  var studentOutputIndex = 0;
  var output = [];



  for(var i = studentsFirstNameList.length - 1; i> 2;i--)
  {
    if(studentsFirstNameList[i].toLowerCase() == firstName.toLowerCase() && studentsLastNameList[i].toLowerCase() == lastName.toLowerCase() && studentTimesList[i -1].substring(4,15) == date)
    {
      index = i - 1;
      Logger.log("StudentTimes String Log: " + studentTimesList[i -1].substring(4,16))

      Logger.log("index check " + index)
      studentOutput[studentOutputIndex] = index;
      studentOutputIndex++;
      Logger.log("length of student output " + studentOutput.length)

      // List of indexes to search through
    }
  }
    for(var j = 0; j < studentOutput.length; j++)
    {
      Logger.log("Student Output Index Check : " + studentOutput[j])
      if(studentOutput[j] > -1)
      {
        info.destination = studentsDestinationList[studentOutput[j]];
        info.fromIn = studentsFromList[studentOutput[j]];
        info.time = studentTimesList[studentOutput[j]].substring(16,25);
        info.error = "Nothing"

        Logger.log("j val " + j)
        Logger.log("info time: " + info.time)
        Logger.log("info destination: " + info.destination)
        Logger.log("info fromin: " + info.fromIn)
        Logger.log("index length " + studentOutput.length)
        output[j] = "Found Them! Action : " + info.destination + " - Location - " + info.fromIn + " - Time Out : " + info.time + "\n";;
        studentOutputIndex + 1;
        //return output;
      }else{
        Logger.log("Error Log : Error")
        output[0] = "Error";
        return output;
      }
    }
    
  Logger.log("Student Output Log: " + output[0]);
  return output;
}

function getLast10Minutes(roomNumber, givenDate)
{
  const ss = SpreadsheetApp.openByUrl(url);
  const ws = ss.getSheetByName("StudentInformation");
  const data = ws.getRange(1, 1, ws.getLastRow(), 6).getValues();
  const studentsFirstNameCharacterList = data.map(function(r){ return r[2]; }).join(" ");
  const studentsLastNameCharacterList = data.map(function(r){ return r[3]; }).join(" ");
  const studentsTimesCharacterList = data.map(function(r){ return r[0]; }).join(",");
  const studentsFromCharacterList = data.map(function(r){ return r[5]; }).join(",");
  const studentsDestinationCharacterList = data.map(function(r){ return r[4]; }).join(" ");
  const studentsRoomNumberList = data.map(function(r){ return r[5]; }).join(" ");

  const studentsFirstNameList = studentsFirstNameCharacterList.split(" ");
  const studentsLastNameList = studentsLastNameCharacterList.split(" ");
  const studentTimesList = studentsTimesCharacterList.split(",");
  const studentsFromList = studentsFromCharacterList.split(",");
  const studentsDestinationList = studentsDestinationCharacterList.split(" ");
  const studentsRoomNumber = studentsRoomNumberList.split(" ");

  const TEN_VALUE = 10*60*1000;

  givenDate = "Nov 27 2023"
  roomNumber = 500600
  var info = {};
  var studentOutput = [];
  var studentOutputIndex = 0;
  var output = [];
  var studentDate;
  var duration;

  Logger.log("student room number list " + studentsRoomNumber);
  for(var i = studentsFirstNameList.length - 2; i > 0; i--)
  {
    studentDate = new Date(studentTimesList[i]);
    duration = Date.now() - studentDate;
    Logger.log(studentsRoomNumber[i])
    Logger.log(studentsRoomNumber[i] >= 500 && studentsRoomNumber[i]<= 699 && duration < TEN_VALUE)
    Logger.log(studentsRoomNumber[i] >= 500 && studentsRoomNumber[i]<= 699 && studentTimesList[i].substring(4,16) == givenDate)
    Logger.log(givenDate == studentTimesList[i].substring(4,16))
    Logger.log(studentTimesList[i].substring(4,16))
    if(studentsRoomNumber[i] == roomNumber)
    {
      studentOutput[studentOutputIndex] = i;
      studentOutputIndex++;
    }else if(roomNumber == 300400){
      if(studentsRoomNumber[i] >= 300 && studentsRoomNumber[i]<= 499 && duration < TEN_VALUE)
      {
        studentOutput[studentOutputIndex] = i;
        studentOutputIndex++;
      }
    }else if(roomNumber == 500600){ 
      Logger.log("Error Checking : Is room number between 500 & 699 : ")
      Logger.log(studentsRoomNumber[i] >= 500 && studentsRoomNumber[i]<= 699)
      Logger.log("is date correct : ")
      Logger.log(studentTimesList[i].substring(4,16) == givenDate)
      Logger.log("Given Date : " + givenDate)
      if((studentsRoomNumber[i] >= 500 && studentsRoomNumber[i]<= 699 && duration < TEN_VALUE))
      {
        studentOutput[studentOutputIndex] = i;
        studentOutputIndex++;
      }else if(studentsRoomNumber[i] >= 500 && studentsRoomNumber[i]<= 699 && studentTimesList[i].substring(4,16) == givenDate)
      {
        studentOutput[studentOutputIndex] = i;
        studentOutputIndex++;
      }
    }else if(roomNumber.toString().toLowerCase() == "cafeteria"){
      if(studentsRoomNumber[i].toLowerCase() == "cafeteria")
      {
        studentOutput[studentOutputIndex] = i;
        studentOutputIndex++;
      }
    }else if(roomNumber.toString().toLowerCase() == "fieldmap"){
      if(studentsRoomNumber[i] <= "fieldmap")
      {
        studentOutput[studentOutputIndex] = i;
        studentOutputIndex++;
      }
    }else if(roomNumber.toString().toLowerCase() == "gym"){
      if(studentsRoomNumber[i] <= "gym")
      {
        studentOutput[studentOutputIndex] = i;
        studentOutputIndex++;
      }
    }else if(roomNumber.toString().toLowerCase() == "office"){
      if(studentsRoomNumber[i] <= "office")
      {
        studentOutput[studentOutputIndex] = i;
        studentOutputIndex++;
      }
    }else if(roomNumber.toString().toLowerCase() == "libraryperforming" || roomNumber <= 100 && roomNumber >= 199){
      if(studentsRoomNumber[i] <= "libraryperforming")
      {
        studentOutput[studentOutputIndex] = i;
        studentOutputIndex++;
      }
    }
  }

  for(var j = 0; j < studentOutput.length; j++)
  {
    Logger.log("Student Output Index Check : " + studentOutput[j])
    if(studentOutput[j] > -1)
    {
      info.firstName = studentsFirstNameList[studentOutput[j] + 1];
      info.destination = studentsDestinationList[studentOutput[j]];
      info.fromIn = studentsFromList[studentOutput[j]];
      info.time = studentTimesList[studentOutput[j]].substring(16,25);
      info.error = "Nothing"

      Logger.log("j val " + j)
      Logger.log("info firstName " + info.firstName)
      Logger.log("info time: " + info.time)
      Logger.log("info destination: " + info.destination)
      Logger.log("info fromin: " + info.fromIn)
      Logger.log("index length " + studentOutput.length)
      output[j] = "Found Them! First Name : " + info.firstName + " - Action : " + info.destination + " - Location - " + info.fromIn + " - Time Out : " + info.time + "\n";;
      studentOutputIndex + 1;
      //return output;
    }else{
      Logger.log("Error Log : Error")
      output[0] = "Error";
      return output;
    }
  }
    
  Logger.log("Student Output Log: " + output);
  return output;
}
