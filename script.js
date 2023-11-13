let inputt=document.getElementById("todo");
let btnn=document.getElementById("btn");
let ull=document.querySelector(".ul");

let desc=document.getElementById("des");
let cate=document.getElementById("cat");

let pare=document.getElementById("pare");

btnn.addEventListener("click",AddItem)

inputt.addEventListener("keyup",function(e){
    if(e.key=="Enter"){
        AddItem();
    }
});

function AddItem(){
    let list=document.createElement("li");
    list.textContent=inputt.value+" - "+desc.value+" - "+cate.value;
    list.style.padding="5px";

    let Edit=document.createElement("button");
    Edit.textContent="Edit";
    Edit.className="btta";
    Edit.style.borderRadius="5px";
    Edit.style.marginInline="10px";

    Edit.addEventListener("click",function(){
        let listCopy = list.cloneNode(true);
        let buttons = listCopy.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.remove();
        });
        ull.removeChild(list);

        let s=listCopy.textContent;
        let arr=s.split("-");
        inputt.value = arr[0];
        desc.value=arr[1];
        cate.value=arr[2];
    });
    
    let del=document.createElement("button");
    del.textContent="Delete";
    del.className="btta";
    del.style.borderRadius="5px";
    
    
    del.addEventListener("click",function(){
        ull.removeChild(list);
    })
    
    list.appendChild(Edit);
    list.appendChild(del);
    ull.appendChild(list);

    //=================================================

    let inp=document.getElementById("todo").value;
    let des=document.getElementById("des").value;
    let cat=document.getElementById("cat").value;

    let data={
        input:inp,
        description:des,
        categories:cat
    };

    let dataJSON=JSON.stringify(data);
    let unquieKey=Date.now().toString();

    localStorage.setItem(`data_${unquieKey}`,dataJSON);
    // console.log(localStorage.getItem("data"));




    inputt.value="";
    desc.value="";
    cate.value="";
};



