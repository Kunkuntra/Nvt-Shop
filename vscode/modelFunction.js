//đối tượng => thành constructor function
validator = function(option) {
    var formElement = document.querySelector(option.form);
    
    //Sự kiện Submit
    if(formElement){
        formElement.onsubmit = function(e){
            e.preventDefault(); // là bỏ đi hành vi mặc định của submit
            
            var isFormValid = true;

            // thực hiện lặp qua từng rule và validate luôn
            option.rules.forEach((rule)=>{
                var inputElement = formElement.querySelector(rule.e);
                var isValid = validate(inputElement, rule)
                if(!isValid){
                    isFormValid = false;
                }
            })
            if (isFormValid){
                //console.log('không có lỗi')
                if(typeof option.onSubmit === 'function'){
                    
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                    var formValues = Array.from(enableInputs).reduce(function(value,input){
                        (value[input.name] = input.value)
                        return value;    
                    },{})

                    option.onSubmit(formValues)
                }

            }else{
                console.log('có lỗi')
            }
            
        }
    }
   
   
    var selectorRules = {}  

    validate = function(inputElement, rule){
        

        // Hàm lấy ra thẻ cha 
        getParent = function(element,selector){
            while(element.parentElement){
                if(element.parentElement.matches(selector)){
                    return element.parentElement
                }
                element = element.parentElement;
            }
        }
        
        // lấy value inputElement.value
        //lấy rule rule.test
        // var errorMessage =   (inputElement.value)
        var errorMessage
        //var errorElement = inputElement.parentElement.querySelector(option.erorrSelector)         // cách này chỉ dùng khi các thẻ label, input, span ở cùng cấp
        var errorElement = getParent(inputElement, option.formGroupSelector).querySelector(option.erorrSelector)
        
        var rules = selectorRules[rule.e]  //biến rules này sẽ lấy ra được các rule của object 'selectorRules' là array có key là rule.e 
        //console.log(rules)   // lấy ra đc array rule
        //console.log(inputElement.value)  // lấy được giá trị nhập vào
    
        //lặp qua array rule của key và gán errorMessage
        for( var i = 0; i < rules.length; i++){
        //    console.log(rules[i](inputElement.value))  // láy được message thông báo
        //    console.log(rules[i])   // lấy được funtion của rule
    
            errorMessage = rules[i](inputElement.value) // i là thứ tự trong array, inputElement.value là lấy ra key cho array
            if(errorMessage) break
        }
    
        if(errorMessage){
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        }else{
            errorElement.innerText =''
            inputElement.parentElement.classList.remove('invalid')
        }

        return !errorMessage;
    }

    if(formElement){
        option.rules.forEach((rule)=>{

            //Lưu lại các rules cho mỗi input

            // lưu các rules thành các Array, nếu chưa là array thì sẽ tạo ra array mới
            // các rule có key giống nhau sẽ lưu chung vào một array
            if(Array.isArray(selectorRules[rule.e])){
                selectorRules[rule.e].push(rule.test)
            }else{
                selectorRules[rule.e] = [rule.test]; //lần đầu chạy qua một key mới sẽ tạo 1 mảng và gán ptu đầu tiên là chính nó
            }

            var inputElement = formElement.querySelector(rule.e);
            if(inputElement){

                //xử lý khi blur ra ngoài

                inputElement.onblur = function(){
                    validate(inputElement, rule)
                }

                //Xử lý khi nhập
                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector(option.erorrSelector)
                    errorElement.innerText =''
                    inputElement.parentElement.classList.remove('invalid')  
                }
            }
        })
    }

}

//Định nghĩa rules
validator.isRequired = function(e, notify){
    return{
        e: e,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này'   // trim để xóa dấu cách đầu cuối
        }
    }
}

validator.isEmail = function(e, notify){
    return{
        e: e,
        test: function(value){
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regax.test(value) ? undefined : 'Trường này phải là email'
        }
    }
}

getHeaderNavbar = function (option) {
    const headerNavbar = document.querySelector(option)
    console.log(headerNavbar)
    headerNavbar.classList.add('header__navbar--user-logged')
    headerNavbar.classList.remove('header__navbar--not-logged')
    document.querySelector('.form-submit a').href = './index.html'
}

validator.minLenght = function(e, min, notify){
    return{
        e: e,
        test: function(value){
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự `   // trim để xóa dấu cách đầu cuối
        }
    }
}

validator.isConfirmed = function(e, getConfirmValue, notify){
    return{
        e: e,
        test: function(value){
            return value === getConfirmValue() ? undefined : notify || `Giá trị nhập lại không chính xác `
        }
    }
}
