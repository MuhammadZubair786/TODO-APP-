var ul_list=document.getElementById('unorder')

function additem(){
    item=document.getElementById('getitem');
    console.log(item.value)
    if(item.value==''){
        alert('Please Enter Text')

    }
    else{
    var list_item= document.createElement('li')
    var list_text=document.createTextNode(item.value)
    list_item.appendChild(list_text)
    
    ul_list.appendChild(list_item)

    list_item.setAttribute('class','list_chg')
    a=item.value
    item.value= ''

   

    
    

    //DELETE BUTTON
    var delbtn=document.createElement('button')
    var delicon=document.createElement('i')
    delbtn.setAttribute('class','fa fa-trash')
    delbtn.appendChild(delicon)
    delbtn.setAttribute('id','delic')
    delbtn.setAttribute("onclick",'del(this)')

    //Edit Button
    var editbtn=document.createElement('button')
    var editicon=document.createElement('i')
    editbtn.setAttribute('class','fa fa-pencil-square-o')
    editbtn.setAttribute('id','edit')
    
    editbtn.appendChild(editicon)
    editbtn.setAttribute('onclick','Edit(this)')

    list_item.appendChild(delbtn)
    list_item.appendChild(editbtn)
    
    //new line
    



    console.log( list_item)

    }
}

function Edit(e){
    var p_inp=e.parentNode.childNodes[0].nodeValue
    edit_inp= prompt('EDIT DATA',p_inp)
    console.log(e.parentNode.childNodes[0])
    if(edit_inp==''){
        alert("Please Entet Value Than Edit")
    }
    else{
    e.parentNode.childNodes[0].nodeValue=edit_inp
    }
    

    
}

function del(e){
    e.parentNode.remove()
    
}

function del_all(){
    ul_list.innerHTML=' '
}
