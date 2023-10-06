$("#form").parsley();
$('#email').attr('data-parsley-maxlength',50);
$('#form').on("submit",(e)=>{
    e.preventDefault();
    const email = $('#email').value;
    const validateEmail = (emailGiven) => {
        const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,20}$/;
        return regex.test(emailGiven);
    };
    console.log( validateEmail(email));
});