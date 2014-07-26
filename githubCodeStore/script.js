var accessToken = null, // try changing this to null for read-only
    user = 'amitayd',
    repository = 'tutorify-playground',
    options = {};

var codeStore = Tutorify.GithubCodeStore.create(
    accessToken, user, repository, options);
    
var settings = {};
Tutorify.init(settings, codeStore)
