
(function() {
    
    
    document.addEventListener('DOMContentLoaded', function(){
    
        var pos = window.menuSetting;

        var nav = document.querySelector('nav');
        var wrap = document.querySelector('#body .wrap');
        
        var itemWidth = wrap.offsetWidth;
        
        nav.addEventListener('click', function(e) {
            if(e.target.tagName == 'LI') {
                var key = e.target.innerText;
                var x = pos[key] * itemWidth;
            
                wrap.style.webkitTransform = 'translate(-' + x + 'px, 0)';
                wrap.style.webkitTransitionDuration = '200ms';
                wrap.style.webkitBackfaceVisiblity = 'hidden';
                wrap.style.webkitTransformStyle = 'preserve-3d';
                wrap.style.webkitTransitionTimingFunction = 'linear';
            }
            
        }, false);
    
        wrap.style.width = document.querySelectorAll('#body section.item').length+'00%';
    }, false);

    
})();