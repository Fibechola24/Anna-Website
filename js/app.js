(function (app){
    app.homepage = function(){
        setCopyrightDate();
    };

    app.portfolio = function(){
        setCopyrightDate();
    };

    app.workItem = function(){
        setCopyrightDate();
    };

    function setCopyrightDate(){
        const date = new Date();
        document.getElementById('copyrightYear').innerText = date.getFullYear();
    }
})((window.app = window.app || {}));