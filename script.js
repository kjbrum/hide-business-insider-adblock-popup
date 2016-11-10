(function() {
    document.querySelector('.tp-modal').outerHTML = '';
    document.querySelector('.tp-backdrop').outerHTML = '';
    document.body.className = document.body.className.replace('tp-modal-open', '');
});
