var codeStore = Tutorify.HttpCodeStore.create('../jsObjectPatterns/tutorify-js-object-patterns/');
    
var settings = {
    fontSize: 14, //Font size to use for the text editor,
    iframeEditor: false, // whether to load the editor in an iframe (to isolate dom),
    iframeEditorSettings: {
        acePath: '/lib/ace/src-min' // Configure the ace editor path for the iframe if needed
    },
    liveUpdate: true, // Should the code run after each change
    resourceScripts: [ // Script src urls to include in the code when being run
        {src: '/lib/jquery/jquery.min.js'}, 
        {src: '/lib/hogan/hogan.js'}
    ],
    resourceCss: [ // Css to include when the code is being run
        {src: 'result.css'}
    ],

    
    
};
Tutorify.init(settings, codeStore)
