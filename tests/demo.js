module.exports = {
    'login' : function (browser) {
        browser
            .url('https://vimchat-development.firebaseapp.com/login')
            .setValue('input[name=phone]', '7713877009')
            .setValue('input[name=password]','samsung111295')
            .click('button[type=submit]')
            .pause(5000)
            .assert.urlEquals("https://vimchat-development.firebaseapp.com/-Ksc84mjSi4DeNgQW_Cz/customers")
            .end();
    }
};