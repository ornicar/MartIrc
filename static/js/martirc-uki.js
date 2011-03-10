uki({
    view: 'Button',
    rect: '200 40 200 24',
    text: 'uki is awesome!'
}).attachTo( document.getElementById('test'), '600 100' );

uki('Button[text^=uki]').bind('click', function() {
    alert('Hello world!');
});

