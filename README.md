### csvtojson
1. From CSV File to JSON Array
```sh
const csv=require('csvtojson');

csv()
.fromFile(filePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})

// Async / await usage
const jsonArray=await csv().fromFile(filePath);

```
2. From CSV String to CSV Row

```sh
csv()
 .fromString(content)
 .then((json) => {
     console.log(json);
 })
```

### JSON
1. From Json to String
```sh
JSON.stringify(json)
```
2. From String to Json
```sh
JSON.parse(string)
```


### Upload File
```sh
 <input type="file" onChange={this.handleCSVFile} />
 
 handleCSVFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let content = reader.result;
    }

    reader.onerror = (error) => {
      console.log(error)
    }
  }
```
#
[csvtojsn npm](https://www.npmjs.com/package/csvtojson)

[FileReader Web APIj接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)
