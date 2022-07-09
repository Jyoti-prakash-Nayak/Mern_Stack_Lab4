const form=document.getElementsByTagName('form')[0];
form.addEventListener('submit',(event)=>{
    let valid=1;
    let error_text='';
    const full_name=document.querySelector("#full-name").value;
    if(full_name=='' && valid==1){
       error_text='please enter your name';
       valid=0;
    }
    const course_name=document.querySelector("#course").value;
    if(course_name=='' && valid==1){
        error_text='please enter your course name';
        valid=0;
     }
    const shiftValue=document.getElementsByName('shift');
    let shift='';
    for(let i=0;i<shiftValue.length;i++){
        if(shiftValue[i].checked)
        {
            shift =shiftValue[i].value;
        }
    }
    if(shift=='' && valid==1){
        error_text='please select your shift';
        valid=0;
     }
    const adress=document.querySelector("#adress").value;
    if(adress=='' && valid==1){
        error_text='please give your adress';
        valid=0;
     }
    const email=document.querySelector('#email').value;
    if(email=='' && valid==1){
        error_text='please give your Email adress';
        valid=0;
     }
    const check=document.querySelector("#i-agree").checked ? document.querySelector("#i-agree").value:'';
    if(check=='' && valid==1){
        error_text='please agree terms and cond';
        valid=0;
     }
     if(valid==0 && error_text!=''){
        document.querySelector('.error_message').style.display='block';
        document.querySelector('.error_message').innerHTML=error_text;
        document.querySelector('.error_message').style.color='red';
     }

     if(valid==1){
        document.querySelector('#show_name').innerHTML=full_name;
        document.querySelector('#show_course').innerHTML=course_name;
        document.querySelector('#show_shift').innerHTML=shift;
        document.querySelector('#show_adress').innerHTML=adress;
        document.querySelector('#show_email').innerHTML=email;
     }
    event.preventDefault();
})