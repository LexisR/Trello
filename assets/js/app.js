
  var spanList=document.getElementsByTagName('span')[0];
  var form=document.getElementById('firtsForm');

  
  function crearInputLista(){
      var containerList=document.createElement('div');
      containerList.classList.add('container');
      form.appendChild(containerList);
      
      var inputList=document.createElement('input')
      inputList.setAttribute("type","text");
      inputList.setAttribute("id","input")
      inputList.setAttribute("placeholder", "Añadir una Lista");
      containerList.appendChild(inputList);

      var saveButton=document.createElement('button');
      txtSaveButton=document.createTextNode('Guardar');
      saveButton.appendChild(txtSaveButton);
      containerList.appendChild(saveButton);
      desabilitar(saveButton);
     
      var deleteButton=document.createElement('i');
      deleteButton.classList.add('fa','fa-times','cancela');
      containerList.appendChild(deleteButton);
      
      inputList.addEventListener("keyup",function(){
          if(this.value==""){
              desabilitar(saveButton);        
          }else{
              enabled(saveButton);
          }
          
      })
      
      saveButton.addEventListener("click",function(){
          var newDiv=document.createElement('div')
          var newForm=document.createElement('div');
          var question= document.getElementById('question');
          var tittleList=document.createElement("label");
        
          newForm.setAttribute("class","inlineBlock");
          newForm.setAttribute("class","newForm")
          newDiv.classList.add('container');
          newForm.appendChild(newDiv);
          question.appendChild(newForm);
          question.insertBefore(newForm,form);
               
          tittleList.setAttribute("class","block");
          newDiv.appendChild(tittleList);
          
          var txtTittle=document.createTextNode(inputList.value);
            tittleList.appendChild(txtTittle);

          txtTittle.addEventListener("keyup",function(){
            if(this.value==""){
              desabled(addButton);        
            }else{
              enabled(addButton);
              autosize(textareaList);     
            }
          });
              
          var icono=document.createElement("i");
          icono.classList.add("fa","fa-pencil","edit")
           var textareaList = document.createElement("div")
          divTextarea.appendChild(icono);
          textareaList.value="";
          autosize(textareaList);
          desabled(addButton);
          });
    ;

  }
  
  

function desabilitar(button){
      button.desabilitar=true;
}

function enabled(button){
     button.desabilitar=false;
}

