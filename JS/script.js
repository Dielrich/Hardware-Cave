$(function(){

// ###### mise en place de la fonctionnalité pour la galerie (computer) ######
    $('#all-images img').click(function(){
        
        $('body').append('<div class="overlay"><img src="../images/configs/'+$(this).data('img')+'"><div>');

        $('.overlay').fadeIn(550, function (){

            $(this).find('img').click(function(event){ event.stopPropagation()});
            
            $(this).click(function(){
                
                $(this).fadeOut(550, function(){
                    
                    $(this).remove();

                });// fadeOut

            });//this2

        }); //fadeIn

    }); //click img

    // ###### inscription à la newsletter #####

    //Fonction qui affiche l'erreur et retourne "false"
    function errorMsg(input, message) {
        input.addClass('is-invalid');
        input.parent().append('<div class="invalid-feedback">'+message+'</div>');
    

        return false;
    };//errorMsg

    function validMsg(input, message) {
        input.addClass('is-valid');
        input.parent().append('<div class=" p-0 valid-feedback">'+message+'</div>');
        
    };//validMsg
    $('#inscription').submit(function(event){
      
        event.preventDefault();
        
        //Initialiser les champs en erreur
        $(this).find('.is-invalid').removeClass('is-invalid');
        $(this).find('.invalid-feedback').remove('.invalid-feedback');
        $(this).find('.valid-feedback').remove('.valid-feedback');

        // Email valide
        let validMail = true;

    // Regex email
    
    const mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{10,})+$/;
    // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{10,}))/;
    
    let email = $('#email');

    if (!email.val()) {
        validMail = errorMsg(email, 'Ce champs est obligatoire');
    } else if (!mailRegEx.test(email.val())){
        validMail = errorMsg(email, 'Cet email est invalide');
    } else {
        validMsg(email, 'Champs valide');
    }
    
    if (validMail) {
        $(this).find('button[type=submit]').replaceWith('<div class="alert alert-success my-3 text-center" role="alert"> Vous avez bien été inscrit à la newsletter !</div>');
    }
    });//submit
 console.log(email.val());
}); //rdy