let text =
        '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';
        let text2 ='{"firstName":"xyz","lastName":"abc","id":"IT123","ResponseSubmitted":"True","Marks":"100"}';
      const obj = JSON.parse(text2);
      document.getElementById("demo").innerHTML =
        "Name:"+obj.firstName + " " + obj.lastName+"<br>Summitted:"+obj.ResponseSubmitted+"<br>Marks Obtained :"+obj.Marks;